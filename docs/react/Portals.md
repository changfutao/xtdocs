# Portal

## 场景

> 我们希望渲染的内容独立于父组件,甚至是独立于当前挂载到的DOM元素中(默认都是挂载到id为root的DOM元素上的)

Portal提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案

```js
// 参数一: (child) 是任何可渲染的React子元素, 例如一个元素是字符串或fragment或react组件
// 参数二: (container) 是一个DOM元素
createPortal(child, container)
```

## 案例

- 案例1:

```jsx
import { createPortal } from "react-dom"
import { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return  (
          <div className="app">
                <h1>App</h1>
                {
                    createPortal(<h2>App H2</h2>, document.querySelector('#container'))
                }
          </div>
        )
    }
}
```

- 案例2:

```jsx
// Modal.jsx 模态窗体
import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
class Modal extends PureComponent {
    render() {
        return (
            { createPortal(this.props.children, document.querySelector('#container')) }
        )
    }
}
```

```jsx
// App.jsx
import { PureComponent } from 'react'
import Modal from './Modal'
class App extends PureComponent {
    render() {
        return (
          <div>
                <h2>App</h2>
                <Modal>
                   <h2>我是模态窗体</h2>
                </Modal>
          </div>
        )
    }
}
```

