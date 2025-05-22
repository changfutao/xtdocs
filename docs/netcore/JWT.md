# JWT

## 1.简介 

> JWT是Json Web Token的简称
>
> 是一种开放标准(rfc7519),它定义了一种紧凑的、自包含的方式,用于在各方之间以JSON对象安全的传输信息。此信息可以验证和信任,因为它是数字签名的。JWT可以使用密钥（使用 **HMAC** 算法）或RSA或ECDSA的公钥/私钥进行签名

## 2.作用

- **授权**：这是使用 JWT 的最常见场景。用户登录后，每个后续请求都将包含 JWT，允许用户访问该令牌允许的路由、服务和资源。单点登录是当今广泛使用 JWT 的一项功能，因为它的开销小并且能够轻松地跨不同域使用。
- **信息交换**：JSON Web 令牌是在各方之间安全地传输信息的好方法。由于 JWT 可以签名（例如，使用公钥/私钥对），因此您可以确保发件人是他们所声称的身份。此外，由于签名是使用标头和有效负载计算的，因此您还可以验证内容是否未被篡改。

## 3.JWT令牌结构

JWT由三部分组成使用"."进行分隔

- 页眉
- 有效载荷
- 签名

### 3.1 页眉(Header)

标头通常由两部分组成: 令牌的类型和正在使用的签名算法,如: HMAC SHA256或RSA

```json
{
    "alg": "HS256",
    "type": "JWT"
}
```

此JSON经过Base64Url编码以形成JWT的第一部分

### 3.2 有效载荷(Payload)

包含了信息有:

- Claims 声明
  - iss 颁发者
  - aud 受众
  - exp 过期时间
  - sub 主题

### 3.3 签名(Signature)

要创建签名部分,必须获取编码标头、编码的有效负载、密钥、标头中指定的算法,并对其签名

> 签名用于验证消息在整个过程中没有被更改,并且在使用私钥签名的令牌的情况下,它还可以验证JWT的发件人是否是它所声称的身份

## 4.JWT使用

通常在发送Http请求时,通过Header头中添加Authorization以Bearer开头

```powershell
Authorization: Bearer <token>
```

## 4.1 安装依赖

> Nuget Microsoft.AspNetCore.Authentication.JwtBearer

### 4.2 配置JWT信息

```json
{
  "JwtSettings": {
    "SecretKey": "3c1cbc3f546eda35168c3aa3cb91780fbe703f0996c6d123ea96dc85c70bbc0a",
    "Issuer": "dilon",
    "Audience": "dilon",
    "ExpireTime": 720
  },
}
```

### 4.3 注册Jwt认证服务

