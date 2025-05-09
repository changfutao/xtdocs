# 非父子组件通信

## Context

- 在开发中,比较常见的数据传递方式是通过 props 属性自上而下(由父到子)进行传递
- 但是对于有一些场景: 比如一些数据需要在多个组件中进行共享(例如: 地区偏好、UI 主题、用户登录状态、用户信息等)
- 如果我们在顶层的 App 中定义这些信息,之后一层层传递下去,那么对于一些中间层不需要数据的组件来说,是一种冗余的操作

> React 提供了 Context, Context 提供了一种在组件之间共享此类值的方式,而不必显式地通过组件树的逐层传递 props, Context 设计目的是为了共享那些对于一个组件树而言是"全局"的数据。

- React.createContext

  - 创建一个需要共享的 Context 对象
  - 如果一个组件订阅了 Context,那么这个组件会从离自身最近的那个匹配的 Provider 中读取到当前的 context 值
  - defaultValue 是组件在顶层查找过程中没有找到对应的 Provider,那么就使用默认值

- Context.Provider
  - 每个 Context 对象都会返回一个 Provider React 组件,它允许消费组件订阅 context 的变化
  - Provider 接收一个 value 属性,传递给消费组件
  - 一个 Provider 可以和多个消费组件有对应关系
  - 多个 Provider 也可以嵌套使用,里层的会覆盖外层的数据
  - 当 Provider 的 value 值发生变化时,它内部的所有消费组件都会重新渲染
  - <MyContext.Provider value={} ></MyContext.Provider>

```js
import { createContext } from "react";
// const MyContext = createContext(defaultValue)
// const MyContext = createContext({ color: 'blue', fontSize: 16 })
const MyContext = createContext();
```

- Context 获取值的方式
  - Class.contextType
    - 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext()创建的 Context 对象
    - 这能让你使用 this.context 来消费最近 Context 上的那个值
    - 你可以在任何生命周期中访问到它,包括 render 函数中
    - MyClass.contextType = MyContext
  - Context.Consumer
    - React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context
    - 这里需要函数作为子元素
    - 这个函数接收当前的 context 值,返回一个 React 节点

```jsx
function foo() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /*基于context值进行渲染*/
      }}
    </MyContext.Consumer>
  );
}
```
