(this["webpackJsonpjs-band-hw-task-6"]=this["webpackJsonpjs-band-hw-task-6"]||[]).push([[0],{12:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(7),l=a(10),s=a(2),u=a(3),d=a(5),h=a(4),m=a(1),p=a(6);var v=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"TODOList"))},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={searchText:""},e.onSearchChange=e.onSearchChange.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onSearchChange",value:function(e){var t=this.props.onSearchChange,a=e.target.value;this.setState({searchText:a}),t(a)}},{key:"render",value:function(){var e=this.state.searchText;return r.a.createElement("div",{className:"filter__item"},r.a.createElement("input",{type:"search",className:"filter__search",placeholder:"search by title",onChange:this.onSearchChange,value:e}))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={priority:"all",completed:"all"},e.onFilterPChange=e.onFilterPChange.bind(Object(m.a)(e)),e.onFilterCChange=e.onFilterCChange.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onFilterPChange",value:function(e){var t=this.props.onFilterPChange,a=e.target.value;this.setState({priority:a}),t(a)}},{key:"onFilterCChange",value:function(e){var t=this.props.onFilterCChange,a=e.target.value;this.setState({completed:a}),t(a)}},{key:"render",value:function(){var e=this.state,t=e.priority,a=e.completed;return r.a.createElement("div",null,r.a.createElement("div",{className:"filter__item"},r.a.createElement("select",{className:"select-status select",key:"status",onChange:this.onFilterCChange,value:a},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"open"},"open"),r.a.createElement("option",{value:"done"},"done"))),r.a.createElement("div",{className:"filter__item"},r.a.createElement("select",{className:"select-priority select",key:"priority",onChange:this.onFilterPChange,value:t},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"normal"}," normal"),r.a.createElement("option",{value:"low"},"low"))),r.a.createElement("div",{className:"filter__item"},r.a.createElement("button",{className:"filter__create-btn btn",type:"button"},"Create")))}}]),t}(n.Component),g=a(11);var y=function(e){var t=e.title,a=e.description,n=e.priority,o=e.done,i=e.showMenu,c=e.onToggleOpen,l=e.onToggleDone,s=e.onEdited,u=e.onDeleted,d="todo-list-item",h=o?"":" display_none",m=i?"":" display_none";return o&&(d+=" done"),r.a.createElement("div",{className:d},r.a.createElement("div",{className:"todo__check ".concat(h)},"\u2714"),r.a.createElement("h3",{className:"todo__title"},t),r.a.createElement("div",{className:"todo__description"},a),r.a.createElement("div",{className:"todo__footer"},r.a.createElement("div",{className:"todo__priority"},n),r.a.createElement("div",{className:"todo__button btn",onClick:c},"...",r.a.createElement("div",{className:"todo__menu ".concat(m)},r.a.createElement("div",{className:"todo__menu-item task-done",onClick:l},"done"),r.a.createElement("div",{className:"todo__menu-item task-edit",onClick:s},"edit"),r.a.createElement("div",{className:"todo__menu-item task-delete",onClick:u},"delete")))))};var C=function(e){var t=e.todos,a=e.onDeleted,n=e.onToggleDone,o=t.map((function(e){var t=e.id,o=Object(g.a)(e,["id"]);return r.a.createElement("div",{key:t},r.a.createElement(y,Object.assign({},o,{onDeleted:function(){return a(t)},onToggleDone:function(){return n(t)}})))}));return r.a.createElement("div",{className:"todo-list"},o)};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).setId=0,e.state={todoData:[e.createTodoItem("test","test","normal"),e.createTodoItem("Todo","test","high")],priority:"all",completed:"all",searchText:"",showMenu:!1},e.deleteItem=e.deleteItem.bind(Object(m.a)(e)),e.AddItem=e.AddItem.bind(Object(m.a)(e)),e.onSearchChange=e.onSearchChange.bind(Object(m.a)(e)),e.onFilterPChange=e.onFilterPChange.bind(Object(m.a)(e)),e.onFilterCChange=e.onFilterCChange.bind(Object(m.a)(e)),e.onToggleDone=e.onToggleDone.bind(Object(m.a)(e)),e.search=e.search.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onSearchChange",value:function(e){this.setState({searchText:e})}},{key:"onFilterPChange",value:function(e){this.setState({priority:e})}},{key:"onFilterCChange",value:function(e){this.setState({completed:e})}},{key:"onToggleDone",value:function(e){this.setState((function(t){var a=t.todoData,n=a.findIndex((function(t){return t.id===e})),r=a[n],o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,{done:!r.done});return{todoData:[].concat(Object(c.a)(a.slice(0,n)),[o],Object(c.a)(a.slice(n+1)))}}))}},{key:"AddItem",value:function(e,t,a){var n=this.createTodoItem(e,t,a);this.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(c.a)(t),[n])}}))}},{key:"deleteItem",value:function(e){this.setState((function(t){var a=t.todoData,n=a.findIndex((function(t){return t.id===e})),r=a.slice(0,n),o=a.slice(n+1);return{todoData:[].concat(Object(c.a)(r),Object(c.a)(o))}}))}},{key:"createTodoItem",value:function(e,t,a){return{title:e,description:t,priority:a,done:!1,id:this.setId++}}},{key:"search",value:function(e,t){return 0===t?e:e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filterByPriority",value:function(e,t){switch(t){case"all":return e;case"high":case"normal":case"low":return e.filter((function(e){return e.priority===t}));default:return e}}},{key:"filterByCompleted",value:function(e,t){switch(t){case"all":return e;case"done":return e.filter((function(e){return e.done}));case"open":return e.filter((function(e){return!e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.searchText,n=e.priority,o=e.completed,i=this.filterByPriority(this.search(t,a),n),c=this.filterByCompleted(i,o);return r.a.createElement("div",{className:"wrapper"},r.a.createElement(v,null),r.a.createElement("main",{className:"content"},r.a.createElement(f,{onSearchChange:this.onSearchChange}),r.a.createElement(b,{priority:n,completed:o,onFilterPChange:this.onFilterPChange,onFilterCChange:this.onFilterCChange})),r.a.createElement(C,{todos:c,onDeleted:this.deleteItem,onToggleDone:this.onToggleDone}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.89123436.chunk.js.map