```c#

using AuthorizationCenter.Filters;
using AuthorizationCenter.Helpers;
using AuthorizationCenter.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.Text;
using Yitter.IdGenerator;

var builder = WebApplication.CreateBuilder(args);
new AppSettings(builder.Configuration);
var jwtSettings = builder.Configuration.GetSection("JwtAccessSettings").Get<JwtSettings>();
builder.Services.AddControllers(options =>
{
    // options.Filters.Add<CheckFilter>();
});

#region 雪花Id
YitIdHelper.SetIdGenerator(new IdGeneratorOptions(6));
#endregion

#region HttpContext
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
#endregion

#region Swagger
var types = Assembly.GetExecutingAssembly().GetTypes().Where(a => a.Name.EndsWith("Controller")).ToList();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "统一授权平台",
        Description = "统一授权平台",
    });


    types.ForEach(a =>
    {
        var apiExplorerSettingsAttribute = a.GetCustomAttribute<ApiExplorerSettingsAttribute>();
        if (apiExplorerSettingsAttribute != null && !string.IsNullOrEmpty(apiExplorerSettingsAttribute.GroupName))
        {
            options.SwaggerDoc(apiExplorerSettingsAttribute.GroupName, new OpenApiInfo
            {
                Version = apiExplorerSettingsAttribute.GroupName
            });
        }
    });

    var controllerFileName = "AuthorizationCenter.xml";
    // 控制器注释
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, controllerFileName), true);

    // Service注释
    //var serviceFileName = "Xin.Service.xml";
    //options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, serviceFileName));

    // 定义JwtBearer认证
    options.AddSecurityDefinition("JwtBearer", new OpenApiSecurityScheme
    {
        Description = "这是方式一(直接在输入框中输入认证信息，不需要在开头添加Bearer)",
        Name = "Authorization",//jwt默认的参数名称
        In = ParameterLocation.Header,//jwt默认存放Authorization信息的位置(请求头中)
        Type = SecuritySchemeType.Http,
        Scheme = "bearer"
    });

    //定义JwtBearer认证方式二
    //options.AddSecurityDefinition("JwtBearer", new OpenApiSecurityScheme()
    //{
    //    Description = "这是方式二(JWT授权(数据将在请求头中进行传输) 直接在下框中输入Bearer {token}（注意两者之间是一个空格）)",
    //    Name = "Authorization",//jwt默认的参数名称
    //    In = ParameterLocation.Header,//jwt默认存放Authorization信息的位置(请求头中)
    //    Type = SecuritySchemeType.ApiKey
    //});

    //声明一个Scheme，注意下面的Id要和上面AddSecurityDefinition中的参数name一致
    var scheme = new OpenApiSecurityScheme()
    {
        Reference = new OpenApiReference() { Type = ReferenceType.SecurityScheme, Id = "JwtBearer" }
    };
    //注册全局认证（所有的接口都可以使用认证）
    options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        [scheme] = new string[0]
    });
}); 
#endregion

#region FreeSql
Func<IServiceProvider, IFreeSql> fsqlFactory = r =>
{
    IFreeSql fsql = new FreeSql.FreeSqlBuilder()
    .UseConnectionString(FreeSql.DataType.SqlServer, builder.Configuration["DefaultConnection"])
    //.UseAdoConnectionPool(true)
    //.UseMonitorCommand(cmd => Console.WriteLine($"Sql：{cmd.CommandText}"))
    //.UseAutoSyncStructure(true) //自动同步实体结构到数据库，只有CRUD时才会生成表
    .Build();
    return fsql;
};
builder.Services.AddSingleton<IFreeSql>(fsqlFactory);
#endregion

#region Jwt认证
builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true, // 是否验证颁发者
        ValidIssuer = jwtSettings.Issuer, // 颁发者
        ValidateAudience = true, // 是否验证订阅者
        ValidAudience = jwtSettings.Audience, // 订阅者
        ValidateLifetime = true, // 是否验证过期时间
        ClockSkew = TimeSpan.Zero, // 允许时间误差
        ValidateIssuerSigningKey = true, // 是否验证签名
        RequireExpirationTime = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey)) // 密钥
    };
    options.Events = new JwtBearerEvents
    {
        OnChallenge = async context => // 未授权
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("401");
            context.HandleResponse();
        },
        OnForbidden = async context => // 无权限
        {
            context.Response.StatusCode = 403;
            await context.Response.WriteAsync("401");
        }
    };
});
#endregion

var app = builder.Build();

//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        types.ForEach(a =>
        {
            var apiExplorerSettingsAttribute = a.GetCustomAttribute<ApiExplorerSettingsAttribute>();
            if (apiExplorerSettingsAttribute != null && !string.IsNullOrEmpty(apiExplorerSettingsAttribute.GroupName))
            {
                options.SwaggerEndpoint($"/swagger/{apiExplorerSettingsAttribute.GroupName}/swagger.json", apiExplorerSettingsAttribute.GroupName);
            }
        });
        // 将RoutePrefix设置为空字符串目的是http://localhost:xxx直接就导航到swagger页面【如果不加的话需要加上http://localhost:xxx/swagger】
        options.RoutePrefix = string.Empty;
    });
}
//调用中间件：UseAuthentication（认证），必须在所有需要身份认证的中间件前调用，比如 UseAuthorization（授权）。
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

```

