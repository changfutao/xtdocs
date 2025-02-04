# redux

## 纯函数

- 纯函数需要符合的条件
  - 确定的输入, 一定有产生确定的输出
  - 函数在执行过程中, 不能产生副作用

## 为什么需要 redux

> JavaScript 需要管理的状态越来越多, 越来越复杂, 这些状态包括服务器返回的数据、缓存数据、用户操作产生的数据等,Redux 帮助我们管理 State 的容器, Redux 是 JavaScript 的状态容器,提供了可预测的状态管理。

第一步: 安装 redux

```powershell
npm i redux
```

### 未优化版本

```js title="store/index.js"
// 未优化版本
const { createStore } = require("redux");
const initialState = {
    name: 'haha',
    counter: 100
}
// reducer返回一个新的state
function reducer(state = initialState, action) {
    if(action.type === 'change_name') {
        return { ...state, action.name }
    } else if(action.type === 'add_number') {
        return { ...state, counter: state.counter + action.num }
    }
    return state
}
const store = createStore(reducer)
module.exports = store
```

```js title="index.js"
const store = require("./store");
// store.getState() 获取当前的state
console.log(store.getState());
// 通过dispatch来派发action
store.dispatch({ type: "change_name", name: "嘿嘿" });
console.log(store.getState());
```

### 优化版本

```js title="constants.js"
const CHANGE_NAME = "change_name";
const ADD_NUMBER = "add_number";
module.export = {
  CHANGE_NAME,
  ADD_NUMBER,
};
```

```js title="reducer.js"
const { CHANGE_NAME, ADD_NUMBER } = require("./store/constants");
const initialState = {
  name: "haha",
  counter: 100,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}
module.exports = reducer;
```

```js title="actionCreator.js"
const { CHANGE_NAME, ADD_NUMBER } = require("./store/constants");
const changeNameAction = (name) => {
  return { type: CHANGE_NAME, name };
};
const addNumberAction = (num) => {
  return { type: ADD_NUMBER, num };
};
module.exports = {
  changeNameAction,
  addNumberAction,
};
```

```js title="store/index.js"
// 优化版本
const { createStore } = require("redux");
const reducer = require("./store/reducer");
const store = createStore(reducer);
module.exports = store;
```

```js title="app.js"
const store = require("./store");
const { changeNameAction, addNumberAction } = require("./store/actionCreator");
console.log(store.getState());
// 订阅变化
const unsubscribe = store.subscribe(() => {
  console.log("订阅变化", store.getState());
});
store.dispatch(changeNameAction("嘻嘻"));
console.log(store.getState());
// 调用以后就订阅不到数据的变化了
unsubscribe();
```

## Store

> 用来存储数据

## action

- 所有数据的变化,必须通过派发(dispatch) action 来更新
- action 是一个普通的 JavaScript 对象,用来描述这次更新的 type 和 content
- 使用 action 的好处是可以清晰的数据的变化,数据是可追踪的

## reducer

> reduer 是将 state 和 action 联系在一起, 是一个纯函数。作用: 将传入的 state 和 action 结合起来生成一个新的 state

## Redux 的三大原则

- 单一数据源
  - 整个应用程序的 state 被存储在一棵 object tree 中,并且这个 object tree 只存储在一个 store 中
  - Redux 并没有强制让我们不能创建多个 store, 但是那样做并不利于数据的维护
  - 单一的数据源可以让整个应用程序的 state 变得方便维护、追踪、修改
- State 是只读的
  - 唯一修改 State 的方法一定是触发 action, 不要试图在其他地方通过任何的方式来修改 State
  - 这样就确保了 View 或网络请求都不能直接修改 state,它们只能通过 action 来描述自己想要如何修改 state；
  - 这样可以保证所有的修改都被集中化处理,并且按照严格的顺序来执行,所以不需要担心 race condition（竟态）的问题；
- 使用纯函数来执行修改
  - 通过 reducer 将旧 state 和 actions 联系在一起,并且返回一个新的 State
  - 随着应用程序的复杂度增加,我们可以将 reducer 拆分成多个小的 reducers,分别操作不同 state tree 的一部分
  - 但是所有的 reducer 都应该是纯函数,不能产生任何的副作用

## react-redux 使用

> redux 和 react 没有直接的关系, 可以在 React、Augular、Ember 等中使用 Redux

```powershell
npm i react-redux
```

```js title="App.jsx"
import React, { PureComponent } from "react";
import Home from "./pages/Home";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home />
      </div>
    );
  }
}

export default App;
```

### 同步操作

```js title="store/counter/contants.js"
export const ADD_NUMBER = "add_number";
export const SUB_NUMBER = "sub_number";
```

```js title="store/counter/actionCreator.js"
import { ADD_NUMBER, SUB_NUMBER } from "./contants";
export const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: SUB_NUMBER,
  num,
});
```

```js title="store/counter/reducer.js"
const initialState = {
  counter: 100,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
export default reducer;
```

