webpackJsonp([92],{2296:function(t,n){t.exports={content:["article",["p",["code","choerodon-ui"]," 目前的默认文案是英文，如果需要使用其他语言，可以参考下面的方案。"],["h2","LocaleProvider"],["p","choerodon-ui 提供了一个 React 组件 ",["a",{title:null,href:"/components/locale-provider"},"LocaleProvider"]," 用于全局配置国际化文案。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/locale-provider/zh_CN\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import zhCN from 'choerodon-ui/lib/locale-provider/zh_CN';\n\nreturn (\n  <LocaleProvider locale={zhCN}>\n    <App />\n  </LocaleProvider>\n);"]],["h2","LocaleContext"],["p","choerodon-ui/pro 提供了",["a",{title:null,href:"/components-pro/locale-context"},"LocaleContext"]," 用于全局配置国际化文案。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> localeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro/lib/locale-context/zh_CN\'</span><span class="token punctuation">;</span>\n\nlocaleContext<span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span>zh_CN<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { localeContext } from 'choerodon-ui/pro';\nimport zh_CN from 'choerodon-ui/pro/lib/locale-context/zh_CN';\n\nlocaleContext.setLocale(zh_CN);"]],["p","注意：",["code","zh_CN"]," 是文件名，以下表格也遵循同样的规则。"],["p","目前支持以下语言："],["table",["thead",["tr",["th","语言"],["th","文件名"]]],["tbody",["tr",["td","阿拉伯"],["td","ar_EG"]],["tr",["td","保加利亚语"],["td","bg_BG"]],["tr",["td","加泰罗尼亚语"],["td","ca_ES"]],["tr",["td","捷克语"],["td","cs_CZ"]],["tr",["td","德语"],["td","de_DE"]],["tr",["td","希腊语"],["td","el_GR"]],["tr",["td","英语"],["td","en_GB"]],["tr",["td","英语（美式）"],["td","en_US"]],["tr",["td","西班牙语"],["td","es_ES"]],["tr",["td","爱沙尼亚语"],["td","et_EE"]],["tr",["td","波斯语"],["td","fa_IR"]],["tr",["td","芬兰语"],["td","fi_FI"]],["tr",["td","法语（比利时）"],["td","fr_BE"]],["tr",["td","法语"],["td","fr_FR"]],["tr",["td","冰岛语"],["td","is_IS"]],["tr",["td","意大利语"],["td","it_IT"]],["tr",["td","日语"],["td","ja_JP"]],["tr",["td","韩语/朝鲜语"],["td","ko_KR"]],["tr",["td","挪威"],["td","nb_NO"]],["tr",["td","荷兰语（比利时）"],["td","nl_BE"]],["tr",["td","荷兰语"],["td","nl_NL"]],["tr",["td","波兰语"],["td","pl_PL"]],["tr",["td","葡萄牙语(巴西)"],["td","pt_BR"]],["tr",["td","葡萄牙语"],["td","pt_PT"]],["tr",["td","斯洛伐克语"],["td","sk_SK"]],["tr",["td","塞尔维亚"],["td","sr_RS"]],["tr",["td","斯洛文尼亚"],["td","sl_SI"]],["tr",["td","瑞典语"],["td","sv_SE"]],["tr",["td","泰语"],["td","th_TH"]],["tr",["td","土耳其语"],["td","tr_TR"]],["tr",["td","俄罗斯语"],["td","ru_RU"]],["tr",["td","乌克兰语"],["td","uk_UA"]],["tr",["td","越南语"],["td","vi_VN"]],["tr",["td","简体中文"],["td","zh_CN"]],["tr",["td","繁体中文"],["td","zh_TW"]]]],["p","具体的使用方法和新语言包贡献方式请参考 ",["a",{title:null,href:"/components/locale-provider"},"LocaleProvider 文档"],"。"],["h2","i18n 项目示例"],["p","我们还提供了一个使用了 ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"]," 和 LocaleProvider 的完整的国际化项目示例：",["a",{title:null,href:"https://github.com/ant-design/intl-example"},"ant-design/intl-example"],"，欢迎参考使用。"]],meta:{order:8,title:"国际化",filename:"docs/react/i18n.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#LocaleProvider",title:"LocaleProvider"},"LocaleProvider"]],["li",["a",{className:"bisheng-toc-h2",href:"#LocaleContext",title:"LocaleContext"},"LocaleContext"]],["li",["a",{className:"bisheng-toc-h2",href:"#i18n-项目示例",title:"i18n 项目示例"},"i18n 项目示例"]]]}}});