"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"create-mongodb-docker",title:"Create MongoDB Standalone and Replica Set containers using Docker",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","mongo-replicaset"]},i=void 0,c={permalink:"/create-mongodb-docker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-09-12-create-mongodb-docker.md",source:"@site/blog/2021-09-12-create-mongodb-docker.md",title:"Create MongoDB Standalone and Replica Set containers using Docker",description:"Docker Containers offer easy setup, customization and scalability. In this article, i will walk you through how to use Docker to setup MongoDB standalone and replica set containers within minutes.",date:"2021-09-12T00:00:00.000Z",formattedDate:"September 12, 2021",tags:[{label:"mongodb",permalink:"/tags/mongodb"},{label:"containers",permalink:"/tags/containers"},{label:"docker",permalink:"/tags/docker"},{label:"mongo-replicaset",permalink:"/tags/mongo-replicaset"}],readingTime:4.65,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"create-mongodb-docker",title:"Create MongoDB Standalone and Replica Set containers using Docker",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","mongo-replicaset"]},prevItem:{title:"Local Home Lab DNS Setup with DNSMasq and NGINX",permalink:"/local-home-lab"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker Containers offer easy setup, customization and scalability. In this article, i will walk you through how to use Docker to setup MongoDB standalone and replica set containers within minutes."),(0,a.kt)("p",null,"The article is divided in two parts, the first part is setting up the standalone MongoDB container and second part is setting up and grouping MongoDB containers as member of replica set with Docker."),(0,a.kt)("p",null,"Let\u2019s get started."))}u.isMDXComponent=!0}}]);