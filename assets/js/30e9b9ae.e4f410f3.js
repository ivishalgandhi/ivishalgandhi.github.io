"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=s,u=h["".concat(i,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={slug:"local-home-lab",title:"Local Home Lab DNS Setup with DNSMasq and NGINX",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["reverse-proxy","NGINX","DNSMASQ","Lab"]},o=void 0,l={permalink:"/local-home-lab",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-10-local-home-lab.md",source:"@site/blog/2022-04-10-local-home-lab.md",title:"Local Home Lab DNS Setup with DNSMasq and NGINX",description:"As I explored and set up an increased number of FOSS software using containers(Docker and LXD) and virtual machines(Multipass) in my home lab environment, I realized the difficulty in remembering the different ports the applications and containers are running. The solution to address this problem was to have a Domain Name System for the local network, which works to resolve local and external addresses with a reverse proxy to redirect calls based on DNS resolution.",date:"2022-04-10T00:00:00.000Z",formattedDate:"April 10, 2022",tags:[{label:"reverse-proxy",permalink:"/tags/reverse-proxy"},{label:"NGINX",permalink:"/tags/nginx"},{label:"DNSMASQ",permalink:"/tags/dnsmasq"},{label:"Lab",permalink:"/tags/lab"}],readingTime:3.34,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"local-home-lab",title:"Local Home Lab DNS Setup with DNSMasq and NGINX",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["reverse-proxy","NGINX","DNSMASQ","Lab"]},prevItem:{title:"Guide to Software Bill of Materials(SBoM) and Docker SBOM CLI",permalink:"/docker-sbom"}},i={authorsImageUrls:[void 0]},c=[{value:"Step 1: Disable systemd-resolve which binds to port 53, the default port for DNSMasq",id:"step-1-disable-systemd-resolve-which-binds-to-port-53-the-default-port-for-dnsmasq",level:3},{value:"Step 2: Install DNSUtils, DNSMasq",id:"step-2-install-dnsutils-dnsmasq",level:3},{value:"Step 3: Create the DNSMasq configuration file",id:"step-3-create-the-dnsmasq-configuration-file",level:3},{value:"Step 4: Add container DNS records in the file./etc/hosts. The records in the hosts file will be used by DNSMasq for client responses",id:"step-4-add-container-dns-records-in-the-fileetchosts-the-records-in-the-hosts-file-will-be-used-by-dnsmasq-for-client-responses",level:3},{value:"Step 5: Restart DNSMasq service",id:"step-5-restart-dnsmasq-service",level:3},{value:"Step 6: Install NGINX",id:"step-6-install-nginx",level:3},{value:"Step 6: To enable reverse proxy feature, create a new NGINX configuration file in <code>sites-enabled</code> directory",id:"step-6-to-enable-reverse-proxy-feature-create-a-new-nginx-configuration-file-in-sites-enabled-directory",level:3},{value:"Step 7 reload NGINX for the configuration to take into effect",id:"step-7-reload-nginx-for-the-configuration-to-take-into-effect",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As I explored and set up an increased number of FOSS software using containers(Docker and LXD) and virtual machines(Multipass) in my home lab environment, I realized the difficulty in remembering the different ports the applications and containers are running. The solution to address this problem was to have a Domain Name System for the local network, which works to resolve local and external addresses with a reverse proxy to redirect calls based on DNS resolution."),(0,s.kt)("p",null,"The below command lists the Docker Containers and ports the container are running on, the requirement is to create a domain for a home setup with domain homelab.net and access the containerized applications with appsmith.homelab.net; typesense.homelab.net; excalidraw.homelab.net"),(0,s.kt)("p",null,"Let\u2019s get the list of docker containers with port numbers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# get container names and port numbers\n$ docker container ls --format "table {{.ID}}\\t{{.Names}}\\t{{.Ports}}" -a\n\n\nCONTAINER ID   NAMES                        PORTS\ncbb2ac402270   appsmith                     0.0.0.0:9001->9001/tcp, 0.0.0.0:70->80/tcp, 0.0.0.0:444->443/tcp\nc9875323b989   typesense_typesense-1_1      0.0.0.0:8108->8108/tcp\nc453288c8496   excalidraw                   0.0.0.0:3001->80/tcp\n5be5d33f1f50   k8s-control-plane            127.0.0.1:34589->6443/tcp\n4140d2fbf7d5   mysql_nocodb_1               0.0.0.0:8082->8080/tcp\ne7310461bee9   mysql_root_db_1              3306/tcp, 33060/tcp\n9b56c33d45d5   meilisearch_ms_1             0.0.0.0:7700->7700/tcp\n9ac6a0e16b0e   mongo2                       0.0.0.0:20002->27017/tcp\n2aaf01d2233f   mongo1                       0.0.0.0:20001->27017/tcp\n860b521f97dc   mongo3                       0.0.0.0:20003->27017/tcp\nd8ad1ec3cab8   rethinkdb_rethinkdb_1        0.0.0.0:28015->28015/tcp, 0.0.0.0:29015->29015/tcp, 0.0.0.0:8081->8080/tcp\n')),(0,s.kt)("p",null,"The containers and applications running on the local home network as shown above do not have a public domain name, the option was to look for setting up a DNS server with ",(0,s.kt)("a",{parentName:"p",href:"https://thekelleys.org.uk/dnsmasq/doc.html"},"DNSMasq"),", and a reverse proxy using ",(0,s.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"NGINX"),". The containers may not be the only use case scenario for local DNS servers with ",(0,s.kt)("a",{parentName:"p",href:"https://thekelleys.org.uk/dnsmasq/doc.html"},"DNSMasq"),", there could be many others like accessing a local file share across devices; accessing applications from a mobile device, and sharing a printer."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://thekelleys.org.uk/dnsmasq/doc.html"},"DNSMasq")," - Dnsmasq provides network infrastructure for small networks: DNS, DHCP, router advertisement, and network boot. It is designed to be lightweight and has a small footprint, suitable for resource-constrained routers and firewalls."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"NGINX")," - Reverse Proxy \u2013 A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Let us get started with the implementation steps for DNSMasq and NGINX. The below steps are performed on Ubuntu 20.04 (Debian-based distro).")),(0,s.kt)("p",null,"Before starting the installation of DNSMasq, "),(0,s.kt)("h3",{id:"step-1-disable-systemd-resolve-which-binds-to-port-53-the-default-port-for-dnsmasq"},"Step 1: Disable systemd-resolve which binds to port 53, the default port for DNSMasq"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n sudo systemctl stop systemd-resolved\n sudo systemctl disable systemd-resolved\n\n")),(0,s.kt)("h3",{id:"step-2-install-dnsutils-dnsmasq"},"Step 2: Install DNSUtils, DNSMasq"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update && sudo apt install dnsmasq && sudo apt install dnsutils\n")),(0,s.kt)("h3",{id:"step-3-create-the-dnsmasq-configuration-file"},"Step 3: Create the DNSMasq configuration file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ dnsmasq_conf="no-dhcp-interface=enp2s0f0\nbogus-priv\ndomain=homelab.net\nexpand-hosts\nlocal=/homelab.net/\ndomain-needed\nno-resolv\nno-poll\nserver=8.8.8.8\nserver=8.8.4.4"\n\n$ sudo echo -e "$dnsmasq_conf" > /etc/dnsmasq.d/home-lab.net \n\n$ sudo systemctl restart dnsmasq\n')),(0,s.kt)("h3",{id:"step-4-add-container-dns-records-in-the-fileetchosts-the-records-in-the-hosts-file-will-be-used-by-dnsmasq-for-client-responses"},"Step 4: Add container DNS records in the file./etc/hosts. The records in the hosts file will be used by DNSMasq for client responses"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"  $ sudo nano /etc/hosts  \n  # add the below records to the hosts file\n  #Container DNS records\n  # appsmith\n  192.168.20.113 appsmith\n  # excalidraw\n  192.168.20.113 excalidraw\n  # typesense\n  192.168.20.113 typesense\n")),(0,s.kt)("h3",{id:"step-5-restart-dnsmasq-service"},"Step 5: Restart DNSMasq service"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl restart dnsmasq.service\n")),(0,s.kt)("h3",{id:"step-6-install-nginx"},"Step 6: Install NGINX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt update && sudo apt install nginx\n")),(0,s.kt)("h3",{id:"step-6-to-enable-reverse-proxy-feature-create-a-new-nginx-configuration-file-in-sites-enabled-directory"},"Step 6: To enable reverse proxy feature, create a new NGINX configuration file in ",(0,s.kt)("inlineCode",{parentName:"h3"},"sites-enabled")," directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"}," $ sudo nano /etc/nginx/sites-enabled/homelab.conf\n  server {\n          listen 80;\n          listen [::]:80;\n          server_name typesense.homelab.net;\n          location / {\n                   proxy_bind 192.168.20.113;\n                   proxy_pass http://localhost:3000;\n          }\n  }\n  server {\n          listen 80;\n          listen [::]:80;\n          server_name appsmith.homelab.net;\n          location / {\n                  proxy_bind 192.168.20.113;\n                  proxy_pass http://localhost:70;\n          }\n\n  }\n  server {\n          listen 80;\n          listen [::]:80;\n          server_name excalidraw.homelab.net;\n          location / {\n                  proxy_bind 192.168.20.113;\n                  proxy_pass http://localhost:3001;\n          }\n\n  }\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"proxy_pass")," argument will forward all incoming client requests to app.homelab.net to the respective app. The IP address and port number can be easily changed."),(0,s.kt)("h3",{id:"step-7-reload-nginx-for-the-configuration-to-take-into-effect"},"Step 7 reload NGINX for the configuration to take into effect"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl reload nginx\n")),(0,s.kt)("p",null,"After a successful implementation, we will be able to access container applications using domain URLs as seen in the below screenshot with three panes first pane is appsmith ; second pane is excalidraw and third pane is typesense."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"local-home-lab-snapshot",src:n(7496).Z,width:"2047",height:"1111"})))}d.isMDXComponent=!0},7496:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2022-07-19-23-09-57-8b3ba580a484e53a7d25c704b6bccf60.png"}}]);