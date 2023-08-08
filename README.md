## Intro

This project is about React + JS.<br/>
Lots of basic use case are included.

## Basic

- create a new react project by vite

  ```js
  npm create vite@latest
  ```
  Great VS Tools:
    1. ES7+React/Redux/React-Native[template script: "tsrafce" --- For TS]
    2. Prettier -Coder formatter

- use icons

  ```js
  npm i react-icons
  npm i @heroicons/react
  ```
  usage:
  ```js
    import { HiAcademicCap } from "react-icons/hi";
    function Demo() {
      return (
        <>
          <HiAcademicCap/>
        </>
      )
    }
  ```

- For custom "@"

  ```js
    npm i -D @types/node // path module
  ```
  Then:<br/>
   &emsp;use 'path' to config costume path for "@" in vite.config.ts<br/>

- install & config Tailwind

   Good VS Tools:<br/>
      1. TailWind Document, cmd+crl+t
      2. Tailwind CSS IntelliSense: automatic show me available props

   - “Install Tailwind CSS with vite": [ Official Doc for install and config Tailwind ](https://tailwindcss.com/docs/guides/vite)
   按照link 里面操作【具体步骤文档内并未书写】 ( 期间需要清空 index.css, 删除 App.css, 并调整 App.jsx 的内容  )

   ```js
      npm i -D prettier prettier-plugin-tailwindcss // 可以让自己更自由的书写 tailwind，不必必须按照 tailwind 要求的顺序书写
   ```
  创建一个 prettier.config.cjs
  并更改：
  ```js
  <!-- export default {
    plugins: [require("prettier-plugin-tailwindcss")]
  }; -->
  module.exports = {
     plugins: [require("prettier-plugin-tailwindcss")]
   }
  ```
  在 tailwind.config.cjs 添加配置,具体可参考[这个链接](https://tailwindcss.com/docs/theme)

<!-- - 添加字体： Google Fonts

  然后添加到 index.css 中<br/>
  再在 tailwind.config.cjs 进行添加 -->
  - add AntDesign
    - npm install antd
    - 在 index.js 或 index.tsx 文件的顶部添加以下代码： import 'antd/dist/antd.css';
      - 关于这一步：
        - // Less or Sass ??

    - npm install --save-dev babel-plugin-import// below 配置按需加载（可选）
    - 在项目根目录创建.babelrc文件，并添加以下配置：
        ```js
          {
            "plugins": [
              ["import", { "libraryName": "antd", "style": true }]
            ]
          }
        ```
    - usage:
      ```js
        // 111
      ```


## Course Learned

- [React Official: for use react more properly](https://m.bilibili.com/video/BV1Gg4y1x7x1?buvid=ZD47AAD4FC1A8B624C5B9FADDC71DC9A91CF&is_story_h5=false&mid=Zs5WXF9Y%2BWido8d1kCdpvA%3D%3D&p=1&plat_id=114&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=15C54BD8-277C-4F8B-92E4-D13A10A2E1F3&share_source=WEIXIN&share_tag=s_i&timestamp=1689293233&unique_k=DCg1mlI&up_id=646421368&code=061dwOkl2pFYKb4h6ynl2Em2yI3dwOkB&state=)

## Next step

- [x] use Tailwind
<!-- - [ ] use Framer Motion -->
- [x] use heroicons
- [ ] Using React+JS to create some common UI component;
- [x] use React Router
- [ ] use Redux
- [ ] custom React HOOK
- [ ] use AntDesign
- [ ] Read Great React Code and Create a few project. --- this is only for TS

## Notes mainly for TS + React


-  React + Ant
      ```js
        // 按需加载Ant Design组件: 在React + TypeScript项目中，你可以使用babel-plugin-import插件来按需加载Ant Design组件。
        // 首先，安装插件： npm install --save-dev babel-plugin-import
        // 然后，在项目根目录创建.babelrc文件，并添加以下配置：
        {
          "plugins": [
            ["import", { "libraryName": "antd", "style": true }]
          ]
        }
        // 这将确保你只导入使用的Ant Design组件，并根据需要加载相应的样式。
      ```
-  React + Three
      ```js
        // Install Three.js: npm install three
        // Import Three.js:  import * as THREE from 'three';
        // no need to extra configs, just do as ./scenes/reactThree/index.tsx
      ```
- React + webGL --- not OK
      尝试图形学相关算法，并最终作用于项目中 ---》 Three Project/ UE
      ```js
        // npm install webgl-typescript  / npm install --save @types/webgl2, npm install --save webgl2
      ```
-  React + webGPU --- not try
-  React + React Router
    ```js
      // - Install React Router:  npm install react-router-dom
      // reference link: https://reactrouter.com/en/main/start/tutorial#client-side-routing [里面的import { getContacts } from "../contacts"; 我非常疑惑，哪里来的？？？--明天看看是否能找到源码]
    ```
## Tips：

### 关于 vite启动之后不能通过ip访问项目的问题

  - [reference link --- 局域网内可访问](https://www.jianshu.com/p/ee286a5e7a67)

     - 具体内容：

       ```js
         // 要修改vite.config.js文件, 添加 host: 0.0.0.0
         server: {
           open: true,
           port: 3005,
           host: '0.0.0.0'
         },
         // 修改 package.json 启动命令
         "scripts": {
           "dev": "vite",
           "start": "vite --host 0.0.0.0", // 这一条
           "build": "vue-tsc --noEmit && vite build",
           "serve": "vite preview"
         },
       ```
  - 在公网上可访问： npm install ngrok -g
    -  在终端中： “ ngrok http 3000 ” //注意： 端口号要和当前项目的一致
    -  同时，基于Vite的项目在启动时需要使用： “vite --host 0.0.0.0”, 来让 Vite 服务器监听所有可用的 IP 地址