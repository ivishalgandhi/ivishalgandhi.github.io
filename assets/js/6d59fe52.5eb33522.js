(self.webpackChunk=self.webpackChunk||[]).push([[4008],{95638:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905)),i=a(93456);const r={slug:"doc-as-code",title:"Documentation as a code",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png"},tags:["docops","doc-as-code"]},s=void 0,l={permalink:"/doc-as-code",source:"@site/blog/2022-10-22-doc-as-code.md",title:"Documentation as a code",description:"Documentation is the most critical activity of any product development. The engineer and user experience improve when there is up-to-date Documentation. Most often, in organizations and products, Documentation is an afterthought, and this is not a good practice. If we want more engineers to contribute to the product, Documentation should be considered as code and part of the product development. Engineers should be encouraged to write Documentation before writing the source code.",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[{label:"docops",permalink:"/tags/docops"},{label:"doc-as-code",permalink:"/tags/doc-as-code"}],readingTime:4.225,hasTruncateMarker:!0,authors:[{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"}],frontMatter:{slug:"doc-as-code",title:"Documentation as a code",authors:{name:"Vishal Gandhi",url:"https://github.com/ivishalgandhi",image_url:"https://github.com/ivishalgandhi.png",imageURL:"https://github.com/ivishalgandhi.png"},tags:["docops","doc-as-code"]},prevItem:{title:"My favorite Open Source Projects in 2022",permalink:"/fav-open-source-repo"},nextItem:{title:"Understanding REST API Design Rules",permalink:"/rest-api-design-rules"}},c={authorsImageUrls:[void 0]},u=[{value:"What is Docs as Code?",id:"what-is-docs-as-code",level:2},{value:"Why Docs as Code?",id:"why-docs-as-code",level:2},{value:"Types of Documentation",id:"types-of-documentation",level:2},{value:"How to do Docs as a Code?",id:"how-to-do-docs-as-a-code",level:2},{value:"Docs As Code Tools",id:"docs-as-code-tools",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2},{value:"References",id:"references",level:2}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Documentation is the most critical activity of any product development. The engineer and user experience improve when there is up-to-date Documentation. Most often, in organizations and products, Documentation is an afterthought, and this is not a good practice. If we want more engineers to contribute to the product, Documentation should be considered as code and part of the product development. Engineers should be encouraged to write Documentation before writing the source code."),(0,n.kt)("p",null," In many organizations, Documentation is everywhere, but it can be challenging to find. It is often written in various formats, and it is sometimes unclear who is responsible for it. It also needs to be clarified how to contribute to it. Confidence in Documentation could be higher if engineers spent more time writing; there is more incentive to write, and setting up a culture to write docs as part of engineering workflow contributes to Engineer Productivity which is a crucial metric for any organization."),(0,n.kt)("p",null,"The product engineering teams must identify workflows to integrate Documentation into the existing process to solve the challenges listed below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Documentation is not part of the codebase"),(0,n.kt)("li",{parentName:"ul"},"The Documentation is not part of the CI/CD pipeline"),(0,n.kt)("li",{parentName:"ul"},"The method of writing Documentation is not integrated into the engineering workflow"),(0,n.kt)("li",{parentName:"ul"},"The Documentation is not reviewed and tested"),(0,n.kt)("li",{parentName:"ul"},"The Documentation is written in a separate tool and is not version controlled")),(0,n.kt)("p",null,"Documentation will never be part of engineering culture unless integrated into the codebase and workflow."),(0,n.kt)("h2",{id:"what-is-docs-as-code"},"What is Docs as Code?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store the source file version of Documentation in a version control system like Git"),(0,n.kt)("li",{parentName:"ul"},"Automatically build doc artifacts "),(0,n.kt)("li",{parentName:"ul"},"Publish artifacts without human intervention")),(0,n.kt)("h2",{id:"why-docs-as-code"},"Why Docs as Code?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Documentation evolves with the code. The flowchart, System Architecture and other diagrams will be up-to-date as the code changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Long release cycles may result in logic or flowchart being forgotten or outdated")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consistency is critical for the adoption of Docs as a code. Teams can collaborate on the Documentation and can ensure that the Documentation is consistent across the product")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Collaboration across product teams is the critical piece of why Documentation should be considered a code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Documentation can be reviewed and approved by the team members")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Centralized Internal Documentation framework and familiar structured Documentation for all the products ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Track Documentation mistakes as bugs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Documentation can be versioned, tested, and tracked")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Manage the complexity around the documentation process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visualize the Documentation in the form of diagrams, flowcharts, and images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Engineer can use other tools to model dependencies. For example, the Product team can use Mermaid  to model the flowchart, system architecture, class diagram, and sequence diagrams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avoid effort to redo the Documentation when a team member leaves the organization. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The product team can automate Workflows can be automated to generate the Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Makes Documentation standout with ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"Markdown")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Markdown is a simple, lightweight markup language that is easy to learn and use for plain text formatting and conversion to HTML and many other formats using a tool. Markdown is often used to format readme files, write messages in online discussion forums, and create rich text using a plain text editor.")))),(0,n.kt)(i.Mermaid,{config:{},chart:"\nflowchart\n\nA[Start] --\x3e B[Engineer writes Documentation and Code]\n    B --\x3eC[Engineer Commits Documentation and Code]\n    C --\x3eD[Code Review and Testing]\n    D --\x3eE[Documentation Review and Testing]\n    E --\x3eF{Release}\n    F --\x3e|Yes|G[Documentation is published]\n    F --\x3e|No|B\n    G --\x3eH[End]",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"types-of-documentation"},"Types of Documentation"),(0,n.kt)("p",null,"The most common types of Documentation for every product are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Long-form "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FAQs, User Guides, Tutorials, How-to Guides, etc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Functional "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"REST API Documentation, SDK Documentation, etc.")))),(0,n.kt)("h2",{id:"how-to-do-docs-as-a-code"},"How to do Docs as a Code?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Version your Documentation. Just as you version your code, you should version your Documentation. Versioning allows tracking changes and rollbacks to previous versions if necessary."),(0,n.kt)("li",{parentName:"ul"},"Integrate Documentation with CI/CD pipeline. CI/CD Integration will allow you to automate the process of generating Documentation and publishing it to a central location"),(0,n.kt)("li",{parentName:"ul"},"Start with Proof of Concept and extend to all the products gradually  "),(0,n.kt)("li",{parentName:"ul"},"Choose a static site generator (Documentation Tool) that can be integrated with the CI/CD pipeline")),(0,n.kt)("h2",{id:"docs-as-code-tools"},"Docs As Code Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Static Site Generators\nThey are used for Long form documentation. Allows integration of diagrams, flowcharts, images, etc."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://docusaurus.io"},"Docusaurus"),", ",(0,n.kt)("a",{parentName:"li",href:"https://gohugo.io"},"Hugo"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com"},"Gatsby"),", ",(0,n.kt)("a",{parentName:"li",href:"https://jekyllrb.com"},"Jekyll"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.mkdocs.org"},"MkDocs")," etc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Diagram as a code"),(0,n.kt)("p",{parentName:"li"},"Allows creating diagrams, flowcharts, etc., in a code format. Think of documenting and visualizing a complex system architecture in a code format."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mermaid-js.github.io/mermaid/#/"},"Mermaid"),", ",(0,n.kt)("a",{parentName:"li",href:"https://plantuml.com/"},"PlantUML"),", ",(0,n.kt)("a",{parentName:"li",href:"https://graphviz.org/"},"Graphviz"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.draw.io/"},"Draw.io"),", ",(0,n.kt)("a",{parentName:"li",href:"https://diagrams.mingrammer.com"},"mingrammer/Diagrams")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Source code-based document generators "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"System documentation generators"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rtomayko/ronn"},"ronn"))))),(0,n.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,n.kt)("p",null,"Everything(Infrastructure, Monitoring, Code, Containers, Documentation) as a code is already a reality. For some organizations, the shift to treating Documentation as a code is a complex overhaul of expectations, attitudes, processes, and toolsets. Once implemented, it will vastly improve the engineer and user experience. For open-source projects, it is even more essential to have good Documentation. It is a great way to attract new contributors and users. "),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.writethedocs.org/guide/doc-ops/#what-is-docops-anyway"},"DocOps"))))}d.isMDXComponent=!0},11748:(e,t,a)=>{var o={"./locale":89234,"./locale.js":89234};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=11748}}]);