export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"前端\",\"children\":[{\"text\":\"react\",\"link\":\"/react/\"}]}],\"sidebar\":[{\"text\":\"react\",\"prefix\":\"/react/\",\"link\":\"/react/\",\"children\":[{\"text\":\"受控组件和非受控组件\",\"link\":\"受控组件和非受控组件\"},{\"text\":\"高阶组件\",\"link\":\"高阶组件\"},{\"text\":\"Fragment\",\"link\":\"Fragment\"},{\"text\":\"Portals\",\"link\":\"Portals\"},{\"text\":\"严格模式-StrictMode\",\"link\":\"严格模式-StrictMode\"},{\"text\":\"React动画\",\"link\":\"React动画\"},{\"text\":\"React中CSS的使用方式\",\"link\":\"React中CSS的使用方式\"},{\"text\":\"Redux使用\",\"link\":\"Redux使用\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
