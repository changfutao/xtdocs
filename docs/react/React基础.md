# React基础

## 1.特点

- 声明式
  - React允许我们只需要维护自己的状态,当状态改变时,React可以根据最新的状态去渲染我们的UI界面
- 组件化开发
- 多平台适配
  - Web
  - App
  - VR

## 2.开发依赖

开发React必须依赖三个库

- react: 包含react所必须的核心代码
  - react包含了react web和react-native所共同拥有的核心代码
- react-dom: react渲染在不同平台所需要的核心代码
  - web端: react-dom会将jsx最终渲染成真实的DOM,显示在浏览器
  - native端: react-dom会将jsx最终渲染成原生的控件(比如Android中的Button, IOS中的UIButton)
- babel: 将jsx转换成React代码的工具
  - 编译器、转移器
  - 将ES6转为ES5
  - babel可以帮助我们将jsx转为React.createElement

## 3.依赖引入

- CDN

```html
<script src="react.js" />
<script src="react-dom.js" />
<script src="babel.js" />
<script text="text/babel">
  // 1.定义变量
  const message = 'Hello World'
  const btnClick = () => {
    message = 'Hello React'
    render()
  }
  // 2.渲染内容
  // 用于创建一个React根,之后渲染的内容会包含在这个根中
  const root = ReactDOM.createRoot(document.querySelector('#app'))
  render()
  
  function render() {
    root.render(
      (
      <div>
        <h2>{message}</h2>
        <button onClick={btnClick}>修改文本</button>
	  </div>
      )
    )
  }
</script>
```

- 下载后,添加本地依赖
- 通过npm管理



## 4.组件

> 组件的名称首字母必须大写,小写会被认为是HTML元素

### 类组件

- 定义一个类(类名大写,组件的名称是必须大写的),继承自React.Component/React.PureComponent
- 实现当前组件的render函数

```jsx
import React from 'react'
class App extends React.Component {
    // constrator函数在没有状态管理时可以不写, 因为继承了父类所以必须调用super()
    constrator(props) {
        super(props)
        this.state = {
            message: 'Hello World'
        }
    }
    render() {
        const { message } = this.state
        return (
          <div>{message}</div>
        )
    }
}
```

























