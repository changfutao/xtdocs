export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"我是第一个 markdown"} }],
  ["/react/Fragment.html", { loader: () => import(/* webpackChunkName: "react_Fragment.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/Fragment.html.js"), meta: {"title":"Fragment"} }],
  ["/react/Portals.html", { loader: () => import(/* webpackChunkName: "react_Portals.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/Portals.html.js"), meta: {"title":"Portal"} }],
  ["/react/React%E4%B8%ADCSS%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "react_React中CSS的使用方式.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/React中CSS的使用方式.html.js"), meta: {"title":"React 中 CSS 的使用方式"} }],
  ["/react/React%E5%8A%A8%E7%94%BB.html", { loader: () => import(/* webpackChunkName: "react_React动画.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/React动画.html.js"), meta: {"title":"React 动画"} }],
  ["/react/", { loader: () => import(/* webpackChunkName: "react_index.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/index.html.js"), meta: {"title":""} }],
  ["/react/Redux%E4%BD%BF%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "react_Redux使用.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/Redux使用.html.js"), meta: {"title":"redux"} }],
  ["/react/%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F-StrictMode.html", { loader: () => import(/* webpackChunkName: "react_严格模式-StrictMode.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/严格模式-StrictMode.html.js"), meta: {"title":"严格模式-StrictMode"} }],
  ["/react/%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6%E5%92%8C%E9%9D%9E%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "react_受控组件和非受控组件.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/受控组件和非受控组件.html.js"), meta: {"title":"受控组件和非受控组件"} }],
  ["/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "react_高阶组件.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/高阶组件.html.js"), meta: {"title":"高阶组件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/react/%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1_Context.html", { loader: () => import(/* webpackChunkName: "react_非父子组件通信_Context.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/非父子组件通信_Context.html.js"), meta: {"title":"非父子组件通信"} }],
  ["/react/Router.html", { loader: () => import(/* webpackChunkName: "react_Router.html" */"E:/home/xtdocs/docs/.vuepress/.temp/pages/react/Router.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
