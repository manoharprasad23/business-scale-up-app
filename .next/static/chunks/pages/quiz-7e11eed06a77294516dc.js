_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"2akp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return n("fRj0")}])},Ix5F:function(e,t,n){"use strict";var o=n("1OyB"),a=n("vuIU"),r=n("Ji7U"),i=n("md7G"),s=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("YFqc"),d=n.n(u),f=l.a.createElement;function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(i.a)(this,n)}}c.Component},fRj0:function(e,t,n){"use strict";n.r(t);var o=n("1OyB"),a=n("vuIU"),r=n("Ji7U"),i=n("md7G"),s=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("zCU4"),d=[{id:1,leftBannerText:"Strategic Business Planning",heading:"Statement of readiness",question:"We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",optionOne:"Yes, we do have Business plans & work as per the objectives",optionTwo:"We work with a rough Business Plan",optionThree:"We don\u2019t have any clear plans but work on our ideas",correctAnswer:1,answerSelectedByUser:""},{id:2,leftBannerText:"Customers and Channels/dealers",heading:"Statement of readiness",question:"We have a deep understanding of our customer needs and they are happy with us We have a loyal channel / dealer base and work closely with them for growth",optionOne:"We are good at it",optionTwo:"We can do better",optionThree:"It\u2019s a challenge",correctAnswer:2,answerSelectedByUser:""},{id:3,leftBannerText:"Marketing & Demand generations effectiveness [Leads]",heading:"Statement of readiness",question:"We execute impactful ROI based lead generation plans & use Social media marketing effectively",optionOne:"All the time",optionTwo:"Sometimes - we need to focus more ",optionThree:"Rarely -we havent started yet",correctAnswer:3,answerSelectedByUser:""},{id:4,leftBannerText:"Business Systems & Processes",heading:"Statement of readiness",question:"We have strong systems and processes across all verticals and use them effectively ",optionOne:"We are good at it",optionTwo:"Usage & adherance is a problem",optionThree:"We don\u2019t have strong systems & process",correctAnswer:1,answerSelectedByUser:""},{id:5,leftBannerText:"Organization",heading:"Statement of readiness",question:"We have a robust organization structure Our teams are aligned to the company goals and work together towards achieving them",optionOne:"Our organization is future ready",optionTwo:"We are working on building a strong organization",optionThree:"We are struggling with our organization",correctAnswer:2,answerSelectedByUser:""},{id:6,leftBannerText:"Financial Performance",heading:"Statement of readiness",question:"We are meeting financial projections and budgets constantly We understand & track Profitability - we know our Gross margins, we know our costs , we know our cash flows",optionOne:"We are focused on it and we review it periodically ",optionTwo:"We plan but execution & tracking is a challenge",optionThree:"We find it difficult  to plan & execute Financial metrics",correctAnswer:3,answerSelectedByUser:""},{id:7,leftBannerText:"Sales Management",heading:"Statement of readiness",question:"We have a strong Sales Management System, our Sales teams are skilled and competent ",optionOne:"We are in control ",optionTwo:"We have fairly good at it ",optionThree:"We have to work on it ",correctAnswer:1,answerSelectedByUser:""},{id:8,leftBannerText:"Operations Management ",heading:"Statement of readiness",question:"Our Operations [ Manufacturing, Sales Operations, Support team, Finance and HR, Supply chain ] are robust and process driven",optionOne:"We are in control",optionTwo:"We have fairly good at it",optionThree:"We have to work on it",correctAnswer:2,answerSelectedByUser:""},{id:9,leftBannerText:"Innovation",heading:"Statement of readiness",question:"We are innovative in our ways of working ",optionOne:"We are good at it ",optionTwo:"We can do better ",optionThree:"It\u2019s a challenge ",correctAnswer:3,answerSelectedByUser:""},{id:10,leftBannerText:"The CEO / Business Leader Future Readiness Outlook",heading:"Statement of readiness",question:"I am confident of the future of my business ",optionOne:"Yes, I am confident of my business success",optionTwo:"I am a little confident but need to do more for full readiness",optionThree:"I am not ready yet to meet the future challenges ",correctAnswer:1,answerSelectedByUser:""}],f=(l.a.createElement,n("YFqc"),l.a.createElement),p=function(){var e=d.length;return f("div",{className:"quiz-content header-padding"},f("div",{className:"container"},f("div",{className:"section-title"},f("h2",null,"Take the test"),f("div",{className:"bar"})),f("form",{onSubmit:function(e){e.preventDefault();for(var t=0,n=0,o=0,a=0,r=0,i=[],s=document.getElementsByTagName("input"),c=0;c<s.length;c++)(s[c].type="radio")&&s[c].checked&&(console.log("option selected ---\x3e "+s[c].value),n++,i.push(s[c].value),1==s[c].value?o++:2==s[c].value?a++:3==s[c].value&&r++);for(c=0;c<10;c++)i[c]==d[c].correctAnswer&&t++;console.log("correct answer count is -> "+n,t);Math.round(t/10*100);var l=Math.round(10*o+7*a+4*r);window.sessionStorage.setItem("correctAnswerPercentage",l),10==n?(fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:i,headers:{"Content-type":"application/json; charset=UTF-8"}}),window.location.href=window.location.origin+"/result"):alert("Please answer all the questions")}},f("div",{className:"question-content"},d.map((function(t){var n=t.id,o=t.heading,a=t.leftBannerText,r=t.optionOne,i=t.optionTwo,s=t.optionThree,c=t.question;return f("div",{className:"question-section"},f("div",{className:"col-lg-4 col-md-6"},f("div",{className:"single-services"},f("p",null,n,"/",e),f("h3",null,a))),f("div",{className:"right-side-question-content"},f("div",{className:"question-title"},f("h5",null,o)),f("div",{className:"question"},f("p",null,c)),f("div",{className:"answer-options"},f("div",{className:"option"},f("label",{for:"one"},f("input",{onClick:function(){},type:"radio",id:n+"_first_option",name:n+"-answer",value:"1"}),r)),f("div",{className:"option"},f("label",{for:"two"},f("input",{onClick:function(){},type:"radio",id:n+"_second_option",name:n+"-answer",value:"2"}),i)),f("div",{className:"option"},f("label",{for:"three"},f("input",{onClick:function(){},type:"radio",id:n+"_third_option",name:n+"-answer",value:"3"}),s)))))}))),f("div",{className:"submit-button"},f("button",{className:"submit",type:"submit"},"Submit")))))},h=(n("Ix5F"),n("v6Hh")),m=l.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(i.a)(this,n)}}var g=function(e){Object(r.a)(n,e);var t=w(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return m(l.a.Fragment,null,m(u.a,null),m(p,null),m(h.a,null))}}]),n}(c.Component);t.default=g}},[["2akp",0,2,1,3]]]);