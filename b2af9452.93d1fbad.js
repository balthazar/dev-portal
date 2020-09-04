(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{234:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(9),i=(t(0),t(276)),s=t(280),c=t(281),o={id:"api-transaction-get-tx",title:"GetTransaction"},d={id:"apis/api-transaction-get-tx",isDocsHomePage:!1,title:"GetTransaction",description:"---",source:"@site/docs/apis/api-transaction-get-tx.mdx",permalink:"/docs/apis/api-transaction-get-tx",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/apis/api-transaction-get-tx.mdx",sidebar:"APIsSideBar",previous:{title:"GetRecentTransactions",permalink:"/docs/apis/api-transaction-get-recent-txs"},next:{title:"GetTransactionsForTxBlock",permalink:"/docs/apis/api-transaction-get-txs-for-txblock"}},l=[{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]},{value:"HTTP Request",id:"http-request",children:[]},{value:"Arguments",id:"arguments",children:[]}],b={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-request"},"Example Request"),Object(i.b)(s.a,{defaultValue:"cURL",values:[{label:"cURL",value:"cURL"},{label:"node.js",value:"node.js"},{label:"java",value:"java"},{label:"python",value:"python"},{label:"go",value:"go"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"cURL",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -d \'{\n    "id": "1",\n    "jsonrpc": "2.0",\n    "method": "GetTransaction",\n    "params": ["cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5"]\n}\' -H "Content-Type: application/json" -X POST "https://api.zilliqa.com/"\n'))),Object(i.b)(c.a,{value:"node.js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const txn = await zilliqa.blockchain.getTransaction(\n  "cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5"\n);\nconsole.log(txn.result);\n'))),Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class App {\n    public static void main(String[] args) throws IOException {\n        HttpProvider client = new HttpProvider("https://api.zilliqa.com");\n        Rep<Transaction> transaction = client.getTransaction("cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5");\n        System.out.println(new Gson().toJson(transaction));\n    }\n}\n'))),Object(i.b)(c.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from pyzil.zilliqa import chain\nchain.set_active_chain(chain.MainNet)\nprint(chain.active_chain.api.GetTransaction("cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5"))\n'))),Object(i.b)(c.a,{value:"go",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'func GetTransaction() {\n    provider := NewProvider("https://api.zilliqa.com/")\n    response := provider.GetTransaction("cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5")\n    result, _ := json.Marshal(response)\n    fmt.Println(string(result))\n}\n')))),Object(i.b)("h3",{id:"example-response"},"Example Response"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Note: If the transaction is a for payment.\n{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "ID": "cd8727674bc05e0ede405597a218164e1c13c7103b9d0ba43586785f3d8cede5",\n    "amount": "24999000000000",\n    "gasLimit": "1",\n    "gasPrice": "1000000000",\n    "nonce": "1",\n    "receipt": {\n      "cumulative_gas": "1",\n      "epoch_num": "589763",\n      "success": true\n    },\n    "senderPubKey": "0x0347B5C6833ABD2AC0A6A7D85CF6BD0CC18084F6260B0C9DD2D491015BF2D47862",\n    "signature": "0x593454623A6CE0FEA287E42583445B140F696F79CA508762B8AB44F202686CFA115A2AC36C31E643C9EB0D46A4E6CA8C4EEFD78D7E9A25220DC512C13C9600F0",\n    "toAddr": "9148616bfdfab321bdd626682a8c446e193eabb2",\n    "version": "65537"\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Note: If the transaction is for contract deployment.\n{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "ID": "f9170f9661a2ec5a90e6701618ba38d76257c00a1e5848d8f541e1ef52d11ede",\n    "amount": "0",\n    "code": "scilla_version 0\\n\\nimport BoolUtils IntUtils\\n\\n(* Twitter contract *)\\n\\n(***************************************************)\\n(*               Associated library                *)\\n(***************************************************)\\nlibrary SocialPay\\n\\nlet one_msg =\\n    fun (msg : Message) =>\\n    let nil_msg = Nil {Message} in\\n    Cons {Message} msg nil_msg\\n\\nlet two_msgs =\\nfun (msg1 : Message) =>\\nfun (msg2 : Message) =>\\n  let msgs_tmp = one_msg msg2 in\\n  Cons {Message} msg1 msgs_tmp\\n\\nlet is_valid_substring =\\n  fun (tweet_text : String) =>\\n  fun (start_pos : Uint32) =>\\n  fun (hashtag_len : Uint32) =>\\n    let string_length = builtin strlen tweet_text in\\n    let valid_start_pos = builtin lt start_pos string_length in\\n    let end_pos = builtin add start_pos hashtag_len in\\n    let valid_end_pos = uint32_le end_pos string_length in\\n    andb valid_start_pos valid_end_pos\\n\\n(* Error events *)\\ntype Error =\\n  | CodeNotAuthorized\\n  | CodeRegisteredWithinWeek\\n  | CodeUserNotRegistered\\n  | CodeTweetAlreadyExists\\n  | CodeTweetNotValid\\n  | CodeTweetWithinDay\\n\\nlet make_error =\\n  fun (result : Error) =>\\n    let result_code = \\n      match result with\\n      | CodeNotAuthorized        => Int32 -1\\n      | CodeRegisteredWithinWeek => Int32 -2\\n      | CodeUserNotRegistered    => Int32 -3\\n      | CodeTweetAlreadyExists   => Int32 -4\\n      | CodeTweetNotValid        => Int32 -5\\n      | CodeTweetWithinDay       => Int32 -6\\n      end\\n    in\\n    { _exception : \\"Error\\"; code : result_code }\\n\\nlet tt = True\\n\\n(***************************************************)\\n(*             The contract definition             *)\\n(***************************************************)\\n\\ncontract SocialPay\\n(\\n    owner: ByStr20,\\n    hashtag: String,\\n    zils_per_tweet : Uint128,\\n    blocks_per_day : Uint32,\\n    blocks_per_week : Uint32,\\n    donation_address : ByStr20\\n)\\n\\n(* Map of tweet_id to recipient address *)\\nfield verified_tweets: Map String ByStr20 = Emp String ByStr20\\n\\n(* Map of twitter_id to last withdraw block number *)\\nfield last_withdrawal: Map String BNum = Emp String BNum\\n\\n(* Map of address to bool status of admin *)\\nfield admins: Map ByStr20 Bool = Emp ByStr20 Bool\\n\\n(* Map of twitter_id to recipient address *)\\nfield registered_users: Map String ByStr20 = Emp String ByStr20\\n\\n(* Emit Errors *)\\nprocedure ThrowError(err: Error)\\n  e = make_error err;\\n  throw e\\nend\\n\\nprocedure IsOwner(address: ByStr20)\\n  is_owner = builtin eq address owner;\\n  match is_owner with\\n  | True =>\\n  | False =>\\n    err = CodeNotAuthorized;\\n    ThrowError err\\n  end\\nend\\n\\nprocedure IsAdmin()\\n  is_admin <- exists admins[_sender];\\n  match is_admin with\\n  | True =>\\n  | False =>\\n    err = CodeNotAuthorized;\\n    ThrowError err\\n  end\\nend\\n\\nprocedure ConfigureAdmin(admin_address: ByStr20)\\n  is_admin <- exists admins[admin_address];\\n  match is_admin with\\n  | True =>\\n      delete admins[admin_address];\\n      e = {_eventname : \\"DeletedAdmin\\"; admin_address: admin_address};\\n      event e\\n  | False =>\\n      admins[admin_address] := tt;\\n      e = {_eventname : \\"AddedAdmin\\"; admin_address: admin_address};\\n      event e\\n  end\\nend\\n\\n(* Only owner can deposit ZIL *)\\ntransition Deposit()\\n  IsOwner _sender;\\n  accept;\\n  e = {_eventname : \\"DepositSuccessful\\"; sender: _sender; deposit_amount: _amount};\\n  event e\\nend\\n\\ntransition ConfigureAdmins(admin_addresses: List ByStr20)\\n  IsOwner _sender;\\n  forall admin_addresses ConfigureAdmin\\nend\\n\\ntransition ConfigureUsers(twitter_id: String, recipient_address: ByStr20)\\n  IsAdmin;\\n  is_registered <- exists registered_users[twitter_id];\\n  match is_registered with\\n  | True =>\\n      current_block <- & BLOCKNUMBER;\\n      withdrawal <- last_withdrawal[twitter_id];\\n      not_next_week_yet =\\n          match withdrawal with\\n          | Some last_withdraw_block =>\\n              let next_week_block = builtin badd last_withdraw_block blocks_per_week in\\n              builtin blt current_block next_week_block\\n          | None =>\\n              False\\n          end;\\n      match not_next_week_yet with\\n      | True =>\\n          err = CodeRegisteredWithinWeek;\\n          ThrowError err\\n      | False =>\\n          registered_users[twitter_id] := recipient_address;\\n          e = {_eventname : \\"ConfiguredUserAddress\\"; twitter_id: twitter_id; recipient_address: recipient_address};\\n          event e\\n      end\\n  | False =>\\n      registered_users[twitter_id] := recipient_address;\\n      e = {_eventname : \\"ConfiguredUserAddress\\"; twitter_id: twitter_id; recipient_address: recipient_address};\\n      event e\\n  end\\nend\\n\\n(* Only admins can call this transition                                         *)\\n(* The following conditions are checked for (in that order):                    *)\\n(*   1. Owner initiates the transition.                                         *)\\n(*   2. The tweeter is already registered in the app his/her wallet             *)\\n(*   3. The tweet hasn\'t been awarded before.                                   *)\\n(*   4. Substring specs (start_pos) is valid.                                   *)\\n(*   5. The substring matches the preset hashtag.                               *)\\n(*   6. Sufficient time (blocks) have passed since the user was awarded before. *)\\ntransition VerifyTweet (twitter_id: String, tweet_id: String, tweet_text: String, start_pos: Uint32)\\n  IsAdmin;\\n  get_recipient_address <- registered_users[twitter_id];\\n  match get_recipient_address with\\n  | None =>\\n      err = CodeUserNotRegistered;\\n      ThrowError err\\n  | Some recipient_address =>\\n      already_verified <- exists verified_tweets[tweet_id];\\n      not_already_verified = negb already_verified;\\n      hashtag_len = builtin strlen hashtag;\\n      valid_substring = is_valid_substring tweet_text start_pos hashtag_len;\\n      is_valid = andb valid_substring not_already_verified;\\n      match is_valid with\\n      | False =>\\n          match already_verified with\\n          | True =>\\n              err = CodeTweetAlreadyExists;\\n              ThrowError err\\n          | False =>\\n              err = CodeTweetNotValid;\\n              ThrowError err\\n          end\\n      | True =>\\n          match_hashtag = builtin substr tweet_text start_pos hashtag_len;\\n          is_hashtag = builtin eq match_hashtag hashtag;\\n          match is_hashtag with\\n          | False =>\\n              err = CodeTweetNotValid;\\n              ThrowError err\\n          | True =>\\n              withdrawal <- last_withdrawal[twitter_id];\\n              current_block <- & BLOCKNUMBER;\\n              not_next_day_yet =\\n                  match withdrawal with\\n                  | Some last_withdraw_block =>\\n                      let next_day_block = builtin badd last_withdraw_block blocks_per_day in\\n                      builtin blt current_block next_day_block\\n                  | None =>\\n                      False\\n                  end;\\n              match not_next_day_yet with\\n              | True =>\\n                  err = CodeTweetWithinDay;\\n                  ThrowError err\\n              | False =>\\n                  verified_tweets[tweet_id] := recipient_address;\\n                  last_withdrawal[twitter_id] := current_block;\\n                  e = {\\n                          _eventname : \\"VerifyTweetSuccessful\\";\\n                          sender: _sender;\\n                          recipient: recipient_address;\\n                          twitter_id: twitter_id;\\n                          tweet_id: tweet_id;\\n                          reward_amount: zils_per_tweet;\\n                          matched_donation: zils_per_tweet\\n                      };\\n                  event e;\\n                  msg_to_recipient = { \\n                    _tag: \\"\\";\\n                    _recipient: recipient_address;\\n                    _amount: zils_per_tweet \\n                  };\\n                  msg_to_donation = {\\n                    _tag: \\"\\";\\n                    _recipient: donation_address;\\n                    _amount: zils_per_tweet\\n                  };\\n                  msgs = two_msgs msg_to_recipient msg_to_donation;\\n                  send msgs\\n              end\\n          end\\n      end\\n  end\\nend\\n\\ntransition ReturnFund ()\\n  IsOwner _sender;\\n  current_bal <- _balance;\\n  e = {\\n    _eventname : \\"ReturnFundSuccessful\\";\\n    returned_amount: current_bal\\n  };\\n  event e;\\n  msg = {\\n      _tag       : \\"\\";\\n      _recipient : owner;\\n      _amount    : current_bal\\n  };\\n  msgs = one_msg msg;\\n  send msgs\\nend",\n    "data": "[{\\"vname\\":\\"owner\\",\\"value\\":\\"0xf1a3d56321D6C0C9825bf3c34CB843719e99cBCA\\",\\"type\\":\\"ByStr20\\"},{\\"vname\\":\\"hashtag\\",\\"value\\":\\"#zilcovidheroes\\",\\"type\\":\\"String\\"},{\\"vname\\":\\"zils_per_tweet\\",\\"value\\":\\"25000000000000\\",\\"type\\":\\"Uint128\\"},{\\"vname\\":\\"blocks_per_day\\",\\"value\\":\\"1600\\",\\"type\\":\\"Uint32\\"},{\\"vname\\":\\"blocks_per_week\\",\\"value\\":\\"1600\\",\\"type\\":\\"Uint32\\"},{\\"vname\\":\\"donation_address\\",\\"value\\":\\"0x7AEB68fc38B29387D2e100db1E42c883C0519548\\",\\"type\\":\\"ByStr20\\"},{\\"vname\\":\\"_scilla_version\\",\\"type\\":\\"Uint32\\",\\"value\\":\\"0\\"}]",\n    "gasLimit": "25000",\n    "gasPrice": "1000000000",\n    "nonce": "9",\n    "receipt": {\n      "cumulative_gas": "10481",\n      "epoch_num": "586524",\n      "success": true\n    },\n    "senderPubKey": "0x020B94FDA851E2BF9392FF13D7CA33B417C5B95BCD0965238FF5074B7C8D31BC0D",\n    "signature": "0x16196121EFEA86C9D91102EA200F02C88744E82B886C7AF72256F18615ADEE38EC18AFEE2739615896C5306F3C2642AA98CDFE113AC64A55981BBC2C82D31592",\n    "toAddr": "0000000000000000000000000000000000000000",\n    "version": "65537"\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Note: If the transaction is for contract call.\n{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "ID": "52605cee6955b3d14f5478927a90977b305325aff4ae0a2f9dbde758e7b92ad4",\n    "amount": "50000000000000",\n    "data": "{\\"_tag\\":\\"sendFunds\\",\\"params\\":[{\\"vname\\":\\"accountValues\\",\\"type\\":\\"List (AccountValue)\\",\\"value\\":[{\\"constructor\\":\\"AccountValue\\",\\"argtypes\\":[],\\"arguments\\":[\\"0xc0e28525e9d329156e16603b9c1b6e4a9c7ed813\\",\\"50000000000000\\"]}]}]}",\n    "gasLimit": "25000",\n    "gasPrice": "1000000000",\n    "nonce": "3816",\n    "receipt": {\n      "accepted": true,\n      "cumulative_gas": "878",\n      "epoch_num": "589742",\n      "success": true,\n      "transitions": [\n        {\n          "addr": "0x9a65df55b2668a0f9f5f749267cb351a37e1f3d9",\n          "depth": 0,\n          "msg": {\n            "_amount": "50000000000000",\n            "_recipient": "0xc0e28525e9d329156e16603b9c1b6e4a9c7ed813",\n            "_tag": "onFundsReceived",\n            "params": []\n          }\n        }\n      ]\n    },\n    "senderPubKey": "0x03DE40DF885B0E334D53FF5E5554589AAF46F2339FEBEE93213F2CCE52D1F488F4",\n    "signature": "0xB19AB66C4410EE4833A9C5DEE600471DB4D711F6B61D2312988E6E70CC655409F18BB42BB6940B6263C8EA5CE08CAEC06111BDF19BE00D7E15F25515CAA45DAA",\n    "toAddr": "9a65df55b2668a0f9f5f749267cb351a37e1f3d9",\n    "version": "65537"\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Note: If the transaction has failed.\n{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "ID": "9b00b3b7d80dfb3818a6aaab0cb6fd3822b1bd7b3c6d5c6260579d12ae631a96",\n    "amount": "0",\n    "data": "{\\"_tag\\":\\"ConfigureUsers\\",\\"params\\":[{\\"vname\\":\\"twitter_id\\",\\"type\\":\\"String\\",\\"value\\":\\"111111111\\"},{\\"vname\\":\\"recipient_address\\",\\"type\\":\\"ByStr20\\",\\"value\\":\\"0xAA9AC51920c75bDe16C8c27E529eDaFfcb15f530\\"}]}",\n    "gasLimit": "9000",\n    "gasPrice": "1000000000",\n    "nonce": "8260",\n    "receipt": {\n      "cumulative_gas": "1220",\n      "epoch_num": "588004",\n      "errors": {\n        "0": [\n          7\n        ]\n      },\n      "exceptions": [\n        {\n          "line": 87,\n          "message": "Exception thrown: (Message [(_exception : (String \\"Error\\")) ; (code : (Int32 -2))])"\n        },\n        {\n          "line": 100,\n          "message": "Raised from IsAdmin"\n        },\n        {\n          "line": 137,\n          "message": "Raised from ConfigureUsers"\n        }\n      ],\n      "success": false\n    },\n    "senderPubKey": "0x037B1722AAE35694A9F6E6C57DF5DD1274CBF568463AB50CEB6CBAD18C9BE291AA",\n    "signature": "0x26676494B528757E602943DD2524277ED3850FE3F8E1060E8F36D8E18B5CB6D347698DB00DF0DD2C6786594BF420585ECA30D030C56FE946574AAD59456F110B",\n    "toAddr": "7587a6d9b4def93c9c02475f5854c45eb4d9dac4",\n    "version": "65537"\n  }\n}\n')),Object(i.b)("p",null,"Returns the details of a specified Transaction."),Object(i.b)("h3",{id:"http-request"},"HTTP Request"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Chain(s)"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"URL(s)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Zilliqa mainnet")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://api.zilliqa.com/"}),"https://api.zilliqa.com/"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Developer testnet")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://dev-api.zilliqa.com/"}),"https://dev-api.zilliqa.com/"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Local testnet")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"http://localhost:4201/")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Isolated server")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"http://localhost:5555/")))),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'"1"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"jsonrpc")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'"2.0"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'"GetTransaction"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"params")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Transaction hash of 32 bytes of a specified transaction.")))))}u.isMDXComponent=!0},276:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=l(t),p=a,m=b["".concat(s,".").concat(p)]||b[p]||u[p]||i;return t?r.a.createElement(m,c(c({ref:n},d),{},{components:t})):r.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var d=2;d<i;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},277:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},278:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});n.a=r},279:function(e,n,t){"use strict";var a=t(0),r=t(278);n.a=function(){return Object(a.useContext)(r.a)}},280:function(e,n,t){"use strict";t(24),t(20),t(19);var a=t(0),r=t.n(a),i=t(279),s=t(277),c=t(130),o=t.n(c),d=37,l=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,b=e.values,u=e.groupId,p=Object(i.a)(),m=p.tabGroupChoices,_=p.setTabGroupChoices,g=Object(a.useState)(c),h=g[0],f=g[1];if(null!=u){var O=m[u];null!=O&&O!==h&&b.some((function(e){return e.value===O}))&&f(O)}var j=function(e){f(e),null!=u&&_(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===n,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case d:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return j(n)},onClick:function(){return j(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},281:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);