_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"2qu3":function(e,t,a){"use strict";var n=a("oI91"),r=a("/GRZ"),o=a("i2R6");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(i)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.__esModule=!0,t.default=void 0;var u,d=(u=a("q1tI"))&&u.__esModule?u:{default:u},f=a("8L3h"),m=a("jwwS");var p=[],b=[],h=!1;function v(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}function g(e){var t={loading:!1,loaded:{},error:null},a=[];try{Object.keys(e).forEach((function(n){var r=v(e[n]);r.loading?t.loading=!0:(t.loaded[n]=r.loaded,t.error=r.error),a.push(r.promise),r.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(a).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function N(e,t){var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function r(){if(!n){var t=new w(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof a.webpack){var o=a.webpack();b.push((function(e){var t,a=c(o);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return r()}}catch(s){a.e(s)}finally{a.f()}}))}var s=function(e,t){r();var o=d.default.useContext(m.LoadableContext),s=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(a.modules)&&a.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return s.loading||s.error?d.default.createElement(a.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?a.render(s.loaded,e):null}),[e,s])};return s.preload=function(){return r()},s.displayName="LoadableComponent",d.default.forwardRef(s)}var w=function(){function e(t,a){r(this,e),this._loadFn=t,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;t.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return N(v,e)}function j(e,t){for(var a=[];e.length;){var n=e.pop();a.push(n(t))}return Promise.all(a).then((function(){if(e.length)return j(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return N(g,e)},O.preloadAll=function(){return new Promise((function(e,t){j(p).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var a=function(){return h=!0,t()};j(b,e).then(a,a)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var _=O;t.default=_},"79j5":function(e,t){e.exports="/_next/static/images/about-1-12bdb63e7d990275312aab8d1e24d6ef.jpg"},Aiwm:function(e,t){e.exports="/_next/static/images/about-3-ab003473c501638811bb2b08b73f1d13.png"},Ix5F:function(e,t,a){"use strict";var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),s=a("md7G"),i=a("foSv"),c=a("q1tI"),l=a.n(c),u=a("YFqc"),d=a.n(u),f=l.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}c.Component},Juyh:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),s=a("md7G"),i=a("foSv"),c=a("q1tI"),l=a.n(c),u=a("zCU4"),d=(a("Ix5F"),a("JX7q")),f=a("rePB"),m=a("YFqc"),p=a.n(m),b=(a("ZXap"),l.a.createElement);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var v=function(e){Object(o.a)(s,e);var t=h(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),Object(f.a)(Object(d.a)(e),"bannerHeadingData",{bannerHeadingTitle:"We help business succeed and grow to their true potential",knowMoreLink:"",enquireNowLink:"/service-details"}),Object(f.a)(Object(d.a)(e),"openTabSection",(function(e,t){var a,n,r;for(n=document.getElementsByClassName("tabs_item"),a=0;a<n.length;a++)n[a].classList.remove("fadeInUp"),n[a].style.display="none";for(r=document.getElementsByTagName("li"),a=0;a<r.length;a++)r[a].className=r[a].className.replace("current","");document.getElementById(t).style.display="block",document.getElementById(t).className+=" fadeInUp animated",e.currentTarget.className+="current"})),e}return Object(r.a)(s,[{key:"render",value:function(){return b("section",{className:"about-section about-section-container bor-tb"},b("div",{className:""},b("div",{className:"services-details header-padding"},b("div",{className:"section-title"},b("h2",null,"Scale Up"),b("div",{className:"bar"}),b("section",{className:"tech-section"},b("div",{className:""},b("div",{className:"row align-items-center"},b("div",{className:"col-lg-6"},b("div",{className:"tech-content"},b("h3",null,"We help business succeed and grow to their true potential"),b("div",{className:"bar"}),b("div",{className:"tech-btn"},b(p.a,{href:"#"},b("a",{className:"default-btn"},"Enquire Now"))))),b("div",{className:"col-lg-6 p-0"},b("div",{className:"about-image-1"},b("img",{src:a("79j5"),alt:"image"}))))))))),b("div",{className:"story-behind-scaleUp"},b("section",{className:"about-section bor-tb"},b("div",{className:"container-fluid"},b("div",{className:"row"},b("div",{className:"col-lg-6"},b("div",{className:"about-tab"},b("h2",null,"story-behind-scaleUp-content"),b("div",{className:"bar"}),b("p",null,"Entrepreneurship & business are magnets for people with unique minds, ideas & convictions, often armed with key traits of people, dedication and drive to succeed. The thought of controlling your own destiny - to do what you want, and your way is a huge attractive prospect."),b("p",null,'But there is a noteworthy catch. Not everyone is equipped with deep knowledge & understanding about what it takes to succeed. And this limits the true potential of the business to succeed. As Jim Collins quipped, "Good is often the enemy of great"'),b("p",null,"On the other hand great (& successful) business combine thoughtful strategy, systematic implementation-execution and organizational accountability to drive business improvement, profile growth and success. And this is a result of experience! "),b("p",null,"The passion for sharing decades of business understanding, knowledge and hands-on experience to make business grow & succeed was the driving force behind the start of ScaleUp."),b("p",null,'Our Vision is "To Empower business and individuals with ideas, tools and support to make them more successful"'),b("p",null,"And we will contribute to the success of as many business and individuals, as we can! And cherish the creation of a prosperous future."))),b("div",{className:"col-lg-6 p-0"},b("div",{className:"about-image-2"},b("img",{src:a("TD21"),alt:"image"}))))))),b("div",{className:"about-founder-container"},b("section",{className:"about-section bor-tb"},b("div",{className:"container-fluid"},b("div",{className:"row"},b("div",{className:"col-lg-6 p-0"},b("div",{className:"about-image-3"},b("img",{src:a("Aiwm"),alt:"image",width:"658px",height:"735px"}))),b("div",{className:"col-lg-6"},b("div",{className:"about-tab"},b("h2",null,"About Our Founder"),b("div",{className:"bar"}),b("p",null,"Uday Bhat is a leader with a successful track record of over 28 years in making business win!"),b("p",null,"Uday's experience is the result of the leadership challenges he has handled in three world class organization: Samsung Electronics, Hewlett Packard & Xerox"),b("p",null,"His leadership roles have been success stories in both B2C & B2B business - be it setting up new business, turning around business into profitable ones or scaling up existing business into multi million, profitable ventures."),b("p",null,"Business success & scale is the result of merging the speed, energy, enthusiasm of an entrepreneur with the systems & processes of Corporate system - a philosophy that has been the cornerstone of Uday's leadership"),b("p",null,"These experiences and learnings are the keys to help & support start ups, entrepreneurs and companies wade through this volatile, uncertain, complex and ambiguous business world! and Win!"))))))),b("div",{className:"container vision-mission-values"},b("div",{class:"vision-mission-values-content"},b("h3",null,"Our Vision"),b("p",null,"To motivate, enable and support business for growth and create a prosperous future")),b("div",{class:"vision-mission-values-content"},b("h3",null,"Our Mission"),b("p",null,"Empower business with our ideas, tools and support to make them more successful and prosperous")),b("div",{class:"core-values"},b("h3",null,"Our Core Values"),b("p",null,"Our work would be guided & recognized by our philosophy of trust, integrity and respect."),b("ul",null,b("li",null,b("strong",null,"Common beliefs")," - We work with business, who share our beliefs and not just do business because it has to be done."),b("li",null,b("strong",null,"Simplicity")," - Our business approach would be simple, straight forward and impactful."),b("li",null,b("strong",null,"Empowerment")," - Our knowledge and tools would Empower our customers to turn them into growth engines. We would be partners with them in this journey."),b("li",null,b("strong",null,"Social impact")," - We would strive to create success stories with as many business as possible and create a multiplier positive impact on the society.")))))}}]),s}(c.Component),g=(a("EH2W"),a("LGLd"),a("v6Hh")),y=l.a.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var w=function(e){Object(o.a)(a,e);var t=N(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return y(l.a.Fragment,null,y(u.a,null),y(v,null),y(g.a,null))}}]),a}(c.Component);t.default=w},ZXap:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("YFqc"),r.a.createElement},a6RD:function(e,t,a){"use strict";var n=a("oI91");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var a=s.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,a){return e.render(a,t)}),e.modules)){a=s.default.Map;var r={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=r}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,c(a,n);delete n.ssr}return a(n)};i(a("q1tI"));var s=i(a("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,a){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=r},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},rB5V:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a("Juyh")}])},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zCU4:function(e,t,a){"use strict";var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),s=a("Ji7U"),i=a("md7G"),c=a("foSv"),l=a("rePB"),u=a("q1tI"),d=a.n(u),f=a("0Yqi"),m=a("YFqc"),p=a.n(m),b=d.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var v=function(e){Object(s.a)(a,e);var t=h(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(o.a)(e),"state",{modal:!1}),Object(l.a)(Object(o.a)(e),"closeModal",(function(){e.props.onClick(e.state.modal)})),e}return Object(r.a)(a,[{key:"render",value:function(){return b(d.a.Fragment,null,b("div",{className:"sidebar-modal ".concat(this.props.active)},b("div",{className:"sidebar-modal-inner"},b("div",{className:"sidebar-about-area"},b("div",{className:"title"},b("h2",null,"About Us"),b("p",null,"We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration."))),b("div",{className:"sidebar-contact-feed"},b("h2",null,"Contact"),b("div",{className:"contact-form"},b("form",{id:"contactForm"},b("div",{className:"row"},b("div",{className:"col-lg-6 col-md-6"},b("div",{className:"form-group"},b("input",{type:"text",name:"name",id:"name",className:"form-control",placeholder:"Your Name",required:!0}))),b("div",{className:"col-lg-6 col-md-6"},b("div",{className:"form-group"},b("input",{type:"email",name:"email",id:"email",className:"form-control",placeholder:"Your Email",required:!0}))),b("div",{className:"col-lg-6 col-md-6"},b("div",{className:"form-group"},b("input",{type:"text",name:"phone_number",id:"phone_number",className:"form-control",placeholder:"Your Phone",required:!0}))),b("div",{className:"col-lg-6 col-md-6"},b("div",{className:"form-group"},b("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",placeholder:"Your Subject",required:!0}))),b("div",{className:"col-lg-12 col-md-12"},b("div",{className:"form-group"},b("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"6",required:!0,placeholder:"Your Message"}))),b("div",{className:"col-lg-12 col-md-12"},b("div",{className:"send-btn text-center"},b("button",{type:"submit",className:"btn send-btn-one"},"Send Message"))))))),b("div",{className:"sidebar-contact-area"},b("div",{className:"contact-info"},b("div",{className:"contact-info-content"},b("h2",null,b("a",{className:"pnumber"},"+91 9810065985"),b("span",{className:"or"},"OR"),b("a",{className:"email"},"info@scaleup-inc.com")),b("ul",{className:"social"},b("li",null,b(p.a,{href:"#"},b("a",{target:"_blank"},b("i",{className:"flaticon-facebook"})))),b("li",null,b(p.a,{href:"#"},b("a",{target:"_blank"},b("i",{className:"flaticon-twitter"})))),b("li",null,b(p.a,{href:"#"},b("a",{target:"_blank"},b("i",{className:"flaticon-instagram"})))),b("li",null,b(p.a,{href:"#"},b("a",{target:"_blank"},b("i",{className:"flaticon-pinterest"})))))))),b("span",{onClick:this.closeModal,className:"close-btn sidebar-modal-close-btn"},b("i",{className:"flaticon-cancel"})))))}}]),a}(u.Component),g=d.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var N=function(e){Object(s.a)(i,e);var t=y(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(l.a)(Object(o.a)(e),"state",{sidebarModal:!1}),Object(l.a)(Object(o.a)(e),"toggleModal",(function(){e.setState({sidebarModal:!e.state.sidebarModal})})),Object(l.a)(Object(o.a)(e),"state",{searchForm:!1}),Object(l.a)(Object(o.a)(e),"handleSearchForm",(function(){e.setState((function(e){return{searchForm:!e.searchForm}}))})),Object(l.a)(Object(o.a)(e),"_isMounted",!1),Object(l.a)(Object(o.a)(e),"state",{display:!1,collapsed:!0}),Object(l.a)(Object(o.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){this.props.products;var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",n=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return g(d.a.Fragment,null,g("div",{id:"navbar",className:"navbar-area fixed-top bg-white"},g("nav",{className:"navbar navbar-expand-md"},g("div",{className:"container"},g(f.a,{href:"/"},g("a",{className:"navbar-brand"},g("img",{src:a("Cc5c"),alt:"logo"}))),g("button",{onClick:this.toggleNavbar,className:n,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},g("span",{className:"icon-bar top-bar"}),g("span",{className:"icon-bar middle-bar"}),g("span",{className:"icon-bar bottom-bar"})),g("div",{className:t,id:"navbarSupportedContent"},g("ul",{className:"navbar-nav"},g("li",{className:"nav-item"},g(f.a,{href:"/services",activeClassName:"active"},g("a",{className:"nav-link"},"Our Services"))),g("li",{className:"nav-item"},g(f.a,{href:"/case-studies",activeClassName:"active"},g("a",{className:"nav-link"},"Case Studies"))),g("li",{className:"nav-item"},g(f.a,{href:"/innovation-page",activeClassName:"active"},g("a",{className:"nav-link"},"Growth Tips"))),g("li",{className:"nav-item"},g(f.a,{href:"/blog",activeClassName:"active"},g("a",{className:"nav-link"},"Blogs"))),g("li",{className:"nav-item"},g(f.a,{href:"/about",activeClassName:"active"},g("a",{className:"nav-link"},"About"))),g("li",{className:"nav-item"},g(f.a,{href:"/contact",activeClassName:"active"},g("a",{className:"nav-link"},"Contact")))),g("div",{className:"others-options"},g("div",{className:"burger-menu",onClick:this.toggleModal},g("span",null),g("span",null),g("span",null))))))),g(v,{onClick:this.toggleModal,active:this.state.sidebarModal?"active":""}))}}]),i}(u.Component);t.a=N}},[["rB5V",0,2,1,3,11]]]);