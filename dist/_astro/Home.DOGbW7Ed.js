import{r as c}from"./index.DiEladB3.js";var u={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function p(){if(l)return t;l=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function d(m,r,s){var a=null;if(s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),"key"in r){s={};for(var o in r)o!=="key"&&(s[o]=r[o])}else s=r;return r=s.ref,{$$typeof:n,type:m,key:a,ref:r!==void 0?r:null,props:s}}return t.Fragment=i,t.jsx=d,t.jsxs=d,t}var x;function h(){return x||(x=1,u.exports=p()),u.exports}var e=h();function R(){const[n,i]=c.useState(!1);return c.useEffect(()=>{i(!0)},[]),e.jsxs("div",{className:"home",children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"n3kosempai"}),e.jsx("p",{children:"Bienvenido a mi perfil de GitHub"})]}),e.jsx("main",{className:"main",children:e.jsxs("section",{className:"card",children:[e.jsx("h2",{children:"Sobre mí"}),e.jsx("p",{children:"Esta es mi página de perfil de GitHub Pages construida con Astro + React."}),n&&e.jsx("p",{className:"status",children:"React montado correctamente"})]})}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"2024 n3kosempai"})})]})}export{R as default};
