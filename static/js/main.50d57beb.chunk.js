(this["webpackJsonpsinglestone-frontend-endless"]=this["webpackJsonpsinglestone-frontend-endless"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(6),a=s.n(r),o=(s(14),s(15),s(16),s(0));var i=function(){var e="".concat("local"===Object({NODE_ENV:"production",PUBLIC_URL:"/endless-hooks-practice",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"local",REACT_APP_IMG_PREFIX:"/images/"}).ENVIRONMENT?"/images/":"./images/","logo-endless.svg");return Object(o.jsx)("div",{className:"header-container teal-color grey-background",children:Object(o.jsx)("a",{href:"https://www.dictionary.com/browse/endless",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:e,alt:"logo",className:"header-logo filter-teal"})})})},l=s(5),d=s.n(l),j=s(8),b=s(7),h=s(9);var u=function(){return Object(o.jsxs)("div",{className:"body-text",children:[Object(o.jsx)("div",{className:"body-text-header-1",children:Object(o.jsx)("span",{className:"",children:"New Games & Accessories"})}),Object(o.jsxs)("div",{className:"body-text-header-2",children:[Object(o.jsx)("span",{children:"Monthly packages."}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"body-text-header-2",children:[Object(o.jsx)("span",{children:"Excitement delivered daily."}),Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{className:"body-text-50",children:Object(o.jsx)("span",{children:"What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month."})}),Object(o.jsx)("a",{href:"https://www.youtube.com/watch?v=IKqV7DB8Iwg&t=58s",target:"_blank",className:"btn-link",rel:"noreferrer",children:Object(o.jsx)("button",{className:"btn btn-get-started",children:Object(o.jsx)("span",{children:"GET STARTED"})})})]})};var O=function(){var e="".concat("local"===Object({NODE_ENV:"production",PUBLIC_URL:"/endless-hooks-practice",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"local",REACT_APP_IMG_PREFIX:"/images/"}).ENVIRONMENT?"/images/":"./images/","photo-couch_2x.jpg");return Object(o.jsx)("div",{className:"body-img-container",children:Object(o.jsx)("img",{src:e,alt:"logo",className:"body-background"})})};var m=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"how-it-works-container",children:[Object(o.jsx)("h2",{className:"how-it-works-header",children:"How It Works"}),Object(o.jsx)("div",{className:"how-it-works-grid",children:t&&t.map((function(e,t){return Object(o.jsxs)("div",{className:"how-it-works-item",children:[Object(o.jsx)("span",{className:"how-it-works-item-header",children:e.stepNumber<10?"0".concat(e.stepNumber):e.stepNumber}),Object(o.jsx)("hr",{className:"how-it-works-item-divider teal-color"}),Object(o.jsx)("span",{className:"how-it-works-item-title",children:Object(o.jsx)("strong",{children:e.versionContent[0].title.toUpperCase()})}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"how-it-works-item-body",children:e.versionContent[0].body})]},e.id)}))})]})};s(19),s(20);var x=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)(Object(b.a)(d.a.mark((function e(){var t,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://singlestone-endless-api.herokuapp.com/steps/");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,(n=Object(j.a)(s)).sort((function(e,t){return e.stepNumber<t.stepNumber?-1:1})),n.map((function(e,t){return{id:e.id,stepNumber:e.stepNumber,versionContent:e.versionContent.sort((function(e,t){return e.effectiveDate>t.effectiveDate?-1:1}))}})),c(n);case 10:case"end":return e.stop()}}),e)}))),[]),Object(o.jsxs)("div",{className:"home-page-body",children:[Object(o.jsx)(O,{}),Object(o.jsx)(u,{}),Object(o.jsx)(m,{data:s})]})};s(21);var p=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("span",{className:"footer-text",children:"\xa9 Endless 2021"})})};var N=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(x,{}),Object(o.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.50d57beb.chunk.js.map