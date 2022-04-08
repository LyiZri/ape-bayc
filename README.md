# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## 安装twailwind遇到的问题
    twailwind安装使用 npm i wailwindcss@npm:@tailwindcss/postcss7-compat@^2.2.17
    postcss-import 使用5.1.1版本
## umi配置tailwind
    .umirc.ts 配置
          extraPostCSSPlugins: [
                require('postcss-import'),
                require('tailwindcss')({
                config: './tailwind.config.ts',
                }),
                require('postcss-nested'),
            ],
    根目录下创建tailwind.config.ts文件
        module.exports = {
                purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
                darkMode: false, // or 'media' or 'class'
                theme: {
                extend: {},
                },
                variants: {
                extend: {},
                },
                plugins: [],
            };
    src中创建tailwind.css文件 并且引入tailwind
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer components {
            <!-- css配置 -->
        }
    global.less中引入tailwind.css文件
        @import 'tailwind.css';
## 锚点定位滑动
    首先定位到元素位置
        let anchorElement = document.getElementById(anchorName);
    如果元素存在 就滚动到相应的位置 
        anchorElement.scrollIntoView();
    如果想要进行平滑的滚动 添加参数behavior
        anchorElement.scrollIntoView({behavior: 'smooth'});# ape-bayc
