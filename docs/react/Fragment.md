# Fragment

## 场景

> 当不想渲染外层的 div【但是 React 要求必须有一个根节点】,那么这时就需要使用 Fragment。

Fragment 允许将子列表分组,而无需向 DOM 添加额外节点

```jsx
import { PureComonent, Fragment } from 'react'
class App extends PureComponent {
    contructor(props) {
        super(props)
        this.state = {
            books: ["JavaScript深入浅出", "Java内核", "SQL Server本质"],
        }
    }
    render() {
        return (
              {
                  this.state.books.map(book => {
                  	return <Fragment key={book}>
                      		<h2>{book}</h2>
                  		  </Fragment>
              	  })
              }
        )
    }
}
```

> 在 React 中还提供了 Fragment 的短语法:

- 使用空标签<> </> 【这里就不需要导入 Fragment】
- 注意： 如果我们需要在 Fragment 中添加 key,那么就不能使用短语法

```jsx
// 使用<> </> 短语法不能添加key等属性
import { PureComonent } from 'react'
class App extends PureComponent {
    contructor(props) {
        super(props)
        this.state = {
            books: ["JavaScript深入浅出", "Java内核", "SQL Server本质"],
        }
    }
    render() {
        return (
              {
                  this.state.books.map(book => {
                  	return <>
                      		<h2>{book}</h2>
                  		  </>
              	  })
              }
        )
    }
}
```
