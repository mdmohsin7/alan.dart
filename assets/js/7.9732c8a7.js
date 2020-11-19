(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{360:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("Before you can use the entire methods provided by Alan.dart, you need to perform some required setup.")]),t._v(" "),s("h2",{attrs:{id:"getting-alan-dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-alan-dart"}},[t._v("#")]),t._v(" Getting Alan.dart")]),t._v(" "),s("p",[t._v("If you not have done it yet, you need to get Alan.dart. You can do this by editing your "),s("code",[t._v("pubspec.yaml")]),t._v(" file as follows:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("The current published version of Alan.dart is the following:"),s("br"),t._v(" "),s("img",{attrs:{src:"https://img.shields.io/pub/v/alan",alt:"Pub Version"}})]),t._v(" "),s("h3",{attrs:{id:"using-unpublished-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-unpublished-versions"}},[t._v("#")]),t._v(" Using unpublished versions")]),t._v(" "),s("p",[t._v("If you want, you can also use unpublished versions of the library. To do it, instead of relying on "),s("a",{attrs:{href:"https://pub.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("pub.dev"),s("OutboundLink")],1),t._v(", you can rely directly on the GitHub repository:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/alan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sdk/alan.dart.git\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <branch or tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"generating-the-needed-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-needed-files"}},[t._v("#")]),t._v(" Generating the needed files")]),t._v(" "),s("p",[t._v("In order to be compatible with "),s("a",{attrs:{href:"https://flutter.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),s("OutboundLink")],1),t._v(", Alan.dart uses a library called "),s("a",{attrs:{href:"https://pub.dev/packages/reflectable",target:"_blank",rel:"noopener noreferrer"}},[t._v("reflectable"),s("OutboundLink")],1),t._v(" in order to generate some files. This is due to the fact that Flutter does not support reflection, which needed in some part of the Alan.dart codebase.")]),t._v(" "),s("h3",{attrs:{id:"_1-getting-build-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-getting-build-runner"}},[t._v("#")]),t._v(" 1. Getting "),s("code",[t._v("build_runner")])]),t._v(" "),s("p",[t._v("The first thing that you need to do is to include "),s("a",{attrs:{href:"https://pub.dev/packages/build_runner",target:"_blank",rel:"noopener noreferrer"}},[t._v("build_runner"),s("OutboundLink")],1),t._v(" inside the "),s("code",[t._v("dev_dependencies")]),t._v(" section of our "),s("code",[t._v("pubspec.yaml")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dev_dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_runner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^1.10.0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("Once you added that library to your dependencies, you need to run "),s("code",[t._v("pub get")]),t._v(" (or "),s("code",[t._v("flutter pub get")]),t._v(" if you're using Flutter).")]),t._v(" "),s("h3",{attrs:{id:"_2-specify-the-build-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-specify-the-build-targets"}},[t._v("#")]),t._v(" 2. Specify the build targets")]),t._v(" "),s("p",[t._v("The second step to follow is to specify for which file "),s("code",[t._v("build_runner")]),t._v(" should build the needed "),s("code",[t._v("reflectable")]),t._v(" implementations.")]),t._v(" "),s("p",[t._v("Usually, the targets should be:")]),t._v(" "),s("ul",[s("li",[t._v("your "),s("code",[t._v("main.dart")]),t._v(" file")]),t._v(" "),s("li",[t._v("all the test files in which you need to use Alan.dart")])]),t._v(" "),s("p",[t._v("To specify the files you need to first create a "),s("code",[t._v("build.yaml")]),t._v(" file inside the root folder of your project.")]),t._v(" "),s("p",[t._v("Then, inside that file you need to add the following:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("$default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("builders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reflectable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("generate_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" relative/path/to/your/main.dart\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" relative/path/to/your/test_1.dart\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("    \n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" relative/path/to/your/test_n.dart\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("strong",[t._v("Note")]),t._v(". The paths should be all relative to your project root folder.")]),t._v(" "),s("h3",{attrs:{id:"_3-build-the-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-build-the-files"}},[t._v("#")]),t._v(" 3. Build the files")]),t._v(" "),s("p",[t._v("Once you have specified all the targets, the next step is to generate the files. To do so, you can run the following command:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pub run build_runner build\n\n# If you're using Flutter, run \n# flutter pub run build_runner build\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("This will generate a series of "),s("code",[t._v(".reflectable.dart")]),t._v(" files in the same folders of the targets specified inside the "),s("code",[t._v("build.yaml")]),t._v(" file.")]),t._v(" "),s("h3",{attrs:{id:"_4-initialize-reflectable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-initialize-reflectable"}},[t._v("#")]),t._v(" 4. Initialize "),s("code",[t._v("reflectable")])]),t._v(" "),s("p",[t._v("Finally, you need to properly initialize "),s("code",[t._v("reflectable")]),t._v(" inside the target files. This can be done by:")]),t._v(" "),s("ol",[s("li",[t._v("Importing the related "),s("code",[t._v(".reflectable.dart")]),t._v(" file.")]),t._v(" "),s("li",[t._v("Call the "),s("code",[t._v("initializeReflectable()")]),t._v(" method as the first thing of your "),s("code",[t._v("main")]),t._v(" method.")])]),t._v(" "),s("h2",{attrs:{id:"complete-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complete-example"}},[t._v("#")]),t._v(" Complete example")]),t._v(" "),s("h3",{attrs:{id:"folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder structure")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root\n  |- lib\n  |   |- main.dart   \n  |- pubspec.yaml\n  |- build.yaml \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"pubspec-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pubspec-yaml"}},[t._v("#")]),t._v(" "),s("code",[t._v("pubspec.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Test project\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.1\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=2.6.0 <3.0.0"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.39.2\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dev_dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_runner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^1.10.0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"build-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-yaml"}},[t._v("#")]),t._v(" "),s("code",[t._v("build.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("$default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("builders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reflectable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("generate_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lib/main.dart\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"main-dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-dart"}},[t._v("#")]),t._v(" "),s("code",[t._v("main.dart")])]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dart:async'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package:http/http.dart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("as")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:alan/alan.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main.reflectable.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Init reflectable")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeReflectable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" querier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GovQuerier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" lcdEndpoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:1317"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" _proposals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" querier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProposals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lcdEndpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);