```js title="store/counter/index.js"
export { addNumberAction, subNumberAction } from "./actionCreator";
import reducer from "./reducer";
export default reducer;
```

### 异步加载数据

```powershell
npm i redux-thunk
```

```js title="store/home/contants.js"
export const CHANGE_BANNERS = "change_banners";
```

```js title="store/home/actionCreator.js"
import axios from "axios";
import { CHANGE_BANNERS } from "./contants";
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const fetchHomeMultidataAction = () => {
  return function (dispatch) {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      dispatch(changeBannersAction(banners));
    });
  };
};
```

```js title="store/home/reducer.js"
const initialState = {
  banners: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}
```

```js title="store/index.js"
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// 使用thunk来执行异步操作
import { thunk } from "redux-thunk";
import counterReducer from "./counter";
import homeReducer from "./home";
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});
// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
```

```jsx title="pages/Home.jsx"
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  addNumberAction,
  subNumberAction,
} from "../store/counter/actionCreator";
import { fetchHomeMultidataAction } from "../store/home/actionCreator";

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultiData();
  }
  addNumber(num) {
    this.props.addNumber(num);
  }
  subNumber(num) {
    this.props.subNumber(num);
  }
  render() {
    return (
      <div>
        <h2>Home: {counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+1</button>
        <button onClick={(e) => this.subNumber(1)}>-1</button>
        <h2>轮播图</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  },
  fetchHomeMultiData() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

```js title="index.js"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Redux Toolkit

```powershell
npm i @reduxjs/toolkit react-redux
```

- Redux Toolkit 的核心 API
  - configureStore: 包装 createStore 以提供简化的配置选项和良好的配置值。它可以自动组合你的 slice reducer,添加你提供的任何 Redux 中间件,redux-thunk 默认包含,并启用 Redux DevTools Extension
  - createSlice: 接受 reducer 函数的对象、切片名称和初始状态值,并自动生成切片 reducer,并带有相应的 actions
  - createAsyncThunk: 接受一个动作类型字符串和一个返回承诺的函数,并生成一个 pending/fulfilled/rejected 基于该承诺分派动作类型的 thunk

```js title="store/features/counter.js"
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload;
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload;
    },
  },
});
export const { addNumber, subNumber } =  from counterSlice.actions
export default counterSlice.reducer
```

```js title="store/features/home.js"
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata",
  async (extraInfo, { dispatch, getState }) => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    dispatch(changeBanners(banners));
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
  },
});

export const { changeBanners } from homeSlice.actions
export default homeSlice.reducer
```

```js title="store/index.js"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import homeReducer from "./features/home";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
});

export default store;
```

```jsx title="pages/home.jsx"
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "../store/features/counter";
import {
  changeBanners,
  changeRecommends,
  fetchHomeMultidataAction,
} from "../store/features/home";

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
  render() {
    const { counter, banners } = this.props;
    return (
      <div>
        <h2>Home: {counter}</h2>
        <button onClick={(e) => this.props.addNumber(1)}>+1</button>
        <h2>轮播图</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  subNumber(num) {
    dispatch(subNumber(num));
  },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

- createSlice 用来定义 reducer
  - name: 用户标记 slice
    - 在 redux-devtool 中会显示对应的名词
  - initialState: 初始化值
    - 第一次初始化时的值
  - reducers: 相当于之前的 reducer 函数
    - 对象类型, 并且可以添加很多的函数
    - 函数类似于 redux 原来 reducer 中的一个 case 语句
    - 函数的参数
      - 参数一: state
      - 参数二: 调用这个 action 时,传递的 action 参数
- createSlice 返回值是一个对象,包含所有的 actions

- configureStore 用于创建 store 对象
  - reducer: 将 slice 中的 reducer 可以组成一个对象传入此处
  - middleware: 可以使用参数, 传入其他的中间件
  - devTools: 是否配置 devTools 工具, 默认为 true

进行浅拷贝缺点:

- 过大的对象,进行浅拷贝也会造成性能的浪费
- 浅拷贝后的对象,在深层改变时,依然会对之前的对象产生影响

> Redux Toolkit 底层使用了 immerjs 的一个库来保证数据的不可变性

- 为了节约内存,又出现了一个新的算法: Persistent Data Structure(持久化数据结构或一致性数据结构)
  - 用一种数据结构来保存数据
  - 当数据被修改时,会返回一个对象, 但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费

## connect 实现原理

```js title="StoreContext.js"
import { createContext } from "react";
export const StoreContext = createContext();
```

```js title="index.js"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StoreContext } from "./hoc";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
```

```js title="connect.js"
import { PureComponent } from "react";
import { StoreContext } from "./StoreContext";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props) {
        super(props);
        this.state = mapStateToProps(this.context.getState());
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const stateObj = mapStateToProps(this.context.getState());
        const dispatchObj = mapDispatchToProps(this.context.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }
    NewComponent.contextType = StoreContext;
    return NewComponent;
  };
}
```
