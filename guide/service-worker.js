if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.d8c8f216.css",revision:"c65f68bbeb501e253e98d37a995c20d2"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/43.6fe294c0.js",revision:"4cea4c382679a893c2b6134861f8924f"},{url:"assets/js/44.d33debe6.js",revision:"d57efaa6441affdcb610d133e9ab4566"},{url:"assets/js/app.d5603eb1.js",revision:"f2ce805ad8b4d55c79ad979281f8225c"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.7e414c35.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.4105128c.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.4fd0c321.js",revision:"2c643d7843e56afff8eb8181aeacee26"},{url:"assets/js/page-ContextMenus.fcd4051e.js",revision:"1e683ae065580df9e812236b1396bfe2"},{url:"assets/js/page-Creatingaevent.4914a58c.js",revision:"6130f891ec03824b6908dc7af976cb61"},{url:"assets/js/page-Creatingyourfirstcommand.ccc2487b.js",revision:"ec8867be7334a2ba6cfa8eccb00f3f54"},{url:"assets/js/page-Example.21a17062.js",revision:"e988f25480cb7b008d820049405605d7"},{url:"assets/js/page-FAQ.67e41e70.js",revision:"a1e46fa1dcf4b951d92fe4e61df99a94"},{url:"assets/js/page-Gettingstarted.a7e5f11c.js",revision:"86fcc3a61dc0b0ec2f1a636610e3c398"},{url:"assets/js/page-GuildLanguage.439b6227.js",revision:"b4a76d31f9d89965e8e9099e640d6f1d"},{url:"assets/js/page-GuildPrefix.33d4f0d8.js",revision:"f45fa2e9bdd2af04c0ca5f0c9c9f2371"},{url:"assets/js/page-Home.cc3523c2.js",revision:"17af88d20844f8e62114b24ca0c2ddd5"},{url:"assets/js/page-Ikeepgettingtheerror403MissingAccess.900f0bae.js",revision:"b434a7444870ceb7a7119acba35ae145"},{url:"assets/js/page-Ikeepgettingtheerrorguildisnotdefined.a2bc3471.js",revision:"344acd0a5303cfe135a0ded7d4708072"},{url:"assets/js/page-Inhibitor.0fa50a90.js",revision:"b44f9794891fd632db168dcdfef19c4f"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.dfcaa442.js",revision:"3a46218dfba747e1288ec51a533889d6"},{url:"assets/js/page-InstallingNodejsandGCommands.8fb1073b.js",revision:"fbba2335f660f8c56695ff6502194041"},{url:"assets/js/page-Introduction.57c36d3a.js",revision:"3ade4ef744c9b0e8fb8699676485cc22"},{url:"assets/js/page-Makingabasicbot.31d5d6f7.js",revision:"178763909b2568002f4140ffea9a66b8"},{url:"assets/js/page-Mentions.4cbb201e.js",revision:"bedb4ce333ce105991f262dc150db48a"},{url:"assets/js/page-MessageComponents.346180f0.js",revision:"785e822a6a0b4839754500f6ad024529"},{url:"assets/js/page-MoreEvents.3aed83bd.js",revision:"17ec907ff07482e45747296095e08a7d"},{url:"assets/js/page-Setup.202d5498.js",revision:"d30133c47714337460d5c411389112c5"},{url:"assets/js/page-ThealwaysObtainoptionincommands.8fe8e414.js",revision:"e82db1ec2d3a65432820b21403742c34"},{url:"assets/js/page-Updatingfromv2tov3.02564cfc.js",revision:"02573e3cb99ff589edcf58466a94f4ad"},{url:"assets/js/page-Updatingfromv3tov4.3748c8eb.js",revision:"de97e70d286491a695a506bf94b9fe3e"},{url:"assets/js/page-Updatingfromv4tov5.f690c04e.js",revision:"5f8185ad059b813335677f46b509b3d8"},{url:"assets/js/page-Updatingfromv5tov6.97b5a2f3.js",revision:"2cce8d7cdbe711da18d0147c302f77a9"},{url:"assets/js/page-Updatingfromv6tov7.4bd8c036.js",revision:"66ed1301915b80211fab93c59be4e781"},{url:"assets/js/page-Usingacustomlanguagefile.c177053c.js",revision:"688ac56eb83dedd8290741b201642d9e"},{url:"assets/js/page-Usingargumentsincommands.9df67df7.js",revision:"aee57baff24c7144d395268b0c1f0223"},{url:"assets/js/page-Usingsubcommands.0a13e5cc.js",revision:"dac72ab8fc8b1c9ecb1c74332a5bddab"},{url:"assets/js/page-Usingthecommandbuilders.c44426e4.js",revision:"1de10148ead2378e35182fddf305f29e"},{url:"assets/js/page-Usingtheeventbuilder.bd5969d8.js",revision:"d14b205b212ba6c1734b2f499bf19ed6"},{url:"assets/js/page-Whatarealltheobjectsinthefirstargumentofacommand.2bf59629.js",revision:"40727ca497b589aabded95d517ae85a8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.47c8dcfe.js",revision:"c60bdb4fbc981c6c7ae702c37cc02006"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2cf2cb47.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.ebe269b1.js",revision:"3b79351ca0b369cad6df4ad55f3c8d6e"},{url:"assets/js/vendors~photo-swipe.de305237.js",revision:"1e1605a34ca04878400535e4e5495fcc"},{url:"404.html",revision:"2e0ec707af0e1973b3c832c5a902c086"},{url:"guide/additional/fromv2tov3/index.html",revision:"766f7a8108f53f7124d87ac598a8c1be"},{url:"guide/additional/fromv3tov4/index.html",revision:"37c5edb47af479eac3633d40a774c884"},{url:"guide/additional/fromv4tov5/index.html",revision:"e460a0c677f2847176234a86ea261f0d"},{url:"guide/additional/fromv5tov6/index.html",revision:"c2d9070c9dd4699441add9a12582c303"},{url:"guide/additional/fromv6tov7/index.html",revision:"51010866c82092059bedbf73692edc84"},{url:"guide/commands/additionalfeatures/index.html",revision:"dd6b55fe61f4c59f6b8c8db0eacf1dac"},{url:"guide/commands/first/index.html",revision:"0969158045e32b1cece1feb909a33b11"},{url:"guide/commands/gettingstarted/index.html",revision:"37fae7a72ba2bd7a56ad5352e4fba162"},{url:"guide/commands/usingargs/index.html",revision:"c2300a89fb3370f618bb297b73cae0a6"},{url:"guide/commands/usingbuilders/index.html",revision:"4e88f9509d7abd1f9f91f75269cf2563"},{url:"guide/commands/usingsub/index.html",revision:"919022af6bd954b08677ca028e4a8493"},{url:"guide/database/guildlanguage/index.html",revision:"b0a1bbdc85903c641e9f566ee55483c9"},{url:"guide/database/prefix/index.html",revision:"4448e4bd2d5e15f6e4fe87f851ff3a07"},{url:"guide/database/setup/index.html",revision:"bc486c7d8154ac3f5e919800bb1a276c"},{url:"guide/events/create/index.html",revision:"292d48d52b28db50655bcbaf49e7dbc6"},{url:"guide/events/moreevents/index.html",revision:"e8550ba499707d757324aca22a991bc3"},{url:"guide/events/setup/index.html",revision:"b1f06a10f342a512a3b00e371a60ef2b"},{url:"guide/events/usingbuilder/index.html",revision:"ced3520e1be84b122c49c8090086dc69"},{url:"guide/gettingstarted/basicbot/index.html",revision:"a04ad84519253c8dac962a0f21a483e3"},{url:"guide/gettingstarted/installation/index.html",revision:"114e4222747f2b724ab52572ec7557ca"},{url:"guide/index.html",revision:"44754303de260bbfd26ae64ca6cb70de"},{url:"guide/interactions/contextmenus/index.html",revision:"1dde9f51c22aff575eb16dd0ff505495"},{url:"guide/interactions/messagecomponents/index.html",revision:"a2404f7c9017577b28fb7e646da63a6d"},{url:"guide/other/alwaysobtain/index.html",revision:"f057e471dafd3b95e36f4b93ec9f6dbb"},{url:"guide/other/customlanguagefile/index.html",revision:"0cc11e982183482261857741a7a14277"},{url:"guide/other/inhibitor/index.html",revision:"190b3e13fe04925d01c13132c6f358e1"},{url:"guide/other/mentions/index.html",revision:"b76240bfd1b2f85af4c395b96c7eeac9"},{url:"guide/questions/commandrunoptions/index.html",revision:"fe9639796f0df3683931a0d0cc7c05ac"},{url:"guide/questions/guildundefined/index.html",revision:"a83b79462ba169ab175161cd7c1886e5"},{url:"guide/questions/missingacces/index.html",revision:"4affee45a171e94cba82298f5dcec5bd"},{url:"index.html",revision:"84c5a66c3cd68f1c737aea5f3290d11b"},{url:"voice/beginner/example/index.html",revision:"c743d97ae6e18195fa565ca5dc37509e"},{url:"voice/beginner/faq/index.html",revision:"e3a3849002f4866a8d38f5aa3c944610"},{url:"voice/beginner/setup/index.html",revision:"fdc90490de4f7f888c5e144e361dd005"},{url:"voice/index.html",revision:"426768e460216de98e3c93bd55102f3f"}],{}),e.cleanupOutdatedCaches()}));
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
