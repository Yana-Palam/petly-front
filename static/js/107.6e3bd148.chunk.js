"use strict";(self.webpackChunkpetly_team_project=self.webpackChunkpetly_team_project||[]).push([[107],{9002:function(n,e,t){t.d(e,{Z:function(){return l}});var i,r=t(168),o=t(8789).ZP.button(i||(i=(0,r.Z)(["\n  padding: ",";\n  min-width: ",";\n  font-size: ",";\n  font-family: ",";\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background: ",";\n  line-height: ",";\n  font-weight: ",";\n  width: 182px;\n  height: 43px;\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n"])),(function(n){return"".concat(n.theme.space[3],"px")}),(function(n){return"".concat(n.theme.space[7],"px")}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.radii.xl}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.button.secondaryText}),(function(n){return n.theme.colors.button.primaryBackground}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.fontWeights.bold})),a=t(3329);function l(n){var e=n.type,t=void 0===e?"button":e,i=n.id,r=n.disabled,l=void 0!==r&&r,d=n.onClick,s=n.children,c=n.style;return(0,a.jsx)(o,{type:t,disabled:l,onClick:d,id:i,style:c,children:s})}},92:function(n,e,t){var i,r=t(168),o=t(8789),a=t(8409),l=o.ZP.div(i||(i=(0,r.Z)(["\n  // width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  // margin: 0 auto;\n\n  @media (",") {\n    padding-right: 32px;\n    padding-left: 32px;\n  }\n\n  @media (",") {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n"])),a.U.tabletOnly,a.U.desktop);e.Z=l},3107:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,o,a,l,d=t(92),s=t(2506),c=t(2797),u=t(9434),p=t(7689),h=t(5679),f=t(5294),m=t(4289),x=t(9002),g=t(168),b=t(8789),y=t(1087),v=b.ZP.form(i||(i=(0,g.Z)(["\n  width: 618px;\n  padding: 60px 80px;\n  background: #ffffff;\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  border-radius: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n"]))),Z=b.ZP.div(r||(r=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),w=b.ZP.h2(o||(o=(0,g.Z)(["\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 1.36;\n\n  text-align: center;\n  letter-spacing: 0.04em;\n\n  color: #111111;\n"]))),j=b.ZP.p(a||(a=(0,g.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.33;\n\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n"]))),k=(0,b.ZP)(y.rU)(l||(l=(0,g.Z)(["\n  color: #3091eb;\n  text-decoration: underline;\n"]))),P=t(3329),z=[{type:"email",name:"email",label:"Email"},{type:"password",name:"password",label:"Password"}],C=/[a-z0-9]+@[a-z]+.[a-z]{2,3}/,_=function(){var n=(0,p.s0)(),e=(0,u.I0)(),t=(0,u.v9)(m.Gu),i=(0,u.v9)((function(n){return n.auth.error})),r=c.Ry().shape({email:c.Z_().email().required().min(10).max(63).matches(C),password:c.Z_().min(7,"min 7").max(32).required()}),o=(0,s.TA)({initialValues:{email:"",password:""},validationSchema:r,onSubmit:function(i){console.log(i);var r=i.email,o=i.password;t||e((0,f.x4)({email:r,password:o})).then((function(e){!e.error&&n("/user")}))}});return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(v,{onSubmit:o.handleSubmit,children:[(0,P.jsx)(w,{children:"Login"}),i?(0,P.jsx)("span",{children:!0===i.includes(409)?"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0437\u0430\u043d\u044f\u0442\u0430":!0===i.includes(400)?"\u041e\u0439 \u0438\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c":void 0}):null,(0,P.jsx)(Z,{children:z.map((function(n){var e=n.type,t=n.name,i=n.label;return(0,P.jsx)(h.Z,{type:e,name:t,label:i,value:o.values[t],onChange:o.handleChange,error:o.touched[t]&&Boolean(o.errors[t]),helperText:o.touched[t]&&o.errors[t],variant:"outlined"},t)}))}),(0,P.jsx)(x.Z,{type:"submit",style:{width:"100%",height:"48px",background:"#F59256s"},children:"Login"}),(0,P.jsxs)(j,{children:["Don't have an account?"," ",(0,P.jsx)(k,{to:"/register",children:"Register"})]})]})})};var S=function(){return(0,P.jsx)("div",{children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(_,{})})})}}}]);
//# sourceMappingURL=107.6e3bd148.chunk.js.map