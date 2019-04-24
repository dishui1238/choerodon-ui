webpackJsonp([223],{2265:function(n,s){n.exports={content:["article",["p","通过存储可以访问LovCode和lookupCode的相关信息。"],["h2","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Stores <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 请求Lov配置，优先返回缓存中的数据</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> Stores<span class="token punctuation">.</span>LovCodeStore<span class="token punctuation">.</span><span class="token function">fetchConfig</span><span class="token punctuation">(</span><span class="token string">\'LOV_CODE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 获取Lov配置生成的DataSet，优先返回缓存中的数据</span>\n<span class="token keyword">const</span> lovDataSet <span class="token operator">=</span> <span class="token keyword">await</span> Stores<span class="token punctuation">.</span>LovCodeStore<span class="token punctuation">.</span><span class="token function">getLovDataSet</span><span class="token punctuation">(</span><span class="token string">\'LOV_CODE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 请求快码值，优先返回缓存中的数据</span>\n<span class="token keyword">const</span> lookupData <span class="token operator">=</span> <span class="token keyword">await</span> Stores<span class="token punctuation">.</span>LookupCodeStore<span class="token punctuation">.</span><span class="token function">fetchLookupData</span><span class="token punctuation">(</span><span class="token string">\'/common/code/SYS.USER_STATUS/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 清除LookupCode缓存，不传参数时将清除所有缓存</span>\nStores<span class="token punctuation">.</span>LookupCodeStore<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'SYS.USER_STATUS\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 清除Lov缓存，不传参数时将清除所有缓存</span>\nStores<span class="token punctuation">.</span>LovCodeStore<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'LOV_CODE\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Stores } from 'choerodon-ui/pro';\n\n// 请求Lov配置，优先返回缓存中的数据\nconst config = await Stores.LovCodeStore.fetchConfig('LOV_CODE');\n\n// 获取Lov配置生成的DataSet，优先返回缓存中的数据\nconst lovDataSet = await Stores.LovCodeStore.getLovDataSet('LOV_CODE');\n\n// 请求快码值，优先返回缓存中的数据\nconst lookupData = await Stores.LookupCodeStore.fetchLookupData('/common/code/SYS.USER_STATUS/');\n\n// 清除LookupCode缓存，不传参数时将清除所有缓存\nStores.LookupCodeStore.clearCache(['SYS.USER_STATUS']);\n\n// 清除Lov缓存，不传参数时将清除所有缓存\nStores.LovCodeStore.clearCache(['LOV_CODE']);"]]],meta:{category:"Pro Components",subtitle:"存储",cols:1,type:"Other",title:"Stores",filename:"components-pro/stores/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]]]}}});