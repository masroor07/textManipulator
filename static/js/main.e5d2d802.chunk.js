(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/",className:"nav-link "},"Home "))),l.a.createElement("div",{className:"form-check form-switch text-".concat(e.text)},l.a.createElement("input",{className:"form-check-input","aria-checked":"false",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}function s(e){return l.a.createElement("div",null,l.a.createElement("footer",{className:"py-3 my-4",style:{color:e.text}},l.a.createElement("ul",{className:"nav justify-content-center border-bottom pb-3 mb-3"},l.a.createElement("li",{className:"nav-item py-3 my-1 mx-3"},"Home"),l.a.createElement("li",{className:"nav-item py-3 my-1 mx-3"},"Features"),l.a.createElement("li",{className:"nav-item py-3 my-1 mx-3"},"Pricing"),l.a.createElement("li",{className:"nav-item py-3 my-1 mx-3"},"FAQs"),l.a.createElement("li",{className:"nav-item py-3 my-1 mx-3"},"About")),l.a.createElement("p",{className:"text-center"},"\xa9 2022 Masroor Shah, TextManipulator")))}function i(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{style:{color:e.text}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",style:{backgroundColor:e.textArea,color:e.text},value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Upper case was clicked");var e=r.toUpperCase();c(e)}},"Convert To Upper Case "),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Lower case was clicked");var e=r.toLowerCase();c(e)}},"Convert To Lower Case"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Lower case was clicked"),r.charAt(0).toUpperCase(),c(r.charAt(0).toUpperCase()+r.slice(1))}},"Convert To Sentence Case"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy To Clipboard")),l.a.createElement("div",{className:"container",style:{color:e.text}},l.a.createElement("h1",null,"Text summary:"),l.a.createElement("h6",null,"Number of characters = ",r.length),l.a.createElement("h6",null,"Number of words = ",r.split(" ").length-1),l.a.createElement("h6",null,"Time to read the whole text: ",.008*r.split(" ").length),l.a.createElement("div",{className:"container my-3",style:{border:".2px solid blue"}},l.a.createElement("h3",null,"Preview of the text:"),l.a.createElement("p",null,r))))}function u(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),": "),e.alert.msg)}var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("dark"),b=Object(o.a)(c,2),d=b[0],p=b[1],E=Object(n.useState)("white"),g=Object(o.a)(E,2),h=g[0],v=g[1],f=Object(n.useState)("black"),x=Object(o.a)(f,2),y=x[0],N=x[1],C=Object(n.useState)(null),k=Object(o.a)(C,2),w=k[0],S=k[1],j=function(e,t){S({msg:e,type:t}),setTimeout(function(){S(null)},1600)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextManipulator",aboutUs:"About Us",mode:a,toggleMode:function(){"light"===a?(r("dark"),p("light"),v("grey"),N("white"),document.body.style.backgroundColor="#030726",j("Dark mode enabled","success")):(r("light"),p("dark"),v("white"),N("black"),j("Light mode enabled","success"),document.body.style.backgroundColor="white")},text:d}),l.a.createElement(u,{alert:w}),l.a.createElement("div",{className:"container"},l.a.createElement(i,{heading:"Enter the text below: ",textArea:h,text:y})),l.a.createElement(s,{text:y}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.e5d2d802.chunk.js.map