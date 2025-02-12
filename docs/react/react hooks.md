# react hooks

## 1.基础概念

### 1.函数组件(没有hooks前)与类组件对比

- 维护状态

  - class组件可以定义自己的state, 用来保存组件自己内部的状态

  - 函数组件不可以, 因为函数每次调用都会产生新的临时变量

- 生命周期

  - class组件有自己的生命周期,我们可以在对应的生命周期中完成自己的逻辑
  - 函数组件没有生命周期, 每次重新渲染都会重新发送一次网络请求

- 渲染

  - class组件在状态改变时只会重新执行render函数,以及我们希望重新调用的生命周期函数componentDidUpdate
  - 函数组件在重新渲染时,整个函数都会被执行,似乎没有什么地方可以只让它们调用一次

### 2.类组件存在的问题

- 复杂组件变得难以理解
  - 随着业务的增多,我们的class组件变得越来越复杂
  - 逻辑往往混在一起,强行拆分反而会造成过度设计,增加代码的复杂度
- class比较难以理解
  - this
  - ES6
- 组件复用状态很难
  - 高阶组件

## 2.hook学习

> 注意： 
>
> 1. 只能在函数最顶层调用Hook, 不要在循环、条件判断或者子函数中调用
> 2. 只能在React的函数组件或自定义Hook中调用Hook。不要在其他JavaScript函数中调用
> 3. 自定义Hook的名字总是以use开头, 否则React不认

### 1.useState

```jsx
import React, { memo, useState } from "react";

const Counter = memo(() => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
    </div>
  );
});

export default Counter;
```



useState来自react,需要从react中导入,它是一个hook

- 参数: 初始化值,如果不设置为undefined
- 返回值: 数组, 包含两个元素
  - 元素一: 当前状态的值(第一次调用为初始化值)
  - 元素二: 设置状态值的函数
- 点击button按钮后,会完成两件事情
  - 调用setCount,给count设置一个新的值
  - 组件重新渲染,并且根据新的值返回DOM结构

> useState
>
> 1. useState会帮助我们定义一个state变量,useState是一种新方法,它与class里面的this.state提供的功能完全相同。
> 2. useState接受唯一一个参数,在第一个组件被调用时使用来作为初始化值。(如果没有传递参数, 那么初始化值为undefined)
> 3. useState返回值是一个数组,我们可以通过数组结构

### 2.useEffect

- 我们可以通过Effect Hook来完成一些类似于class中生命周期的功能

- 类似于网络请求、手动更新DOM、一些事件的监听,都是React更新DOM的一些副作用

> useEffect的解析
>
> 1. 通过useEffect的Hook,可以告诉React需要在渲染后执行某些操作
> 2. useEffect要求我们传入一个回调函数,在React执行完更新DOM操作之后,就会回调这个函数
> 3. 默认情况下,无论是第一次渲染之后,还是每次更新之后,都会执行这个回调函数

```jsx
import {memo, useEffect, useState} from 'react'
const App = memo(() => {
    const [count, setCount] = useState(100)
    const [message, setMessage] = useState('Hello World')
    // 只要组件重新渲染,useEffect都会被执行
    useEffect(() => {
        console.log('只要组件重新渲染,useEffect都会被执行');
    })
    // 当依赖项发生变化时,useEffect被执行【初次渲染时会执行】
    useEffect(() => {
        console.log('count发生变化时,useEffect被执行');
    }, [count])
    // 只会在初次渲染时会执行一次
    useEffect(() => {
        console.log('只会在初次渲染时会执行一次')
    })
    return (
      <div>
        <h2>App: {count}</h2>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <h2>{message}</h2>
        <button onClick={e => setMessage('Hello React')}>change message</button>    
      </div>
    )
})
export default App
```

> 需要清除Effect
>
> 1. 需要清除副作用比如: 事件绑定、取消订阅、定时器等
> 2. 组件更新执行操作

```jsx
import {memo, useEffect, useState} from 'react'
const App = memo(() => {
    const [count, setCount] = useState(100)
    const [message, setMessage] = useState('Hello World')
    // 只要组件重新渲染,useEffect都会被执行
    useEffect(() => {
        console.log('只要组件重新渲染,useEffect都会被执行');
        return () => {
          console.log('组件更新或组件卸载时执行')
        }
    })
    // 当依赖项发生变化时,useEffect被执行【初次渲染时会执行】
    useEffect(() => {
        console.log('count发生变化时,useEffect被执行');
        return () => {
          console.log('count发生更新时执行')
        }
    }, [count])
    // 只会在初次渲染时会执行一次
    useEffect(() => {
        console.log('只会在初次渲染时会执行一次')
        return () => {
            console.log('只会在组件发生卸载时执行')
        }
    }, [])
    return (
      <div>
        <h2>App: {count}</h2>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <h2>{message}</h2>
        <button onClick={e => setMessage('Hello React')}>change message</button>    
      </div>
    )
})
export default App
```

