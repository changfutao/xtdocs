[[toc]]

# React 中 CSS 的使用方式

## 1.组件化天下的 CSS

CSS 的设计就不是为了组件化而生的,所以在目前组件化的框架中都在需要一种合适的 CSS 解决方案

- 在组件化中选择合适的 CSS 解决方案应该符合以下条件
  - 可以编写局部 css: css 具备自己的局部作用域,不会随意污染其他组件内的元素
  - 可以编写动态的 css: 可以获取当前组件的一些状态,根据状态的变化生成不同的 css 样式
  - 支持所有的 css 特性: 伪类、动画、媒体查询等
  - 编写起来简洁方便、最好符合一贯的 css 风格特点

## 2.内联样式

- 内联样式是官方推荐的一种 css 样式写法

  - style 接受一个采用小驼峰命名属性的 JavaScript 对象,而不是 CSS 字符串
  - 并且可以引用 state 中的状态来设置相关的样式

- 内联样式的优点

  - 内联样式, 样式之间不会有冲突
  - 可以动态获取当前 state 中的状态

- 内联样式的缺点
  - 写法上都需要使用驼峰标识
  - 某些样式没有提示
  - 大量的样式造成代码混乱

```jsx title="App.jsx"
import { PureComponent } from "react";
class App extends PureComponent {
  constructor() {
    this.state = {
      color: "red",
      fontSize: "20px",
    };
  }
  render() {
    const { color, fontSize } = this.state;
    return <div style={{ fontSize, color }}></div>;
  }
}
```

官方推荐内联样式和普通 css 一起使用

## 3.普通的 css

普通的 css 我们通常会编写一个单独的文件,之后再进行引入。

- 普通的 css 缺点:
  - 组件化开发中我们总是希望组件时一个独立的模块,即便是样式也只是在自己内部生效,不会相会影响,但是普通的 css 都属于全局的 css,样式之间会相互影响
  - 普通的 css 最大的问题是样式之间会相互层叠掉

```css title="pages/home/style.css"
.title {
  color: red;
  border: 1px solid #000;
}
```

```jsx title="pages/home/home.jsx"
import React, { PureComponent } from "react";
import "./style.css";

export class Home extends PureComponent {
  render() {
    return <div class="title">Home</div>;
  }
}

export default Home;
```

```css title="pages/profile/style.css"
.title {
  color: green;
}
```

```jsx title="pages/profile/profile.jsx"
import React, { PureComponent } from "react";
import "./style.css";

export class Profile extends PureComponent {
  render() {
    return <div class="title">Profile</div>;
  }
}

export default Profile;
```

```jsx title="App.jsx"
import React, { PureComponent } from "react";
import Home from "./home";
import Profile from "./profile";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
```

## 4.css modules

- css modules 并不是 React 特有的解决方案,而是所有使用了类似于 webpack 配置的环境下都可以使用

  - 如果在其他项目中使用它,那么我们需要自己来进行配置,比如配置 webpack.config.js 中的 modules: true 等

- React 的脚手架已经内置了 css modules 的配置
  - .css/.less/.scss 等样式文件都需要修改成.module.css/.module.less/.module.scss 等之后就可以引用并且进行使用

> css modules 解决了局部作用域的问题

- css modules 缺点
  - 引用的类名, 不能使用连接符(.home-title),在 JavaScript 中是不识别的
  - 所有的 className 都必须使用{style.className}的形式来编写
  - 不方便动态来修改某些样式,依然需要使用内联样式的方式

```css title="profile.module.css"
.title {
  color: red;
}
```

```jsx title="profile.jsx"
import React, { PureComponent } from "react";
import profileStyle from "./profile.module.css";

export class Profile extends PureComponent {
  render() {
    return <div class={profileStyle.title}>Profile</div>;
  }
}

export default Profile;
```

```jsx title="App.jsx"
import React, { PureComponent } from "react";
import Profile from "./profile";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Profile />
      </div>
    );
  }
}

export default App;
```

## 5.less module

1.安装 craco 和 craco-less

```powershell
npm install @craco/craco
npm install craco-less
```

2.将 package.json 文件里的 scripts 换成 craco

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

