(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{8485:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/earning",function(){return t(2177)}])},4080:function(e,s){"use strict";s.Z={src:"/_next/static/media/logo.0d0525cf.png",height:888,width:882,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXEbpkkBulOwJkL6CwUhn0cAr/0Ar/AAsPNPe1UAwF0Ar+//AAACrffnDwcAwEgAsVwA8MYGpVkrkj0AsVyiND8AsvoAqq1Y/1pTAAAAGHRSTlMAu3FDmHCee6wKZIRaYcFRrhJKz5phf1s6o75ZAAAACXBIWXMAADLAAAAywAEoZFrbAAAAPUlEQVR4nB2KSQLAIAjEoqKA3ff//7SlOUzmEIDHnCCfauGeCvFykrL5bVSRa92b4uN8LKYR1d5+wzR8+wI2SgGGHEYKUAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1636:function(e,s,t){"use strict";var r=t(5893),i=t(2536),n=t(4630),a=t(7294);let l=e=>{let s=()=>{let[s,t]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{(0,i.Yu)("verify").then(e=>{d(!1),t(!0)}).catch(e=>{d(!1)})},[s]),l)?(0,r.jsx)(o,{Child:()=>(0,r.jsx)("div",{className:"p-5",children:"loading"})}):s?(0,r.jsx)(o,{Child:e}):(0,r.jsx)(n.default,{})};return s};s.Z=l;let o=e=>{let{Child:s}=e;return(0,r.jsx)(s,{})}},7623:function(e,s,t){"use strict";var r=t(5893);let i=()=>(0,r.jsxs)("div",{className:"w-full p-28 bg-[#262729] md:p-4",children:[(0,r.jsx)("p",{className:"text-[#A2ACBD] pb-5",children:"All information provided on this website is intended solely for the purpose of studying financial market trading and is not meant to serve as a specific recommendation for investment, business, or investment opportunity analysis, nor is it a general recommendation for trading investment instruments. Trading in financial markets is a high-risk activity, and it is recommended that individuals do not risk more than they can afford to lose. FTX does not provide any investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where distribution or use would be contrary to local laws or regulations. FTX is not a broker and does not accept deposits. The technical solution offered for FTX platforms and data feed is powered by institutional liquidity providers."}),(0,r.jsxs)("p",{className:"text-blue-gray-100 md:text-sm",children:["2023 \xa9 Copyright - FTX.com, built with ",(0,r.jsx)("span",{className:"text-deep-orange-600",children:"❤"})," for trading"]})]});s.Z=i},547:function(e,s,t){"use strict";t.r(s);var r=t(5893);t(6916);var i=t(4512),n=t(7294);let a=e=>{let{children:s}=e,[t,a]=(0,n.useState)(!1);return(0,r.jsx)("div",{className:"w-screen h-fit min-h-screen bg-blue-gray-50",children:(0,r.jsxs)("div",{className:"w-3/4 h-full mx-auto flex justify-between items-stretch md:w-full",children:[(0,r.jsx)("div",{className:"w-1/4 h-full py-7 flex relative md:w-0",children:(0,r.jsx)(i.Z,{show:t})}),(0,r.jsxs)("div",{className:"w-3/4 flex flex-col justify-start items-start border p-4 md:w-full",children:[(0,r.jsxs)("div",{className:"w-full py-7 flex items-center justify-between",children:[(0,r.jsx)("span",{children:"Trader"}),(0,r.jsx)("div",{className:"w-[30px] cursor-pointer",role:"button",onClick:e=>a(!t),children:t?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})})]}),(0,r.jsx)("div",{className:"w-full py-7",children:s})]})]})})};s.default=a},2177:function(e,s,t){"use strict";t.r(s);var r=t(5893),i=t(547),n=t(1636);let a=()=>(0,r.jsx)(i.default,{children:(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("div",{className:"w-full shadow rounded bg-red-100",children:(0,r.jsx)("p",{className:"text-red-600 font-normal text-lg  p-4",children:"This page is available to verified traders only"})})})});s.default=(0,n.Z)(a)},4630:function(e,s,t){"use strict";t.r(s);var r=t(5893),i=t(7536),n=t(9335),a=t(1664),l=t.n(a),o=t(4080),d=t(5675),c=t.n(d),u=t(7623);t(7294);var h=t(2536),m=t(2920);let x=()=>{let{register:e,handleSubmit:s,setValue:t,formState:{errors:a}}=(0,i.cI)(),d=e=>{(0,h.qC)("login",e).then(e=>{window.localStorage.setItem("token",e.data.token),window.localStorage.setItem("user",JSON.stringify(e.data.user)),window.location.href="/client-area"}).catch(e=>{var s,t;m.Am.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||"Network error please try again")})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full py-8 max-w-lg mx-auto px-3",children:[(0,r.jsxs)("div",{className:"mx-auto pb-6 flex items-center gap-2",children:[(0,r.jsx)(c(),{src:o.Z,alt:"LOGO",width:50}),(0,r.jsx)("p",{className:"font-extrabold text-3xl text-blue-gray-800",children:"FMP"})]}),(0,r.jsx)("p",{className:"text-3xl font-normal text-blue-gray-800 pb-4",children:"Login"}),(0,r.jsxs)("form",{onSubmit:s(d),children:[(0,r.jsx)("div",{className:"w-full pb-3",children:(0,r.jsx)(n.Input,{type:"email",error:a.email,label:"Email",...e("email",{required:!0})})}),(0,r.jsx)("div",{className:"w-full pb-3",children:(0,r.jsx)(n.Input,{type:"password",error:a.password,label:"Password",...e("password",{required:!0})})}),(0,r.jsx)("div",{className:"w-full pb-2",children:(0,r.jsx)(n.Button,{type:"submit",children:"Continue"})})]}),(0,r.jsx)("div",{className:"flex gap-2 items-center py-5 pb-2",children:(0,r.jsxs)("p",{className:"text-xs",style:{color:"".concat(a.terms?"red":"")},children:["Lost password?, ",(0,r.jsx)(l(),{className:"text-cyan-500",href:"/reset",children:"Reset."})]})}),(0,r.jsx)("div",{className:"flex gap-2 items-center py-5 pt-0",children:(0,r.jsxs)("p",{className:"text-xs",style:{color:"".concat(a.terms?"red":"")},children:["Don't have an account?, ",(0,r.jsx)(l(),{className:"text-cyan-500",href:"/register",children:"Sign Up."})]})})]}),(0,r.jsx)(u.Z,{})]})};s.default=x},1163:function(e,s,t){e.exports=t(6885)}},function(e){e.O(0,[434,141,675,154,536,922,774,888,179],function(){return e(e.s=8485)}),_N_E=e.O()}]);