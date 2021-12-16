"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[9164],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96827:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={sidebar_position:11},l="Interaction receiver",d={unversionedId:"limit-order-protocol/guide/interactive-receiver",id:"limit-order-protocol/guide/interactive-receiver",isDocsHomePage:!1,title:"Interaction receiver",description:"Limit order protocol has the ability to call an intermediate contract when an order is filled.",source:"@site/docs/limit-order-protocol/guide/interactive-receiver.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/interactive-receiver",permalink:"/docs/limit-order-protocol/guide/interactive-receiver",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/guide/interactive-receiver.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Validate a limit order",permalink:"/docs/limit-order-protocol/guide/validate-limit-order"},next:{title:"Domain separator",permalink:"/docs/limit-order-protocol/guide/domain-separator"}},s=[{value:"Use case",id:"use-case",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interaction-receiver"},"Interaction receiver"),(0,a.kt)("p",null,"Limit order protocol has the ability to call an ",(0,a.kt)("strong",{parentName:"p"},"intermediate contract")," when an order is filled."),(0,a.kt)("p",null,"Intermediate contract should implement an interface: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/1inch/limit-order-protocol/blob/master/contracts/interfaces/InteractiveNotificationReceiver.sol"},"InteractiveNotificationReceiver.sol")),(0,a.kt)("h2",{id:"use-case"},"Use case"),(0,a.kt)("p",null,"For example, we want to create a limit order ",(0,a.kt)("inlineCode",{parentName:"p"},"1INCH")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"WETH"),", but so that when this order is filled, we will not receive WETH but ETH."),(0,a.kt)("p",null,"To do this, let's create a ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x1282d0c06368c40c8d4a4d818d78f258d982437b#code"},"smart contract"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"contract WethUnwrapper is InteractiveNotificationReceiver {\n    // solhint-disable-next-line no-empty-blocks\n    receive() external payable {}\n\n    function notifyFillOrder(\n        address /* taker */,\n        address /* makerAsset */,\n        address takerAsset,\n        uint256 /* makingAmount */,\n        uint256 takingAmount,\n        bytes calldata interactiveData\n    ) external override {\n        address payable makerAddress;\n        // solhint-disable-next-line no-inline-assembly\n        assembly {\n            makerAddress := shr(96, calldataload(interactiveData.offset))\n        }\n        IWithdrawable(takerAsset).withdraw(takingAmount);\n        makerAddress.transfer(takingAmount);\n    }\n}\n")),(0,a.kt)("p",null,"And create a limit order with ",(0,a.kt)("inlineCode",{parentName:"p"},"interaction")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const interactiveReceiverAddress = '0x1282d0c06368c40c8d4a4d818d78f258d982437b';\nconst walletAddress = '0xfb3c7ebccccAA12B5A884d612393969Adddddddd';\n\nconst limitOrder = limitOrderBuilder.buildLimitOrder({\n    makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',\n    takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',\n    makerAddress: walletAddress,\n    reciever: interactiveReceiverAddress,\n    interaction: interactiveReceiverAddress + walletAddress.slice(2),\n    makerAmount: '100',\n    takerAmount: '200',\n    predicate: '0x0',\n    permit: '0x0',\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As you can see, the interaction field consists of two parts - the ",(0,a.kt)("inlineCode",{parentName:"p"},"contract address")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"interactiveData")," (which contains the wallet address).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We also set the ",(0,a.kt)("inlineCode",{parentName:"p"},"interactiveReceiverAddress")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"reciever"),".\nThis is necessary in order for this contract to receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"WETH")," when filling out an limit order and return ",(0,a.kt)("inlineCode",{parentName:"p"},"ETH")," to the creator of the limit order.")),(0,a.kt)("p",null,"Now the limit order will work according to the following scenario:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"someone (",(0,a.kt)("inlineCode",{parentName:"li"},"taker"),") will create a transaction to execute a limit order"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"taker")," funds (",(0,a.kt)("inlineCode",{parentName:"li"},"WETH"),") will be transferred to the ",(0,a.kt)("inlineCode",{parentName:"li"},"interactiveReceiver")," contract"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interactiveReceiver")," contract will send the same amount of ",(0,a.kt)("inlineCode",{parentName:"li"},"ETH")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"maker")),(0,a.kt)("li",{parentName:"ul"},"and finally, the ",(0,a.kt)("inlineCode",{parentName:"li"},"maker asset")," (",(0,a.kt)("inlineCode",{parentName:"li"},"1INCH"),") will be transferred from the ",(0,a.kt)("inlineCode",{parentName:"li"},"maker's")," address to the ",(0,a.kt)("inlineCode",{parentName:"li"},"taker's")," address")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x1fe3929fcbe62d587ee98d3cfbcb6b8c392891565a56767f0e9ed39bf387c7a5"},"Example of transaction")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"However, this is one example of the use of interactivity. You can implement any other scenario"))))}m.isMDXComponent=!0}}]);