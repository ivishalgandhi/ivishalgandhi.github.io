"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"docker-sbom","metadata":{"permalink":"/docker-sbom","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-09-docker-sbom.md","source":"@site/blog/2022-07-09-docker-sbom.md","title":"Guide to Software Bill of Materials(SBoM) and Docker SBOM CLI","description":"An Software Bill of Materials (SBoM) is a formal record containing the details and supply chain relationships of various components used in building the software. These components, including libraries and modules, can be proprietary or open source,free or paid and the data can be widely available or access-restricted.","date":"2022-07-09T00:00:00.000Z","formattedDate":"July 9, 2022","tags":[{"label":"docker-desktop","permalink":"/tags/docker-desktop"},{"label":"SBOM","permalink":"/tags/sbom"},{"label":"docker","permalink":"/tags/docker"}],"readingTime":2.895,"hasTruncateMarker":true,"authors":[{"name":"Vishal Gandhi","url":"https://github.com/ivishalgandhi","image_url":"https://github.com/ivishalgandhi.png","imageURL":"https://github.com/ivishalgandhi.png"}],"frontMatter":{"slug":"docker-sbom","title":"Guide to Software Bill of Materials(SBoM) and Docker SBOM CLI","authors":{"name":"Vishal Gandhi","url":"https://github.com/ivishalgandhi","image_url":"https://github.com/ivishalgandhi.png","imageURL":"https://github.com/ivishalgandhi.png"},"tags":["docker-desktop","SBOM","docker"]},"nextItem":{"title":"Local Home Lab DNS Setup with DNSMasq and NGINX","permalink":"/local-home-lab"}},"content":"An **Software Bill of Materials (SBoM)** is a formal record containing the details and supply chain relationships of various components used in building the software. These components, including libraries and modules, can be proprietary or open source,free or paid and the data can be widely available or access-restricted.\\n\\n\x3c!--truncate--\x3e\\n\\n![](sbom.webp)\\n\\nSBoM is analogous to a list of ingredients on food packaging. In May 2021, the US President released the [Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) on improving the Nation\u2019s Cybersecurity. The Software Bill of Materials (SBoM) directly impacts all developers. The SBoM requires third-party software companies to provide customers with the code equivalent of a \u201cnutrition chart.\u201d\\n\\n## When should SBoM be used \u2013 Use cases ?\\n\\n* **Developing products**\\n  * Scan vulnerabilities in the components\\n  * Keep codebase to bare minimum, reduce the number of dependencies and size\\n  * Generate SBoM for end users\\n\\n* **IT Operations**\\n  * Understand operational risk\\n  * Understand potential exploitations\\n  * Real time asset inventory\\n  * Software Selection\\n  * Identify known vulnerabilities and compliance\\n\\n* **EOL**\\n  * Complete visibility to components before evaluation or deploying in production\\n  * Understand the software architecture and the dependencies of the software\\n\\n## Why SBOM ?\\n\\n* Requirement from regulatory bodies to track the components used in the software\\n\\n* Transparency of components getting shipped\\n\\n* Container ecosystem has exploded and the need to track the components getting shipped is a must\\n\\n* Software Vulnerabilities are bugs\\n\\n* Detecting and remediating Vulnerabilities\\n\\n## SBOM Formats\\n\\n* **SPDX (Software Package Data Exchange )**\\n  * Open standard for communicating software bill of material information, including components, licenses, copyrights and security references. Reduces redundant work by providing a common format for organizations and communities to share and use\\n\\n* **CycloneDX**\\n  * Open Web Application Security Project(OWASP) CycloneDX is a lightweight Software Bill of Materials (SBOM) standard designed for use in application security contexts and supply chain component analysis.\\n\\n* **SWID (Software Identification Tags)**\\n  * SWID is used primarily to identify installed software and is the preferred format of the NVD. SWID tags are used in the National Vulnerability Database to describe vulnerable components. The CycloneDX specification compliments this work as CycloneDX documents can incorporate SWID tags and other high-level SWID metadata and optionally include entire SWID documents. Use of SWID tag ID\u2019s are useful in determining if a specific component has known vulnerabilities.\\n\\n## Docker Desktop \u2013 SBOM CLI\\n\\nIn Docker Desktop 4.7.0 Docker introduced and included a new experimental docker sbom CLI that is used for displaying SBoM for any container image. docker sbom scans the layer of container images using the Syft Project\\n\\n## Usage\\n\\n* Display SBOM in CyloneDX format\\n\\n\\n```shell\\n\\t\\n$ docker sbom mongo:latest --format cyclonedx-json | more\\n \\n{\\n      \\"type\\": \\"library\\",\\n      \\"publisher\\": \\"MongoDB Packaging \\\\u003cpackaging@mongodb.com\\\\u003e\\",\\n      \\"name\\": \\"mongodb-org-server\\",\\n      \\"version\\": \\"5.0.9\\",\\n      \\"cpe\\": \\"cpe:2.3:a:mongodb-org-server:mongodb-org-server:5.0.9:*:*:*:*:*:*:*\\",\\n      \\"purl\\": \\"pkg:deb/ubuntu/mongodb-org-server@5.0.9?arch=arm64\\\\u0026upstream=mongodb-org\\\\u0026distro=ubuntu-20.04\\",\\n      \\"properties\\": [\\n        {\\n          \\"name\\": \\"syft:package:foundBy\\",\\n          \\"value\\": \\"dpkgdb-cataloger\\"\\n        },\\n        {\\n          \\"name\\": \\"syft:package:metadataType\\",\\n          \\"value\\": \\"DpkgMetadata\\"\\n        }\\n```\\n\\n* Display SBOM summary of packages. e.g. using the below command we can check for the log4j vulnerabilities\\n\\n```shell\\t\\n$ docker sbom neo4j | grep log4j\\n \\nlog4j-api                           2.17.1                                     java-archive\\nlog4j-core                          2.17.1                                     java-archive\\n\\t\\n$ docker sbom neo4j:4.4.1 | grep log4j\\n \\nlog4j-api                           2.15.0                                     java-archive\\nlog4j-core                          2.15.0                                     java-archive\\n\\t\\n$ docker sbom elasticsearch:7.16.3 | grep log4j\\n \\nelasticsearch-log4j                   7.16.3                             java-archive\\nlog4j-1.2-api                         2.17.1                             java-archive\\nlog4j-api                             2.17.1                             java-archive\\nlog4j-core                            2.17.1                             java-archive\\nlog4j-slf4j-impl                      2.17.1                             java-archive\\n```\\n\\nThere are many benefits to generate SBOM for compliance and vulnerability analysis. Further SBOM can be used for input to open source vulnerability databases like [Snyk](https://github.com/snyk/cli) and open source vulnerability scanning tools like [Grype](https://github.com/anchore/grype)"},{"id":"local-home-lab","metadata":{"permalink":"/local-home-lab","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-10-local-home-lab.md","source":"@site/blog/2022-04-10-local-home-lab.md","title":"Local Home Lab DNS Setup with DNSMasq and NGINX","description":"As I explored and set up an increased number of FOSS software using containers(Docker and LXD) and virtual machines(Multipass) in my home lab environment, I realized the difficulty in remembering the different ports the applications and containers are running. The solution to address this problem was to have a Domain Name System for the local network, which works to resolve local and external addresses with a reverse proxy to redirect calls based on DNS resolution.","date":"2022-04-10T00:00:00.000Z","formattedDate":"April 10, 2022","tags":[{"label":"reverse-proxy","permalink":"/tags/reverse-proxy"},{"label":"NGINX","permalink":"/tags/nginx"},{"label":"DNSMASQ","permalink":"/tags/dnsmasq"},{"label":"Lab","permalink":"/tags/lab"}],"readingTime":3.34,"hasTruncateMarker":true,"authors":[{"name":"Vishal Gandhi","url":"https://github.com/ivishalgandhi","image_url":"https://github.com/ivishalgandhi.png","imageURL":"https://github.com/ivishalgandhi.png"}],"frontMatter":{"slug":"local-home-lab","title":"Local Home Lab DNS Setup with DNSMasq and NGINX","authors":{"name":"Vishal Gandhi","url":"https://github.com/ivishalgandhi","image_url":"https://github.com/ivishalgandhi.png","imageURL":"https://github.com/ivishalgandhi.png"},"tags":["reverse-proxy","NGINX","DNSMASQ","Lab"]},"prevItem":{"title":"Guide to Software Bill of Materials(SBoM) and Docker SBOM CLI","permalink":"/docker-sbom"}},"content":"As I explored and set up an increased number of FOSS software using containers(Docker and LXD) and virtual machines(Multipass) in my home lab environment, I realized the difficulty in remembering the different ports the applications and containers are running. The solution to address this problem was to have a Domain Name System for the local network, which works to resolve local and external addresses with a reverse proxy to redirect calls based on DNS resolution.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nThe below command lists the Docker Containers and ports the container are running on, the requirement is to create a domain for a home setup with domain homelab.net and access the containerized applications with appsmith.homelab.net; typesense.homelab.net; excalidraw.homelab.net\\n\\nLet\u2019s get the list of docker containers with port numbers\\n\\n```shell\\n# get container names and port numbers\\n$ docker container ls --format \\"table {{.ID}}\\\\t{{.Names}}\\\\t{{.Ports}}\\" -a\\n\\n\\nCONTAINER ID   NAMES                        PORTS\\ncbb2ac402270   appsmith                     0.0.0.0:9001->9001/tcp, 0.0.0.0:70->80/tcp, 0.0.0.0:444->443/tcp\\nc9875323b989   typesense_typesense-1_1      0.0.0.0:8108->8108/tcp\\nc453288c8496   excalidraw                   0.0.0.0:3001->80/tcp\\n5be5d33f1f50   k8s-control-plane            127.0.0.1:34589->6443/tcp\\n4140d2fbf7d5   mysql_nocodb_1               0.0.0.0:8082->8080/tcp\\ne7310461bee9   mysql_root_db_1              3306/tcp, 33060/tcp\\n9b56c33d45d5   meilisearch_ms_1             0.0.0.0:7700->7700/tcp\\n9ac6a0e16b0e   mongo2                       0.0.0.0:20002->27017/tcp\\n2aaf01d2233f   mongo1                       0.0.0.0:20001->27017/tcp\\n860b521f97dc   mongo3                       0.0.0.0:20003->27017/tcp\\nd8ad1ec3cab8   rethinkdb_rethinkdb_1        0.0.0.0:28015->28015/tcp, 0.0.0.0:29015->29015/tcp, 0.0.0.0:8081->8080/tcp\\n```\\n\\nThe containers and applications running on the local home network as shown above do not have a public domain name, the option was to look for setting up a DNS server with [DNSMasq](https://thekelleys.org.uk/dnsmasq/doc.html), and a reverse proxy using [NGINX](https://www.nginx.com/). The containers may not be the only use case scenario for local DNS servers with [DNSMasq](https://thekelleys.org.uk/dnsmasq/doc.html), there could be many others like accessing a local file share across devices; accessing applications from a mobile device, and sharing a printer.\\n\\n\\n[DNSMasq](https://thekelleys.org.uk/dnsmasq/doc.html) - Dnsmasq provides network infrastructure for small networks: DNS, DHCP, router advertisement, and network boot. It is designed to be lightweight and has a small footprint, suitable for resource-constrained routers and firewalls.\\n\\n[NGINX](https://www.nginx.com/) - Reverse Proxy \u2013 A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.\\n\\n**Let us get started with the implementation steps for DNSMasq and NGINX. The below steps are performed on Ubuntu 20.04 (Debian-based distro).**\\n\\nBefore starting the installation of DNSMasq, \\n\\n### Step 1: Disable systemd-resolve which binds to port 53, the default port for DNSMasq\\n\\n```shell\\n\\n sudo systemctl stop systemd-resolved\\n sudo systemctl disable systemd-resolved\\n\\n```\\n\\n### Step 2: Install DNSUtils, DNSMasq\\n\\n```shell\\nsudo apt update && sudo apt install dnsmasq && sudo apt install dnsutils\\n```\\n\\n### Step 3: Create the DNSMasq configuration file\\n\\n```shell\\n$ dnsmasq_conf=\\"no-dhcp-interface=enp2s0f0\\nbogus-priv\\ndomain=homelab.net\\nexpand-hosts\\nlocal=/homelab.net/\\ndomain-needed\\nno-resolv\\nno-poll\\nserver=8.8.8.8\\nserver=8.8.4.4\\"\\n\\n$ sudo echo -e \\"$dnsmasq_conf\\" > /etc/dnsmasq.d/home-lab.net \\n\\n$ sudo systemctl restart dnsmasq\\n```\\n\\n\\n### Step 4: Add container DNS records in the file./etc/hosts. The records in the hosts file will be used by DNSMasq for client responses\\n\\n```shell\\n  $ sudo nano /etc/hosts  \\n  # add the below records to the hosts file\\n  #Container DNS records\\n  # appsmith\\n  192.168.20.113 appsmith\\n  # excalidraw\\n  192.168.20.113 excalidraw\\n  # typesense\\n  192.168.20.113 typesense\\n```\\n\\n### Step 5: Restart DNSMasq service\\n\\n```shell\\n$ sudo systemctl restart dnsmasq.service\\n```\\n\\n### Step 6: Install NGINX\\n\\n```shell\\n$ sudo apt update && sudo apt install nginx\\n```\\n\\n\\n### Step 6: To enable reverse proxy feature, create a new NGINX configuration file in `sites-enabled` directory\\n\\n```shell\\n $ sudo nano /etc/nginx/sites-enabled/homelab.conf\\n  server {\\n          listen 80;\\n          listen [::]:80;\\n          server_name typesense.homelab.net;\\n          location / {\\n                   proxy_bind 192.168.20.113;\\n                   proxy_pass http://localhost:3000;\\n          }\\n  }\\n  server {\\n          listen 80;\\n          listen [::]:80;\\n          server_name appsmith.homelab.net;\\n          location / {\\n                  proxy_bind 192.168.20.113;\\n                  proxy_pass http://localhost:70;\\n          }\\n\\n  }\\n  server {\\n          listen 80;\\n          listen [::]:80;\\n          server_name excalidraw.homelab.net;\\n          location / {\\n                  proxy_bind 192.168.20.113;\\n                  proxy_pass http://localhost:3001;\\n          }\\n\\n  }\\n```\\n\\nThe `proxy_pass` argument will forward all incoming client requests to app.homelab.net to the respective app. The IP address and port number can be easily changed.\\n \\n### Step 7 reload NGINX for the configuration to take into effect\\n```shell \\n$ sudo systemctl reload nginx\\n```\\nAfter a successful implementation, we will be able to access container applications using domain URLs as seen in the below screenshot with three panes first pane is appsmith ; second pane is excalidraw and third pane is typesense.\\n\\n![local-home-lab-snapshot](2022-07-19-23-09-57.png)"}]}')}}]);