(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{3959:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newpassword/[email]",function(){return s(8706)}])},4080:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.0d0525cf.png",height:888,width:882,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXEbpkkBulOwJkL6CwUhn0cAr/0Ar/AAsPNPe1UAwF0Ar+//AAACrffnDwcAwEgAsVwA8MYGpVkrkj0AsVyiND8AsvoAqq1Y/1pTAAAAGHRSTlMAu3FDmHCee6wKZIRaYcFRrhJKz5phf1s6o75ZAAAACXBIWXMAADLAAAAywAEoZFrbAAAAPUlEQVR4nB2KSQLAIAjEoqKA3ff//7SlOUzmEIDHnCCfauGeCvFykrL5bVSRa92b4uN8LKYR1d5+wzR8+wI2SgGGHEYKUAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2536:function(e,t,s){"use strict";s.d(t,{Yu:function(){return o},qC:function(){return a}});var r=s(6154);let n="https://fundmefx.com/api/",i=()=>({authorization:"Bearer "+window.localStorage.getItem("token")}),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.Z.post(n+e,t,{headers:{...i(),...s}})},o=e=>r.Z.get(n+e,{headers:i()})},7623:function(e,t,s){"use strict";var r=s(5893);let n=()=>(0,r.jsxs)("div",{className:"w-full p-28 bg-[#262729] md:p-4",children:[(0,r.jsx)("p",{className:"text-[#A2ACBD] pb-5",children:"All information provided on this website is intended solely for the purpose of studying financial market trading and is not meant to serve as a specific recommendation for investment, business, or investment opportunity analysis, nor is it a general recommendation for trading investment instruments. Trading in financial markets is a high-risk activity, and it is recommended that individuals do not risk more than they can afford to lose. FMFX does not provide any investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where distribution or use would be contrary to local laws or regulations. FMFX is not a broker and does not accept deposits. The technical solution offered for FMFX platforms and data feed is powered by institutional liquidity providers."}),(0,r.jsxs)("p",{className:"text-blue-gray-100 md:text-sm",children:["2023 \xa9 Copyright - FMFX, built with ",(0,r.jsx)("span",{className:"text-deep-orange-600",children:"❤"})," for trading"]})]});t.Z=n},8706:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(7536),i=s(9335),a=s(1664),o=s.n(a),l=s(4080),d=s(5675),c=s.n(d),u=s(7623);s(7294);var p=s(1163),A=s(2920),m=s(2536);let h=()=>{let e=(0,p.useRouter)(),{email:t}=e.query,{register:s,handleSubmit:a,setValue:d,formState:{errors:h}}=(0,n.cI)(),f=s=>{if(s.password!=s.new)return A.Am.error("Passwords don't match");(0,m.qC)("reset/"+t,{password:s.password,otp:s.otp}).then(t=>{A.Am.success("Password reset successfully"),e.push("/login")}).catch(e=>{var t,s;A.Am.error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:s.error)||"Network error please try again")})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full py-8 max-w-lg mx-auto px-3",children:[(0,r.jsxs)("div",{className:"mx-auto pb-6 flex items-center gap-2",children:[(0,r.jsx)(c(),{src:l.Z,alt:"LOGO",width:50}),(0,r.jsx)("p",{className:"font-extrabold text-3xl text-blue-gray-800",children:"FMFX"})]}),(0,r.jsx)("p",{className:"text-3xl font-normal text-blue-gray-800 pb-4",children:"Set New Password"}),(0,r.jsx)("div",{className:"pb-4",children:(0,r.jsxs)("p",{className:"flex items-center gap-2",children:["Otp sent to ",(0,r.jsxs)("span",{className:"font-bold text-blue-gray-800 text-sm",children:[t," "]}),(0,r.jsx)(o(),{href:"/reset",className:"text-cyan-500 underline",children:"edit"})]})}),(0,r.jsxs)("form",{onSubmit:a(f),children:[(0,r.jsx)("div",{className:"w-full pb-3",children:(0,r.jsx)(i.Input,{type:"text",error:h.otp,label:"OTP",...s("otp",{required:!0})})}),(0,r.jsx)("div",{className:"w-full pb-3",children:(0,r.jsx)(i.Input,{type:"password",error:h.password,label:"New Password",...s("password",{required:!0})})}),(0,r.jsx)("div",{className:"w-full pb-3",children:(0,r.jsx)(i.Input,{type:"password",error:h.new,label:"Confirm New Password",...s("new",{required:!0})})}),(0,r.jsx)("div",{className:"w-full pb-2",children:(0,r.jsx)(i.Button,{type:"submit",children:"Continue"})})]}),(0,r.jsx)("div",{className:"flex gap-2 items-center py-5 pt-0",children:(0,r.jsxs)("p",{className:"text-xs",style:{color:"".concat(h.terms?"red":"")},children:["Back to ",(0,r.jsx)(o(),{className:"text-cyan-500",href:"/login",children:"Login."})]})})]}),(0,r.jsx)(u.Z,{})]})};t.default=h},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[434,175,664,356,774,888,179],function(){return e(e.s=3959)}),_N_E=e.O()}]);