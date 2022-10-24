(self.webpackChunk=self.webpackChunk||[]).push([[5522],{10167:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(93456);const s={slug:"rest-api-design-rules",title:"Understanding REST API Design Rules",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["rest","restapi","rest-api-design-rules"]},o=void 0,i={permalink:"/rest-api-design-rules",source:"@site/blog/2022-10-02-rest-api-design-rules.md",title:"Understanding REST API Design Rules",description:"Introduction to REST API",date:"2022-10-02T00:00:00.000Z",formattedDate:"October 2, 2022",tags:[{label:"rest",permalink:"/tags/rest"},{label:"restapi",permalink:"/tags/restapi"},{label:"rest-api-design-rules",permalink:"/tags/rest-api-design-rules"}],readingTime:7.035,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"rest-api-design-rules",title:"Understanding REST API Design Rules",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["rest","restapi","rest-api-design-rules"]},prevItem:{title:"Documentation as a code",permalink:"/doc-as-code"},nextItem:{title:"Understanding MongoDB Replicasets and Write Concern - Part 1",permalink:"/mongodb-replicaset-write-concern-read-pref"}},u={authorsImageUrls:[void 0]},p=[{value:"Introduction to REST API",id:"introduction-to-rest-api",level:2},{value:"Understanding Uniform Resource Identifier (URI)",id:"understanding-uniform-resource-identifier-uri",level:2},{value:"URI Format",id:"uri-format",level:3},{value:"URI Resource Model",id:"uri-resource-model",level:3},{value:"REST API Design Rules",id:"rest-api-design-rules",level:2},{value:"URI",id:"uri",level:3},{value:"HTTP Methods",id:"http-methods",level:3},{value:"References",id:"references",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction-to-rest-api"},"Introduction to REST API"),(0,n.kt)("p",null,"REST (Representational State Transfer) is an architectural style for building distributed systems. A Web API conforms to the REST architectural style, called RESTful Web API. "),(0,n.kt)("p",null,"REST APIs are stateless, client-server, cacheable, layered systems designed around resources. The set of resources is known as the REST API's ",(0,n.kt)("em",{parentName:"p"},"resource model")),(0,n.kt)(l.Mermaid,{config:{},chart:"\nsequenceDiagram\n\nparticipant Client\nparticipant Web API \nParticipant Web Service \nClient->>Web API: Request\nWeb API->>Web Service: Request\nWeb Service->>Web API: Response\nWeb API->>Client: Response\n",mdxType:"Mermaid"}),(0,n.kt)("p",null,"REST APIs are one of the most common and fundamental ways to expose data and functionality as web services. REST APIs use HTTP requests to GET, PUT, POST, and DELETE data. "),(0,n.kt)("p",null,"An adequately designed REST API should be easy to understand, use, and evolve over time. It will help clients and browser apps consume the API more efficiently. "),(0,n.kt)("p",null,"Before designing and developing a REST API, we need to seek answers to the following questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What are URI Paths? Structure of URI Path segments? "),(0,n.kt)("li",{parentName:"ul"},"When to use plural nouns or verbs for URI Path segments?"),(0,n.kt)("li",{parentName:"ul"},"What is the HTTP response status code, and how to use it in a specific scenario? "),(0,n.kt)("li",{parentName:"ul"},"How to map non-CRUD operations to HTTP methods? ")),(0,n.kt)("h2",{id:"understanding-uniform-resource-identifier-uri"},"Understanding Uniform Resource Identifier (URI)"),(0,n.kt)("p",null,"REST APIs use Uniform Resource Identifiers (URIs) to identify resources. A resource is any information that can be named. Resources are separated by forward slashes (/). A good URI should be short, easy to remember, and should give the user an idea about the resource."),(0,n.kt)("h3",{id:"uri-format"},"URI Format"),(0,n.kt)("p",null,"The URI format is as follows:"),(0,n.kt)("p",null,'URI = scheme "://" host ','[ ":" port ][ "/" path ]'," ",'[ "?" query ][ "#" fragment ]'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"http://<domain-name>/<resource-name>/<resource-id>\n")),(0,n.kt)("h3",{id:"uri-resource-model"},"URI Resource Model"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Document"),(0,n.kt)("td",{parentName:"tr",align:null},"A document resource is similar to database record or instance of an object. It is a single resource that can be retrieved, created, updated, or deleted. ",(0,n.kt)("br",null)," For example, information about a blog author is a document resource. ",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"http://api.blog.com/authors/vishal-gandhi"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Collection"),(0,n.kt)("td",{parentName:"tr",align:null},"A collection resource is a server-managed directory of resources. ",(0,n.kt)("br",null)," For example, a list of blog authors is a collection resource. ",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"http://api.blog.com/authors"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Store"),(0,n.kt)("td",{parentName:"tr",align:null},"A store is a repository which is managed by client. Using store resource client can create, update, delete and retrieve documents. ",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"http://api.blog.com/store/authors/vishal-gandhi"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Controller"),(0,n.kt)("td",{parentName:"tr",align:null},"A controller resource models a procedure concept. It is a resource that represents a procedure that can be invoked. A controller resource is a collection resource that supports the POST method. The POST method is used to invoke the controller resource. The controller resource can be used to model a procedure that can be invoked. For example, the following URI models a controller resource that represents a procedure that can be invoked to send an email: ",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"POST /api.blog.com/email/email/send")," ",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"{Collection}/{Store}/{Document}/{Controller}"))))),(0,n.kt)("h2",{id:"rest-api-design-rules"},"REST API Design Rules"),(0,n.kt)("h3",{id:"uri"},"URI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : Forward Slash (/) is used to separate resources in the URI and indicate a hierarchical relationship"))),(0,n.kt)("p",null,"A trailing forward slash (/) is not required as the last character of a URI. Many web servers automatically redirect requests with a trailing forward slash to the same URI without the trailing forward slash."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule : Use plural nouns for URI Path segments that represent collections or resources"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule : Use HTTP Methods to Perform Operations on Resources")))),(0,n.kt)("p",null,"HTTP methods are used to perform operations on resources. The following table lists the HTTP methods and their corresponding operations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Operation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GET"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PUT"),(0,n.kt)("td",{parentName:"tr",align:null},"Update a resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,n.kt)("td",{parentName:"tr",align:null},"Delete a resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,n.kt)("td",{parentName:"tr",align:null},"Update a resource with Partial data")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JS"},"const express = require('express');\nconst bodyParser = require('body-parser');\nconst app = express();\nconst port = 3000;\n\napp.use(bodyParser.json());\n\napp.get('/authors', (req, res) => {\n\nres.send('Authors List'); \n\n//get author list from Sql lite backend \n\nres.json(authors);\n\n});\n  \napp.post('/authors', (req, res) => {\n  \n  res.send('Add Author');\n\n  //add author to Sql lite backend\n\n  res.json(author);\n\n});\n\n\n//update an author\n\napp.put('/authors/:id', (req, res) => {\n\n  res.send('Update Author');\n\n  res.json(author);\n\n});\n\n//delete an author\n\napp.delete('/authors/:id', (req, res) => {\n\n  res.send('Delete Author');\n\n  res.json(author);\n\n});\n\napp.patch('/authors/:id', (req, res) => {\n\n  res.send('Update Author Email');\n\n  res.json(author);\n\n}); \n\n\napp.listen(port, () => {\n  console.log(`Blog Example app listening at http://localhost:${port}`);\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : Hyphen (-) is used to separate words in URI Path"))),(0,n.kt)("p",null,"Hyphens (-) are used to separate words in URI path. For example, the URI path for a resource named ",(0,n.kt)("em",{parentName:"p"},"user-profile")," is ",(0,n.kt)("em",{parentName:"p"},"/user-profile"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : Underscore (_) is not used in URI"))),(0,n.kt)("p",null,"Underscores (_) are not used in URI path due to text editors and browsers depending on the font hide the underscore by underlining the text."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : File Extensions are not used in URI"))),(0,n.kt)("p",null,"A REST API should not use file extensions in the URI. For example, the URI path for a resource named ",(0,n.kt)("em",{parentName:"p"},"user-profile")," is ",(0,n.kt)("em",{parentName:"p"},"/user-profile")," and not ",(0,n.kt)("em",{parentName:"p"},"/user-profile.json"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : If API Provides a developer portal then it should be accessible via a consistent subdomain"))),(0,n.kt)("p",null,"If an API provides a developer portal, then the developer portal should be accessible via a consistent subdomain. For example, the developer portal for the weather API is accessible via ",(0,n.kt)("em",{parentName:"p"},"developer.blog.api.com"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule : Lowercase letters are preferred in URI"))),(0,n.kt)("p",null,"Lowercase letters are preferred in URI. For example, the URI path for a resource named ",(0,n.kt)("em",{parentName:"p"},"user-profile")," is ",(0,n.kt)("em",{parentName:"p"},"/user-profile")," and not ",(0,n.kt)("em",{parentName:"p"},"/User-Profile"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule: Use a Verb or verb phrase for Controller Names"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST /api.blog.com/email/email/send\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule: CRUD function names should not be used in the URI"))),(0,n.kt)("p",null,"The following table lists the CRUD functions and their corresponding HTTP methods:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"CRUD Function"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Method"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create"),(0,n.kt)("td",{parentName:"tr",align:null},"POST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Read"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update"),(0,n.kt)("td",{parentName:"tr",align:null},"PUT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete"),(0,n.kt)("td",{parentName:"tr",align:null},"DELETE")))),(0,n.kt)("p",null,"e.g. Preferred API Interface"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"PUT /api.blog.com/authors/vishal-gandhi\n")),(0,n.kt)("p",null,"Anti pattern "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"DELETE /deleteusers/abc/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule: New URIs should be introduced new concepts"))),(0,n.kt)("p",null,"A REST API should introduce new URIs for new concepts. For example, the following table lists the URIs for a user resource:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"URI"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/authors"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a list of authors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/authors/vishalgandhi"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the author details")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/authors/vishalgandhi/books"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a list of articles written by the author")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: JSON should be well formed and supported for resource representation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: Add Versioning at the start of the URI")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"\nhttp://api.blog.com/v1/authors/vishal-gandhi\n\n")),(0,n.kt)("h3",{id:"http-methods"},"HTTP Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: GET must be used to retrieve representation of a resource"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: Head must be used to retrieve metadata of a resource and response headers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: PUT must be used to both insert and update a resource"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: POST must be used to create a resource"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: POST must be used to execute a controller"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: DELETE must be used to delete a resource"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule: OPTIONS must be used to retrieve supported HTTP methods"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule : Use HTTP Status Codes to Indicate Response Status")))),(0,n.kt)("p",null,"HTTP status codes are used to indicate the response status of an HTTP request. The following table lists the HTTP status codes and their corresponding meanings:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Status Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,n.kt)("td",{parentName:"tr",align:null},"The request was successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,n.kt)("td",{parentName:"tr",align:null},"The request was successful and a resource was created")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"204 No Content"),(0,n.kt)("td",{parentName:"tr",align:null},"The request was successful but there is no representation to return")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,n.kt)("td",{parentName:"tr",align:null},"The request could not be understood by the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,n.kt)("td",{parentName:"tr",align:null},"The request requires user authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,n.kt)("td",{parentName:"tr",align:null},"The server understood the request, but is refusing to fulfill it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,n.kt)("td",{parentName:"tr",align:null},"The server has not found anything matching the Request-URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"405 Method Not Allowed"),(0,n.kt)("td",{parentName:"tr",align:null},"The method specified in the Request-Line is not allowed for the resource identified by the Request-URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"500 Internal Server Error"),(0,n.kt)("td",{parentName:"tr",align:null},"The server encountered an unexpected condition which prevented it from fulfilling the request")))),(0,n.kt)("p",null,"The approaches and best practices of REST API outlined in this blog article will help anyone follow consistent guidelines for designing and developing REST APIs. "),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"},"Roy Fielding's Dissertation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://restfulapi.net/"},"What is REST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.in/REST-API-Design-Rulebook-Consistent-ebook/dp/B005XE5A7Q/ref=sr_1_1?keywords=rest+api+design+rulebook&qid=1665926194&qu=eyJxc2MiOiIwLjQzIiwicXNhIjoiMC41NCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=REST+API+D%2Caps%2C194&sr=8-1"},"REST API Design Rulebook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.in/Hands-RESTful-Design-Patterns-Practices-ebook/dp/B07BJL399D/ref=sr_1_2?keywords=rest+api+design+rulebook&qid=1665926194&qu=eyJxc2MiOiIwLjQzIiwicXNhIjoiMC41NCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=REST+API+D%2Caps%2C194&sr=8-2"},"Hands-on RESTful API Design Patterns"))))}m.isMDXComponent=!0},11748:(e,t,a)=>{var r={"./locale":89234,"./locale.js":89234};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=11748}}]);