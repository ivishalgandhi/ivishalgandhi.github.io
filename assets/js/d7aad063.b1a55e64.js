"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?o.createElement(g,i(i({ref:n},d),{},{components:t})):o.createElement(g,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={slug:"create-mongodb-docker",title:"Create MongoDB Standalone and Replica Set containers using Docker",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","mongo-replicaset"]},i=void 0,l={permalink:"/create-mongodb-docker",source:"@site/blog/2021-09-12-create-mongodb-docker.md",title:"Create MongoDB Standalone and Replica Set containers using Docker",description:"Docker Containers offer easy setup, customization and scalability. In this article, i will walk you through how to use Docker to setup MongoDB standalone and replica set containers within minutes.",date:"2021-09-12T00:00:00.000Z",formattedDate:"September 12, 2021",tags:[{label:"mongodb",permalink:"/tags/mongodb"},{label:"containers",permalink:"/tags/containers"},{label:"docker",permalink:"/tags/docker"},{label:"mongo-replicaset",permalink:"/tags/mongo-replicaset"}],readingTime:4.65,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"create-mongodb-docker",title:"Create MongoDB Standalone and Replica Set containers using Docker",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["mongodb","containers","docker","mongo-replicaset"]},prevItem:{title:"Local Home Lab DNS Setup with DNSMasq and NGINX",permalink:"/local-home-lab"}},s={authorsImageUrls:[void 0]},c=[{value:"System Configuration",id:"system-configuration",level:2},{value:"Standalone MongoDB Setup",id:"standalone-mongodb-setup",level:2},{value:"Creating MongoDB ReplicaSet using Docker",id:"creating-mongodb-replicaset-using-docker",level:2}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker Containers offer easy setup, customization and scalability. In this article, i will walk you through how to use Docker to setup MongoDB standalone and replica set containers within minutes."),(0,a.kt)("p",null,"The article is divided in two parts, the first part is setting up the standalone MongoDB container and second part is setting up and grouping MongoDB containers as member of replica set with Docker."),(0,a.kt)("p",null,"Let\u2019s get started."),(0,a.kt)("h2",{id:"system-configuration"},"System Configuration"),(0,a.kt)("p",null,"To run this setup, Docker Engine is required to be installed on the system. Follow the official documentation to setup Docker Engine on your system."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The steps and configuration for both standalone and replica set is not to be used for production deployment. The intended use is only for setting up a environment to support learning of MongoDB.")),(0,a.kt)("h2",{id:"standalone-mongodb-setup"},"Standalone MongoDB Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pull the Docker MongoDB official image from Docker Hub. The following code snippet demonstrates pulling the docker MongoDB 4.4.9 release. To pull the MongoDB 5.0 latest release replace :4.4.9-rc0 with :latest tag")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ docker pull mongo:4.4.9-rc0 \n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To check if the the image pull from Docker Hub was successful")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n$ docker images                                                   \nREPOSITORY   TAG         IMAGE ID       CREATED       SIZE\nmongo        4.4.9-rc0   24599d6cde30   9 days ago    413MB\nmongo        latest      31299b956c79   10 days ago   642MB\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lets start first standalone container \u2013 the below command starts MongoDB docker container with name mongo_449 in detached mode using the 4.4.9-rc0 image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ docker run --name mongo_449 -d mongo:4.4.9-rc0\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List the container status and health by executing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ docker container ls -a\n\nCONTAINER ID   IMAGE          COMMAND                  CREATED       STATUS                      PORTS       NAMES\n96e64ec525a2   24599d6cde30   "docker-entrypoint.s\u2026"   2 hours ago   Up 33 minutes               27017/tcp   mongo_449\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run a command inside the container",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker exec: interact with containers (running/up mode)"),(0,a.kt)("li",{parentName:"ul"},"-i : interactive STDIN open even if not attached to the container"),(0,a.kt)("li",{parentName:"ul"},"-t: pseudo TTY")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to MongoDB daemon")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'root@96e64ec525a2:/# mongo\n\nMongoDB shell version v4.4.9-rc0\nconnecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb\nImplicit session: session { "id" : UUID("ac624a79-908b-4580-90ae-22d0a7aee07a") }\nMongoDB server version: 4.4.9-rc0\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install utilities. The utilities ping, systemctl, sudo installed in the containers can be used for troubleshooting during the setup of Docker containers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nroot@96e64ec525a2:/# apt-get install iputils-ping\u0335\nroot@96e64ec525a2:/# apt-get install sudo \nroot@96e64ec525a2:/# apt-get install systemctl\n\n")),(0,a.kt)("p",null,"This finishes the setup of standalone MongoDB Container. Now let\u2019s look at ReplicaSet setup."),(0,a.kt)("h2",{id:"creating-mongodb-replicaset-using-docker"},"Creating MongoDB ReplicaSet using Docker"),(0,a.kt)("p",null,"A replica set consists of a primary node together with two or more secondary nodes. It is recommended to group three or more nodes, with an odd number of total nodes. The primary node accepts all the write requests which are propagated synchronously or asynchronously to the secondary nodes. Below are the steps required to complete the replica set setup using Docker."),(0,a.kt)("p",null,"Create a new network(bridge) within Docker. The replica set containers will be mapped to the new network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker network create mongo_net\n$ docker network inspect mongo_net                       \n[\n    {\n        "Name": "mongo_net",\n        "Id": "e2567806642a9245436371a9b9904c71fadae969fbd11a7bb8203e07976b1b2a",\n        "Created": "2021-09-11T00:36:33.989688708Z",\n        "Scope": "local",\n        "Driver": "bridge",\n        "EnableIPv6": false,\n        "IPAM": {\n            "Driver": "default",\n            "Options": {},\n            "Config": [\n                {\n                    "Subnet": "172.18.0.0/16",\n                    "Gateway": "172.18.0.1"\n                }\n            ]\n        },\n...\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start 3 containers \u2013 Primary Secondary Secondary",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Break down of parameters docker run : start a new container",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-d")," :  run the container in detached mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-p 20001:27017")," publish container port to the host and bind 27017 to 20001 on the host. This is useful if connecting mongo client like mongosh to container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--name")," : name of the mongo container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-- network")," : connect to user created network mongo_net"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mongo:4.4.9-rc0")," : Docker MongoDB image"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mongod --replSet rs_mongo")," : run the mongod daemon and add the container to replica set name rs_mongo")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 20001:27017 --name mongo1 --network mongo_net mongo:4.4.9-rc0 mongod --replSet rs_mongo\n$ docker run -d -p 20002:27017 --name mongo2 --network mongo_net mongo:4.4.9-rc0 mongod --replSet rs_mongo\n$ docker run -d -p 20003:27017 --name mongo3 --network mongo_net mongo:4.4.9-rc0 mongod --replSet rs_mongo\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up Replica set. Connect to one of the containers and run the below commands. The container that receives the initiate will pass on the configuration to other containers assigned as members.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'rs_mongo [direct: primary] test_2> config = {\n      "_id" : "rs_mongo",\n      "members" : [\n          {\n              "_id" : 0,\n              "host" : "mongo1:27017"\n          },\n          {\n              "_id" : 1,\n              "host" : "mongo2:27017"\n          },\n          {\n              "_id" : 2,\n              "host" : "mongo3:27017"\n          }\n      ]\n  }\n\nrs_mongo [direct: primary] admin> rs.initiate(config)\n\n//Insert test data\n\nrs_mongo [direct: primary] admin> use test_2\nrs_mongo [direct: primary] test_2> db.employees.insert({name: "vishal")\n\n//To read queries on secondary run setReadPref. \nrs_mongo [direct: secondary] test_2>db.getMongo().setReadPref(\'secondary\')\n\nrs_mongo [direct: secondary] test_2> db.employees.find()\n[\n  { _id: ObjectId("613c99801ea796508e3c73f5"), name: \'vishal\' }\n]\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validate Replica Set Configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"rs_mongo [direct: primary] test_2> db.printReplicationInfo()\n\nconfigured oplog size\n'557174 MB'\n---\nlog length start to end\n'71372 secs (19.83 hrs)'\n---\noplog first event time\n'Sat Sep 11 2021 15:47:21 GMT+0530 (India Standard Time)'\n---\noplog last event time\n'Sun Sep 12 2021 11:36:53 GMT+0530 (India Standard Time)'\n---\nnow\n'Sun Sep 12 2021 11:36:54 GMT+0530 (India Standard Time)'\n\n\nrs_mongo [direct: primary] test_2> rs.conf()\n{\n  _id: 'rs_mongo',\n  version: 1,\n  term: 1,\n  protocolVersion: Long(\"1\"),\n  writeConcernMajorityJournalDefault: true,\n  members: [\n    {\n      _id: 0,\n      host: 'mongo1:27017',\n      arbiterOnly: false,\n      buildIndexes: true,\n      hidden: false,\n      priority: 1,\n      tags: {},\n      slaveDelay: Long(\"0\"),\n      votes: 1\n    },\n    {\n      _id: 1,\n      host: 'mongo2:27017',\n      arbiterOnly: false,\n      buildIndexes: true,\n      hidden: false,\n      priority: 1,\n      tags: {},\n      slaveDelay: Long(\"0\"),\n      votes: 1\n    },\n    {\n      _id: 2,\n      host: 'mongo3:27017',\n      arbiterOnly: false,\n      buildIndexes: true,\n      hidden: false,\n      priority: 1,\n      tags: {},\n      slaveDelay: Long(\"0\"),\n      votes: 1\n    }\n\n")),(0,a.kt)("p",null,"That concludes this article."))}m.isMDXComponent=!0}}]);