(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"0Yqi":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var o=n("nOHt"),a=n("YFqc"),c=n.n(a),l=n("q1tI"),i=n.n(l),s=i.a.createElement;t.a=Object(o.withRouter)((function(e){var t=e.router,n=e.children,o=r(e,["router","children"]),a=l.Children.only(n),u=a.props.className||"";return t.pathname===o.href&&o.activeClassName&&(u="".concat(u," ").concat(o.activeClassName).trim()),delete o.activeClassName,s(c.a,o,i.a.cloneElement(a,{className:u}))}))},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},Cc5c:function(e,t){e.exports="/_next/static/images/logo-d78e6355605cf2d2e92506c9873489e6.png"},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),l=n("elyg"),i=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],m=(0,i.useRouter)(),v=m&&m.pathname||"/",b=c.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,l.resolveHref)(v,e.as):a||o}}),[v,e.href,e.as]),h=b.href,y=b.as;c.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,l.isLocalURL)(h)&&!f[h+"%"+y])return p(a,(function(){d(m,h,y)}))}),[t,a,h,y,m]);var g=e.children,N=e.replace,w=e.shallow,O=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var S=c.Children.only(g),j={ref:function(e){e&&s(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,h,y,N,w,O)}};return t&&(j.onMouseEnter=function(e){(0,l.isLocalURL)(h)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),d(m,h,y,{priority:!0}))}),(e.passHref||"a"===S.type&&!("href"in S.props))&&(j.href=(0,l.addBasePath)((0,l.addLocale)(y,m&&m.locale,m&&m.defaultLocale))),c.default.cloneElement(S,j)};t.default=m},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}n.d(t,"a",(function(){return c}));var a=n("JX7q");function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},v6Hh:function(e,t,n){"use strict";var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),l=n("foSv"),i=n("q1tI"),s=n.n(i),u=n("YFqc"),f=n.n(u),p=s.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(e){Object(a.a)(n,e);var t=d(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=(new Date).getFullYear();return p(s.a.Fragment,null,p("footer",{className:"footer-section pt-100 pb-70"},p("div",{className:"container"},p("div",{className:"subscribe-area"},p("div",{className:"row align-items-center"},p("div",{className:"col-lg-6 col-md-6"},p("div",{className:"subscribe-content"},p("h2",null,"Think We Can Help You?"))),p("div",{className:"col-lg-6 col-md-6 newsletter-form-container"},p("form",{className:"newsletter-form"},p("button",{type:"submit"},"Enquire Now"))))),p("div",{className:"row"},p("div",{className:"col-lg-4 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"About Us")),p("p",null,"Our work would be guided & recognized by our philosophy of trust, integrity and respect."),p("ul",{className:"footer-social"},p("li",null,p(f.a,{href:"#"},p("a",{target:"_blank"},p("i",{className:"flaticon-facebook"})))),p("li",null,p(f.a,{href:"#"},p("a",{target:"_blank"},p("i",{className:"flaticon-twitter"})))),p("li",null,p(f.a,{href:"#"},p("a",{target:"_blank"},p("i",{className:"flaticon-pinterest"})))),p("li",null,p(f.a,{href:"#"},p("a",{target:"_blank"},p("i",{className:"flaticon-instagram"}))))))),p("div",{className:"col-lg-4 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"Important Links")),p("ul",{className:"footer-quick-links"},p("li",null,p(f.a,{href:"/about"},p("a",null,"About Us"))),p("li",null,p(f.a,{href:"/innovation-page"},p("a",null,"Growth Tips"))),p("li",null,p(f.a,{href:"/services"},p("a",null,"Services"))),p("li",null,p(f.a,{href:"/blog"},p("a",null,"Case Studies"))),p("li",null,p(f.a,{href:"/contact"},p("a",null,"Contact")))))),p("div",{className:"col-lg-4 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"Contact")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-phone-call"}),p("h3",null,"Phone"),p("span",null,"+91 9810065985")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-envelope"}),p("h3",null,"Email"),p("span",null,"info@scaleup-inc.com")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-pin"}),p("h3",null,"Address"),p("span",null,"Scaleupinc Services Pvt Ltd,"),p("br",null),p("span",null,"B24, Sarita Vihar,"),p("br",null),p("span",null,"New Delhi 110076"),p("br",null),p("span",null,"India")))))),p("div",{className:"lines"},p("div",{className:"line"}),p("div",{className:"line"}),p("div",{className:"line"}))),p("div",{className:"copyright-area"},p("div",{className:"container"},p("div",{className:"copyright-area-content"},p("div",{className:"row align-items-center"},p("div",{className:"col-lg-6 col-md-6"},p("p",null,"Copyright @",e," Scaleupinc.")))))))}}]),n}(i.Component);t.a=m},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);