(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9860:function(e,t,n){Promise.resolve().then(n.t.bind(n,3649,23)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.bind(n,7445))},7445:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(3827),c=n(9441),o=n(7728),r=n(4772),l=e=>{let{children:t,locale:n="en-US",navigate:l,...s}=e,i=t;return l&&(i=(0,a.jsx)(o.pG,{navigate:l,children:i})),(0,a.jsx)(c.bd,{locale:n,children:(0,a.jsx)(r.N3,{...s,children:i})})},s=n(4090);let i=["light","dark"],m="(prefers-color-scheme: dark)",d=(0,s.createContext)(void 0),u=e=>(0,s.useContext)(d)?s.createElement(s.Fragment,null,e.children):s.createElement(f,e),h=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:c=!0,storageKey:o="theme",themes:r=h,defaultTheme:l=a?"system":"light",attribute:u="data-theme",value:f,children:S,nonce:k}=e,[p,_]=(0,s.useState)(()=>v(o,l)),[E,w]=(0,s.useState)(()=>v(o)),C=f?Object.values(f):r,T=(0,s.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=b());let o=f?f[t]:t,r=n?g():null,s=document.documentElement;if("class"===u?(s.classList.remove(...C),o&&s.classList.add(o)):o?s.setAttribute(u,o):s.removeAttribute(u),c){let e=i.includes(l)?l:null,n=i.includes(t)?t:e;s.style.colorScheme=n}null==r||r()},[]),x=(0,s.useCallback)(e=>{_(e);try{localStorage.setItem(o,e)}catch(e){}},[t]),N=(0,s.useCallback)(e=>{w(b(e)),"system"===p&&a&&!t&&T("system")},[p,t]);(0,s.useEffect)(()=>{let e=window.matchMedia(m);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),(0,s.useEffect)(()=>{let e=e=>{e.key===o&&x(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),(0,s.useEffect)(()=>{T(null!=t?t:p)},[t,p]);let L=(0,s.useMemo)(()=>({theme:p,setTheme:x,forcedTheme:t,resolvedTheme:"system"===p?E:p,themes:a?[...r,"system"]:r,systemTheme:a?E:void 0}),[p,x,t,E,a,r]);return s.createElement(d.Provider,{value:L},s.createElement(y,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:c,storageKey:o,themes:r,defaultTheme:l,attribute:u,value:f,children:S,attrs:C,nonce:k}),S)},y=(0,s.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:c,enableColorScheme:o,defaultTheme:r,value:l,attrs:d,nonce:u}=e,h="system"===r,f="class"===a?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),y=o?i.includes(r)&&r?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(r,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=l?l[e]:e,r=t?e+"|| ''":"'".concat(c,"'"),s="";return o&&n&&!t&&i.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?s+=t||c?"c.add(".concat(r,")"):"null":c&&(s+="d[s](n,".concat(r,")")),s},g=t?"!function(){".concat(f).concat(v(t),"}()"):c?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(m,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(v(l?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(r,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(v(l?"x[e]":"e",!0),"}else{").concat(v(r,!1,!1),";}").concat(y,"}catch(t){}}();");return s.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})},()=>!0),v=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(m)),e.matches?"dark":"light");function S(e){let{children:t}=e;return(0,a.jsx)(l,{children:(0,a.jsx)(u,{attribute:"class",defaultTheme:"dark",themes:["light","dark","modern"],children:t})})}},3385:function(){},3649:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[772,971,69,744],function(){return e(e.s=9860)}),_N_E=e.O()}]);