(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"0Yqi":function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var r=n("nOHt"),a=n("YFqc"),l=n.n(a),c=n("q1tI"),i=n.n(c),s=i.a.createElement;t.a=Object(r.withRouter)((function(e){var t=e.router,n=e.children,r=o(e,["router","children"]),a=c.Children.only(n),u=a.props.className||"";return t.pathname===r.href&&r.activeClassName&&(u="".concat(u," ").concat(r.activeClassName).trim()),delete r.activeClassName,s(l.a,r,i.a.cloneElement(a,{className:u}))}))},"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},Cc5c:function(e,t){e.exports="/_next/static/images/logo-d78e6355605cf2d2e92506c9873489e6.png"},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,l=r(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var m=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,o){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=l.default.useState(),r=o(n,2),a=r[0],s=r[1],d=(0,i.useRouter)(),v=d&&d.pathname||"/",y=l.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,c.resolveHref)(v,e.as):a||r}}),[v,e.href,e.as]),h=y.href,b=y.as;l.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+b])return m(a,(function(){p(d,h,b)}))}),[t,a,h,b,d]);var g=e.children,N=e.replace,w=e.shallow,O=e.scroll;"string"===typeof g&&(g=l.default.createElement("a",null,g));var j=l.Children.only(g),E={ref:function(e){e&&s(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,h,b,N,w,O)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),p(d,h,b,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(b,d&&d.locale,d&&d.defaultLocale))),l.default.cloneElement(j,E)};t.default=d},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return l}));var a=n("JX7q");function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},v6Hh:function(e,t,n){"use strict";var o=n("1OyB"),r=n("vuIU"),a=n("Ji7U"),l=n("md7G"),c=n("foSv"),i=n("q1tI"),s=n.n(i),u=n("YFqc"),f=n.n(u),m=s.a.createElement;function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var d=function(e){Object(a.a)(n,e);var t=p(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=(new Date).getFullYear();return m(s.a.Fragment,null,m("footer",{className:"footer-section pt-100 pb-70"},m("div",{className:"container"},m("div",{className:"subscribe-area"},m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6 col-md-6"},m("div",{className:"subscribe-content"},m("h2",null,"Think We Can Help You?"))),m("div",{className:"col-lg-6 col-md-6"},m("form",{className:"newsletter-form"},m("button",{type:"submit"},"Enquire Now"))))),m("div",{className:"row"},m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"About Us")),m("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"),m("ul",{className:"footer-social"},m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-facebook"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-twitter"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-pinterest"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-instagram"}))))))),m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"Important Links")),m("ul",{className:"footer-quick-links"},m("li",null,m(f.a,{href:"/about"},m("a",null,"About Us"))),m("li",null,m(f.a,{href:"/projects"},m("a",null,"Projects"))),m("li",null,m(f.a,{href:"/services"},m("a",null,"Services"))),m("li",null,m(f.a,{href:"/blog"},m("a",null,"Blog"))),m("li",null,m(f.a,{href:"/contact"},m("a",null,"Contact")))))),m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"Contact")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-phone-call"}),m("h3",null,"Phone"),m("span",null,"+123(456)123")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-envelope"}),m("h3",null,"Email"),m("span",null,"hello@luzon.com")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-pin"}),m("h3",null,"Address"),m("span",null,"32 st Kilda Road, Melbourne VIC, 3004 Australia")))))),m("div",{className:"lines"},m("div",{className:"line"}),m("div",{className:"line"}),m("div",{className:"line"}))),m("div",{className:"copyright-area"},m("div",{className:"container"},m("div",{className:"copyright-area-content"},m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6 col-md-6"},m("p",null,"Copyright @",e," Luzon. All Rights Reserved by ",m(f.a,{href:"https://envytheme.com/"},m("a",{target:"_blank"},"EnvyTheme")))),m("div",{className:"col-lg-6 col-md-6"},m("ul",null,m("li",null,m(f.a,{href:"/terms-conditions"},m("a",null,"Terms & Conditions"))),m("li",null,m(f.a,{href:"/privacy-policy"},m("a",null,"Privacy Policy"))))))))))}}]),n}(i.Component);t.a=d},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))}}]);