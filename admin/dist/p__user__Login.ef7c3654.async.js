(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{16964:function(K){K.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},1346:function(){},70077:function(K,k,e){"use strict";e.r(k),e.d(k,{default:function(){return be}});var Ie=e(28579),J=e(11871),Oe=e(71838),$=e(99128),p=e(36531),T=e(66940),z=e(28211),ze=e(54113),re=e(41637),ne=e(70486),m=e.n(ne),a=e(59301),se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},le=se,Q=e(23986),X=function(n,i){return a.createElement(Q.Z,(0,p.Z)((0,p.Z)({},n),{},{ref:i,icon:le}))};X.displayName="LockOutlined";var q=a.forwardRef(X),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},ue=ie,_=function(n,i){return a.createElement(Q.Z,(0,p.Z)((0,p.Z)({},n),{},{ref:i,icon:ue}))};_.displayName="MobileOutlined";var oe=a.forwardRef(_),ce=e(69879),A=e(10322),Ae=e(99793),de=e(20658),V=e(20557),fe=e(82381),ge=e(95443),De=e(1346),me=["logo","message","title","subTitle","actions","children"];function ve(r){var n=r.logo,i=r.message,v=r.title,c=r.subTitle,b=r.actions,I=r.children,x=(0,V.Z)(r,me),C=(0,ge.YB)(),j=(0,p.Z)({searchConfig:{submitText:C.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(H,N){return N.pop()},submitButtonProps:{size:"large",style:{width:"100%"}}},x.submitter),D=(0,a.useContext)(de.ZP.ConfigContext),O=D.getPrefixCls("pro-form-login"),y=function(H){return"".concat(O,"-").concat(H)},S=(0,a.useMemo)(function(){return n?typeof n=="string"?a.createElement("img",{src:n}):n:null},[n]);return a.createElement("div",{className:y("container")},a.createElement("div",{className:y("top")},v||S?a.createElement("div",{className:y("header")},S?a.createElement("span",{className:y("logo")},S):null,v?a.createElement("span",{className:y("title")},v):null):null,c?a.createElement("div",{className:y("desc")},c):null),a.createElement("div",{className:y("main")},a.createElement(fe.Z,(0,A.Z)({isKeyPressSubmit:!0,submitter:j},x),i,I),b?a.createElement("div",{className:y("other")},b):null))}var pe=ve,ee=e(20248),he=["fieldProps","proFieldProps"],Fe=["fieldProps","proFieldProps"],w="text",Ze=function(n){var i=n.fieldProps,v=n.proFieldProps,c=(0,V.Z)(n,he);return a.createElement(ee.Z,(0,A.Z)({mode:"edit",valueType:w,fieldProps:i,filedConfig:{valueType:w},proFieldProps:v},c))},ye=function(n){var i=n.fieldProps,v=n.proFieldProps,c=(0,V.Z)(n,Fe);return a.createElement(ee.Z,(0,A.Z)({mode:"edit",valueType:"password",fieldProps:i,proFieldProps:v,filedConfig:{valueType:w}},c))},U=Ze;U.Password=ye,U.displayName="ProFormComponent";var G=U,He=e(41505),Pe=e(79538),Re=e(40279),xe=e(88591),Ve=e(58408),Me=e(36838),Ce=e(11557),je=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Se=a.forwardRef(function(r,n){var i=(0,a.useState)(r.countDown||60),v=(0,z.Z)(i,2),c=v[0],b=v[1],I=(0,a.useState)(!1),x=(0,z.Z)(I,2),C=x[0],j=x[1],D=(0,a.useState)(),O=(0,z.Z)(D,2),y=O[0],S=O[1],P=r.rules,H=r.name,N=r.phoneName,B=r.fieldProps,R=r.captchaTextRender,M=R===void 0?function(s,l){return s?"".concat(l," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:R,d=r.captchaProps,F=(0,V.Z)(r,je),Z=function(){var s=(0,T.Z)(m().mark(function l(u){return m().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,S(!0),o.next=4,F.onGetCaptcha(u);case 4:S(!1),j(!0),o.next=13;break;case 8:o.prev=8,o.t0=o.catch(0),j(!1),S(!1),console.log(o.t0);case 13:case"end":return o.stop()}},l,null,[[0,8]])}));return function(u){return s.apply(this,arguments)}}();return(0,a.useEffect)(function(){var s=0,l=r.countDown;return C&&(s=window.setInterval(function(){b(function(u){return u<=1?(j(!1),clearInterval(s),l||60):u-1})},1e3)),function(){return clearInterval(s)}},[C]),a.createElement(Pe.Z.Item,{noStyle:!0,shouldUpdate:!0},function(s){var l=s.getFieldValue,u=s.validateFields;return a.createElement("div",{style:(0,p.Z)((0,p.Z)({},B==null?void 0:B.style),{},{display:"flex",alignItems:"center"}),ref:n},a.createElement(Me.Z,(0,A.Z)({},B,{style:{flex:1,transition:"width .3s",marginRight:8}})),a.createElement(xe.Z,(0,A.Z)({style:{display:"block"},disabled:C,loading:y},d,{onClick:(0,T.Z)(m().mark(function E(){var o;return m().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,!N){f.next=9;break}return f.next=4,u([N].flat(1));case 4:return o=l([N].flat(1)),f.next=7,Z(o);case 7:f.next=11;break;case 9:return f.next=11,Z("");case 11:f.next=16;break;case 13:f.prev=13,f.t0=f.catch(0),console.log(f.t0);case 16:case"end":return f.stop()}},E,null,[[0,13]])}))}),M(C,c)))})}),Te=(0,Ce.Z)(Se),h=e(78449),Le=e(89182),ae=e(45103);function Ne(r,n){return W.apply(this,arguments)}function W(){return W=(0,T.Z)(m().mark(function r(n,i){return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,h.WY)("/api/login/captcha",(0,p.Z)({method:"GET",params:(0,p.Z)({},n)},i||{})));case 1:case"end":return c.stop()}},r)})),W.apply(this,arguments)}var Be=e(16964),L=e.n(Be),t=e(37712),te=function(n){var i=n.content;return(0,t.jsx)(re.Z,{style:{marginBottom:24},message:i,type:"error",showIcon:!0})},Ee=function(){var n=(0,a.useState)({}),i=(0,z.Z)(n,2),v=i[0],c=i[1],b=(0,a.useState)("account"),I=(0,z.Z)(b,2),x=I[0],C=I[1],j=(0,h.tT)("@@initialState"),D=j.initialState,O=j.setInitialState,y=D||{},S=y.currentUser,P=(0,h.YB)();console.log("intl: ",P);var H=function(){var M=(0,T.Z)(m().mark(function d(){var F,Z,s;return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,ae.CW)({token:localStorage.getItem("token")||""});case 2:if(F=u.sent,Z=F.data.user,s={name:Z.name,avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F01%2F20200201113037_txvqq.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646984998&t=80fff58db61c03d7d41a0425b5308c25"},localStorage.setItem("userinfo",JSON.stringify(s)),!s){u.next=9;break}return u.next=9,O(function(E){return(0,p.Z)((0,p.Z)({},E),{},{currentUser:s})});case 9:case"end":return u.stop()}},d)}));return function(){return M.apply(this,arguments)}}(),N=function(){var M=(0,T.Z)(m().mark(function d(F){var Z,s,l,u,E,o,Y;return m().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,(0,ae.wm)((0,p.Z)((0,p.Z)({},F),{},{type:x}));case 3:if(s=g.sent,localStorage.setItem("token",(Z=s.data)===null||Z===void 0?void 0:Z.token),s.msg!=="\u767B\u5F55\u6210\u529F"){g.next=16;break}return l=P.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),$.default.success(l),g.next=10,H();case 10:if(h.m8){g.next=12;break}return g.abrupt("return");case 12:return u=h.m8.location.query,E=u,o=E.redirect,h.m8.push(o||"/"),g.abrupt("return");case 16:c(s),g.next=23;break;case 19:g.prev=19,g.t0=g.catch(0),Y=P.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),$.default.error(Y);case 23:case"end":return g.stop()}},d,null,[[0,19]])}));return function(F){return M.apply(this,arguments)}}(),B=v.status,R=v.type;return(0,t.jsxs)("div",{className:L().container,children:[(0,t.jsx)("div",{className:L().lang,"data-lang":!0,children:h.pD&&(0,t.jsx)(h.pD,{})}),(0,t.jsx)("div",{className:L().content,children:(0,t.jsxs)(pe,{title:"To Freya Admin",initialValues:{autoLogin:!0},onFinish:function(){var M=(0,T.Z)(m().mark(function d(F){return m().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N(F);case 2:case"end":return s.stop()}},d)}));return function(d){return M.apply(this,arguments)}}(),children:[(0,t.jsx)(J.Z,{activeKey:x,onChange:C,children:(0,t.jsx)(J.Z.TabPane,{tab:P.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account")}),B==="error"&&R==="account"&&(0,t.jsx)(te,{content:P.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),x==="account"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{name:"telephone",fieldProps:{size:"large",prefix:(0,t.jsx)(ce.Z,{className:L().prefixIcon})},placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",rules:[{required:!0,message:(0,t.jsx)(h._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,t.jsx)(G.Password,{name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(q,{className:L().prefixIcon})},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:(0,t.jsx)(h._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),B==="error"&&R==="mobile"&&(0,t.jsx)(te,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),x==="mobile"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{fieldProps:{size:"large",prefix:(0,t.jsx)(oe,{className:L().prefixIcon})},name:"mobile",placeholder:P.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,t.jsx)(h._H,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,t.jsx)(h._H,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,t.jsx)(Te,{fieldProps:{size:"large",prefix:(0,t.jsx)(q,{className:L().prefixIcon})},captchaProps:{size:"large"},placeholder:P.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(d,F){return d?"".concat(F," ").concat(P.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):P.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,t.jsx)(h._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var M=(0,T.Z)(m().mark(function d(F){var Z;return m().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Ne({phone:F});case 2:if(Z=l.sent,Z!==!1){l.next=5;break}return l.abrupt("return");case 5:$.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return l.stop()}},d)}));return function(d){return M.apply(this,arguments)}}()})]}),(0,t.jsx)("div",{style:{marginBottom:24}})]})}),(0,t.jsx)(Le.Z,{})]})},be=Ee}}]);