> 为什么要在effect中返回一个函数
>
> 1. 这是effect可选的清除机制。每个effect都可以返回一个清除函数
> 2. 这样可以将添加和移除订阅的逻辑放在一起
> 3. 它们都属于effect的一部分

React何时清除effect

- React会在组件更新和卸载的时候执行清除操作
- effect在每次渲染时都会只能执行【除非添加了依赖】

> 在一个Hook中可以定义多个Effect,React将按照effect声明的顺序一次调用组件中的每一个effect

- useEffect有两个参数:
  - 参数一: 执行的回调函数
  - 参数二: 该useEffect在哪些state发生变化时,才重新执行【如果一个函数我们不希望依赖任何内容时,也可以传入一个空数组】

### 3.useContext

```js title="context/ThemeContext.js"
import { createContext } from 'react'
export const ThemeContext = createContext()
```

```js title="index.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContext } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContext.Provider value={{ color: 'red' }}>
    <App />
  </ThemeContext.Provider>
);
```

```jsx title="App.jsx"
import React,{ memo, useContext } from 'react'
import {ThemeContext} from './context/ThemeContext'
const App = memo(() => {
    const theme = useContext(ThemeContext)
    return (
      <div style={theme}>App</div>
    )
})
```

> 1. Context Hook 允许我们通过Hook来直接获取某个Context的值
> 2. 当组件上层最近的<MyContext.Provider> 发生更新时,该Hook会触发重新渲染,并使用最新传递给MyContext provider的context value值

### 4.useReducer

```jsx
import React, { memo, useReducer } from 'react'
function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 }
    case "decrement":
      return { ...state, counter: state.counter - 1 }
    case "add_number":
      return { ...state, counter: state.counter + action.num }
    case "sub_number":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}
const App = memo(() => {
    const [state, dispatch] = useReducer(reducer, { counter: 0, user: {} })
    return (
     <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
      <button onClick={e => dispatch({type: "add_number", num: 5})}>+5</button>
      <button onClick={e => dispatch({type: "sub_number", num: 5})}>-5</button>
      <button onClick={e => dispatch({type: "add_number", num: 100})}>+100</button>
     </div>
  )
})
```

> useReducer仅仅是useState的一种替代方案
>
> 1. 在某些场景下,如果state的处理逻辑比较复杂, 我们可以通过useReducer来对其进行拆分
> 2. 或者这次修改的state需要依赖之前的state时,也可以使用
> 3. 数据是不会共享的

### 5.useCallback

> useCallback实际的目的是为了进行性能的优化

```jsx
import React, {memo, useCallback, useState, useRef} from 'react'
const HelloWorld = memo((props) => {
    const { increment } = props
    return (
      <button onClick={increment}>increment</button>
    )
})

const Home = memo((props) => {
    const { decrement } = props
    return (
      <button onClick={decrement}>decrement</button>
    )
})

const Profile = memo((props) => {
    const { addNumber } = props
     return (
      <button onClick={e => addNumber(5)}>addNumber</button>
    )
})

const Cart = memo((props) => {
    const { subNumber } = props
    return (
       <button onClick={e => subNumber(5)}>subNumber</button>
    )
})

const App = memo(() => {
    const [count, setCount] = useState(100)
    const [message, setMessage] = useState('Hello World')
    // 修改count时, HelloWorld子组件重新渲染, 然而修改message,不会导致Hello World修改
    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])
    // 因为不依赖任何, 所以count的值始终是100
    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [])
    // useRef, 在组件多次渲染时, 返回的是同一个值
    const countRef = useRef()
    countRef.current = count
    const addNumber = useCallback((num) => {
        setCount(countRef.current + num)
    })
    // 函数式更新, setCount支持函数式更新,可以避免依赖count的当前值。函数式更新会接收当前的 count 值作为参数，并返回新的值
    // subNumber 函数不会因为 count 的变化而重新创建，性能更好
    const subNumber = useCallback((num) => {
        setCount((prevCount) => prevCount - 5)
    }, [])
    return (
      <h2>App: {count}</h2>
      <HelloWorld increment={increment} />
      <Home decrement={decrement} />
      <Profile addNumber={addNumber} />
      <h2>{message}</h2>
      <button onClick={e => setMessage('Hello React')}>change message</button>
    )
})
```

