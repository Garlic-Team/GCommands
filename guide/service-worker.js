if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.d8c8f216.css",revision:"c65f68bbeb501e253e98d37a995c20d2"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/43.6fe294c0.js",revision:"4cea4c382679a893c2b6134861f8924f"},{url:"assets/js/44.d33debe6.js",revision:"d57efaa6441affdcb610d133e9ab4566"},{url:"assets/js/app.41ab5173.js",revision:"7c3ef03362c176850db9b4d386a1acf6"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.7e414c35.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.4105128c.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.4fd0c321.js",revision:"2c643d7843e56afff8eb8181aeacee26"},{url:"assets/js/page-ContextMenus.fcd4051e.js",revision:"1e683ae065580df9e812236b1396bfe2"},{url:"assets/js/page-Creatingaevent.4914a58c.js",revision:"6130f891ec03824b6908dc7af976cb61"},{url:"assets/js/page-Creatingyourfirstcommand.ccc2487b.js",revision:"ec8867be7334a2ba6cfa8eccb00f3f54"},{url:"assets/js/page-Example.21a17062.js",revision:"e988f25480cb7b008d820049405605d7"},{url:"assets/js/page-FAQ.67e41e70.js",revision:"a1e46fa1dcf4b951d92fe4e61df99a94"},{url:"assets/js/page-Gettingstarted.a7e5f11c.js",revision:"86fcc3a61dc0b0ec2f1a636610e3c398"},{url:"assets/js/page-GuildLanguage.439b6227.js",revision:"b4a76d31f9d89965e8e9099e640d6f1d"},{url:"assets/js/page-GuildPrefix.33d4f0d8.js",revision:"f45fa2e9bdd2af04c0ca5f0c9c9f2371"},{url:"assets/js/page-Home.cc3523c2.js",revision:"17af88d20844f8e62114b24ca0c2ddd5"},{url:"assets/js/page-Ikeepgettingtheerror403MissingAccess.900f0bae.js",revision:"b434a7444870ceb7a7119acba35ae145"},{url:"assets/js/page-Ikeepgettingtheerrorguildisnotdefined.a2bc3471.js",revision:"344acd0a5303cfe135a0ded7d4708072"},{url:"assets/js/page-Inhibitor.0fa50a90.js",revision:"b44f9794891fd632db168dcdfef19c4f"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.dfcaa442.js",revision:"3a46218dfba747e1288ec51a533889d6"},{url:"assets/js/page-InstallingNodejsandGCommands.8fb1073b.js",revision:"fbba2335f660f8c56695ff6502194041"},{url:"assets/js/page-Introduction.57c36d3a.js",revision:"3ade4ef744c9b0e8fb8699676485cc22"},{url:"assets/js/page-Makingabasicbot.31d5d6f7.js",revision:"178763909b2568002f4140ffea9a66b8"},{url:"assets/js/page-Mentions.4cbb201e.js",revision:"bedb4ce333ce105991f262dc150db48a"},{url:"assets/js/page-MessageComponents.346180f0.js",revision:"785e822a6a0b4839754500f6ad024529"},{url:"assets/js/page-MoreEvents.3aed83bd.js",revision:"17ec907ff07482e45747296095e08a7d"},{url:"assets/js/page-Setup.202d5498.js",revision:"d30133c47714337460d5c411389112c5"},{url:"assets/js/page-ThealwaysObtainoptionincommands.8fe8e414.js",revision:"e82db1ec2d3a65432820b21403742c34"},{url:"assets/js/page-Updatingfromv2tov3.02564cfc.js",revision:"02573e3cb99ff589edcf58466a94f4ad"},{url:"assets/js/page-Updatingfromv3tov4.3748c8eb.js",revision:"de97e70d286491a695a506bf94b9fe3e"},{url:"assets/js/page-Updatingfromv4tov5.f690c04e.js",revision:"5f8185ad059b813335677f46b509b3d8"},{url:"assets/js/page-Updatingfromv5tov6.97b5a2f3.js",revision:"2cce8d7cdbe711da18d0147c302f77a9"},{url:"assets/js/page-Updatingfromv6tov7.4bd8c036.js",revision:"66ed1301915b80211fab93c59be4e781"},{url:"assets/js/page-Usingacustomlanguagefile.c177053c.js",revision:"688ac56eb83dedd8290741b201642d9e"},{url:"assets/js/page-Usingargumentsincommands.9df67df7.js",revision:"aee57baff24c7144d395268b0c1f0223"},{url:"assets/js/page-Usingsubcommands.0a13e5cc.js",revision:"dac72ab8fc8b1c9ecb1c74332a5bddab"},{url:"assets/js/page-Usingthecommandbuilders.c44426e4.js",revision:"1de10148ead2378e35182fddf305f29e"},{url:"assets/js/page-Usingtheeventbuilder.bd5969d8.js",revision:"d14b205b212ba6c1734b2f499bf19ed6"},{url:"assets/js/page-Whatarealltheobjectsinthefirstargumentofacommand.2bf59629.js",revision:"40727ca497b589aabded95d517ae85a8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.47c8dcfe.js",revision:"c60bdb4fbc981c6c7ae702c37cc02006"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2cf2cb47.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.ebe269b1.js",revision:"3b79351ca0b369cad6df4ad55f3c8d6e"},{url:"assets/js/vendors~photo-swipe.de305237.js",revision:"1e1605a34ca04878400535e4e5495fcc"},{url:"404.html",revision:"3a0a7e28777da4082572fcf49138048c"},{url:"guide/additional/fromv2tov3/index.html",revision:"c477f99ee66897db04044a39cb363482"},{url:"guide/additional/fromv3tov4/index.html",revision:"624d5a6144c413f0265f09477f017e68"},{url:"guide/additional/fromv4tov5/index.html",revision:"2fd5b8a05670a4061e58aa0036e1e565"},{url:"guide/additional/fromv5tov6/index.html",revision:"2a65b5a50506ac392c001f190200802d"},{url:"guide/additional/fromv6tov7/index.html",revision:"cd19b067a7835260c4fa346fac4e62c6"},{url:"guide/commands/additionalfeatures/index.html",revision:"28123da95e80182ad0fd04204fa67824"},{url:"guide/commands/first/index.html",revision:"09ad605ee6c2634dfd2d6f91ebf6748e"},{url:"guide/commands/gettingstarted/index.html",revision:"80815b9607e64c980e0d13b085d46d84"},{url:"guide/commands/usingargs/index.html",revision:"9431fa7510fc51964d8c9ff12914cccb"},{url:"guide/commands/usingbuilders/index.html",revision:"d5363f32d6296c9cf1cb074919728fa1"},{url:"guide/commands/usingsub/index.html",revision:"7915274dab3d1e4df4a9edf3f4ae6b4d"},{url:"guide/database/guildlanguage/index.html",revision:"bff8fef1512b58a884614391f7042129"},{url:"guide/database/prefix/index.html",revision:"a89d1b6fc9590f80507a7fe5cb587cc2"},{url:"guide/database/setup/index.html",revision:"e3f5f377c1fa849b894473d9b8409ed4"},{url:"guide/events/create/index.html",revision:"9f8b59f84c742ccc791c9c9651f16bcc"},{url:"guide/events/moreevents/index.html",revision:"1cb70b2b080c64d034de9bcb25eff5b8"},{url:"guide/events/setup/index.html",revision:"99017c5514e44f3b4d8c92b8441fba9c"},{url:"guide/events/usingbuilder/index.html",revision:"3b0d227bf47604fde2100d09144fcd18"},{url:"guide/gettingstarted/basicbot/index.html",revision:"65dae38b37200dc525645a840c32f125"},{url:"guide/gettingstarted/installation/index.html",revision:"dad496f18c3506dbe1fa2eb4476a3c0f"},{url:"guide/index.html",revision:"df94c7e83c950d5c564566b317bf1282"},{url:"guide/interactions/contextmenus/index.html",revision:"08c95fb818c07e43ead1e4577745db98"},{url:"guide/interactions/messagecomponents/index.html",revision:"0b73e64c1b07ec4266f1c0e39c098efd"},{url:"guide/other/alwaysobtain/index.html",revision:"c0188059279a7fa42912b63203d73c1d"},{url:"guide/other/customlanguagefile/index.html",revision:"e323235f2c13172ec78868f2c579ce34"},{url:"guide/other/inhibitor/index.html",revision:"656d73e41fea01e902cd3d2b242c2f7c"},{url:"guide/other/mentions/index.html",revision:"c642b6eda47d33f62861961e6bdaf6d1"},{url:"guide/questions/commandrunoptions/index.html",revision:"dcb82f604bfe632757f9f2c5359609eb"},{url:"guide/questions/guildundefined/index.html",revision:"780748fc2b8f49d914b0b1a4d29885d9"},{url:"guide/questions/missingacces/index.html",revision:"6640381c348260477f11bab011ccc66c"},{url:"index.html",revision:"1d141f0018a365b40be0f550b18e0ed8"},{url:"voice/beginner/example/index.html",revision:"04ca762ab80eddfce71a0c3b9a51d1f3"},{url:"voice/beginner/faq/index.html",revision:"c78ed6933ca85a6555b7d2443d0bd94f"},{url:"voice/beginner/setup/index.html",revision:"e6f29db9f21059636c55351f32a78c6f"},{url:"voice/index.html",revision:"99b9206a2609ffd0c91a34f76f5e1e9b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
