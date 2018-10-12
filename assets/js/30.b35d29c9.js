(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{202:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Please check "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/guide/other/dashboard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GUI Dashboard"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Pandora.js can be installed locally with your Node.js project. It can also be installed globally.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("This chapter will introduce the basic Fork and Cluster modes, you can choose either mode based on your scenario.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("Cluster mode is frequently adopted by Node.js applications in production. Pandora.js launch multiple workers, the same number as cpu cores by default, for applications to max the CPU performance. You can tune this setting based on your own flavor.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),s("p",[t._v("Other than process management, Pandora.js can also help with application lifecycle management.")]),t._v(" "),s("p",[t._v("We suggest you use pandora.js to start/stop your node.js applications. You define the scripts section of package.json as below:")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),s("p",[t._v("After the application is launched, the daemon process will keep resident in memory even the application is stopped. You can quit the daemon process via the command below:")]),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[this._v("#")]),this._v(" Quick Start")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("OS: macOS / Linux")]),this._v(" "),a("li",[this._v("Node.js Runtime: >= 8.x.x, latest LTS version is recommended")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"the-goal-of-this-chapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-goal-of-this-chapter","aria-hidden":"true"}},[this._v("#")]),this._v(" The goal of this chapter")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("Understand "),a("code",[this._v("procfile.js")]),this._v(" configuration.")]),this._v(" "),a("li",[this._v("Understand basic commands: start, stop, dev, exit, and list.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"about-gui-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-gui-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" About GUI Dashboard")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("npm i pandora -g  // Install with the global mode\nnpm i pandora --save   // Install with the local mode\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"generate-procfile-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-procfile-js","aria-hidden":"true"}},[this._v("#")]),this._v(" Generate procfile.js")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Pandora.js defines the application process structure via the "),a("code",[this._v("procfile.js")]),this._v(" file in project root directory, so you need to add a "),a("code",[this._v("procfile.js")]),this._v(" file in the project root directory.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"fork-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Fork mode")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Fork mode is kind of straightforward, it just launch the application, say, run "),a("code",[this._v("node app.js")]),this._v(" directly.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can use the init command to generate a "),a("code",[this._v("procfile.js")]),this._v(" with fork mode:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pandora init ./app.js "),s("span",{attrs:{class:"token comment"}},[t._v("# Here app.js is the launch entry of your Node.js application")]),t._v("\n? Which "),s("span",{attrs:{class:"token function"}},[t._v("type")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you like to generate ? "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n❯ fork \n  cluster \n** The procfile.js was generated to location /xx/xx/procfile.js **\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Here you have a "),a("code",[this._v("procfile.js")]),this._v(" with default values. You can have a glimpse of file content here:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pandora\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fork")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'appName'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./app.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"cluster-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Cluster mode")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can use the init command to generate a "),a("code",[this._v("procfile.js")]),this._v(" with cluster mode:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pandora init ./app.js "),s("span",{attrs:{class:"token comment"}},[t._v("# Here app.js is the launch entry of your Node.js application")]),t._v("\n? Which "),s("span",{attrs:{class:"token function"}},[t._v("type")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you like to generate ? "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fork \n❯ cluster \n** The procfile.js was auto generated to location /xx/xx/procfile.js **\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Here you have a "),a("code",[this._v("procfile.js")]),this._v(" with default values. You can have a glimpse of file content here:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  pandora\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// launch app.js using the cluster mode, with the default setting")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("cluster")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'./app.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n \n  "),s("span",{attrs:{class:"token comment"}},[t._v("/* Custom the number of workers\n  pandora\n    .process('worker')\n    // Change the `worker` process numbers to 2.\n    .scale(2);\n\n    // By the way, The default process number is defined as `pandora.dev ? 1 : 'auto'`.\n    // Which means if it is in development mode, pandora.js will not launch applications in cluster mode,\n    // otherwise it launches applications in cluster mode.\n  */")]),t._v("\n    \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"start-or-stop-through-npm-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-or-stop-through-npm-run","aria-hidden":"true"}},[this._v("#")]),this._v(" Start or stop through "),a("code",[this._v("npm run")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("// package.json\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"dev"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"pandora dev"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"start"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"pandora start"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"stop"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"pandora stop"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Now，you can use "),a("code",[this._v("npm run")]),this._v(" to start/stop your application:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("npm run dev // Local start\nnpm run start // Production start\nnpm run stop // Production stop\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"start-and-stop-in-global-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-and-stop-in-global-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Start and stop in global mode")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora start [--name xxx] [path]\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Here is an example, we launch the application in the application root directory, and name it "),a("code",[this._v("helloApp")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora start\npandora start --name helloApp\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If "),a("code",[this._v("name")]),this._v(" is not specified, Pandora.js will take the last part of the root directory or the value of "),a("code",[this._v("name")]),this._v(" property in package.json as the application name. The application will be launched silently, according to the default definition in "),a("code",[this._v("procfile.js")]),this._v(" and run in the background.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("As soon as the application is launched, it can be viewed through the "),a("code",[this._v("list")]),this._v(" command:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora list\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("you can also stop it with "),a("code",[this._v("stop")]),this._v(" command:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora stop\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("Since Pandora.js used to run global mode in background, it is strongly suggested to deploy it on the server beforehand.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora exit\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you do want to run the applications at foreground, you can choose the "),a("code",[this._v("dev")]),this._v(" command ( only for local debugging):")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("pandora dev\n")])])])}],!1,null,null,null);n.options.__file="quickstart.md";a.default=n.exports}}]);