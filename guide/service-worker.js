if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),t={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-0dfb1c68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.d1cb9953.css",revision:"eb785ab3027de346374d05f1c1e9e6aa"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/45.4e6c7bcd.js",revision:"6cf266519bee965869e546a8cc8e9dd5"},{url:"assets/js/46.8925b7d3.js",revision:"bce467b915dd0c08cb2f56c8adce29b9"},{url:"assets/js/app.7d0cbcab.js",revision:"c1dbb2dbf57f3f876669d7145b425ee0"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.7e414c35.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.4105128c.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.ecfb4ab5.js",revision:"dd3affdbeebd1bc0a87d8d9e3a216d95"},{url:"assets/js/page-ContextMenus.c8b6b154.js",revision:"0ab41d1de64b1f630e2ce1ae93e43584"},{url:"assets/js/page-Creatingacomponent.f29d9016.js",revision:"0e1859c7d3cac961ab15501b0f1fd255"},{url:"assets/js/page-Creatingaevent.e99db17a.js",revision:"43abacb07ba140061450155bcd1c699b"},{url:"assets/js/page-Creatingyourfirstcommand.0c7ba392.js",revision:"0dcc1d071c6bdcc3485e24e420a56ee3"},{url:"assets/js/page-Example.941635f9.js",revision:"ee75dd83f745e6dcb35acc5f879cab31"},{url:"assets/js/page-FAQ.60624cd9.js",revision:"135fc8a3796083690cfbebb31646dea6"},{url:"assets/js/page-Gettingstarted.6a7524f3.js",revision:"95367d34758e243c0ea1a8f48102ccb4"},{url:"assets/js/page-GuildLanguage.6d7915ca.js",revision:"563518f402d6e74d80658909e39c736d"},{url:"assets/js/page-GuildPrefix.7536ad63.js",revision:"52427c186790ff04d563938dd6eb4689"},{url:"assets/js/page-Home.ffb5ce78.js",revision:"221cb0f6a5048a159ad73b2518b067c4"},{url:"assets/js/page-Ikeepgettingtheerror403MissingAccess.a32e0cb5.js",revision:"2b2fac9c55c0b4af98d61a87b0de532c"},{url:"assets/js/page-Ikeepgettingtheerrorguildisnotdefined.4b8e6541.js",revision:"6276061a725036d487da40c2ae009709"},{url:"assets/js/page-Inhibitor.7bc0c671.js",revision:"e5fdc0e007d96f2f97273d3b1cf1bf88"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.810e2c78.js",revision:"26b7d5c56caa461eb8e1e21f9821c4d7"},{url:"assets/js/page-InstallingNodejsandGCommands.a314897c.js",revision:"a5d45a8365b03fe57b306ed38391e63f"},{url:"assets/js/page-Introduction.c1fe08d5.js",revision:"7ada3fb6095b49be8abcca35c1e40576"},{url:"assets/js/page-Makingabasicbot.7cf13b25.js",revision:"329a205a25eb64f5ebe6ef5c1a02c88a"},{url:"assets/js/page-Mentions.7d11342d.js",revision:"5d0711f995a6e5b52ba0c2804c5f58fc"},{url:"assets/js/page-MessageComponents.bc3ae791.js",revision:"695d4c3925768004745d47c63ea2f22c"},{url:"assets/js/page-MoreEvents.4c874c61.js",revision:"10cbb7ea2b796addb1a411f74a46a0c8"},{url:"assets/js/page-Setup.09fdcc7d.js",revision:"39ae5bf7bad3383bbba57a25e1883da4"},{url:"assets/js/page-ThealwaysObtainoptionincommands.4230c3ae.js",revision:"8ddae27588fb527647bc6e51f7c75a86"},{url:"assets/js/page-Updatingfromv2tov3.cc016a54.js",revision:"c7012dddd4ba8a87069e049f2dd898a8"},{url:"assets/js/page-Updatingfromv3tov4.9ed765cd.js",revision:"38ca41b158b6f8b173350c8f85b60f29"},{url:"assets/js/page-Updatingfromv4tov5.58386d67.js",revision:"fe5f49f8d52bcc563e8cbb8d9f367faf"},{url:"assets/js/page-Updatingfromv5tov6.38d22d0e.js",revision:"da494ac33e62dc5f1d38fe5abaa2ae88"},{url:"assets/js/page-Updatingfromv6tov7.7c8e0678.js",revision:"99faa0aca8e43b40022dc814d9d77058"},{url:"assets/js/page-Updatingfromv7tov8.43e0210e.js",revision:"06f7fdd25a8ad951f93836b91c229592"},{url:"assets/js/page-Usingacustomlanguagefile.34535455.js",revision:"2e914d027318bf2c64950d139be8ad57"},{url:"assets/js/page-Usingargumentsincommands.c58f4f97.js",revision:"939619d52eba584ee671f8158c53a779"},{url:"assets/js/page-Usingsubcommands.dc276c1d.js",revision:"4dcb2bcdfc6e1fc827de4fa2cd3bad31"},{url:"assets/js/page-Usingthecommandbuilders.6efdb7ef.js",revision:"4d09d2dac6087599b92df95be9041267"},{url:"assets/js/page-Usingtheeventbuilder.9b634141.js",revision:"5777bd87c062890899cb37941b97c534"},{url:"assets/js/page-Whatarealltheobjectsinthefirstargumentofacommand.f514d50f.js",revision:"d6fc788eadac3254ca9432f5e01905a5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7892b7a6.js",revision:"bcb2780d85205cff919a23fa6c432b27"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2cf2cb47.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.408f7767.js",revision:"e1755ed9951392c05d62fe9e782e31c5"},{url:"assets/js/vendors~photo-swipe.d3fc4295.js",revision:"4f629bb94b765c8a3a473a4909072c90"},{url:"404.html",revision:"bd2401f79b9cfa22bf4b78fc5a703c38"},{url:"guide/additional/fromv2tov3/index.html",revision:"bd96698dae9e9eb1186f3dd42b4c926f"},{url:"guide/additional/fromv3tov4/index.html",revision:"d2ca1a0c44ac135678a2df7926a7a23d"},{url:"guide/additional/fromv4tov5/index.html",revision:"667d2ca036963f54a3afa3607f188a5f"},{url:"guide/additional/fromv5tov6/index.html",revision:"caf66367d6827f7aa0e0bcb79dd6b298"},{url:"guide/additional/fromv6tov7/index.html",revision:"c65e34ba054f90d7e2938dff791e7c48"},{url:"guide/additional/fromv7tov8/index.html",revision:"d76993d37fc3ba5256322e2d19aa6781"},{url:"guide/commands/additionalfeatures/index.html",revision:"0d3f159310799f5814e7a08ef4720d55"},{url:"guide/commands/first/index.html",revision:"a30f12b4796216587c0d20d3fb8640ff"},{url:"guide/commands/gettingstarted/index.html",revision:"caf80bd08bc021bbda22b40f0fcfcd95"},{url:"guide/commands/usingargs/index.html",revision:"651535f264dc4f1e80031caca6e29c97"},{url:"guide/commands/usingbuilders/index.html",revision:"a1aea878c2ad6a2ec3381cbf7fc26102"},{url:"guide/commands/usingsub/index.html",revision:"66279e8de9e6aee800d3077f73212cf8"},{url:"guide/components/create/index.html",revision:"7f61661556e0bab5e9177c430a08e287"},{url:"guide/components/setup/index.html",revision:"c090a63fa3bf5de75a93e485e37de54b"},{url:"guide/database/guildlanguage/index.html",revision:"360c8cee74af6407731f9db870047cbb"},{url:"guide/database/prefix/index.html",revision:"323f934078a436397ac968c381932851"},{url:"guide/database/setup/index.html",revision:"178fe6dc71782c83fdbe595a410817f3"},{url:"guide/events/create/index.html",revision:"b7a03bf82ee8880c626152d8349818aa"},{url:"guide/events/moreevents/index.html",revision:"826e8ff9a0cdaad420695ce024866c9b"},{url:"guide/events/setup/index.html",revision:"aa43cf8c410fdb170fc449372d9d1fd8"},{url:"guide/events/usingbuilder/index.html",revision:"76785cd753788b5767b19b57ea1be2c1"},{url:"guide/gettingstarted/basicbot/index.html",revision:"f431c856dfd2e76db0c86ec880eac46c"},{url:"guide/gettingstarted/installation/index.html",revision:"0fd83538cbd6b6416a7e4b64171821b0"},{url:"guide/index.html",revision:"c0d1f7d8cc199af8cc5938f1a6f5eae2"},{url:"guide/interactions/contextmenus/index.html",revision:"cb5a439e2c103130ebbfee57fd62cfc9"},{url:"guide/interactions/messagecomponents/index.html",revision:"7d5f54ac29e00f06a6f18b2b1022c206"},{url:"guide/other/alwaysobtain/index.html",revision:"46bbe96e9b79ef9676cd3b75b2ebea99"},{url:"guide/other/customlanguagefile/index.html",revision:"8e815e351177631bb010ad91069d3da7"},{url:"guide/other/inhibitor/index.html",revision:"abfbf6f29a90d68a298285f6f9a9e84a"},{url:"guide/other/mentions/index.html",revision:"c912d424ff594e6ef28cd40e31fc2aaf"},{url:"guide/questions/commandrunoptions/index.html",revision:"0122dd0821df8af1e08df9a8c9a19ff3"},{url:"guide/questions/guildundefined/index.html",revision:"74601f4ae84bfbe032512e352d111324"},{url:"guide/questions/missingacces/index.html",revision:"6cd40462dd1e116628f10556c1b8f0b3"},{url:"index.html",revision:"7e3dd7572ce2e7d284ac44028e683956"},{url:"voice/beginner/example/index.html",revision:"6b4cea17172e44790df87684452d78c1"},{url:"voice/beginner/faq/index.html",revision:"e39d81c984d9d5cf3b18921aedaff0dc"},{url:"voice/beginner/setup/index.html",revision:"68b30198041cd2a05162a32ab2fedd82"},{url:"voice/index.html",revision:"fc75f474dfd914cbfc274ab456495b61"}],{}),e.cleanupOutdatedCaches()}));
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
