webpackJsonp([94],{2294:function(e,s){e.exports={content:["article",["p","Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。"],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:null}]],["h2","样式变量"],["p","choerodon-ui 的样式使用了 ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。"],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"默认样式变量"]]]],["p","如果以上变量不能满足你的定制需求，可以给我们提 issue。"],["h2","定制方式"],["p","我们使用 ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," 的方式来覆盖变量。\n在具体工程实践中，有 ",["code","package.theme"]," 和 ",["code","less"]," 两种方案，选择一种即可。"],["h3","1) theme 属性（推荐）"],["p","配置在 ",["code","package.json"]," 或 ",["code",".webpackrc"]," 下的 ",["code","theme"]," 字段。theme 可以配置为一个对象或文件路径。"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code",'"theme": {\n  "primary-color": "#1DA57A",\n},']],["p","注意："],["ul",["li",["p","样式必须加载 less 格式。"],["ul",["li",["p","如果你在使用 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," 的 ",["code","style"]," 配置来引入样式，需要将配置值从 ",["code","'css'"]," 改为 ",["code","true"],"，这样会引入 less 文件。"]],["li",["p","如果你是通过 ",["code","'choerodon-ui/dist/choerodon-ui.css'"]," 引入样式的，改为 ",["code","choerodon-ui/dist/choerodon-ui.less"],"。"]]]],["li",["p",["code","dva-cli@0.7.0+"]," 的 ",["code","theme"]," 属性需要写在 ",["a",{title:null,href:"https://github.com/dvajs/dva-example-user-dashboard/commit/d6da33b3a6e18eb7f003752a4b00b5a660747c31"},".roadhogrc"]," 文件里。"]],["li",["p","如果要覆盖 ",["code","@icon-url"]," 变量，内容需要包括引号 ",["code",'"@icon-url": "\'your-icon-font-path\'"'],"（",["a",{title:null,href:"https://github.com/visvadw/dvajs-user-dashboard/pull/2"},"修正示例"],"）。"]]],["h3","2) less"],["p","用 less 文件进行变量覆盖。"],["p","建立一个单独的 ",["code","less"]," 文件如下，再引入这个文件。"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~choerodon-ui/dist/choerodon-ui.less"</span><span class="token punctuation">;</span></span>   // 引入官方提供的 less 样式入口文件\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // 用于覆盖上面定义的变量'},["code",'@import "~choerodon-ui/dist/choerodon-ui.less";   // 引入官方提供的 less 样式入口文件\n@import "your-theme-file.less";   // 用于覆盖上面定义的变量']],["p","注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 ",["code","babel-plugin-import"]," 的 ",["code","style"]," 属性一起使用。"],["h2","社区教程"],["ul",["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack… the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]]]],meta:{order:5,title:"定制主题",filename:"docs/react/customize-theme.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#样式变量",title:"样式变量"},"样式变量"]],["li",["a",{className:"bisheng-toc-h2",href:"#定制方式",title:"定制方式"},"定制方式"]],["li",["a",{className:"bisheng-toc-h2",href:"#社区教程",title:"社区教程"},"社区教程"]]]}}});