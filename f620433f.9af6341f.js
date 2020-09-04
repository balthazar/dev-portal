(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{268:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),l=(a(0),a(276)),r={id:"dev-tools-zilliqajs",title:"zilliqa-js",keywords:["zilliqajs","zilliqa-js","js","installation","apis","examples","zrc2 wallet","hello world","zilliqa"],description:"Zilliqa Websockets"},c={id:"dev/dev-tools-zilliqajs",isDocsHomePage:!1,title:"zilliqa-js",description:"Zilliqa Websockets",source:"@site/docs/dev/dev-tools-zilliqajs.md",permalink:"/docs/dev/dev-tools-zilliqajs",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-zilliqajs.md",sidebar:"DevelopersSidebar",previous:{title:"Private Key & Keystore File",permalink:"/docs/dev/dev-keys-pkey"},next:{title:"gozilliqa",permalink:"/docs/dev/dev-tools-gozilliqa"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Releases",id:"releases",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Methods and APIs",id:"methods-and-apis",children:[]},{value:"Demo - ZRC2 Wallet",id:"demo---zrc2-wallet",children:[]}],o={rightToc:s};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"}),"zilliqa-js")," is a Javascript library that allows you to interact with the Zilliqa network nodes - create wallets, deploy contracts, and invoke transitions to interact with smart contracts."),Object(l.b)("h2",{id:"source-code"},"Source Code"),Object(l.b)("p",null,"The Github repository can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"}),"https://github.com/Zilliqa/Zilliqa-JavaScript-Library")),Object(l.b)("h2",{id:"releases"},"Releases"),Object(l.b)("p",null,"All releases of zilliqa-js can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@zilliqa-js/zilliqa"}),"https://www.npmjs.com/package/@zilliqa-js/zilliqa")),Object(l.b)("p",null,"Release note can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/releases"}),"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/releases")),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"It is recommended that developers install the JavaScript client by making use\nof the umbrella package ",Object(l.b)("inlineCode",{parentName:"p"},"@zilliqa-js/zilliqa"),". This takes care of bootstrapping the various modules, which are then accessible as members of the\n",Object(l.b)("inlineCode",{parentName:"p"},"Zilliqa")," class."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"yarn add @zilliqa-js/zilliqa\n# you may also need to install the tslib package.\nyarn add tslib\n# bn.js should be added with the above package. if it is not, install it manually.\nyarn add bn.js\n")),Object(l.b)("h2",{id:"methods-and-apis"},"Methods and APIs"),Object(l.b)("p",null,"The following table provides a description of each module of zilliqa-js and what you may want to use it for. Visit the relevant link of each module to find the detailed description about the methods and apis supported by that module."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"package"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"dependencies"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-core"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/core"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Core abstractions and base classes, such as ",Object(l.b)("inlineCode",{parentName:"td"},"HTTPProvider")," and network logic for interfacing with the Zilliqa JSON-RPC."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-account"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/account"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Wallet"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Account")," and ",Object(l.b)("inlineCode",{parentName:"td"},"Transaction")," abstractions live in this package."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/core"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/crypto"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/util"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/proto"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-blockchain"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/blockchain"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Main interface to the Zilliqa ",Object(l.b)("inlineCode",{parentName:"td"},"JSON-RPC"),"."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-contract"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/contract"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exposes a ",Object(l.b)("inlineCode",{parentName:"td"},"Contracts")," module that takes care of smart contract deployment and interaction."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/account"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/blockchain"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/core"),", ",Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/util"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-crypto"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/crypto"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exposes several loosely-coupled cryptographic convenience functions for working with the Zilliqa blockchain and its cryptographic primitives, such as Schnorr signatures."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/util"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-proto"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/proto"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Protobuf source files and corresponding generated JS modules."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-util"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/util"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Miscellaneous functions that take care of serialisation/deserialisation and validation."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Ashlar/zilliqa-js-viewblock"}),Object(l.b)("inlineCode",{parentName:"a"},"@zilliqa-js/viewblock"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Library interfacing with ViewBlock's APIs"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"@zilliqa-js/crypto"))))),Object(l.b)("h2",{id:"demo---zrc2-wallet"},"Demo - ZRC2 Wallet"),Object(l.b)("p",null,"For this demo, we'll be looking at the zilliqa-js related code of a simple ZRC2 wallet, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-2.md"}),"ZRC2")," is a standard for fungible tokens on Zilliqa.\nThe full code can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/arnavvohra/dev-portal-examples/tree/master/zrc-2-wallet"}),"ZRC2 Wallet Repository"),". This repository is written in React but the zilliqa-js methods & APIs can be used with any javascript framework."),Object(l.b)("h4",{id:"generating-private-key-and-address-from-encrypted-wallet-and-a-passphrase"},"Generating Private Key and Address from Encrypted Wallet and a Passphrase"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { decryptPrivateKey, getAddressFromPrivateKey} from '@zilliqa-js/crypto';\nlet keystore = JSON.parse(this.state.encryptedWallet);\nconst pk = await decryptPrivateKey(this.state.passphrase, keystore);\nconst address =  getAddressFromPrivateKey(pk);\n")),Object(l.b)("h4",{id:"getting-users-zil-balance"},"Getting User's $ZIL Balance"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const {Zilliqa} = require('@zilliqa-js/zilliqa');\nconst zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\nlet balanceState = await zilliqa.blockchain.getBalance(userAddress);\nif(balanceState){\n    let balance = balanceState.result.balance;\n    balance = units.fromQa(new BN(balance), units.Units.Zil);// user's $zil balance\n}\n")),Object(l.b)("h4",{id:"getting-users-token-balance"},"Getting User's Token Balance"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let userAddress = localStorage.getItem(\"userAddress\");//userAddress is retrieved from localStorage in this example\nconst {Zilliqa} = require('@zilliqa-js/zilliqa');\nconst zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n\nlet smartContractState = await zilliqa.blockchain.getSmartContractState(tokenContractAddress);\nif(smartContractState){\n    let balances_map = smartContractState.result.balances_map;\n    userAddress = userAddress.toLowerCase();\n    let userTokenBalance = balances_map[userAddress];//user's token balance  \n}\n")),Object(l.b)("h4",{id:"sending-tokens-to-another-address-by-calling-transfer-transition-of-the-zrc2-contract"},"Sending Tokens to Another Address by Calling 'Transfer' Transition of the ZRC2 Contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"sendTransaction = async() => {\nconst {Zilliqa} = require('@zilliqa-js/zilliqa');\nconst zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\nconst {BN, Long, bytes, units} = require('@zilliqa-js/util');\nconst {toBech32Address, fromBech32Address} = require('@zilliqa-js/crypto');\n\n//You can set the value of the following variables according to your liking\nlet contractAddress = localStorage.getItem(\"token_contract_address\");\nlet recipientAddress = this.state.sendingAddress;\nlet sendingAmount = this.state.sendingAmount;\nlet privkey = localStorage.getItem(\"private_key\");\n\n\nzilliqa.wallet.addByPrivateKey(privkey);\n\nconst CHAIN_ID = 333;\nconst MSG_VERSION = 1;\nconst VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);\n\nconst myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions\ncontractAddress = contractAddress.substring(2);\nrecipientAddress = fromBech32Address(recipientAddress);//converting to ByStr20 format\nconst ftAddr = toBech32Address(contractAddress);\ntry {\n    const contract = zilliqa.contracts.at(ftAddr);\n    const callTx = await contract.call(\n        'Transfer',\n        [\n            {\n                vname: 'to',\n                type: 'ByStr20',\n                value: recipientAddress,\n            },\n            {\n                vname: 'amount',\n                type: 'Uint128',\n                value: sendingAmount,\n            }\n        ],\n        {\n            // amount, gasPrice and gasLimit must be explicitly provided\n            version: VERSION,\n            amount: new BN(0),\n            gasPrice: myGasPrice,\n            gasLimit: Long.fromNumber(10000),\n        }\n    );\n\n} catch (err) {\n    console.log(err);\n}\n}\n\n")))}b.isMDXComponent=!0},276:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=b(a),j=n,u=d["".concat(r,".").concat(j)]||d[j]||p[j]||l;return a?i.a.createElement(u,c(c({ref:t},o),{},{components:a})):i.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=j;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<l;o++)r[o]=a[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);