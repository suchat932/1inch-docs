"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[3812],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var d=n.createContext({}),c=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=c(r),s=i,f=p["".concat(d,".").concat(s)]||p[s]||u[s]||o;return r?n.createElement(f,a(a({ref:e},m),{},{components:r})):n.createElement(f,a({ref:e},m))}));function s(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10439:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={sidebar_position:4},d="Fill a limit order",c={unversionedId:"limit-order-protocol/guide/fill-limit-order",id:"limit-order-protocol/guide/fill-limit-order",isDocsHomePage:!1,title:"Fill a limit order",description:"LimitOrderProtocolFacade.fillLimitOrder()",source:"@site/docs/limit-order-protocol/guide/fill-limit-order.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/fill-limit-order",permalink:"/docs/limit-order-protocol/guide/fill-limit-order",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/guide/fill-limit-order.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Limit order structure",permalink:"/docs/limit-order-protocol/guide/limit-order-structure"},next:{title:"Cancel a limit order",permalink:"/docs/limit-order-protocol/guide/cancel-limit-order"}},m=[{value:"Parameters:",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:m};function p(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fill-a-limit-order"},"Fill a limit order"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LimitOrderProtocolFacade.fillLimitOrder()")),(0,o.kt)("h2",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"order")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LimitOrder")),(0,o.kt)("td",{parentName:"tr",align:null},"a limit order structure. See ",(0,o.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/limit-order-structure"},"Limit order structure"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LimitOrderSignature")),(0,o.kt)("td",{parentName:"tr",align:null},"signature of a limit order")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"makerAmount")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"amount of maker asset (in token units)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"takerAmount")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"amount of taker asset (in token units)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"thresholdAmount")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"the threshold for the amount of received asset (in received asset units)")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: to fill a limit order, only one of the amounts must be specified",(0,o.kt)("br",{parentName:"p"}),"\n","The second one must be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderProtocolFacade,\n    LimitOrder,\n    LimitOrderSignature,\n    Web3ProviderConnector\n} from '@1inch/limit-order-protocol';\n\nconst walletAddress = '0xhhh...';\nconst contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';\n\nconst order: LimitOrder = {...};\nconst signature: LimitOrderSignature = '...';\n\nconst makerAmount = '400000000';\nconst takerAmount = '0';\nconst thresholdAmount = '600000000';\n\nconst connector = new Web3ProviderConnector(new Web3('...'));\nconst limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, connector);\n\nconst callData = limitOrderProtocolFacade.fillLimitOrder(\n    order,\n    signature,\n    makerAmount,\n    takerAmount,\n    thresholdAmount\n);\n\nsendTransaction({\n    from: walletAddress,\n    gas: 210_000, // Set your gas limit\n    gasPrice: 40000, // Set your gas price\n    to: contractAddress,\n    data: callData,\n});\n")))}p.isMDXComponent=!0}}]);