# void、never、any、unknown类型

## void类型

`void`表示没有任何类型,不能直接赋值

```typescript
let a: void;
let b: number = a; // 报错
```

> 给变量赋值为void是没有意义的

如果一个函数没有返回值,此时我们可以定义为`void`

```typescript
function foo():void {
    console.log('今天天气不错')
}
```



