_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var o=n("zoAU"),r=n("7KCV");e.__esModule=!0,e.default=void 0;var a,i=r(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(t,e){var n=a||(l?a=new l((function(t){t.forEach((function(t){if(s.has(t.target)){var e=s.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),s.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),s.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}s.delete(t)}):function(){}};function d(t,e,n,o){(0,c.isLocalURL)(e)&&(t.prefetch(e,n,o).catch((function(t){0})),f[e+"%"+n]=!0)}var m=function(t){var e=!1!==t.prefetch,n=i.default.useState(),r=o(n,2),a=r[0],s=r[1],m=(0,u.useRouter)(),y=m&&m.pathname||"/",b=i.default.useMemo((function(){var e=(0,c.resolveHref)(y,t.href,!0),n=o(e,2),r=n[0],a=n[1];return{href:r,as:t.as?(0,c.resolveHref)(y,t.as):a||r}}),[y,t.href,t.as]),v=b.href,h=b.as;i.default.useEffect((function(){if(e&&l&&a&&a.tagName&&(0,c.isLocalURL)(v)&&!f[v+"%"+h])return p(a,(function(){d(m,v,h)}))}),[e,a,v,h,m]);var g=t.children,w=t.replace,O=t.shallow,_=t.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var N=i.Children.only(g),j={ref:function(t){t&&s(t),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(t):"object"===typeof N.ref&&(N.ref.current=t))},onClick:function(t){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(t),t.defaultPrevented||function(t,e,n,o,r,a,i){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==i&&(i=o.indexOf("#")<0),e[r?"replace":"push"](n,o,{shallow:a}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}(t,m,v,h,w,O,_)}};return e&&(j.onMouseEnter=function(t){(0,c.isLocalURL)(v)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(t),d(m,v,h,{priority:!0}))}),(t.passHref||"a"===N.type&&!("href"in N.props))&&(j.href=(0,c.addBasePath)((0,c.addLocale)(h,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(N,j)};e.default=m},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},grO0:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},md7G:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}n.d(e,"a",(function(){return i}));var a=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},"w/X4":function(t,e,n){"use strict";n.r(e);var o=n("1OyB"),r=n("vuIU"),a=n("JX7q"),i=n("Ji7U"),c=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("q1tI"),f=n.n(l),p=n("YFqc"),d=n.n(p),m=f.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var b=function(t){Object(i.a)(n,t);var e=y(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i)),Object(s.a)(Object(a.a)(t),"state",{days:"",hours:"",minutes:"",seconds:""}),Object(s.a)(Object(a.a)(t),"commingSoonTime",(function(){var e=new Date("August 23, 2022 17:00:00 PDT"),n=Date.parse(e)/1e3,o=new Date,r=n-Date.parse(o)/1e3,a=Math.floor(r/86400),i=Math.floor((r-86400*a)/3600),c=Math.floor((r-86400*a-3600*i)/60),u=Math.floor(r-86400*a-3600*i-60*c);i<"10"&&(i="0"+i),c<"10"&&(c="0"+c),u<"10"&&(u="0"+u),t.setState({days:a,hours:i,minutes:c,seconds:u})})),Object(s.a)(Object(a.a)(t),"onSubmit",(function(t){t.preventDefault()})),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return m("div",{className:"coming-soon-area"},m("div",{className:"d-table"},m("div",{className:"d-table-cell"},m("div",{className:"container"},m("div",{className:"coming-soon-content"},m("h1",null,"Coming Soon"),m("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."),m("form",null,m("input",{type:"email",className:"email-input",placeholder:"Enter email address",name:"email",required:!0}),m("button",{type:"submit",className:"submit-btn"},"Submit")),m("div",{id:"timer"},m("div",{id:"days"},this.state.days," ",m("span",null,"Days")),m("div",{id:"hours"},this.state.hours," ",m("span",null,"Hours")),m("div",{id:"minutes"},this.state.minutes," ",m("span",null,"Minutes")),m("div",{id:"seconds"},this.state.seconds," ",m("span",null,"Seconds"))))))),m("ul",{className:"social-list"},m("li",{className:"list-heading"},"Follow us for update:"),m("li",null,m(d.a,{href:"#"},m("a",{className:"facebook",target:"_blank"},m("i",{className:"flaticon-facebook"})))),m("li",null,m(d.a,{href:"#"},m("a",{className:"twitter",target:"_blank"},m("i",{className:"flaticon-twitter"})))),m("li",null,m(d.a,{href:"#"},m("a",{className:"linkedin",target:"_blank"},m("i",{className:"flaticon-pinterest"})))),m("li",null,m(d.a,{href:"#"},m("a",{className:"instagram",target:"_blank"},m("i",{className:"flaticon-instagram"}))))))}}]),n}(l.Component);e.default=b}},[["grO0",0,1,2]]]);