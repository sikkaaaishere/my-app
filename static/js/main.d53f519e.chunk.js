(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),s=a.n(r),l=(a(10),a(2)),o=(a(11),a(4)),i=a.n(o),b=a(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(n.useState)("Enter text here"),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"}})}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to Lowercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r("")},children:"Clear"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("i am copy");var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(b.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:"Your text summary"}),Object(b.jsxs)("p",{children:[c.split(" ").length-1," words and ",c.length," characters"]}),Object(b.jsxs)("p",{children:[.008*c.split(" ").length," minutes to read"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:c.length>0?c:"Enter something to preview"})]})]})}d.ProtoTypes={title:i.a.string.isRequired,aboutText:i.a.string.isRequired},d.defaultProps={title:"Set title here",aboutText:"about text here"};var m=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})};var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(l.a)(r,2),o=s[0],i=s[1],j=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="black",j("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(c("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(b.jsx)(m,{alert:o}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsx)(h,{showAlert:j,heading:"Enter the text for analysis",mode:a})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.d53f519e.chunk.js.map