### 6.useMemo

> useMemo实际的目的也是为了进行性能的优化

- useMemo返回的是一个memoized(记忆的)值
- 在依赖不变的情况下,多次定义的时候,返回的值是相同的

```jsx
import React,{memo, useMemo, useState} from 'react'
// 使用memo包裹函数组件, 当props没有发生变化,组件不会重新渲染
const HelloWorld = memo((props) => {
    console.log('HelloWorld渲染了')
    return (
      <div>Hello World</div>
    )
})

function calcNumTotal(num) {
  console.log("calcNumTotal被执行了");
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}

const App = memo((props) => {
    const [count, setCount] = useState(0)
    // 每次组件渲染calcNumTotal都会执行
    // const result = calcNumTotal(count)
    // 不依赖任何, count始终是0
    // const result = useMemo(() => calcNumTotal(count), [])
    const result = useMemo(() => calcNumTotal(count), [count])
    const info = useMemo(() => ({ name: 'ross', age: 18 }))
    const [message, setMessage] = useState('Hello React')
    return (
      <div>
        <h2>App</h2>  
        <Hello World result={result} info={info} />
        <button onClick={e => setCount(count + 1)}>+1</button>
        <h2>{message}</h2>
        <button onClick={e => setMessage('Hello')}>change message</button>
      </div>
    )
})
```

- useMemo 与 useCallback

```js
// 下面useCallback和useMemo实现的效果一样
const increment1 = useCallback(fn, [])
const increment2 = useMemo(() => fn, [])
```

### 7.useRef

> useRef返回一个ref对象,返回的ref对象在组件的整个生命周期保持不变

- 最常用的ref是两种方法
  - 引入DOM(或者组件,但是需要是class组件)元素
  - 保存一个数据,这个对象在整个生命周期中可以保持不变

- 基本使用:

```jsx
import React,{memo, useRef} from 'react'
const App = memo(props => {
    const inputRef = useRef();
    const focusHandle = () => {
        // 通过ref.current获取DOM元素
        inputRef.current.focus();
    };
    return (
        <div>
            <h2>App</h2>
            <input ref={inputRef} />
            <button onClick={focusHandle}>Focus</button>
        </div>
    );
})
```

- 解决闭包陷阱

```jsx
import React, { memo, useRef } from 'react'
let obj = null
const App = memo((props) => {
    const [count, setCount] = useState(0)
    const nameRef = useRef()
    console.log(obj === nameRef)
    obj = nameRef

    // 通过useRef解决闭包陷阱
    const countRef = useRef()
    countRef.current = count

    const increment = useCallback(() => {
        setCount(countRef.current + 1)
    }, [])
     return (
       <div>
             <h2>Hello World: {count}</h2>
             <button onClick={e => setCount(count+1)}>+1</button>
             <button onClick={increment}>+1</button>
       </div>
     )
})
```

### 8.useImperativeHandle

```jsx
import React, {memo, useImperativeHandle, useRef, forwardRef} from 'react'
const HelloWorld = memo(forwardRef((props, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref,() => {
        // 返回暴露给父组件的事件
        return {
            focus() {
                inputRef.current.focus()
            },
            setValue(value) {
                inputRef.current.value = value
            }
        }
    })
    return (
	  <input type="text" ref={inputRef} />
    )
}))
const App = memo(props => {
   const inputRef = useRef()
   function changeHandle() {
       inputRef.current.focus()
       inputRef.current.setValue('哈哈')
   }
   return (
     <div>
       <HelloWorld ref={inputRef} />
       <button onClick={changeHandle}>change</button>
     </div>
   )
})
```

#### forwardRef

- forwardRef将ref转发到子组件
- 子组件拿到父组件中创建的ref,绑定到自己的某一个元素中
- 直接暴露给父组件是有风险的,父组件可以拿到DOM后进行任意的操作,但是我们希望父组件只能操作我们暴露给父组件的事件,其他的并不希望它随意操作

### 9.useLayoutEffect

- useLayoutEffect与useEffect区别
  - useEffect会在渲染的内容更新到DOM上后执行,不会阻塞DOM的更新
  - useLayoutEffect会在渲染的内容更新到DOM上之前执行,会阻塞DOM的更新

![image-20250212143148400](E:/home/%E7%AC%94%E8%AE%B0/images/image-20250212143148400.png)

> 官方不推荐useLayoutEffect执行, 因为会阻塞DOM渲染



























