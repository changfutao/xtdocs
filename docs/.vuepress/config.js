import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端",
        children: [{ text: "react", link: "/react/" }],
      },
    ],
    sidebar: [
      {
        text: "react",
        prefix: "/react/",
        link: "/react/",
        children: [
          { text: "受控组件和非受控组件", link: "受控组件和非受控组件" },
          { text: "高阶组件", link: "高阶组件" },
          { text: "Fragment", link: "Fragment" },
          { text: "Portals", link: "Portals" },
          { text: "严格模式-StrictMode", link: "严格模式-StrictMode" },
          { text: "React动画", link: "React动画" },
          { text: "React中CSS的使用方式", link: "React中CSS的使用方式" },
          { text: "Redux使用", link: "Redux使用" },
        ],
      },
    ],
  }),
  lang: "zh-CN",
  title: "学习笔记",
  description: "",
});
