(function(){"use strict";var A={1282:function(A,e,l){var o=l(9242),g=l(1020),n=l(3396),s=l.p+"img/profile-picture-fixed.aa770534.jpg",t=l(4870),c={__name:"HomeBubble",setup(A){const e=(0,t.iH)(null),l=5*Math.random()+10,o={width:"0px",height:"0px",transitionProperty:"top, left",transitionDuration:"7s",transitionTimingFunction:"linear"};(0,n.wF)((()=>{const A=5*Math.random()+1;o.width=A+"vw",o.height=A+"vw",o.transitionDuration=l+"s"}));const g=100*Math.random(),s=100*Math.random();function c(){return 100*Math.random()+"%"}function i(){return 100*Math.random()+"%"}return o.top=s+"%",o.left=g+"%",setTimeout((()=>{const A=4*Math.random();A<1?(e.value.style.top="100%",e.value.style.left=i()):A<2?(e.value.style.top="0%",e.value.style.left=i()):A<3?(e.value.style.left="100%",e.value.style.top=c()):(e.value.style.left="0%",e.value.style.top=c())}),100),setInterval((()=>{"100%"===e.value.style.top?(e.value.style.top="0%",e.value.style.left=i()):"0%"===e.value.style.top?(e.value.style.top="100%",e.value.style.left=i()):"100%"===e.value.style.left?(e.value.style.left="0%",e.value.style.top=c()):(e.value.style.left="100%",e.value.style.top=c())}),1e3*l),(A,l)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"bubbleID",ref:e,class:"home-bubble",style:o},null,512))}};const i=c;var r=i;const a={id:"home"},E=(0,n._)("div",{class:"home-bio front-index"},[(0,n._)("img",{class:"profile-picture",src:s}),(0,n._)("h1",null,"Hey, I’m Terrence Luciano"),(0,n._)("h2",null,'"Love to Build Awesome Things"'),(0,n._)("p",{class:"home-bio-description"}," Hey, I’m Terry, a Full-Stack Web Developer from Northern New Jersey with 3+ of programming experience. Primary experience in backend and frontend web development, but I’m always excited to learn new skills whenever given the opportunity. ")],-1);var B={__name:"HomeView",setup(A){return(A,e)=>((0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(20,(A=>(0,n.Wm)(r,{key:A}))),64)),E]))}};const I=B;var Q=I,C="data:image/png;base64,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",f="data:image/png;base64,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",w="data:image/png;base64,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",y="data:image/png;base64,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";const D=(0,n.uE)('<nav><div class="main-tabs"><a href="#home">Home</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div class="nav-external-links"><a href="https://github.com/TerryLDev" target="_blank"><img src="'+C+'"></a><a href="#"><img src="'+f+'"></a></div></nav>',1),u=(0,n._)("div",{class:"line-break"},null,-1);var j={__name:"NavBar",setup(A){const e=(0,t.iH)(null);function l(){e.value.style.top="0%"}function o(){e.value.style.top="100%"}return(A,g)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[D,(0,n._)("img",{id:"nav-button",onClick:l,src:w}),(0,n._)("div",{ref_key:"mobileNavMenu",ref:e,id:"mobile-nav"},[(0,n._)("img",{id:"nav-button-close",onClick:o,src:y}),(0,n._)("div",{class:"mobile-nav-tabs"},[(0,n._)("a",{href:"#home",onClick:o},"Home"),(0,n._)("a",{href:"#skills",onClick:o},"Skills"),(0,n._)("a",{href:"#projects",onClick:o},"Projects"),(0,n._)("a",{href:"#contact",onClick:o},"Contact")]),u,(0,n._)("div",{class:"mobile-nav-tabs"},[(0,n._)("a",{href:"https://github.com/TerryLDev",onClick:o,target:"_blank"},"Github"),(0,n._)("a",{href:"#",onClick:o},"Resume")])],512)],64))}};const M=j;var K=M,P=l(7139);const v={class:"section-title"};var Y={__name:"SectionTitle",props:{title:String},setup(A){const e=A;return(A,l)=>((0,n.wg)(),(0,n.iD)("h3",v,(0,P.zw)(e.title),1))}};const p=Y;var H=p,h=l(6943);const k=(0,g.Q_)("projects",(()=>{const A=(0,t.iH)([]),e=(0,t.iH)(null);function l(){const l=(0,n.FN)().appContext.config.globalProperties.$hostname+"/api/projects";h.Z.get(l).then((e=>{A.value=e.data})).catch((A=>{console.error(A),e.value=!0}))}return{projects:A,fetchError:e,fetchProjects:l}})),x=(0,g.Q_)("skills",(()=>{const A=(0,t.iH)({backend:[],frontend:[],database:[],other:[]}),e=(0,t.iH)(!1),l=(0,t.iH)(null);function o(){const o=(0,n.FN)().appContext.config.globalProperties.$hostname+"/api/skills";h.Z.get(o).then((l=>{A.value.backend=l.data.backend,A.value.frontend=l.data.frontend,A.value.database=l.data.database,A.value.other=l.data.other,e.value=!0})).catch((A=>{console.error(A),l.value=!0}))}return{skills:A,skillsRecieved:e,fetchError:l,fetchSkills:o}}));var U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABoCAYAAADy3t6fAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVVSURBVHgB7Z27ViNHEIb/1jAC+/jswZlD+QmMM2fGmbPFoSOvn8A4cwYOHS1+goUnMH4Cs5kz2NAZzjZbNlgQukxv1SCEbjOjy1y6uus7RweBWujyTXVXd09PGyhz7O5it3uLw8TiF2Owi+a4MhYnBsoc29v4Bxb7cIQWlCl2YrxwSRCjkmawwFdwDJUkAJU0g4nwNxxDE4cFuJY4RFDmGA5xFj98Mx26NZmCp2gk1Qj3v+5uKUqBvVWep5JqYl1BjEqqgU0EMSqpYjYVxKikCilDEKP9pIpYVZC1uMl6TFPwClhZUIJjCpe3JqO8RlLJrCOoN8DveWVUUolUIYhRSSVRlSBmC2uws4N9auie060zqkc7aJZ0BrPbxxkaoEpBzNKSJqeU6UXS8SyH8vc9a3C6HePz+z5OUCNVC2KWqu44cuiNXNKE2FHDc/75GLzcrXFAtA5BTKEkOjpP6J/zG+lAAB9iPEcN1CWIya3u2jFO6ej8CYJIkuxOYVnUKYjJjCQWZIQJYuIh3qBC6hbELIyknTaOqf0RJ4i/kHvgGhXRhCBmThIlCR3650eQxRVNd5/SF/InKqIpQcycJOr7vMISpAOC1DdJgIvPBnhDDUHlbUFTNCmImZKUdlKT4hMwSNDpp338+ijGWztoXhAzlThQZlTYDqVvoo+ffY6cR1wQxExndxYHBeWvqngTLuKKIGYsiau6otEE08MPCACXBDFjSXZYcA60xUW3wvTWFVwTxExWd52CslfwHBcFMU+RVFDVJZ5LclUQo5N+cEOQyTkRJXhJrkRQ3mqOoCW5VMV1u7igGYeLRY8FK8nFNuj+Ht/RbPcxnrJoHpM8HBdot/Fquw2bdYtjeaPiWbAg+kyXeZ938tbeanbAObhIcjmLyyIoSRIFMcFIkiqICUKSZEGM95KkC2K8luSDIMZbSb4IYryU5JMgxjtJvglivJLkoyDGG0m+CmK8kOSzIEa8JN8FMaIlhSCIESspFEGMSEmuCeL3wytR2jHejeagLndKnH9ba2Fzk7gYQXd3+It+8Mmlj5S6hldUJLkoKPfqxyWt4RUjydU2yBZc/biMNbwiJLmcJNgaVuM7LymkLC4LpyWpoAecljTKmoIWxDgraZU9I3wWxDgryS65Z4TvghjRY3chCGKclVS0Z0QoghhnJeWtMghJEON0dZe1yiAkQYzzA6zdXiokKCmz6HJMAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAagkAYwl5V3yeFRwo03WfcWY/Ivel7F93WQkXReUVUkzpKv4Cs5Xb7XwPzbkKZKigr3wDPa3tpY7gT4UunHhLjno9zffmWAsic8YtQVVXmTEbSNXGem2ekXfh118Bu6qTCcOBue5pSma4hgvETi8uM0m6dqpTl65BDhFCUxJovrzrPAJBod8DXE+khAg/LmXXH14HfXxGiUQTf4yGOB61O508p6UbkpvcRBF2KPs5v2zZ7ih6rILT+HIoR/f0EF8xLtw0v0vip5DkXZyn+SvDFkWM/sHqs72KFouoWzC9Sc9fF3WvofR7B8or39L0fSe7n4PZS2GCQ5uE/yHkogWvsgQ/0YtfElVmfaNVoTXTvUHxW37KkRZD9DRcK6iVqOqxW1R3oMsKn4osQ8lE+5fUuP+Gwn6AxUQFRUYDPGahzZGEVX5JVrEQR1W28ePvZIyuUWYVQpT5vei9dDL7iB0SM7Q4pi6LaX0hfJYSdIj1KH71g5p3KqV9pc68FxaWp0Z3Fjgiu5fUP/wnPqFGw+cLstHJXjfEw8gENEAAAAASUVORK5CYII=";const G={class:"project-card"},R={class:"project-information"},m={key:0},d={key:1},O={key:2},Z={class:"extra-project-links"},F=["src"],S={key:0,class:"icon-line-break"},J=["href"],L=(0,n._)("img",{class:"project-information-icon",src:C},null,-1),W=[L],T=["href"],X=(0,n._)("img",{class:"project-information-icon",src:U},null,-1),b=[X];var q={__name:"ProjectCard",props:["projectImage","projectName","companyName","yearStart","yearEnd","position","projectDescription","github","externalLink","techStack"],setup(A){const e=A,l=(0,n.FN)().appContext.config.globalProperties.$hostname,o=l+"/api/projects/"+e.projectImage,g=e.techStack.map((A=>l+"/api/program-icon/"+A));return(A,l)=>((0,n.wg)(),(0,n.iD)("div",G,[(0,n._)("img",{src:o,class:"project-image"}),(0,n._)("div",R,[(0,n._)("h3",null,[(0,n.Uk)((0,P.zw)(e.projectName)+" ",1),""!=e.companyName?((0,n.wg)(),(0,n.iD)("span",m,"- "+(0,P.zw)(e.companyName),1)):(0,n.kq)("",!0),e.yearStart==e.yearEnd?((0,n.wg)(),(0,n.iD)("span",d," ("+(0,P.zw)(e.yearStart)+")",1)):((0,n.wg)(),(0,n.iD)("span",O," ("+(0,P.zw)(e.yearStart)+" - "+(0,P.zw)(e.yearEnd)+")",1))]),(0,n._)("h4",null,(0,P.zw)(e.position),1),(0,n._)("p",null,(0,P.zw)(e.projectDescription),1),(0,n._)("div",Z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(g),(A=>((0,n.wg)(),(0,n.iD)("img",{key:A,src:A,class:"project-information-icon"},null,8,F)))),128)),""!=e.github||""!=e.externalLink?((0,n.wg)(),(0,n.iD)("div",S)):(0,n.kq)("",!0),""!=e.github?((0,n.wg)(),(0,n.iD)("a",{key:1,href:e.github,target:"_blank"},W,8,J)):(0,n.kq)("",!0),""!=e.externalLink?((0,n.wg)(),(0,n.iD)("a",{key:2,href:e.externalLink,target:"_blank"},b,8,T)):(0,n.kq)("",!0)])])]))}};const V=q;var z=V;const N={id:"projects"},_={class:"project-container"};var $={__name:"ProjectsView",setup(A){const e=k();e.fetchProjects();const l="Projects";return(A,o)=>((0,n.wg)(),(0,n.iD)("div",N,[(0,n.Wm)(H,{title:l}),(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(e).projects,(A=>((0,n.wg)(),(0,n.j4)(z,{key:A,projectImage:A.projectImage,projectName:A.projectName,companyName:A.companyName,yearStart:A.yearStart,yearEnd:A.yearEnd,position:A.position,projectDescription:A.projectDescription,github:A.github,externalLink:A.externalLink,techStack:A.techStack},null,8,["projectImage","projectName","companyName","yearStart","yearEnd","position","projectDescription","github","externalLink","techStack"])))),128))])]))}};const AA=$;var eA=AA,lA=l.p+"img/4380744.c87885a8.png";const oA={class:"skill-card"};var gA={__name:"SkillCard",props:{skill:String},setup(A){const e=A;return(A,l)=>((0,n.wg)(),(0,n.iD)("div",oA,[(0,n._)("p",null,(0,P.zw)(e.skill),1)]))}};const nA=gA;var sA=nA;const tA={class:"skill-section-div"},cA={class:"skill-card-title"},iA={class:"card-container"};var rA={__name:"SkillSection",props:{skillTitle:{type:String,required:!0},skills:{type:Array,required:!0}},setup(A){const e=A;return(A,l)=>((0,n.wg)(),(0,n.iD)("div",tA,[(0,n._)("h4",cA,(0,P.zw)(e.skillTitle),1),(0,n._)("div",iA,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.skills,(A=>((0,n.wg)(),(0,n.j4)(sA,{key:A,skill:A},null,8,["skill"])))),128))])]))}};const aA=rA;var EA=aA;const BA={id:"skills"},IA={key:0,class:"skills-section"},QA={class:"skill-cards",ref:"skillCards"},CA=(0,n._)("img",{id:"skills-picture",src:lA},null,-1);var fA={__name:"SkillsView",setup(A){const e=x();e.fetchSkills();const l=(0,t.iH)(null),g=(0,t.iH)(null),s=(0,t.iH)(null),c=(0,t.iH)(null),i="Skills";return(A,r)=>((0,n.wg)(),(0,n.iD)("div",BA,[(0,n.Wm)(H,{title:i}),(0,n.Wm)(o.uT,null,{default:(0,n.w5)((()=>[(0,t.SU)(e).skillsRecieved?((0,n.wg)(),(0,n.iD)("div",IA,[(0,n._)("div",QA,[(0,n.Wm)(EA,{ref_key:"backendCards",ref:l,skillTitle:"Backend",skills:(0,t.SU)(e).skills.backend},null,8,["skills"]),(0,n.Wm)(EA,{ref_key:"frontendCards",ref:g,skillTitle:"Frontend",skills:(0,t.SU)(e).skills.frontend},null,8,["skills"]),(0,n.Wm)(EA,{ref_key:"databaseCards",ref:s,skillTitle:"Databases",skills:(0,t.SU)(e).skills.database},null,8,["skills"]),(0,n.Wm)(EA,{ref_key:"otherCards",ref:c,skillTitle:"Other",skills:(0,t.SU)(e).skills.other},null,8,["skills"])],512),CA])):(0,n.kq)("",!0)])),_:1})]))}};const wA=fA;var yA=wA;const DA={id:"contact"},uA=(0,n._)("div",{class:"contact-container"},[(0,n._)("p",null,[(0,n.Uk)(" Feel free to contact me with any questions or comments. You can email me at "),(0,n._)("a",{href:"mailto:terryluciano1@gmail.com"},"terryluciano1@gmail.com"),(0,n.Uk)(". My inbox is always open, and I will try my best to get back to you as soon as possible. Thank you for taking the time to visit my portfolio, hope you have a wonderful day, and I hope to speak with you soon! ")]),(0,n._)("a",{class:"email-button",href:"mailto:terryluciano1@gmail.com"},"Send Email")],-1);var jA={__name:"ContactView",setup(A){return(A,e)=>((0,n.wg)(),(0,n.iD)("div",DA,[(0,n.Wm)(H,{title:"Contact"}),uA]))}};const MA=jA;var KA=MA,PA={__name:"App",setup(A){return(0,n.bv)((()=>{console.log("Hello! Thank you for checking out my portfolio! If you have any questions please email me at terryluciano1@gmail.com")})),(A,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(K),(0,n.Wm)(Q),(0,n.Wm)(yA),(0,n.Wm)(eA),(0,n.Wm)(KA)],64))}};const vA=PA;var YA=vA;const pA=(0,o.ri)(YA),HA=(0,g.WB)();pA.use(HA),pA.config.globalProperties.$hostname=window.location.host,console.log(pA.config.globalProperties.$hostname),pA.mount("#app")}},e={};function l(o){var g=e[o];if(void 0!==g)return g.exports;var n=e[o]={exports:{}};return A[o](n,n.exports,l),n.exports}l.m=A,function(){var A=[];l.O=function(e,o,g,n){if(!o){var s=1/0;for(r=0;r<A.length;r++){o=A[r][0],g=A[r][1],n=A[r][2];for(var t=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(l.O).every((function(A){return l.O[A](o[c])}))?o.splice(c--,1):(t=!1,n<s&&(s=n));if(t){A.splice(r--,1);var i=g();void 0!==i&&(e=i)}}return e}n=n||0;for(var r=A.length;r>0&&A[r-1][2]>n;r--)A[r]=A[r-1];A[r]=[o,g,n]}}(),function(){l.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return l.d(e,{a:e}),e}}(),function(){l.d=function(A,e){for(var o in e)l.o(e,o)&&!l.o(A,o)&&Object.defineProperty(A,o,{enumerable:!0,get:e[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){l.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){l.p="/"}(),function(){var A={143:0};l.O.j=function(e){return 0===A[e]};var e=function(e,o){var g,n,s=o[0],t=o[1],c=o[2],i=0;if(s.some((function(e){return 0!==A[e]}))){for(g in t)l.o(t,g)&&(l.m[g]=t[g]);if(c)var r=c(l)}for(e&&e(o);i<s.length;i++)n=s[i],l.o(A,n)&&A[n]&&A[n][0](),A[n]=0;return l.O(r)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(1282)}));o=l.O(o)})();
//# sourceMappingURL=app.1eb76c2b.js.map