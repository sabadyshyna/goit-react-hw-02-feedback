(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),i=a.n(c),s=a(6),o=a.n(s),r=(a(19),a(7)),l=a(8),d=a(9),u=a(13),b=a(12),j=a(10),h=a.n(j);var v=function(e){var t=e.children;return Object(n.jsx)("div",{className:h.a.container,children:t})},f=a(4),O=a.n(f);var m=function(e){var t=e.title,a=e.children;return Object(n.jsxs)("section",{className:O.a.section,children:[Object(n.jsx)("h2",{className:O.a.title,children:t}),a]})},k=a(5),x=a.n(k);var g=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(n.jsx)("div",{className:x.a.options,children:t.map((function(e){return Object(n.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return a(e)},children:e},e)}))})},p=a(1),N=a.n(p);var F=function(e){var t=e.good,a=void 0===t?0:t,c=e.neutral,i=void 0===c?0:c,s=e.bad,o=void 0===s?0:s,r=e.total,l=void 0===r?0:r,d=e.positivePercentage,u=void 0===d?0:d;return Object(n.jsxs)("ul",{className:N.a.statistics,children:[Object(n.jsxs)("li",{className:N.a.item,children:["Good: ",a]}),Object(n.jsxs)("li",{className:N.a.item,children:["Neutral: ",i]}),Object(n.jsxs)("li",{className:N.a.item,children:["Bad: ",o]}),Object(n.jsxs)("li",{className:N.a.item,children:["Total: ",l]}),Object(n.jsxs)("li",{className:N.a.item,children:["Positive feedback: ",u,"%"]})]})},P=a(11),w=a.n(P);var y=function(e){var t=e.message,a=void 0===t?"Nothing to show.":t;return Object(n.jsxs)("p",{className:w.a.notification,children:[" ",a," "]})},T=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return Math.round(100*t/a)||0},e}return Object(d.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{title:"Please leave feedback",children:Object(n.jsx)(g,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(n.jsx)(m,{title:"Statistics",children:this.countTotalFeedback()?Object(n.jsx)(F,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(n.jsx)(y,{message:"No feedback was given."})})]})}}]),a}(i.a.Component);o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4687d925.chunk.js.map