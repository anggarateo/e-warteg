(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{4694:function(e,a,n){Promise.resolve().then(n.bind(n,3599))},3599:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var t=n(7437),s=n(527),i=n(9513),c=n(9411),l=n(1430),r=n(795),d=n(9425),o=n(6802),u=n(1835),m=n(1507),f=n(2067),h=n.n(f),w=n(6691),p=n.n(w),g=n(4033),x=n(2265);function b(){let e=[{id:"all",label:"Semua"},{id:"new",label:"Baru"},{id:"favorite",label:"Paling Disukai"}],[a,n]=(0,x.useState)(""),[f,w]=(0,x.useState)([]),b=(0,g.useRouter)(),[N,j]=(0,x.useState)(!0),[v,k]=(0,x.useState)(!1),[y,S]=(0,x.useState)("");async function D(){j(!0),await (0,c.U2)("tab").then(a=>{var t;let s=(null===(t=e.find(e=>e.id===(null==a?void 0:a.value)))||void 0===t?void 0:t.id)||e[0].id;n(s),Y(s)}).catch(e=>{console.log("e tab listmenu",e)}),j(!1)}async function _(e){k(!0);let a=e.toString();await (0,c.Ue)("tab",a),n(a),Y(a),k(!1)}function Y(e){switch(e){case"all":w(l.Z);break;case"new":w(l.Z.filter(e=>e.created_at===h()(new Date).format("HH:mm DD/MM/YYYY")));break;case"favorite":w(l.Z.filter(e=>e.rating.grade>=4))}}return(0,x.useEffect)(()=>{D()},[]),i.Z.on("search",e=>{S(e)}),(0,t.jsxs)(t.Fragment,{children:[N&&(0,t.jsxs)("div",{className:"p-2 sm:p-4 space-y-4",children:[(0,t.jsx)(r.X,{className:"rounded-xl w-[45%] h-8 sm:w-[20%] sm:h-8"}),(0,t.jsx)(r.X,{className:"rounded-xl w-[48%] h-72 sm:w-[23%] sm:h-72"})]}),!N&&(0,t.jsx)(d.n,{className:"p-2 !pb-0 sm:p-4",items:e,selectedKey:a,onSelectionChange:_,children:e=>(0,t.jsx)(o.r,{title:e.label,children:(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 sm:gap-6 p-2 sm:p-4 justify-start",children:[v&&(0,t.jsx)(r.X,{className:"rounded-xl w-[48%] h-72 sm:w-[23%] sm:h-72"}),!v&&f.filter(e=>e.name.toLowerCase().includes(null==y?void 0:y.toLowerCase())||e.id.toString().includes(y)).map(e=>(0,t.jsxs)(u.w,{className:"rounded-xl shadow-md border w-[48%] sm:w-[23%]",isPressable:!0,onClick:()=>b.push("/order/"+e.id),children:[(0,t.jsx)(p(),{src:"https://placehold.co/150x150?text=".concat(e.name," ").concat(e.id),alt:"".concat(e.name," ").concat(e.id),width:150,height:150,className:"rounded-t-xl w-full"}),(0,t.jsx)(m.G,{children:(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h1",{className:"font-semibold",children:[e.name," ",e.id]}),e.rating.grade>0&&(0,t.jsx)(s.Z,{SVGclassName:"w-6 sm:w-8 h-6 sm:h-8",initialValue:e.rating.grade,allowFraction:!0,readonly:!0}),(0,t.jsx)("h1",{className:"text-xs",children:e.description})]})})]},e.id))]})},e.id)})]})}},527:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var t=n(7437),s=n(9576);function i(e){let{SVGclassName:a,initialValue:n,readonly:i,allowFraction:c,onClick:l}=e;return(0,t.jsx)(s.i,{SVGstyle:{display:"inline"},SVGclassName:a,initialValue:n,readonly:i,allowFraction:c,onClick:e=>{l&&l(e)}})}},9513:function(e,a,n){"use strict";var t=n(7795);let s=new(n.n(t)());a.Z=s},9411:function(e,a,n){"use strict";n.d(a,{Od:function(){return s},U2:function(){return c},Ue:function(){return i}}),n(5355);var t=n(1162),s=(0,t.$)("8d3be4cbdf9359c37a6faa66016ae23ce3c89877"),i=(0,t.$)("99c7277d511d8c5a4628e9beb52adb8b4fe1db44"),c=(0,t.$)("a1a67a894942ea186c21e91d038c0f409ccaffc7")},1430:function(e,a,n){"use strict";var t=n(2067),s=n.n(t);let i=[];for(let e=1;e<=5;e++)i.push({id:e,name:"Nasi Pecel",description:"Dengan sambal tumpang yang segar",rating:{grade:e+1===6?4.5:e+1,description:"Enaakkk..."},created_at:"00:00 11-11-2023"});for(let e=6;e<=10;e++)i.push({id:e,name:"Nasi Pecel",description:"Dengan sambal tumpang yang segar",rating:{grade:0},created_at:s()(new Date).format("HH:mm DD/MM/YYYY")});a.Z=i}},function(e){e.O(0,[990,854,868,511,971,938,744],function(){return e(e.s=4694)}),_N_E=e.O()}]);