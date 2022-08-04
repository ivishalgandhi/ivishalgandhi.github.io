"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={slug:"mongodb-rs-docker-persistent-volume",title:"MongoDB Replicaset with Persistent Volume using Docker Compose",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["mongodb","docker","replicaset","persistent-volume"]},a=void 0,s={permalink:"/mongodb-rs-docker-persistent-volume",source:"@site/blog/2021-09-18-mongodb-rs-docker-persistent-volume.md",title:"MongoDB Replicaset with Persistent Volume using Docker Compose",description:"In this article we will see the steps required to create and configure MongoDB replicaset containers on persistent volumes using Docker Compose. Compose was developed to define, configure and spin-up multi-container docker applications with single command, further reducing . Extensive usage of Docker with several container management quickly becomes cumbersome, Compose overcomes this problem and allows to easily handle multiple containers at once using YAML configuration docker-compose.yml",date:"2021-09-18T00:00:00.000Z",formattedDate:"September 18, 2021",tags:[{label:"mongodb",permalink:"/tags/mongodb"},{label:"docker",permalink:"/tags/docker"},{label:"replicaset",permalink:"/tags/replicaset"},{label:"persistent-volume",permalink:"/tags/persistent-volume"}],readingTime:2.795,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"mongodb-rs-docker-persistent-volume",title:"MongoDB Replicaset with Persistent Volume using Docker Compose",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["mongodb","docker","replicaset","persistent-volume"]},prevItem:{title:"Configure Sharding in MongoDB on Docker Containers",permalink:"/sharding-mongo-docker"},nextItem:{title:"Create MongoDB Standalone and Replica Set containers using Docker",permalink:"/create-mongodb-docker"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article we will see the steps required to create and configure MongoDB replicaset containers on ",(0,o.kt)("strong",{parentName:"p"},"persistent volumes")," using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),". Compose was developed to define, configure and spin-up multi-container docker applications with single command, further reducing . Extensive usage of Docker with several container management quickly becomes cumbersome, Compose overcomes this problem and allows to easily handle multiple containers at once using YAML configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")))}m.isMDXComponent=!0}}]);