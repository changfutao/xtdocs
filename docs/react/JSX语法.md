# JSX语法

## 1.简介

- JSX是什么
  - JSX是一种JavaScript的语法扩展,也在很多地方称之为JavaScript XML,因为看起来就是一段XML语法
  - 它用于描述我们的UI界面,并且其完成可以和JavaScript融合在一起使用



## 2.书写规范

- JSX的顶层只能有一个根元素/使用Fragment
- 为了方便阅读,我们可以在jsx的外层包裹一个小括号(), 这样可以方便阅读,并且jsx可以进行换行书写
- JSX中的标签可以是单标签,也可以是双标签
  - 注意: 如果是单标签,必须以 />结尾



## 3.使用

### 3.1 注释

```jsx
import React from 'react'
class App extends React.Component {
    render() {
        return (
          <div>
            {/* 注释 */}
            <h2>Hello World</h2>
          </div>
        )
    }
}
```

### 3.2 JSX嵌入变量作为子元素

- 当变量是Number、String、Array类型时,可以直接显示
- 当变量是null、undefined、Boolean类型时,内容为空
  - 如果希望可以显示null、undefined、Boolean,那么需要转成字符串
  - 转换的方式有很多, 比如toString方法、和空字符串拼接,String(变量)等方式
- Object对象类型不能作为子元素(not valid as a React child)
  - 这里作为子元素是<div>{msg}</div>不能为对象,在 <div name={msg}>这种是可以的</div>



### 3.2 JSX嵌入表达式

- 运算表达式
- 三元运算符
- 执行一个函数