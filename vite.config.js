// const { defineConfig } = require("@vue/cli-service");
// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     config.resolve.alias.set("@", resolve("src"));
//   },
// });

// //详细版
// import { defineConfig, loadEnv } from "vite"; // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
// import path from "path";
// import createVitePlugins from "./vite/plugins";

// // https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//   // 获取.env文件里定义的环境变量
//   const env = loadEnv(mode, process.cwd());
//   //console.log(env);   //变量在命令行里打印出来
//   //.env文件中的环境变量必须以VITE_为前缀，否则无法引用成功
//   const { VITE_APP_ENV } = env;

//   return {
//     //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/
//     base: VITE_APP_ENV === "字段名" ? "/" : "/", // 例子:env.VITE_APP_BASE_URL || '/'
//     plugins: createVitePlugins(env, command === "build"),
//     resolve: {
//       alias: {
//         //别名配置
//         "~": path.resolve(__dirname, "./"), //配置的别名
//         "@": path.resolve(__dirname, "./src"),
//       },
//       //共享配置 https://cn.vitejs.dev/config/shared-options.html#resolve-extensions
//       extensions: [
//         ".mjs",
//         ".js",
//         ".mts",
//         ".ts",
//         ".jsx",
//         ".tsx",
//         ".json",
//         ".vue",
//       ],
//     },
//     //本地运行配置，以及反向代理配置
//     server: {
//       port: "9000", //端口
//       // host: "localhost",//ip地址例如192.168.1.177
//       host: true,
//       open: true, //服务启动时自动在浏览器中打开应用
//       // 反向代理配置
//       proxy: {
//         //配置多个代理
//         "/dev-api": {
//           target: "https://xxxx.com/", //例子:http://192.168.1.177:8080 或测试服务器https://xxxx.com
//           changeOrigin: true, ///设置访问目标地址允许跨域
//           rewrite: (p) => p.replace(/^\/dev-api/, ""),
//         },
//         "/prod-api": {
//           target: "https://xxxx.com/",
//           changeOrigin: true, ///设置访问目标地址允许跨域
//           rewrite: (p) => p.replace(/^\/prod-api/, ""),
//         },
//       },
//     },
//     css: {
//       // postCss 共享配置
//       postcss: {
//         plugins: [
//           //扩展插件
//           {
//             postcssPlugin: "internal:charset-removal",
//             AtRule: {
//               //大写AtRule
//               charset: (atRule) => {
//                 //char set字符集
//                 if (atRule.name === "charset") {
//                   atRule.remove(); //删除
//                 }
//               },
//             },
//           },
//         ],
//       },
//     },
//   };
// });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  //静态资源服务的文件夹
  publicDir: "public",
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@_c": path.resolve("src/components"),
      "vue$": "vue/dist/vue.esm-bundler.js"
    },
    // 导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  //预览设置  npm run build　打包之后，会生成dist文件 然后运行npm run preview；vite会创建一个服务器来运行打包之后的文件
  preview: {
    port: 4000, //端口号
    host: "localhost",
    open: true, //是否自动打开浏览器
  },
  //开发配置  npm run dev
  server: {
    port: 3001, //端口号
    strictPort: true, //是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
    host: "localhost",
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    https: false, //是否支持http2 如果配置成true 会打开https://localhost:3001/xxx;
    open: true, //是否自动打开浏览器
    // 反向代理 跨域配置
    proxy: {
      "/api": {
        target: "https://xxxx.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 打包配置 npm run build
  build: {
    //指定输出路径
    outDir: "dist",
    //生成静态资源的存放路径
    assetsDir: "assets",
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    //启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    //构建后是否生成 source map 文件
    sourcemap: false,
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
      input: {
        //可以配置多个，表示多入口
        index: path.resolve(__dirname, "index.html"),
        // project:resolve(__dirname,"project.html")
      },
      output: {
        // chunkFileNames:'static/js/[name]-[hash].js',
        // entryFileNames:"static/js/[name]-[hash].js",
        // assetFileNames:"static/[ext]/name-[hash].[ext]"
      },
    },
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
  },
//   css: {
//     postcss: {
//         plugins: [require('tailwindcss'), require('autoprefixer')],
//     },
// },

});
