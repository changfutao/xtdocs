# Binding

Binding Path=xxx, 当没有指定Source时, 将DataContext作为Source,
如果自己没有DataContext那么会一层一层向上找,直到找到Window



以下的代码没有指定Source和Path,

```xml
<TextBox Text={Binding}></TextBox>
```





