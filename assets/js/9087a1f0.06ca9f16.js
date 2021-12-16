"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[6159],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12869:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={},p="UnoswapV3Router",s={unversionedId:"aggregation-protocol/smart-contract/UnoswapV3Router",id:"aggregation-protocol/smart-contract/UnoswapV3Router",isDocsHomePage:!1,title:"UnoswapV3Router",description:"Derives",source:"@site/docs/aggregation-protocol/smart-contract/UnoswapV3Router.md",sourceDirName:"aggregation-protocol/smart-contract",slug:"/aggregation-protocol/smart-contract/UnoswapV3Router",permalink:"/docs/aggregation-protocol/smart-contract/UnoswapV3Router",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/aggregation-protocol/smart-contract/UnoswapV3Router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnoswapRouter",permalink:"/docs/aggregation-protocol/smart-contract/UnoswapRouter"},next:{title:"EthReceiver",permalink:"/docs/aggregation-protocol/smart-contract/helpers/EthReceiver"}},m=[{value:"Derives",id:"derives",children:[]},{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"uniswapV3SwapToWithPermit",id:"uniswapv3swaptowithpermit",children:[]},{value:"uniswapV3Swap",id:"uniswapv3swap",children:[]},{value:"uniswapV3SwapTo",id:"uniswapv3swapto",children:[]},{value:"uniswapV3SwapCallback",id:"uniswapv3swapcallback",children:[]}]}],d={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unoswapv3router"},"UnoswapV3Router"),(0,o.kt)("h2",{id:"derives"},"Derives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/interfaces/IUniswapV3SwapCallback"},"IUniswapV3SwapCallback")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/Permitable"},"Permitable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/EthReceiver"},"EthReceiver"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n  address weth\n) public\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"weth")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"uniswapv3swaptowithpermit"},"uniswapV3SwapToWithPermit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV3SwapToWithPermit(\n  address payable recipient,\n  contract IERC20 srcToken,\n  uint256 amount,\n  uint256 minReturn,\n  uint256[] pools,\n  bytes permit\n) external returns (uint256 returnAmount)\n")),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"uniswapV3SwapTo")," but calls permit first,\nallowing to approve token spending and make a swap in one transaction."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"recipient")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Address that will receive swap funds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"srcToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Source token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of source tokens to swap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minReturn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimal allowed returnAmount to make transaction commit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pools")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pools chain used for swaps. Pools src and dst tokens should match to make swap happen")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"permit")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Should contain valid permit that can be used in ",(0,o.kt)("inlineCode",{parentName:"td"},"IERC20Permit.permit")," calls. See tests for examples")))),(0,o.kt)("h3",{id:"uniswapv3swap"},"uniswapV3Swap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV3Swap(\n  uint256 amount,\n  uint256 minReturn,\n  uint256[] pools\n) external returns (uint256 returnAmount)\n")),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"uniswapV3SwapTo")," but uses ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")," as recipient"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of source tokens to swap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minReturn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimal allowed returnAmount to make transaction commit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pools")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pools chain used for swaps. Pools src and dst tokens should match to make swap happen")))),(0,o.kt)("h3",{id:"uniswapv3swapto"},"uniswapV3SwapTo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV3SwapTo(\n  address payable recipient,\n  uint256 amount,\n  uint256 minReturn,\n  uint256[] pools\n) public returns (uint256 returnAmount)\n")),(0,o.kt)("p",null,"Performs swap using Uniswap V3 exchange. Wraps and unwraps ETH if required.\nSending non-zero ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.value")," for anything but ETH swaps is prohibited"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"recipient")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Address that will receive swap funds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of source tokens to swap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minReturn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimal allowed returnAmount to make transaction commit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pools")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pools chain used for swaps. Pools src and dst tokens should match to make swap happen")))),(0,o.kt)("h3",{id:"uniswapv3swapcallback"},"uniswapV3SwapCallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV3SwapCallback(\n  int256 amount0Delta,\n  int256 amount1Delta,\n  bytes \n) external\n")),(0,o.kt)("p",null,"Called to ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")," after executing a swap via IUniswapV3Pool#swap."),(0,o.kt)("p",null,"In the implementation you must pay the pool tokens owed for the swap.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.\namount0Delta and amount1Delta can both be 0 if no tokens were swapped."),(0,o.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount0Delta")),(0,o.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount1Delta")),(0,o.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"``"),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#swap call")))))}u.isMDXComponent=!0}}]);