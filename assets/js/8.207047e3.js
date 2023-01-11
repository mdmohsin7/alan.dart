(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-custom-chains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-custom-chains"}},[t._v("#")]),t._v(" Working with custom chains")]),t._v(" "),s("p",[t._v("Given Alan.dart now works primarily based on Protobuf, in order to use it with a custom chain you will need to generate the proper files. This will make sure you are able to create transactions containing custom messages or to query the chain for custom modules. Following, you can find how to do this.")]),t._v(" "),s("h2",{attrs:{id:"generating-custom-protobuf-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-custom-protobuf-implementations"}},[t._v("#")]),t._v(" Generating custom Protobuf implementations")]),t._v(" "),s("h3",{attrs:{id:"_1-get-the-proto-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-the-proto-files"}},[t._v("#")]),t._v(" 1. Get the "),s("code",[t._v(".proto")]),t._v(" files")]),t._v(" "),s("p",[t._v("The first thing you have to do is to get the "),s("code",[t._v(".proto")]),t._v(" files necessary to compile everything. Most custom chains include those files into two separate folders: "),s("code",[t._v("proto")]),t._v(" and "),s("code",[t._v("third_party")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("inside the "),s("code",[t._v("proto")]),t._v(" folder you can usually find the various "),s("code",[t._v(".proto")]),t._v(" files that are used to generate custom messages, queriers, etc;")])]),t._v(" "),s("li",[s("p",[t._v("inside the "),s("code",[t._v("third_party")]),t._v(", instead, you can find all the other "),s("code",[t._v(".proto")]),t._v(" files that are taken from third party projects (such as Protobuf, Google, Cosmos, etc) and are still required to compile the custom ones.")])])]),t._v(" "),s("p",[t._v("That being said, what you want to do is get those two folders ("),s("code",[t._v("proto")]),t._v(" and "),s("code",[t._v("third_party")]),t._v(") and put them into your project root folder. As an example, this is the folder structure of Alan.dart's root folder:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Alan.dart\n├── proto\n│    └── cosmos\n│         ├── auth\n│         ├── bank\n│         ├── base\n│         ├── capability\n│         ├── crisis\n│         ├── crypto\n│         ├── distribution\n│         ├── evidence\n│         ├── genutil\n│         ├── gov\n│         ├── mint\n│         ├── params\n│         ├── slashing\n│         ├── staking\n│         ├── tx\n│         ├── upgrade\n│         └── vesting\n│\n├── third_party\n│    └── proto\n│         ├── confio\n│         ├── cosmos_proto\n│         ├── gogoproto\n│         ├── google\n│         └── tendermint\n├── ...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v("As you can see, the "),s("code",[t._v("proto")]),t._v(" folder contains all the Cosmos-related "),s("code",[t._v(".proto")]),t._v(" files, while the "),s("code",[t._v("third_party")]),t._v(" contains all the "),s("code",[t._v(".proto")]),t._v(" files needed in other to compile the Cosmos ones properly.")]),t._v(" "),s("h3",{attrs:{id:"_2-generate-the-dart-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-generate-the-dart-files"}},[t._v("#")]),t._v(" 2. Generate the "),s("code",[t._v(".dart")]),t._v(" files.")]),t._v(" "),s("p",[t._v("Now that you have your "),s("code",[t._v(".proto")]),t._v(" files ready, it's time to generate the "),s("code",[t._v(".dart")]),t._v(" files that will contain the classes that you will be able to use with Dart.")]),t._v(" "),s("p",[t._v("To do so, the first thing you have to do is to have "),s("code",[t._v("protoc")]),t._v(" installed on your machine, as well as the Dart plugin for Protobuf. If you don't have them installed, you can get them here:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf#protocol-compiler-installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf compiler ("),s("code",[t._v("protoc")]),t._v(")"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://pub.dev/packages/protoc_plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dart "),s("code",[t._v("protoc")]),t._v(" plugin"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Once you have them installed, you can now generate your Dart files running the following script:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Define variables")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("OUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lib/proto\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROTO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("proto\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("THIRD_PARTY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("third_party\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate the third party Protobuf implementations")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROTOC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protoc --dart_out=grpc:'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OUT")]),t._v(" -I"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$THIRD_PARTY")]),t._v('/proto"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("proto_dirs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$THIRD_PARTY")]),t._v('/proto"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-prune")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.proto'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-print0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("dir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proto_dirs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROTOC")]),t._v(" -I"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$THIRD_PARTY")]),t._v("/proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${dir}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-maxdepth")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.proto'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate the Cosmos Protobuf implementation")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("proto_dirs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROTO")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-prune")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.proto'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-print0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("dir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proto_dirs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROTOC")]),t._v(" -I"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--gocosmos_out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("interfacetype+grpc,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nMgoogle/protobuf/any.proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("github.com/cosmos/cosmos-sdk/codec/types:. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${dir}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-maxdepth")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.proto'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Remove all .pbserver.dart files as they are unnecessary")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OUT")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.pbserver.dart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-type")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-delete")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[t._v("As you can see, this script uses three variables:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("OUT")]),t._v(", which represents the folder inside which all the "),s("code",[t._v(".dart")]),t._v(" files will be put once generated;")]),t._v(" "),s("li",[s("code",[t._v("PROTO")]),t._v(", which is the path to the "),s("code",[t._v(".proto")]),t._v(" files that should be used to generate your custom types;")]),t._v(" "),s("li",[s("code",[t._v("THIRD_PARTY")]),t._v(", which is the folder inside which you have placed third parties' "),s("code",[t._v(".proto")]),t._v(" files.")])]),t._v(" "),s("h2",{attrs:{id:"build-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-errors"}},[t._v("#")]),t._v(" Build errors")]),t._v(" "),s("p",[t._v("It might happen that, after you have generated all your files, some errors pop up while building the project. The most commons are the ones like the following:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error when reading 'lib/proto/google/protobuf/timestamp.pb.dart': No such file or directory\nimport '../../google/protobuf/timestamp.pb.dart' as $3;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("Such errors appear if you did not include all the required "),s("code",[t._v(".proto")]),t._v(" files inside the "),s("code",[t._v("third_party")]),t._v(" folder. In the example above, we can see that it was not possible to build the project because the "),s("code",[t._v("../google/protobuf/timestamp.pb.dart")]),t._v(" file does not exist.")]),t._v(" "),s("p",[t._v("To solve this problem, the easiest way is to simply download the get "),s("code",[t._v(".proto")]),t._v(" file and put into the appropriate folder. In this case, we should download the "),s("code",[t._v("timestamp.proto")]),t._v(" file and put inside the "),s("code",[t._v("third_party/proto/google/protobuf")]),t._v(" folder:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/protocolbuffers/protobuf/master/src/google/protobuf/timestamp.proto "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" third_party/proto/google/protobuf/timestamp.proto\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Once we have done so, we can simply re-run our generation script and make sure that everything builds properly.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Common missing files")]),t._v(" "),s("p",[t._v("The most common missing files are the ones associated with two external dependencies that are highly used inside Cosmos: Protobuf and the Google APIs. If you are missing one or more files from either of those two projects, you can find all the files here:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/tree/master/src/google/protobuf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/googleapis/googleapis",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google APIs"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);