### 4.4 JwtHelper封装

```c#
 public class JwtHelper
 {
     public static string CreateAccessToken(List<Claim> claims)
     {
         var jwtSettings = AppSettings.Get<JwtSettings>("JwtAccessSettings");
         // 1.生成签名密钥
         var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey));
         // 2.选择加密算法
         var algorithm = SecurityAlgorithms.HmacSha256;
         // 3.生成Credentials
         var signingCredentials = new SigningCredentials(secretKey, algorithm);
         // 4.生成Token
         var jwtSecurityToken = new JwtSecurityToken(
             issuer: jwtSettings.Issuer, // 发布者
             audience: jwtSettings.Audience, // 订阅者
             signingCredentials: signingCredentials, // 签名凭证
             claims: claims, // 声明
             notBefore: DateTime.Now, // 生效时间
             expires: DateTime.Now.AddMinutes(jwtSettings.ExpireTime) // 过期时间
             );
         var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
         return token;
     }
 }     
```

### 4.5 在Controller使用

```c#
using AuthorizationCenter.Dtos;
using AuthorizationCenter.Helpers;
using AuthorizationCenter.Models;
using Furion.DataEncryption;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AuthorizationCenter.Controllers
{
    /// <summary>
    /// 授权
    /// </summary>
    public class AuthController : BaseController
    {
        private readonly IFreeSql _fsql;
        private readonly IHttpContextAccessor _httpContext;

        public AuthController(IFreeSql fsql, IHttpContextAccessor httpContext)
        {
            _fsql = fsql;
            _httpContext = httpContext;
        }
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="input"></param>
        [HttpPost, AllowAnonymous]
        public async Task<IResultOutput> Login(LoginInputDto input)
        {
            var user = await _fsql.Select<UserDto>().Where(a => a.Account == input.Account).FirstAsync();
            if (user == null) return ResultOutput.NotOk<string>("用户名不存在!");
            string pwd = MD5Encryption.Encrypt(input.Password);
            if(!user.Password.Equals(pwd, StringComparison.OrdinalIgnoreCase)) return ResultOutput.NotOk<string>("用户名或密码错误!");
            // 声明
            var claims = new List<Claim>
            {
                new Claim(ClaimConst.CLAINM_USERID, user.Id.ToString()),
                new Claim(ClaimConst.TENANT_ID, user.TenantId.ToString()),
                new Claim(ClaimConst.TENANT_Name, user.TenantName),
                new Claim(ClaimConst.CLAINM_ACCOUNT, user.Account),
                new Claim(ClaimConst.CLAINM_NAME, user.Name),
                new Claim(ClaimConst.CLAINM_SUPERADMIN, user.AdminType.ToString()),
                new Claim(ClaimConst.CLAINM_ORGID, user.OrgId.ToString()),
                new Claim(ClaimConst.CLAINM_ORGNAME, user.OrgName)
            };
            string accessToken = JwtHelper.CreateAccessToken(claims);
            // 生成刷新Token令牌
            var refreshToken = JWTEncryptionHelper.GenerateRefreshToken(accessToken);
            _httpContext.HttpContext.Response.Headers["x-access-token"] = refreshToken;
            var userSystem = await _fsql.Select<AuthUserSystemBind, AuthSystem>()
                .InnerJoin((a, b) => a.SystemId == b.Id)
                .Where((a, b) => a.UserId == user.Id)
                .ToListAsync((a, b) => new
                {
                    Name = b.Name,
                    Label = b.Label,
                    Link = b.Link
                });

            return ResultOutput.Ok(new
            {
                token = accessToken,
                xtoken = refreshToken,
                sysTokenLink = userSystem
            });
        }

        /// <summary>
        /// 用户退出
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IResultOutput Logout()
        {
            return ResultOutput.Ok();
        }
    }
}

```







































