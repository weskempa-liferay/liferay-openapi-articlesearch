(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{131:function(e,t,a){e.exports=a(267)},136:function(e,t,a){},168:function(e,t){},170:function(e,t){},181:function(e,t){},183:function(e,t){},210:function(e,t){},212:function(e,t){},213:function(e,t){},219:function(e,t){},221:function(e,t){},239:function(e,t){},242:function(e,t){},258:function(e,t){},261:function(e,t){},266:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(129),l=a.n(c),o=(a(136),a(15)),i=a.n(o),s=a(40),u=a(35),m=a(36),d=a(37),f=a(39),v=a(38),h=a(130),E=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleToggle=function(){},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},r.a.createElement("b",null,"Liferay OpenAPI")," > Custom React Article Dashboard"),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"}))}}]),a}(n.Component),p=function(e){var t=e.articles;return r.a.createElement("div",null,t.reverse().map((function(e){return r.a.createElement("div",{className:"card",key:e.key},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.title," (",e.id,")"),r.a.createElement("div",{className:"card-text"},e.contentFields.map((function(e,t){return r.a.createElement("span",{key:"{index}",dangerouslySetInnerHTML:{__html:e.value.data}})})))))})))},b=a(41),y=a.n(b),g=y.a.ExcelFile,N=y.a.ExcelFile.ExcelSheet,w=y.a.ExcelFile.ExcelColumn,S=function(e){var t=e.articles;return r.a.createElement(g,{filename:"Articles",element:r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-block btn-outline-primary"},"Export Data")},r.a.createElement(N,{data:t,name:"Articles"},r.a.createElement(w,{label:"Article ID",value:"id"}),r.a.createElement(w,{label:"Title",value:"title"}),r.a.createElement(w,{label:"Friendly URL",value:"friendlyUrlPath"}),r.a.createElement(w,{label:"Content",value:"bodyContent"}),r.a.createElement(w,{label:"Create Date",numFmt:"m/dd/yy H:MM:SS",value:"dateCreated"}),r.a.createElement(w,{label:"Modified Date",numFmt:"m/dd/yy H:MM:SS",value:"dateModified"})))},x=(a(266),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.state={articles:[],statusMessage:"",firstLoad:!0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="";return!0!==this.state.firstLoad&&""!==this.state.statusMessage?e="Article not found":0===this.state.articles.length&&(e="Search for articles"),r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"my-0 font-weight-normal center"},"Article Lookup")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Site: SecureKey Portal")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Content Structure Type:"),r.a.createElement("select",{className:"form-control",name:"contentStuctureId"},r.a.createElement("option",{value:"99155"},"Basic Website Content"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Article Language:"),r.a.createElement("select",{className:"form-control",name:"journalLanguageId"},r.a.createElement("option",{value:"en-US"},"en-US"),r.a.createElement("option",{value:"fr-CA"},"fr-CA"))),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-block btn-outline-primary",onClick:this.props.getNext},"Request Article")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"my-0 font-weight-normal center"},"Options")),r.a.createElement("div",{className:"card-body"},r.a.createElement(S,{articles:this.state.articles})))),r.a.createElement("div",{className:"col-sm-8"},e.length>0?r.a.createElement("div",{className:"card center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("i",null,e))):r.a.createElement(p,{articles:this.state.articles})))))}},{key:"loadSites",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("loading");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadStructures",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,l,o,s,u=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(e){var t=e.get("journalLanguageId");return new Headers({Accept:"application/json",Authorization:"Basic "+h.a.encode("test:test"),"Accept-Language":t})},o=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.preventDefault(),a=new FormData(t.target),this.setState({firstLoad:!1}),n=a.get("contentStuctureId"),r=s(a),"",c="/o/headless-delivery/v1.0/content-structures/"+n+"/structured-contents",l={method:"GET",headers:r,redirect:"follow"},e.next=12,fetch(c,l,{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){e.exception?u.setState({statusMessage:e.exception}):(e.items.map((function(e,t){return e.contentFields.map((function(t,a){return e.bodyContent=o(t.value.data)}))})),u.setState({articles:e.items}))})).catch(console.log);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.d02ddfa9.chunk.js.map