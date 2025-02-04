[[toc]]

# React 动画

## 1.react-transition-group

> 这个库可以帮助我们方便的实现组件的入场和离场动画,

- npm install react-transition-group --save

### 1.1 CSSTransition【推荐】

- CSSTransition 是基于 Transition 组件构建的
- CSSTransition 执行过程中,有三个状态: appear、enter、exit;
- 它们有三种状态,需要定义对应的 CSS 样式
  - 第一类: 开始状态: 对于的类是 -appear(初始状态)、-enter(进入状态)、-exit(退出状态)
  - 第二类: 执行动画: 对应的类是 -appear-active(初始状态)、-enter-active(进入状态)、-exit-active(退出状态)
  - 第三类: 执行结束: 对应的类是 -appear-done(初始状态)、-enter-done(进入状态)、-exit-done(退出状态)

```css
// style.css
.xt-enter {
  opacity: 0;
}

.xt-enter-active {
  opacity: 1;
  transition: opacity 2s ease;
}

.xt-exit {
  opacity: 1;
}

.xt-exit-active {
  opacity: 0;
  transition: opacity 2s ease;
}

.xt-appear {
  transform: translateX(-150px);
}

.xt-appear-active {
  transform: translateX(0);
  transition: transform 2s ease-in;
}
```

```jsx
import React, { createRef, PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
// CSSTransition
// 1. in属性: 触发进入或者退出状态 【如果添加了unmountOnExit={true}, 那么该组件会在执行退出动画结束后被移除掉】
//	 	1.1 in为true时,触发进入状态, 会添加-enter、-enter-active的class开始执行动画,当动画执行结束后,会移除这个两个class,并且添加-enter-done的class
//      1.2 in为false时, 触发退出状态, 会添加-exit、-exit-active的class开始执行动画,当动画执行结束后,会移除两个class,并且添加-exit-done的class
// 2. classNames: 动画class的名称 支持字符串和对象【在style.css中给class添加前缀例如: xt-】
// 3. timeout: 过渡动画的执行时间【注意: 这里最好跟css定义的动画时间一致】
// 4. appear: 是否在初次进行添加动画(需要和in同时为true)
// 5. unmountOnExit: 退出后卸载组件【下面例子中卸载CSSTransition中包裹的内容】
// 6. CSSTransition对应的钩子函数: 主要为了检测动画执行过程,来完成一些JavaScript的操作
//      6.1 onEnter: 在应用进入动画之前被触发
//      6.2 onEntering: 在应用进入动画时被触发
//      6.3 onEntered: 在应用进入动画结束后被触发
//      6.4 onExit: 在应用离开动画之前被触发
//      6.5 onExiting: 在应用离开动画时被触发
//      6.6 onExited: 在应用离开动画结束后被触发

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };

    this.sectionRef = createRef();
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit={true}
          classNames="xt"
          timeout={2000}
          appear
          onEnter={(e) => console.log("开始进入动画")}
          onEntering={(e) => console.log("执行进入动画")}
          onEntered={(e) => console.log("执行进入结束")}
          onExit={(e) => console.log("开始离开动画")}
          onExiting={(e) => console.log("执行离开动画")}
          onExited={(e) => console.log("执行离开结束")}
        >
          <div className="section" ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容, 哈哈哈</p>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
```

### 1.2 SwitchTransition

> SwitchTransiton 用于两个组件进行切换的动画

<p style="background: skyblue; color: red; font-weight: bolder;padding: 10px">
  注意事项:<br />
  1. SwitchTransition要配合CSSTransition使用<br />
  2. SwitchTransition里的mode属性: in-out / out-in<br />
      2.1 in-out: 表示新组件先进入,旧组件再移除<br />
      2.2 out-in: 表示旧组件先移除, 新组件再进入<br />
  3. CSSTransition在这里不使用in属性来判断元素是何种状态, 应该使用key属性(定义组件的唯一值)
</p>

```css title="style.css"
.login-enter {
  opacity: 0;
  transform: translateX(-150px);
}
.login-enter-active {
  opactiy: 1;
  transform: translateX(0);
  transition: all 1s ease;
}
.login-exit-active {
  opacity: 0;
  transform: translateX(150px);
  transition: all 1s ease;
}
```

```jsx title="App.jsx"
import { PureComonent } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }
  render() {
    // key 是表示两个组件的唯一标识
    // timeout 动画执行的时间
    // classNames 给动画css设置class前缀
    const { isLogin } = this.state;
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isLogin ? "退出" : "登录"}
            timeout={1000}
            classNames="login"
          >
            <button onClick={(e) => this.setState({ isLogin: !isLogin })}>
              {isLogin ? "exit" : "login"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
```

### 1.3 TransitionGroup

> TransitionGroup 用于列表数据的动画

```css title="style.css"
.book-enter {
  opacity: 0;
  transform: translateX(-150px);
}
.book-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease;
}
.book-exit-active {
  opacity: 0;
  transform: translateX(150px);
  transition: all 1s ease;
}
```

```jsx title="App.jsx"
import { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, title: "JavaScript深入浅出", price: 20.3, num: 1 },
        { id: 2, title: "Java核心技术", price: 30.3, num: 2 },
        { id: 3, title: "C#本质论", price: 51.3, num: 6 },
      ],
    };
  }
  deleteItem(index) {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books,
    });
  }
  addNewBook() {
    const books = [...this.state.books];
    books.push({
      id: Date.now(),
      title: "Redis深入浅出",
      price: 23.11,
      num: 1,
    });
    this.setState({
      books,
    });
  }
  render() {
    const { books } = this.state;
    return (
      <TransitionGroup component="ul">
        {books.map((item, index) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={1000}
              unmountOnExit={true}
              classNames="books"
            >
              <li>
                <span>
                  {item.title} - {item.price}{" "}
                </span>
                <button onClick={(e) => this.deleteItem(index)}>删除</button>
              </li>
            </CSSTransition>
          );
        }
        <button onClick={e => this.addNewBook()}>添加新书</button>
        )}
      </TransitionGroup>
    );
  }
}
```

<p style="background: skyblue; color: red; font-weight: bolder;padding: 10px">
  注意事项: TransitionGroup的component属性定义将TransitionGroup渲染的元素
</p>
