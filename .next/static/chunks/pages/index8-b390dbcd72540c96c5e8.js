_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{FmRj:function(e,a,t){"use strict";var s=t("1OyB"),i=t("vuIU"),n=t("JX7q"),l=t("Ji7U"),c=t("md7G"),r=t("foSv"),o=t("rePB"),m=t("q1tI"),u=t.n(m),d=t("0Yqi"),v=u.a.createElement;function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(r.a)(e);if(a){var i=Object(r.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e){Object(l.a)(c,e);var a=p(c);function c(){var e;Object(s.a)(this,c);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return e=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(n.a)(e),"state",{searchForm:!1}),Object(o.a)(Object(n.a)(e),"handleSearchForm",(function(){e.setState((function(e){return{searchForm:!e.searchForm}}))})),Object(o.a)(Object(n.a)(e),"_isMounted",!1),Object(o.a)(Object(n.a)(e),"state",{display:!1,collapsed:!0}),Object(o.a)(Object(n.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){this.props.products;var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",s=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return v(u.a.Fragment,null,v("div",{id:"navbar",className:"navbar-area fixed-top navbar-two"},v("nav",{className:"navbar navbar-expand-md"},v("div",{className:"container"},v(d.a,{href:"/"},v("a",{className:"navbar-brand"},v("img",{src:t("Cc5c"),alt:"logo"}))),v("button",{onClick:this.toggleNavbar,className:s,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},v("span",{className:"icon-bar top-bar"}),v("span",{className:"icon-bar middle-bar"}),v("span",{className:"icon-bar bottom-bar"})),v("div",{className:a,id:"navbarSupportedContent"},v("ul",{className:"navbar-nav"},v("li",{className:"nav-item"},v(d.a,{href:"#",activeClassName:"active"},v("a",{className:"nav-link"},"Home ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/",activeClassName:"active"},v("a",{className:"nav-link"},"Home One"))),v("li",{className:"nav-item"},v(d.a,{href:"/index2",activeClassName:"active"},v("a",{className:"nav-link"},"Home Two"))),v("li",{className:"nav-item"},v(d.a,{href:"/index3",activeClassName:"active"},v("a",{className:"nav-link"},"Home Three"))),v("li",{className:"nav-item"},v(d.a,{href:"/index4",activeClassName:"active"},v("a",{className:"nav-link"},"Home Four"))),v("li",{className:"nav-item"},v(d.a,{href:"/index5",activeClassName:"active"},v("a",{className:"nav-link"},"Home Five "))),v("li",{className:"nav-item"},v(d.a,{href:"/index6",activeClassName:"active"},v("a",{className:"nav-link"},"Home Six"))),v("li",{className:"nav-item"},v(d.a,{href:"/index7",activeClassName:"active"},v("a",{className:"nav-link"},"Home Seven"))),v("li",{className:"nav-item"},v(d.a,{href:"/index8",activeClassName:"active"},v("a",{className:"nav-link"},"Home Eight"))))),v("li",{className:"nav-item"},v(d.a,{href:"/about",activeClassName:"active"},v("a",{className:"nav-link"},"About"))),v("li",{className:"nav-item"},v(d.a,{href:"#",activeClassName:"active"},v("a",{className:"nav-link"},"Services ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/services",activeClassName:"active"},v("a",{className:"nav-link"},"Services Style One"))),v("li",{className:"nav-item"},v(d.a,{href:"/services2",activeClassName:"active"},v("a",{className:"nav-link"},"Services Style Two"))),v("li",{className:"nav-item"},v(d.a,{href:"/service-details",activeClassName:"active"},v("a",{className:"nav-link"},"Service Details"))))),v("li",{className:"nav-item"},v(d.a,{href:"#"},v("a",{className:"nav-link"},"Projects ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/projects",activeClassName:"active"},v("a",{className:"nav-link"},"Projects Style One"))),v("li",{className:"nav-item"},v(d.a,{href:"/projects2",activeClassName:"active"},v("a",{className:"nav-link"},"Projects Style Two"))),v("li",{className:"nav-item"},v(d.a,{href:"/project-details",activeClassName:"active"},v("a",{className:"nav-link"},"Project Details"))))),v("li",{className:"nav-item"},v(d.a,{href:"#"},v("a",{className:"nav-link"},"Pages ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/team",activeClassName:"active"},v("a",{className:"nav-link"},"Team"))),v("li",{className:"nav-item"},v(d.a,{href:"/pricing",activeClassName:"active"},v("a",{className:"nav-link"},"Pricing"))),v("li",{className:"nav-item"},v(d.a,{href:"/faq",activeClassName:"active"},v("a",{className:"nav-link"},"FAQ"))),v("li",{className:"nav-item"},v(d.a,{href:"#"},v("a",{className:"nav-link"},"User ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/signin",activeClassName:"active"},v("a",{className:"nav-link"},"Sign In"))),v("li",{className:"nav-item"},v(d.a,{href:"/signup",activeClassName:"active"},v("a",{className:"nav-link"},"Sign Up"))))),v("li",{className:"nav-item"},v(d.a,{href:"/error",activeClassName:"active"},v("a",{className:"nav-link"},"404 Error Page"))),v("li",{className:"nav-item"},v(d.a,{href:"/coming-soon",activeClassName:"active"},v("a",{className:"nav-link"},"Coming Soon"))),v("li",{className:"nav-item"},v(d.a,{href:"/terms-conditions",activeClassName:"active"},v("a",{className:"nav-link"},"Terms & Conditions"))),v("li",{className:"nav-item"},v(d.a,{href:"/privacy-policy",activeClassName:"active"},v("a",{className:"nav-link"},"Privacy Policy"))))),v("li",{className:"nav-item"},v(d.a,{href:"#"},v("a",{className:"nav-link"},"Blog ",v("i",{className:"bx bx-chevron-down"}))),v("ul",{className:"dropdown-menu"},v("li",{className:"nav-item"},v(d.a,{href:"/blog",activeClassName:"active"},v("a",{className:"nav-link"},"Blog Grid"))),v("li",{className:"nav-item"},v(d.a,{href:"/blog2",activeClassName:"active"},v("a",{className:"nav-link"},"Blog Right Sidebar"))),v("li",{className:"nav-item"},v(d.a,{href:"/blog-details",activeClassName:"active"},v("a",{className:"nav-link"},"Blog Details"))))),v("li",{className:"nav-item"},v(d.a,{href:"/contact",activeClassName:"active"},v("a",{className:"nav-link"},"Contact")))),v("div",{className:"others-options"},v("div",{className:"option-item"},v("i",{onClick:this.handleSearchForm,className:"search-btn flaticon-search",style:{display:this.state.searchForm?"none":"block"}}),v("i",{onClick:this.handleSearchForm,className:"close-btn flaticon-cancel ".concat(this.state.searchForm?"active":"")}),v("div",{className:"search-overlay search-popup",style:{display:this.state.searchForm?"block":"none"}},v("div",{className:"search-box"},v("form",{className:"search-form"},v("input",{className:"search-input",name:"search",placeholder:"Search",type:"text"}),v("button",{className:"search-button",type:"submit"},v("i",{className:"flaticon-search"})))))),v(d.a,{href:"/signin"},v("a",{className:"default-btn"},"Sign In"))))))))}}]),c}(m.Component);a.a=f},LGLd:function(e,a,t){"use strict";var s=t("wx14"),i=t("1OyB"),n=t("vuIU"),l=t("JX7q"),c=t("Ji7U"),r=t("md7G"),o=t("foSv"),m=t("rePB"),u=t("q1tI"),d=t.n(u),v=t("a6RD"),p=t.n(v),f=d.a.createElement;function N(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(o.a)(e);if(a){var i=Object(o.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(r.a)(this,t)}}var A=p()((function(){return t.e(6).then(t.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),h={items:1,loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!0,smartSpeed:1e3,margin:0,navText:["<i class='flaticon-left'></i>","<i class='flaticon-right'></i>"]},b=function(e){Object(c.a)(t,e);var a=N(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(m.a)(Object(l.a)(e),"state",{display:!1}),e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return f("section",{className:"clients-section"},f("div",{className:"container"},f("div",{className:"section-title"},f("h2",null,"What Our Clients Says"),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),f("div",{className:"bar"})),this.state.display?f(A,Object(s.a)({className:"clients-slider owl-carousel owl-theme"},h),f("div",{className:"clients-item"},f("div",{className:"icon"},f("i",{className:"flaticon-left-quotes-sign"})),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"),f("div",{className:"clients-content"},f("h3",null,"Moris Jacker"),f("span",null,"Web Developer"))),f("div",{className:"clients-item"},f("div",{className:"icon"},f("i",{className:"flaticon-left-quotes-sign"})),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"),f("div",{className:"clients-content"},f("h3",null,"Alex Maxwel"),f("span",null,"Agent Management"))),f("div",{className:"clients-item"},f("div",{className:"icon"},f("i",{className:"flaticon-left-quotes-sign"})),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"),f("div",{className:"clients-content"},f("h3",null,"Edmond Halley"),f("span",null,"Web Designer")))):""))}}]),t}(u.Component);a.a=b},MASE:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index8",function(){return t("UBiT")}])},UBiT:function(e,a,t){"use strict";t.r(a);var s=t("1OyB"),i=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),r=t("q1tI"),o=t.n(r),m=t("FmRj"),u=t("YFqc"),d=t.n(u),v=o.a.createElement;function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var f=function(e){Object(n.a)(l,e);var a=p(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return v("div",{className:"main-banner-area-eight"},v("div",{className:"d-table"},v("div",{className:"d-table-cell"},v("div",{className:"container mt-50"},v("div",{className:"row align-items-center"},v("div",{className:"col-lg-6"},v("div",{className:"main-banner-content"},v("span",null,"Welcome To App Showcase"),v("h1",null,"Awesome App For Your Modern Lifestyle"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing."),v("div",{className:"banner-btn"},v(d.a,{href:"/contact"},v("a",{className:"default-btn"},"Get Started"))))),v("div",{className:"col-lg-6"},v("div",{className:"banner-form"},v("form",{id:"contactForm"},v("div",{className:"form-group"},v("input",{type:"text",name:"name",id:"name",className:"form-control",required:!0,placeholder:"Your Name"})),v("div",{className:"form-group"},v("input",{type:"email",name:"email",id:"email",className:"form-control",required:!0,placeholder:"Your Email"})),v("div",{className:"form-group"},v("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",required:!0,placeholder:"Your Subject"})),v("div",{className:"form-group"},v("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"6",required:!0,placeholder:"Your Message"})),v("button",{type:"submit",className:"default-btn"},"Send Message")))))))),v("div",{className:"default-shape"},v("div",{className:"shape-1"},v("img",{src:t("+ZGN"),alt:"image"})),v("div",{className:"shape-2 rotateme"},v("img",{src:t("gSvT"),alt:"image"})),v("div",{className:"shape-3"},v("img",{src:t("8XMI"),alt:"image"})),v("div",{className:"shape-4"},v("img",{src:t("vDBV"),alt:"image"})),v("div",{className:"shape-5"},v("img",{src:t("kyF1"),alt:"image"}))))}}]),l}(r.Component),N=o.a.createElement;function A(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var h=function(e){Object(n.a)(t,e);var a=A(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return N("section",{className:"features-section pt-100 pb-70"},N("div",{className:"container"},N("div",{className:"section-title"},N("h2",null,"Creative Features"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),N("div",{className:"bar"})),N("div",{className:"row"},N("div",{className:"col-lg-3 col-sm-6"},N("div",{className:"features-content"},N("div",{className:"icon"},N("i",{className:"flaticon-blueprint"})),N("h3",null,"Great Design"),N("p",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"))),N("div",{className:"col-lg-3 col-sm-6"},N("div",{className:"features-content"},N("div",{className:"icon"},N("i",{className:"flaticon-update"})),N("h3",null,"Optimal Choice"),N("p",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"))),N("div",{className:"col-lg-3 col-sm-6"},N("div",{className:"features-content"},N("div",{className:"icon left-icon"},N("i",{className:"flaticon-security"})),N("h3",null,"Finest Quality"),N("p",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"))),N("div",{className:"col-lg-3 col-sm-6"},N("div",{className:"features-content"},N("div",{className:"icon"},N("i",{className:"flaticon-clock"})),N("h3",null,"Time Saving"),N("p",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"))))))}}]),t}(r.Component),b=t("JX7q"),g=t("rePB"),y=t("60Bi"),j=t.n(y),O=o.a.createElement;function k(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var R=function(e){Object(n.a)(t,e);var a=k(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=a.call.apply(a,[this].concat(n)),Object(g.a)(Object(b.a)(e),"state",{isOpen:!1}),Object(g.a)(Object(b.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return O("section",{className:"creative-secton pb-100"},O("div",{className:"container"},O("div",{className:"row align-items-center"},O("div",{className:"col-lg-6"},O("div",{className:"creative-content"},O("h3",null,"How to Generate ",O("span",null,"Creative")," Ideas for your IT Business"),O("div",{className:"bar"}),O("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus do  umsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industry's.")),O("div",{className:"skills"},O("div",{className:"skill-item"},O("div",{className:"skill-header"},O("h3",{className:"skill-title"},"Development"),O("div",{className:"skill-percentage"},O("div",{className:"count-box"},O("span",{className:"count-text"},"90"),"%"))),O("div",{className:"skill-bar"},O("div",{className:"progress"},O("div",{className:"progress-bar",style:{width:"90%"},role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})))),O("div",{className:"skill-item"},O("div",{className:"skill-header"},O("h3",{className:"skill-title"},"Design"),O("div",{className:"skill-percentage"},O("div",{className:"count-box"},O("span",{className:"count-text"},"80"),"%"))),O("div",{className:"skill-bar"},O("div",{className:"progress"},O("div",{className:"progress-bar",style:{width:"80%"},role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})))),O("div",{className:"skill-item"},O("div",{className:"skill-header"},O("h3",{className:"skill-title"},"Marketing"),O("div",{className:"skill-percentage"},O("div",{className:"count-box"},O("span",{className:"count-text"},"70"),"%"))),O("div",{className:"skill-bar"},O("div",{className:"progress"},O("div",{className:"progress-bar",style:{width:"70%"},role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})))),O("div",{className:"skill-item"},O("div",{className:"skill-header"},O("h3",{className:"skill-title"},"Support"),O("div",{className:"skill-percentage"},O("div",{className:"count-box"},O("span",{className:"count-text"},"75"),"%"))),O("div",{className:"skill-bar"},O("div",{className:"progress"},O("div",{className:"progress-bar",style:{width:"75%"},role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})))),O("div",{className:"skill-item"},O("div",{className:"skill-header"},O("h3",{className:"skill-title"},"Review"),O("div",{className:"skill-percentage"},O("div",{className:"count-box"},O("span",{className:"count-text"},"90"),"%"))),O("div",{className:"skill-bar"},O("div",{className:"progress"},O("div",{className:"progress-bar",style:{width:"90%"},role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"})))))),O("div",{className:"col-lg-6"},O("div",{className:"creative-image"},O("div",{className:"creative-video"},O(d.a,{href:"#play-video"},O("a",{onClick:function(a){a.preventDefault(),e.openModal()},className:"video-btn popup-youtube"},O("i",{className:"bx bx-play"})))))))),O(j.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"_ysd-zHamjk",onClose:function(){return e.setState({isOpen:!1})}}))}}]),t}(r.Component),x=o.a.createElement;function L(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var w=function(e){Object(n.a)(l,e);var a=L(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return x("section",{className:"services-section bg-color pt-100 pb-70"},x("div",{className:"container"},x("div",{className:"section-title"},x("h2",null,"IT  Agency Services"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),x("div",{className:"bar"})),x("div",{className:"row"},x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-it"})),x("h3",null,"IT Consultancy"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))),x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-setting"})),x("h3",null,"Web Development"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))),x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-promotion"})),x("h3",null,"Digital Marketing"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))),x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-cellphone"})),x("h3",null,"App Development"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))),x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-shopping-cart"})),x("h3",null,"E-commerce Development"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))),x("div",{className:"col-lg-4 col-md-6"},x("div",{className:"single-services"},x("div",{className:"icon"},x("i",{className:"flaticon-optimize"})),x("h3",null,"IT Solutions"),x("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis."),x(d.a,{href:"/service-details"},x("a",{className:"read-btn"},"Read More")))))),x("div",{className:"default-shape"},x("div",{className:"shape-1"},x("img",{src:t("+ZGN"),alt:"image"})),x("div",{className:"shape-2 rotateme"},x("img",{src:t("gSvT"),alt:"image"})),x("div",{className:"shape-3"},x("img",{src:t("8XMI"),alt:"image"})),x("div",{className:"shape-4"},x("img",{src:t("vDBV"),alt:"image"})),x("div",{className:"shape-5"},x("img",{src:t("kyF1"),alt:"image"}))))}}]),l}(r.Component),P=o.a.createElement;function Z(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var S=function(e){Object(n.a)(l,e);var a=Z(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return P("section",{className:"development-area ptb-100"},P("div",{className:"container"},P("div",{className:"row align-items-center"},P("div",{className:"col-lg-6"},P("div",{className:"development-image"},P("img",{src:t("kHh2"),alt:"image"}))),P("div",{className:"col-lg-6"},P("div",{className:"development-text"},P("h3",null,"Web & Mobile ",P("span",null,"Development")),P("div",{className:"bar"}),P("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.")),P("div",{className:"development-content"},P("div",{className:"icon"},P("i",{className:"flaticon-blog"})),P("h3",null,"UI/UX Design"),P("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.")),P("div",{className:"development-content"},P("div",{className:"icon bg-05dbcf"},P("i",{className:"flaticon-setting"})),P("h3",null,"Web Development"),P("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.")),P("div",{className:"development-content"},P("div",{className:"icon bg-fec66f"},P("i",{className:"flaticon-cellphone"})),P("h3",null,"Mobile Development"),P("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.")),P("div",{className:"development-content"},P("div",{className:"icon bg-66a6ff"},P("i",{className:"flaticon-devices"})),P("h3",null,"Responsive Design"),P("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."))))))}}]),l}(r.Component),C=o.a.createElement;function M(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var X=function(e){Object(n.a)(t,e);var a=M(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=a.call.apply(a,[this].concat(n)),Object(g.a)(Object(b.a)(e),"state",{isOpen:!1}),Object(g.a)(Object(b.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return C(o.a.Fragment,null,C("div",{className:"video-section"},C("div",{className:"d-table"},C("div",{className:"d-table-cell"},C("div",{className:"video-content"},C(d.a,{href:"#play-video"},C("a",{onClick:function(a){a.preventDefault(),e.openModal()},className:"video-btn popup-youtube"},C("i",{className:"flaticon-play"}))))))),C(j.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"_ysd-zHamjk",onClose:function(){return e.setState({isOpen:!1})}}))}}]),t}(r.Component),W=o.a.createElement;function D(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var F=function(e){Object(n.a)(l,e);var a=D(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return W("section",{className:"choose-section ptb-100"},W("div",{className:"container"},W("div",{className:"section-title"},W("h2",null,"Why Choose Us"),W("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),W("div",{className:"bar"})),W("div",{className:"row align-items-center"},W("div",{className:"col-lg-6"},W("div",{className:"choose-content"},W("div",{className:"icon"},W("i",{className:"flaticon-shared-folder"})),W("h3",null,"Consulting"),W("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")),W("div",{className:"choose-content"},W("div",{className:"icon"},W("i",{className:"flaticon-blog"})),W("h3",null,"Data Management"),W("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")),W("div",{className:"choose-content"},W("div",{className:"icon"},W("i",{className:"flaticon-quality"})),W("h3",null,"Page Ranking"),W("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")),W("div",{className:"choose-content"},W("div",{className:"icon"},W("i",{className:"flaticon-target"})),W("h3",null,"Location Targeting"),W("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."))),W("div",{className:"col-lg-6"},W("div",{className:"choose-image"},W("img",{src:t("f7di"),alt:"image"}))))))}}]),l}(r.Component),q=o.a.createElement;function H(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var T=function(e){Object(n.a)(l,e);var a=H(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return q("section",{className:"projects-section pb-70"},q("div",{className:"container-fluid mw-1920"},q("div",{className:"section-title"},q("h2",null,"Projects"),q("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),q("div",{className:"bar"})),q("div",{className:"row"},q("div",{className:"col-lg-4 col-md-6"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("lXGi"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"App Update & Rebrand"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))),q("div",{className:"col-lg-4 col-md-6"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("27Ds"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"IT Consultancy"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))),q("div",{className:"col-lg-4"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("lrQd"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"Digital Marketing"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))),q("div",{className:"col-lg-4"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("wZFT"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"App Development"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))),q("div",{className:"col-lg-4 col-md-6"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("cbHM"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"IT Solutions"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup"))))),q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("gCli"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"Data Management"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))),q("div",{className:"col-lg-4 col-md-6"},q("div",{className:"single-projects"},q("div",{className:"projects-image"},q("img",{src:t("9dEY"),alt:"image"})),q("div",{className:"projects-content"},q(d.a,{href:"/project-details"},q("a",null,q("h3",null,"E-commerce Development"))),q(d.a,{href:"/project-details"},q("a",null,q("span",null,"Research and startup")))))))))}}]),l}(r.Component),E=t("LGLd"),I=t("azCz"),J=t("v6Hh"),V=o.a.createElement;function z(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var U=function(e){Object(n.a)(t,e);var a=z(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return V(o.a.Fragment,null,V(m.a,null),V(f,null),V(h,null),V(R,null),V(w,null),V(S,null),V(X,null),V(F,null),V(T,null),V(E.a,null),V(I.a,null),V(J.a,null))}}]),t}(r.Component);a.default=U},f7di:function(e,a){e.exports="data:image/png;base64,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"},kHh2:function(e,a){e.exports="/_next/static/images/development-a2abc7ad5d3eb1fa0cccb1359f5b6e98.png"}},[["MASE",0,2,1,3,4,9,8]]]);