3.在 src 目录下创建 craco.config.js

```js
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

```less title="style.module.less"
.container {
  display: flex;
  .title {
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    background-color: purple;
    &:hover {
      background-color: orange;
    }
  }
}
```

```jsx title="App.jsx"
import React, { PureComponent } from "react";
import appStyle from "./style.module.less";

export class App extends PureComponent {
  render() {
    return (
      <div className={appStyle.container}>
        <h2 className={appStyle.title}>App</h2>
      </div>
    );
  }
}

export default App;
```

## 6.CSS in JS

> "CSS-in-JS"是指一种模式,其中 CSS 由 JavaScript 生成而不是在外部文件中定义

- CSS-in-JS 通过 JavaScript 来为 CSS 赋予一些能力,包括类似于 CSS 预处理器一样的嵌套、函数定义、逻辑复用、动态修改状态等。
- 虽然 CSS 预处理也具备某些能力,但是获取动态状态依然是一个不好处理的点。

目前比较流行的 CSS-in-JS 库有哪些?

- styled-components
- emotion
- glamorous

### 1.styled-component 安装

```powershell
npm install styled-components
```

### 2.标签模板字符串

```js
const name = "ross";
const age = 18;
function foo(...args) {
  console.log(args);
}

// 这里也是对foo函数的调用
// 1.模板字符串被拆分了
// 2.第一个元素是数组, 是被模板字符串拆分的字符串组合
// 3.后面的元素是一个个模板字符串传入的内容
foo`我的名字:${name}, 年龄:${age}`;
// 这里会输出: 参数是三个数组
// 参数一: ['我的名字:', ', 年龄:', '']
// 参数二: ross
// 参数三: 18
```

### 3.styled-components 基本使用

```js title="style/variables.js"
export const primaryColor = "#0094ff";
export const middleSize = "16px";
```

```jsx title="home/style.js"
import styled from "styled-components";
import { primaryColor, middleSize } from "../style/variables.js";
export const HomeWrapper = styled.div`
  .title {
    font-size: ${middleSize};
    color: ${primaryColor};
    font-weight: ${(props) => props.fontWeight};
    &:hover {
      background-color: skyblue;
    }
  }
`;
```

```jsx title="home.jsx"
import { PureComponent } from "react";
import { HomeWrapper } from "./style";
class Home extends PureComponent {
  render() {
    // fontWeight 通过props传递给style.js的font-weight属性的值【动态赋值】
    return (
      <HomeWrapper fontWeight="bolder">
        <div className="title">Home</div>
      </HomeWrapper>
    );
  }
}
```

```js title="css-in-js继承"
import styled from "styled-components";
const MyBaseButton = styled.button`
  border-redius: 5px;
`;

const MyPrimaryButton = styled(MyButton)`
  background-color: #0094ff;
  color: #fff;
  border: none;
`;
```

```js title="styled默认值"
import styled from "styled-components";
// 表明当<HomeWrapper />的Props中没有传递padding时,使用默认的5px
const HomeWrapper = styled.div.attrs({
  paddingStyle: (props) => props.padding || "5px",
})`
  .title {
    padding: ${(props) => props.paddingStyle};
  }
`;
```

- styled-components 设置主题

```js title="index.js"
import { ThemeProvider } from "styled-components";
<ThemeProvider theme={{ color: "red", fontSize: "30px" }}>
  <Home />
</ThemeProvider>;
```

```js title="style.js"
import styled from "styled-components";
const HomeWrapper = styled.div`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize};
`;
```

## classNames 使用

### 安装 classnames

```powershell
npm i classNames
```

```css title="style.css"
.title {
  color: red;
}
.bold {
  font-weight: bolder;
}
```

```jsx title="App.jsx"
import { PureComponent } from "react";
import classNames from "classnames";
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isTitle: true,
      isBold: false,
    };
  }
  render() {
    return (
      <div>
        <h2 className={classNames({ title: isTitle, bold: isBold })}>App</h2>
        <h2 className={classNames("aaa", { title: isTitle, bold: isBold }}>App</h2>
        <h2 className=["aaa", { title: isTitle, bold: isBold }]>App</h2>
      </div>
    );
  }
}
```
