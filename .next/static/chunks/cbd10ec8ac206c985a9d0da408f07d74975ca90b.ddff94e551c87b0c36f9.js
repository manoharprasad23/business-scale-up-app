(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"0Yqi":function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var r=a("nOHt"),o=a("YFqc"),c=a.n(o),l=a("q1tI"),s=a.n(l),i=s.a.createElement;t.a=Object(r.withRouter)((function(e){var t=e.router,a=e.children,r=n(e,["router","children"]),o=l.Children.only(a),u=o.props.className||"";return t.pathname===r.href&&r.activeClassName&&(u="".concat(u," ").concat(r.activeClassName).trim()),delete r.activeClassName,i(c.a,r,s.a.cloneElement(o,{className:u}))}))},"1OyB":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},Cc5c:function(e,t){e.exports="/_next/static/images/logo-d78e6355605cf2d2e92506c9873489e6.png"},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},Ji7U:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("zoAU"),r=a("7KCV");t.__esModule=!0,t.default=void 0;var o,c=r(a("q1tI")),l=a("elyg"),s=a("nOHt"),i=new Map,u=window.IntersectionObserver,f={};var m=function(e,t){var a=o||(u?o=new u((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),i.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,a,n){(0,l.isLocalURL)(t)&&(e.prefetch(t,a,n).catch((function(e){0})),f[t+"%"+a]=!0)}var p=function(e){var t=!1!==e.prefetch,a=c.default.useState(),r=n(a,2),o=r[0],i=r[1],p=(0,s.useRouter)(),v=p&&p.pathname||"/",b=c.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href,!0),a=n(t,2),r=a[0],o=a[1];return{href:r,as:e.as?(0,l.resolveHref)(v,e.as):o||r}}),[v,e.href,e.as]),h=b.href,g=b.as;c.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(h)&&!f[h+"%"+g])return m(o,(function(){d(p,h,g)}))}),[t,o,h,g,p]);var N=e.children,y=e.replace,O=e.shallow,w=e.scroll;"string"===typeof N&&(N=c.default.createElement("a",null,N));var j=c.Children.only(N),k={ref:function(e){e&&i(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,a,n,r,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(a))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[r?"replace":"push"](a,n,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,h,g,y,O,w)}};return t&&(k.onMouseEnter=function(e){(0,l.isLocalURL)(h)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(p,h,g,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(k.href=(0,l.addBasePath)((0,l.addLocale)(g,p&&p.locale,p&&p.defaultLocale))),c.default.cloneElement(j,k)};t.default=p},foSv:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},md7G:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}a.d(t,"a",(function(){return c}));var o=a("JX7q");function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},v6Hh:function(e,t,a){"use strict";var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),c=a("md7G"),l=a("foSv"),s=a("q1tI"),i=a.n(s),u=a("YFqc"),f=a.n(u),m=i.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var p=function(e){Object(o.a)(a,e);var t=d(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return m(i.a.Fragment,null,m("footer",{className:"footer-section pt-100 pb-70"},m("div",{className:"container"},m("div",{className:"subscribe-area"},m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6 col-md-6"},m("div",{className:"subscribe-content"},m("h2",null,"Think We Can Help You?"))),m("div",{className:"col-lg-6 col-md-6 newsletter-form-container"},m("form",{className:"newsletter-form"},m("button",{type:"submit"},"Enquire Now"))))),m("div",{className:"row"},m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"About Us")),m("p",null,"Our work would be guided & recognized by our philosophy of trust, integrity and respect."),m("ul",{className:"footer-social"},m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-facebook"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-twitter"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-pinterest"})))),m("li",null,m(f.a,{href:"#"},m("a",{target:"_blank"},m("i",{className:"flaticon-instagram"}))))))),m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"Important Links")),m("ul",{className:"footer-quick-links"},m("li",null,m(f.a,{href:"/about"},m("a",null,"About Us"))),m("li",null,m(f.a,{href:"/growth-tips"},m("a",null,"Growth Tips"))),m("li",null,m(f.a,{href:"/services"},m("a",null,"Services"))),m("li",null,m(f.a,{href:"/blog"},m("a",null,"Case Studies"))),m("li",null,m(f.a,{href:"/contact"},m("a",null,"Contact")))))),m("div",{className:"col-lg-4 col-md-6 col-sm-6"},m("div",{className:"single-footer-widget"},m("div",{className:"footer-heading"},m("h3",null,"Contact")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-phone-call"}),m("h3",null,"Phone"),m("span",null,"+91 9810065985")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-envelope"}),m("h3",null,"Email"),m("span",null,"info@scaleup-inc.com")),m("div",{className:"footer-info-contact"},m("i",{className:"flaticon-pin"}),m("h3",null,"Address"),m("span",null,"Scaleupinc Services Pvt Ltd,"),m("br",null),m("span",null,"B24, Sarita Vihar,"),m("br",null),m("span",null,"New Delhi 110076")))))),m("div",{className:"lines"},m("div",{className:"line"}),m("div",{className:"line"}),m("div",{className:"line"}))),m("div",{className:"copyright-area"},m("div",{className:"container"},m("div",{className:"copyright-area-content"},m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6 col-md-6"},m("p",null,"Copyright @",e," Scaleupinc.")))))))}}]),a}(s.Component);t.a=p},vuIU:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},zCU4:function(e,t,a){"use strict";var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),c=a("Ji7U"),l=a("md7G"),s=a("foSv"),i=a("rePB"),u=a("q1tI"),f=a.n(u),m=a("0Yqi"),d=a("YFqc"),p=a.n(d),v=f.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var h=function(e){Object(c.a)(a,e);var t=b(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return e=t.call.apply(t,[this].concat(c)),Object(i.a)(Object(o.a)(e),"state",{modal:!1}),Object(i.a)(Object(o.a)(e),"closeModal",(function(){e.props.onClick(e.state.modal)})),e}return Object(r.a)(a,[{key:"render",value:function(){return v(f.a.Fragment,null,v("div",{className:"sidebar-modal ".concat(this.props.active)},v("div",{className:"sidebar-modal-inner"},v("div",{className:"sidebar-about-area"},v("div",{className:"title"},v("h2",null,"About Us"),v("p",null,"We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration."))),v("div",{className:"sidebar-contact-feed"},v("h2",null,"Contact"),v("div",{className:"contact-form"},v("form",{id:"contactForm"},v("div",{className:"row"},v("div",{className:"col-lg-6 col-md-6"},v("div",{className:"form-group"},v("input",{type:"text",name:"name",id:"name",className:"form-control",placeholder:"Your Name",required:!0}))),v("div",{className:"col-lg-6 col-md-6"},v("div",{className:"form-group"},v("input",{type:"email",name:"email",id:"email",className:"form-control",placeholder:"Your Email",required:!0}))),v("div",{className:"col-lg-6 col-md-6"},v("div",{className:"form-group"},v("input",{type:"text",name:"phone_number",id:"phone_number",className:"form-control",placeholder:"Your Phone",required:!0}))),v("div",{className:"col-lg-6 col-md-6"},v("div",{className:"form-group"},v("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",placeholder:"Your Subject",required:!0}))),v("div",{className:"col-lg-12 col-md-12"},v("div",{className:"form-group"},v("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"6",required:!0,placeholder:"Your Message"}))),v("div",{className:"col-lg-12 col-md-12"},v("div",{className:"send-btn text-center"},v("button",{type:"submit",className:"btn send-btn-one"},"Send Message"))))))),v("div",{className:"sidebar-contact-area"},v("div",{className:"contact-info"},v("div",{className:"contact-info-content"},v("h2",null,v("a",{className:"pnumber"},"+91 9810065985"),v("span",{className:"or"},"OR"),v("a",{className:"email"},"info@scaleup-inc.com")),v("ul",{className:"social"},v("li",null,v(p.a,{href:"#"},v("a",{target:"_blank"},v("i",{className:"flaticon-facebook"})))),v("li",null,v(p.a,{href:"#"},v("a",{target:"_blank"},v("i",{className:"flaticon-twitter"})))),v("li",null,v(p.a,{href:"#"},v("a",{target:"_blank"},v("i",{className:"flaticon-instagram"})))),v("li",null,v(p.a,{href:"#"},v("a",{target:"_blank"},v("i",{className:"flaticon-pinterest"})))))))),v("span",{onClick:this.closeModal,className:"close-btn sidebar-modal-close-btn"},v("i",{className:"flaticon-cancel"})))))}}]),a}(u.Component),g=f.a.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var y=function(e){Object(c.a)(l,e);var t=N(l);function l(){var e;Object(n.a)(this,l);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),Object(i.a)(Object(o.a)(e),"state",{sidebarModal:!1}),Object(i.a)(Object(o.a)(e),"toggleModal",(function(){e.setState({sidebarModal:!e.state.sidebarModal})})),Object(i.a)(Object(o.a)(e),"state",{searchForm:!1}),Object(i.a)(Object(o.a)(e),"handleSearchForm",(function(){e.setState((function(e){return{searchForm:!e.searchForm}}))})),Object(i.a)(Object(o.a)(e),"_isMounted",!1),Object(i.a)(Object(o.a)(e),"state",{display:!1,collapsed:!0}),Object(i.a)(Object(o.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(r.a)(l,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){this.props.products;var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",n=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return g(f.a.Fragment,null,g("div",{id:"navbar",className:"navbar-area fixed-top bg-white"},g("nav",{className:"navbar navbar-expand-md"},g("div",{className:"container"},g(m.a,{href:"/"},g("a",{className:"navbar-brand"},g("img",{src:a("Cc5c"),alt:"logo"}))),g("button",{onClick:this.toggleNavbar,className:n,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},g("span",{className:"icon-bar top-bar"}),g("span",{className:"icon-bar middle-bar"}),g("span",{className:"icon-bar bottom-bar"})),g("div",{className:t,id:"navbarSupportedContent"},g("ul",{className:"navbar-nav"},g("li",{className:"nav-item"},g(m.a,{href:"/services",activeClassName:"active"},g("a",{className:"nav-link"},"Our Services"))),g("li",{className:"nav-item"},g(m.a,{href:"/case-studies",activeClassName:"active"},g("a",{className:"nav-link"},"Case Studies"))),g("li",{className:"nav-item"},g(m.a,{href:"/growth-tips",activeClassName:"active"},g("a",{className:"nav-link"},"Growth Tips"))),g("li",{className:"nav-item"},g(m.a,{href:"/blog",activeClassName:"active"},g("a",{className:"nav-link"},"Blogs"))),g("li",{className:"nav-item"},g(m.a,{href:"/about",activeClassName:"active"},g("a",{className:"nav-link"},"About"))),g("li",{className:"nav-item"},g(m.a,{href:"/contact",activeClassName:"active"},g("a",{className:"nav-link"},"Contact")))),g("div",{className:"others-options"},g("div",{className:"burger-menu",onClick:this.toggleModal},g("span",null),g("span",null),g("span",null))))))),g(h,{onClick:this.toggleModal,active:this.state.sidebarModal?"active":""}))}}]),l}(u.Component);t.a=y}}]);