(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,,,,,function(t,e,n){t.exports={container:"Container_container__3RIox"}},function(t,e,n){t.exports={section:"Section_section__Ap5Zy"}},function(t,e,n){t.exports={button:"FeedbackOptions_button__3n-hy"}},function(t,e,n){t.exports={notification:"Notification_notification__1C7Ma"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),i=n.n(c),o=n(4),s=n.n(o),r=(n(19),n(5)),l=n(6),d=n(7),u=n(13),b=n(12),j=n(8),h=n.n(j);var v=function(t){var e=t.children;return Object(a.jsx)("div",{className:h.a.container,children:e})},f=n(9),O=n.n(f);var x=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:O.a.section,children:[Object(a.jsx)("h2",{children:e}),n]})},m=n(10),k=n.n(m);var p=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(a.jsx)("div",{children:e.map((function(t){return Object(a.jsx)("button",{className:k.a.button,type:"button",onClick:function(){return n(t)},children:t},t)}))})},g=n(1),_=n.n(g);var N=function(t){var e=t.good,n=void 0===e?0:e,c=t.neutral,i=void 0===c?0:c,o=t.bad,s=void 0===o?0:o,r=t.total,l=void 0===r?0:r,d=t.positivePercentage,u=void 0===d?0:d;return Object(a.jsxs)("ul",{className:_.a.list,children:[Object(a.jsxs)("li",{className:_.a.item,children:["Good: ",n]}),Object(a.jsxs)("li",{className:_.a.item,children:["Neutral: ",i]}),Object(a.jsxs)("li",{className:_.a.item,children:["Bad: ",s]}),Object(a.jsxs)("li",{className:_.a.item,children:["Total: ",l]}),Object(a.jsxs)("li",{className:_.a.item,children:["Positive feedback: ",u,"%"]})]})},F=n(11),y=n.n(F);var P=function(t){var e=t.message,n=void 0===e?"Nothing to show.":e;return Object(a.jsxs)("p",{className:y.a.notification,children:[" ",n," "]})},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.leaveFeedback=function(e){t.setState(Object(r.a)({},e,t.state[e]+1))},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,n=t.countTotalFeedback();return Math.round(100*e/n)||0},t}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad;return Object(a.jsxs)(v,{children:[Object(a.jsx)(x,{title:"Please leave feedback",children:Object(a.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(a.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(N,{good:e,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(P,{message:"No feedback was given."})})]})}}]),n}(i.a.Component);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.0365ddf9.chunk.js.map