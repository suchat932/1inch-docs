"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[6882],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29364:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:5},l="Instant Governance",s={unversionedId:"governance/instant-governance",id:"governance/instant-governance",isDocsHomePage:!1,title:"Instant Governance",description:"Instant Governance is a feature that allows the community to vote for specific protocol settings. The Aggregation Protocol and Liquidity Protocol each have their own Instant Governance module.",source:"@site/docs/governance/instant-governance.mdx",sourceDirName:"governance",slug:"/governance/instant-governance",permalink:"/docs/governance/instant-governance",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/governance/instant-governance.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"1inch Network DAO Treasury",permalink:"/docs/governance/dao-treasury"},next:{title:"1inch Improvement Proposal (1IP) Template",permalink:"/docs/governance/improvement-proposal-template"}},p=[{value:"Aggregation Protocol Instant Governance",id:"aggregation-protocol-instant-governance",children:[]},{value:"Liquidity Protocol Instant Governance",id:"liquidity-protocol-instant-governance",children:[{value:"Decay period",id:"decay-period",children:[]},{value:"Referral reward",id:"referral-reward",children:[]},{value:"Treasury accrual rate",id:"treasury-accrual-rate",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instant-governance"},"Instant Governance"),(0,o.kt)("p",null,"Instant Governance is a feature that allows the community to vote for specific protocol settings. The Aggregation Protocol and Liquidity Protocol each have their own Instant Governance module."),(0,o.kt)("h2",{id:"aggregation-protocol-instant-governance"},"Aggregation Protocol Instant Governance"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://app.1inch.io/#/1/dao/governance/aggregation?action=stake"},"Aggregation Protocol Instant Governance")," module allows community members to vote on how the Swap Surplus revenue stream is split between the Treasury and the referrers. "),(0,o.kt)("h2",{id:"liquidity-protocol-instant-governance"},"Liquidity Protocol Instant Governance"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://app.1inch.io/#/1/dao/governance"},"Liquidity Protocol Instant Governance")," module allows the community to vote directly on major Liquidity Protocol parameters: the price impact fee, the swap fee, the Treasury  accrual rate, the referral reward, and the decay period. "),(0,o.kt)("p",null,"There are two levels of Liquidity Protocol Instance Governance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pool governance")," only allows for the configuration of parameters specific to each pool. These include the swap fee, the price impact fee and the decay period.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Factory governance")," is responsible for parameters shared by all pools. These include the default swap fee, the default price impact fee, the default decay period, the referral reward and the Treasury accrual rate."))),(0,o.kt)("h3",{id:"decay-period"},"Decay period"),(0,o.kt)("p",null,"The decay period is a unique feature that protects traders from front-running attacks and prevents arbitrage traders from easily extracting value from pools. Longer decay periods lead to a wider price spread in the pool after trades. 1INCH stakers can set a decay period between 15 seconds and 1 hour."),(0,o.kt)("h3",{id:"referral-reward"},"Referral reward"),(0,o.kt)("p",null,"This reward is a part of the swap fee and the price impact fee which will be dedicated to referrers (dApps and wallets that attract users and trading volume). Referrers can subsequently claim their share of 1INCH tokens from all pools in one gas-efficient claim transaction."),(0,o.kt)("h3",{id:"treasury-accrual-rate"},"Treasury accrual rate"),(0,o.kt)("p",null,"All protocol revenue not sent to the referrers is instead sent to the Treasury."))}d.isMDXComponent=!0}}]);