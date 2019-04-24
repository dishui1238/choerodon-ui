webpackJsonp([31],{2152:function(n,s,a){n.exports={basic:a(2682),"custom-indicator":a(2683),delayAndDebounce:a(2684),inside:a(2685),nested:a(2686),size:a(2687),tip:a(2688)}},2682:function(n,s,a){n.exports={content:{"zh-CN":[["p","一个简单的 loading 状态。"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"基本用法","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(6),a(49));return n.createElement(s.Spin,null)}}},2683:function(n,s,a){n.exports={content:{"zh-CN":[["p","使用自定义指示符。"]],"en-US":[["p","Use custom loading indicator."]]},meta:{order:6,title:{"zh-CN":"自定义指示符","en-US":"Custom spinning indicator"},filename:"components/spin/demo/custom-indicator.md",id:"components-spin-demo-custom-indicator"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> c7nIcon <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-spin-dot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>c7nIcon<span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>c7nIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>c7nIcon<span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(6),a(49)),t=n.createElement("span",{className:"custom-spin-dot"},n.createElement("i",null),n.createElement("i",null),n.createElement("i",null),n.createElement("i",null));return n.createElement("div",null,n.createElement(s.Spin,{indicator:t,size:"small"}),n.createElement(s.Spin,{indicator:t}),n.createElement(s.Spin,{indicator:t,size:"large"}))},style:".custom-spin-dot {\n  transform: rotate(45deg);\n  animation: c7nRotate 1.2s infinite linear;\n}\n.custom-spin-dot i {\n  width: 45%;\n  height: 45%;\n  border-radius: 100%;\n  background-color: #3f51b5;\n  transform: scale(.75);\n  display: block;\n  position: absolute;\n  opacity: .3;\n  animation: c7nSpinMove 1s infinite linear alternate;\n  transform-origin: 50% 50%;\n}\n.custom-spin-dot i:nth-child(1) {\n  left: 0;\n  top: 0;\n}\n.custom-spin-dot i:nth-child(2) {\n  right: 0;\n  top: 0;\n  animation-delay: .4s;\n}\n.custom-spin-dot i:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  animation-delay: .8s;\n}\n.custom-spin-dot i:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  animation-delay: 1.2s;\n}\n@keyframes c7nSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes c7nRotate {\n  to {\n    transform: rotate(405deg);\n  }\n}",highlightedStyle:'<span class="token selector"><span class="token class">.custom-spin-dot</span> </span><span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">animation</span><span class="token punctuation">:</span> c<span class="token number">7</span>nRotate <span class="token number">1.2</span>s infinite linear<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-spin-dot</span> i </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">45%</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">45%</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#3f51b5</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">.75</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">.3</span><span class="token punctuation">;</span>\n  <span class="token property">animation</span><span class="token punctuation">:</span> c<span class="token number">7</span>nSpinMove <span class="token number">1</span>s infinite linear alternate<span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> <span class="token number">50%</span> <span class="token number">50%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-spin-dot</span> i<span class="token pseudo-class">:nth-child(1)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-spin-dot</span> i<span class="token pseudo-class">:nth-child(2)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token number">.4</span>s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-spin-dot</span> i<span class="token pseudo-class">:nth-child(3)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token number">.8</span>s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-spin-dot</span> i<span class="token pseudo-class">:nth-child(4)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token number">1.2</span>s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> c7nSpinMove</span> <span class="token punctuation">{</span>\n  <span class="token selector">to </span><span class="token punctuation">{</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> c7nRotate</span> <span class="token punctuation">{</span>\n  <span class="token selector">to </span><span class="token punctuation">{</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">405</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'}},2684:function(n,s,a){n.exports={content:{"zh-CN":[["p","延迟显示 loading 效果。当 spinning 状态在 ",["code","delay"]," 时间内结束，则不显示 loading 状态。"]],"en-US":[["p","Specifies a delay for loading state. If ",["code","spinning"]," ends during delay, loading status won't appear."]]},meta:{order:5,title:{"zh-CN":"延迟","en-US":"delay"},filename:"components/spin/demo/delayAndDebounce.md",id:"components-spin-demo-delayAndDebounce"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Alert<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Card</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n        <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">spinning</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">delay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>container<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Loading state：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function t(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}var p=a(0),e=(a(6),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),o=a(49),c=function(a){function c(){var a,t,p,e;n(this,c);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return t=p=s(this,(a=c.__proto__||Object.getPrototypeOf(c)).call.apply(a,[this].concat(l))),p.state={loading:!1},p.toggle=function(n){p.setState({loading:n})},e=t,s(p,e)}return t(c,a),e(c,[{key:"render",value:function(){var n=p.createElement(o.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return p.createElement("div",null,p.createElement(o.Spin,{spinning:this.state.loading,delay:500},n),p.createElement("div",{style:{marginTop:16}},"Loading state：",p.createElement(o.Switch,{checked:this.state.loading,onChange:this.toggle})))}}]),c}(p.Component);return p.createElement(c,null)}}},2685:function(n,s,a){n.exports={content:{"zh-CN":[["p","放入一个容器中。"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"容器","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(6),a(49));return n.createElement("div",{className:"example"},n.createElement(s.Spin,null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">4</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">50</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">20</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},2686:function(n,s,a){n.exports={content:{"zh-CN":[["p","可以直接把内容内嵌到 ",["code","Spin"]," 中，将现有容器变为加载状态。"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"卡片加载中","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Card</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">spinning</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n            <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n            <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Loading state：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function t(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}var p=a(0),e=(a(6),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),o=a(49),c=function(a){function c(){var a,t,p,e;n(this,c);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return t=p=s(this,(a=c.__proto__||Object.getPrototypeOf(c)).call.apply(a,[this].concat(l))),p.state={loading:!1},p.toggle=function(n){p.setState({loading:n})},e=t,s(p,e)}return t(c,a),e(c,[{key:"render",value:function(){return p.createElement("div",null,p.createElement(o.Spin,{spinning:this.state.loading},p.createElement(o.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})),p.createElement("div",{style:{marginTop:16}},"Loading state：",p.createElement(o.Switch,{checked:this.state.loading,onChange:this.toggle})))}}]),c}(p.Component);return p.createElement(c,null)}}},2687:function(n,s,a){n.exports={content:{"zh-CN":[["p","小的用于文本加载，默认用于卡片容器级加载，大的用于",["strong","页面级"],"加载。"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"各种大小","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(6),a(49));return n.createElement("div",null,n.createElement(s.Spin,{size:"small"}),n.createElement(s.Spin,null),n.createElement(s.Spin,{size:"large"}))},style:"\n.c7n-spin {\n  margin-right: 16px;\n}\n"}},2688:function(n,s,a){n.exports={content:{"zh-CN":[["p","自定义描述文案。"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"自定义描述文案","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n      <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n      <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(6),a(49));return n.createElement(s.Spin,{tip:"Loading..."},n.createElement(s.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}}});