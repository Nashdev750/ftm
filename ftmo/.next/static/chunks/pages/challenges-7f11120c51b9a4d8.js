(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{5779:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/challenges",function(){return a(1520)}])},1520:function(e,s,a){"use strict";a.r(s);var l=a(5893),r=a(9335),n=a(547),c=a(7294),t=a(2536);a(1664);var o=a(4998),d=a(381),i=a.n(d),h=a(5956),m=a(5255);let x=["#","status","Account","Credentials","Analysis","Date"],u=["USD","EUR","GBP","AUD","CAD","CHF"],p={USD:{sizes:[1e4,25e3,5e4,1e5,2e5],cost:[100,200,300,500,1e3]},EUR:{sizes:[1e4,22e3,45e3,9e4,18e4],cost:[100,180,273,457,913]},GBP:{sizes:[1e4,2e4,35e3,7e4,14e4],cost:[79,160,240,400,800]},AUD:{sizes:[1e4,25e3,5e4,1e5,2e5],cost:[100,200,300,500,1e3]},CAD:{sizes:[1e4,25e3,5e4,1e5,2e5],cost:[100,200,300,500,1e3]},CHF:{sizes:[1e4,25e3,5e4,1e5,2e5],cost:[100,200,300,500,1e3]}},y=()=>{let[e,s]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(0,t.Yu)("orders/all").then(e=>{s(e.data)})},[]),(0,l.jsxs)(n.default,{children:[(0,l.jsxs)(r.Card,{className:"h-fit w-full",children:[(0,l.jsx)(r.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:(0,l.jsx)("div",{className:"mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Typography,{variant:"h5",color:"blue-gray",children:"My Challenges"}),(0,l.jsx)(r.Typography,{color:"gray",className:"mt-1 font-normal",children:"These are details about the ongoing and pending challenges"})]})})}),(0,l.jsx)(r.CardBody,{className:"overflow-scroll px-0",children:(0,l.jsxs)("table",{className:"w-full min-w-max table-auto text-left",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:x.map(e=>(0,l.jsx)("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal leading-none opacity-70",children:e})},e))})}),(0,l.jsx)("tbody",{children:null==e?void 0:e.map((s,a)=>{var n;let c=a===(null==e?void 0:e.length)-1,t=c?"p-4":"p-4 border-b border-blue-gray-50";return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:t,children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:(0,o.E)(s.orderid)})}),(0,l.jsx)("td",{className:t,children:(0,l.jsx)("div",{className:"flex items-center gap-3",children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-bold",children:1==s.status?(0,l.jsx)("span",{className:"rounded-3xl py-2 px-3 bg-green-200",children:"Pending"}):(0,l.jsx)("span",{className:"rounded-3xl py-2 px-3 bg-red-300 text-white",children:"Waiting"})})})}),(0,l.jsx)("td",{className:t,children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,l.jsxs)("span",{children:["Size: ",(0,o.E)(null===(n=p[u[s.currency]])||void 0===n?void 0:n.sizes[s.size])]}),(0,l.jsxs)("span",{children:["Currency: ",u[s.currency]]}),(0,l.jsxs)("span",{children:["Platform: ",1==s.platform?"Metatrader 5":"Metatrader 4"]})]})})}),(0,l.jsx)("td",{className:t,children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"-"})}),(0,l.jsx)("td",{className:t,children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"-"})}),(0,l.jsx)("td",{className:t,children:(0,l.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:i()(s.stamp).format("MMMM Do YYYY, h:mm:ss a")})})]},a)})})]})}),(0,l.jsx)(r.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4"})]}),(0,l.jsx)(m.Z,{})]})};s.default=(0,h.Z)(y)}},function(e){e.O(0,[434,885,175,664,356,955,850,774,888,179],function(){return e(e.s=5779)}),_N_E=e.O()}]);