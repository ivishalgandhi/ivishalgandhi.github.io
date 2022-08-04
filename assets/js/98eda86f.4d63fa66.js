"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(r),m=o,b=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={slug:"percona-mongo-replicaset-minio",title:"How to configure Percona MongoDB Replicaset, Percona Backup Manager, Backup Agent using Docker and perform Replicaset backup, restore using S3 compatible object storage \u2013 MINIO",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","s3","minio","pbm"]},i=void 0,c={permalink:"/percona-mongo-replicaset-minio",source:"@site/blog/2022-05-29-percona-mongo-replicaset-minio.md",title:"How to configure Percona MongoDB Replicaset, Percona Backup Manager, Backup Agent using Docker and perform Replicaset backup, restore using S3 compatible object storage \u2013 MINIO",description:"In this blog post, i will walk you through the steps required to containerize Percona Server for MongoDB, Percona Backup Manager, and Agent from source and configure cloud-native S3(Simple Storage Service) compatible distributed object storage MINIO to backup and restore Percona MongoDB snapshot backups.",date:"2022-05-29T00:00:00.000Z",formattedDate:"May 29, 2022",tags:[{label:"mongodb",permalink:"/tags/mongodb"},{label:"containers",permalink:"/tags/containers"},{label:"docker",permalink:"/tags/docker"},{label:"s3",permalink:"/tags/s-3"},{label:"minio",permalink:"/tags/minio"},{label:"pbm",permalink:"/tags/pbm"}],readingTime:4.205,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"percona-mongo-replicaset-minio",title:"How to configure Percona MongoDB Replicaset, Percona Backup Manager, Backup Agent using Docker and perform Replicaset backup, restore using S3 compatible object storage \u2013 MINIO",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","s3","minio","pbm"]},prevItem:{title:"Guide to Software Bill of Materials(SBoM) and Docker SBOM CLI",permalink:"/docker-sbom"},nextItem:{title:"Local Home Lab DNS Setup with DNSMasq and NGINX",permalink:"/local-home-lab"}},p={authorsImageUrls:[void 0]},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this blog post, i will walk you through the steps required to containerize ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/percona/percona-server-mongodb"},"Percona Server for MongoDB"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/percona/percona-backup-mongodb"},"Percona Backup Manager"),", and Agent from source and configure cloud-native S3(",(0,o.kt)("strong",{parentName:"p"},"S"),"imple ",(0,o.kt)("strong",{parentName:"p"},"S"),"torage ",(0,o.kt)("strong",{parentName:"p"},"S"),"ervice) compatible distributed object storage ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"MINIO")," to backup and restore Percona MongoDB snapshot backups."))}u.isMDXComponent=!0}}]);