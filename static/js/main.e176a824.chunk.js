(this["webpackJsonp19-gt-employee-directory"]=this["webpackJsonp19-gt-employee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),o=(a(22),a(12)),c=a(13),m=a(16),i=a(15),u=(a(23),{myJumbotron:{backgroundColor:"#AA9ABA",color:"white"}}),h=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:u.myJumbotron},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Search or filter through the directory to see all employees."))))},d=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{class:"table",style:{tableStyle:{text:"center"}}.textStyle},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID Picture"),r.a.createElement("th",{scope:"col"}," Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.src,alt:e.firstName})),r.a.createElement("td",null,e.firstName," ",e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone)))))},p=a(14),y=a.n(p),E=function(){return y.a.get("https://randomuser.me/api/?results=25")},f={buttonsStyle:{backgroundColor:"pink",border:"2px solid #AA9ABA",color:"black",marginTop:"5px"},inputStyle:{width:"50%",marginLeft:"25%"}};var b=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search By Name"),r.a.createElement("input",{style:f.inputStyle,value:e.search,onChange:e.inputChanged,name:"search",type:"text",className:"form-control",id:"search"}),r.a.createElement("button",{style:f.buttonsStyle,type:"submit",className:"btn btn-success",onSubmit:e.handleSubmit},"Search"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",style:f.buttonsStyle,className:"btn btn-success",onClick:e.sortByName},"Sort By Last Name")))},g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[],sorted:"ascending",searchedEmployees:[],search:""},e.generateEmployees=function(){E().then((function(t){return e.setState({users:t.data.results,searchedEmployees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.value,n=e.state.users.filter((function(e){var t=e.name,n=t.first,r=t.last;return"".concat(n," ").concat(r).toLowerCase().includes(a.toLowerCase().trim())}));e.setState({searchedEmployees:n,search:a})},e.handleSortByName=function(){var t=e.state.users;if("ascending"===e.state.sorted){var a=t.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({users:a,sorted:"descending"})}else{var n=t.sort((function(e,t){return e.name.last>t.name.last?-1:1}));e.setState({users:n,sorted:"ascending"})}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generateEmployees()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(b,{sortByName:this.handleSortByName,inputChanged:this.handleInputChange}),this.state.searchedEmployees.map((function(e){return r.a.createElement(d,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.large})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e176a824.chunk.js.map