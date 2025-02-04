[[toc]]

# 严格模式-StrictMode

## 1.作用

- StrictMode 是一个用来突出显示应用程序中潜在问题的工具
  - 与 Fragment 一样,StrictMode 不会渲染任何可见的 UI
  - 它为其后代元素出发额外的检查和警告
  - 严格模式检查仅在开发模式下运行,它不会影响生产构建

## 2.应用

- 可以为应用程序的任何部分启用严格模式

```jsx
// Profile.jsx
import React, { PureComponent } from "react";

export class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("Profile UNSAFE_componentWillMount");
  }
  componentDidMount() {
    console.log("Profile componentDidMount");
  }
  render() {
    return <div>Profile</div>;
  }
}

export default Profile;
```

```jsx
// Cart.jsx
import React, { PureComponent } from "react";

export class Cart extends PureComponent {
  render() {
    return <div>Cart</div>;
  }
}

export default Cart;
```

```jsx
// App.jsx
// 注意: 不会对Cart组件运行严格模式检查, 会对Profile组件以及它的后代组件进行检查
import { PureComponent, StrictMode } from "react";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Cart />
        <StrictMode>
          <Profile />
        </StrictMode>
      </div>
    );
  }
}
```

## 3.严格模式检查的内容

- 1.识别不安全的生命周期：

- 2.使用过时的 ref API

- 3.检查意外的副作用  这个组件的 constructor 会被调用两次；

  - 这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用；
  - 在生产环境中，是不会被调用两次的；

- 4.使用废弃的 findDOMNode 方法

  - 在之前的 React API 中，可以通过 findDOMNode 来获取 DOM，不过已经不推荐使用了，可以自行学习演练一下

- 5.检测过时的 context API  早期的 Context 是通过 static 属性声明 Context 对象属性，通过 getChildContext 返回 Context 对象等方式来使用 Context 的；
  - 目前这种方式已经不推荐使用，大家可以自行学习了解一下它的用法；
