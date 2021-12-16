"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5390],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,k=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return r?n.createElement(k,d(d({ref:t},m),{},{components:r})):n.createElement(k,d({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<i;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65293:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={sidebar_position:3},l="Create a limit order",c={unversionedId:"limit-order-protocol/guide/create-limit-order",id:"limit-order-protocol/guide/create-limit-order",isDocsHomePage:!1,title:"Create a limit order",description:"LimitOrderBuilder.buildLimitOrder()",source:"@site/docs/limit-order-protocol/guide/create-limit-order.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/create-limit-order",permalink:"/docs/limit-order-protocol/guide/create-limit-order",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/guide/create-limit-order.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/limit-order-protocol/guide/quick-start"},next:{title:"Limit order structure",permalink:"/docs/limit-order-protocol/guide/limit-order-structure"}},m=[{value:"Parameters:",id:"parameters",children:[]},{value:"Example:",id:"example",children:[]},{value:"Limit order signature",id:"limit-order-signature",children:[]}],s={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-limit-order"},"Create a limit order"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LimitOrderBuilder.buildLimitOrder()")),(0,i.kt)("h2",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"makerAssetAddress")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"the address of the asset you want to sell (address of a token contract)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"takerAssetAddress")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"the address of the asset you want to buy (address of a token contract)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"makerAddress")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"an address of the maker (wallet address)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"takerAddress")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"by default contains a zero address, which means that a limit order is available for everyone to fill. If you set a value, then the limit order will be available for execution only for the specified address (private limit order)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reciever")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"by default contains a zero address, which means that taker asset will be sent to the address of the creator of the limit order. If you set a value, then taker asset will be sent to the specified address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"makerAmount")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"the number of maker asset tokens that you want to sell (in token units). For example: 5 DAI = 5000000000000000000 units")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"takerAmount")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"the number of taker asset tokens that you want to receive for selling the maker asset (in token units). For example: 5 DAI = 5000000000000000000 units")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"predicate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"a predicate call data. Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"0x"),". See ",(0,i.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/predicate"},"Predicate docs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"permit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"a permit (",(0,i.kt)("inlineCode",{parentName:"td"},"EIP-2612"),") call data. Could be built using ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/1inch/permit-signed-approvals-utils"},"utility library"),". Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"0x"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"interaction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"a call data for InteractiveNotificationReceiver. See more ",(0,i.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/interactive-receiver"},"Interaction receiver docs"),". Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"0x"))))),(0,i.kt)("h2",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderBuilder,\n    Web3ProviderConnector,\n} from '@1inch/limit-order-protocol';\n\nconst contractAddress = '0x7643b8c2457c1f36dc6e3b8f8e112fdf6da7698a';\nconst walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';\nconst chainId = 1;\n\nconst web3 = new Web3('...');\n// You can create and use a custom provider connector (for example: ethers)\nconst connector = new Web3ProviderConnector(web3);\n\nconst limitOrderBuilder = new LimitOrderBuilder(\n    contractAddress,\n    chainId,\n    connector\n);\n\n// ...\n\nconst limitOrder = limitOrderBuilder.buildLimitOrder({\n    makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',\n    takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',\n    makerAddress: '0xfb3c7ebccccAA12B5A884d612393969Adddddddd',\n    makerAmount: '100',\n    takerAmount: '200',\n    predicate: '0x0',\n    permit: '0x0',\n    interaction: '0x0',\n});\nconst limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(\n    limitOrder\n);\nconst limitOrderSignature = limitOrderBuilder.buildOrderSignature(\n    walletAddress,\n    limitOrderTypedData\n);\nconst limitOrderHash = limitOrderBuilder.buildLimitOrderHash(\n    limitOrderTypedData\n);\n")),(0,i.kt)("p",null,"As result you will receive a structure of ",(0,i.kt)("a",{parentName:"p",href:"/docs/limit-order-protocol/guide/limit-order-structure"},"limit order"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "salt": "1",\n    "makerAsset": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n    "takerAsset": "0x6b175474e89094c44da98b954eedeac495271d0f",\n    "maker": "0xfb3c7ebccccAA12B5A884d612393969Adddddddd",\n    "receiver": "0x0000000000000000000000000000000000000000",\n    "allowedSender": "0x0000000000000000000000000000000000000000",\n    "makingAmount": "100",\n    "takingAmount": "200",\n    "makerAssetData": "0x",\n    "takerAssetData": "0x",\n    "getMakerAmount": "0xf4a215c300000...0000",\n    "getTakerAmount": "0x296637bf00000...0000",\n    "predicate": "0x",\n    "permit": "0x",\n    "interaction": "0x"\n}\n')),(0,i.kt)("h2",{id:"limit-order-signature"},"Limit order signature"),(0,i.kt)("p",null,"To fill a limit order, you need a typed data structure signature.",(0,i.kt)("br",{parentName:"p"}),"\n","You can create a signature following the example above."),(0,i.kt)("p",null,"But the example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Web3ProviderConnector")," which is designed to work with a wallet.",(0,i.kt)("br",{parentName:"p"}),"\n","If you need to get the signature on the server side, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrivateKeyProviderConnector")," and get the signature using the private key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';\n\nconst privateKey =\n    'd8d1f95deb28949ea0ecc4e9a0decf89e98422c2d76ab6e5f736792a388c56c7';\nconst limitOrderTypedData: EIP712TypedData = {\n    // ...\n};\n\nconst web3Provider = new Web3('...');\nconst privateKeyProviderConnector = new PrivateKeyProviderConnector(\n    privateKey,\n    web3Provider\n);\n\nconst signature = await privateKeyProviderConnector.signTypedData(\n    walletAddress,\n    limitOrderTypedData\n);\n")))}p.isMDXComponent=!0}}]);