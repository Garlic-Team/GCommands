if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),t={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-0dfb1c68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.1dda2d36.css",revision:"50f8d502c7246df103cc4d5baabd5411"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/45.4e6c7bcd.js",revision:"6cf266519bee965869e546a8cc8e9dd5"},{url:"assets/js/46.8925b7d3.js",revision:"bce467b915dd0c08cb2f56c8adce29b9"},{url:"assets/js/app.0cc61849.js",revision:"3108d4b9e248ba32577087b96dbbbc24"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.7e414c35.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.4105128c.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.ecfb4ab5.js",revision:"dd3affdbeebd1bc0a87d8d9e3a216d95"},{url:"assets/js/page-ContextMenus.c8b6b154.js",revision:"0ab41d1de64b1f630e2ce1ae93e43584"},{url:"assets/js/page-Creatingacomponent.f29d9016.js",revision:"0e1859c7d3cac961ab15501b0f1fd255"},{url:"assets/js/page-Creatingaevent.e99db17a.js",revision:"43abacb07ba140061450155bcd1c699b"},{url:"assets/js/page-Creatingyourfirstcommand.0c7ba392.js",revision:"0dcc1d071c6bdcc3485e24e420a56ee3"},{url:"assets/js/page-Example.941635f9.js",revision:"ee75dd83f745e6dcb35acc5f879cab31"},{url:"assets/js/page-FAQ.60624cd9.js",revision:"135fc8a3796083690cfbebb31646dea6"},{url:"assets/js/page-Gettingstarted.6a7524f3.js",revision:"95367d34758e243c0ea1a8f48102ccb4"},{url:"assets/js/page-GuildLanguage.6d7915ca.js",revision:"563518f402d6e74d80658909e39c736d"},{url:"assets/js/page-GuildPrefix.7536ad63.js",revision:"52427c186790ff04d563938dd6eb4689"},{url:"assets/js/page-Home.ffb5ce78.js",revision:"221cb0f6a5048a159ad73b2518b067c4"},{url:"assets/js/page-Ikeepgettingtheerror403MissingAccess.a32e0cb5.js",revision:"2b2fac9c55c0b4af98d61a87b0de532c"},{url:"assets/js/page-Ikeepgettingtheerrorguildisnotdefined.4b8e6541.js",revision:"6276061a725036d487da40c2ae009709"},{url:"assets/js/page-Inhibitor.7bc0c671.js",revision:"e5fdc0e007d96f2f97273d3b1cf1bf88"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.810e2c78.js",revision:"26b7d5c56caa461eb8e1e21f9821c4d7"},{url:"assets/js/page-InstallingNodejsandGCommands.7b15a580.js",revision:"a810a21b6338e6e32c14179c6c9965d2"},{url:"assets/js/page-Introduction.c1fe08d5.js",revision:"7ada3fb6095b49be8abcca35c1e40576"},{url:"assets/js/page-Makingabasicbot.70503319.js",revision:"a774cdbcc2dd4203098e790c8c0b52f4"},{url:"assets/js/page-Mentions.7d11342d.js",revision:"5d0711f995a6e5b52ba0c2804c5f58fc"},{url:"assets/js/page-MessageComponents.bc3ae791.js",revision:"695d4c3925768004745d47c63ea2f22c"},{url:"assets/js/page-MoreEvents.52ad7780.js",revision:"eac34c5216f514675faa576cda3f84af"},{url:"assets/js/page-Setup.c4d581ab.js",revision:"153aa8f95bbd9eada69a59d978370c8f"},{url:"assets/js/page-ThealwaysObtainoptionincommands.4230c3ae.js",revision:"8ddae27588fb527647bc6e51f7c75a86"},{url:"assets/js/page-Updatingfromv2tov3.cc016a54.js",revision:"c7012dddd4ba8a87069e049f2dd898a8"},{url:"assets/js/page-Updatingfromv3tov4.9ed765cd.js",revision:"38ca41b158b6f8b173350c8f85b60f29"},{url:"assets/js/page-Updatingfromv4tov5.58386d67.js",revision:"fe5f49f8d52bcc563e8cbb8d9f367faf"},{url:"assets/js/page-Updatingfromv5tov6.38d22d0e.js",revision:"da494ac33e62dc5f1d38fe5abaa2ae88"},{url:"assets/js/page-Updatingfromv6tov7.7c8e0678.js",revision:"99faa0aca8e43b40022dc814d9d77058"},{url:"assets/js/page-Updatingfromv7tov8.43e0210e.js",revision:"06f7fdd25a8ad951f93836b91c229592"},{url:"assets/js/page-Usingacustomlanguagefile.34535455.js",revision:"2e914d027318bf2c64950d139be8ad57"},{url:"assets/js/page-Usingargumentsincommands.c58f4f97.js",revision:"939619d52eba584ee671f8158c53a779"},{url:"assets/js/page-Usingsubcommands.dc276c1d.js",revision:"4dcb2bcdfc6e1fc827de4fa2cd3bad31"},{url:"assets/js/page-Usingthecommandbuilders.6efdb7ef.js",revision:"4d09d2dac6087599b92df95be9041267"},{url:"assets/js/page-Usingtheeventbuilder.9cf168a4.js",revision:"de463e7a1990dba71b7546547d879837"},{url:"assets/js/page-Whatarealltheobjectsinthefirstargumentofacommand.f514d50f.js",revision:"d6fc788eadac3254ca9432f5e01905a5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.36a115fd.js",revision:"45d22ec5a11824b582a382a2cf398d7e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2cf2cb47.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.17f0c660.js",revision:"b55c239b0a70f1ef0d429deaeff764e2"},{url:"assets/js/vendors~photo-swipe.d3fc4295.js",revision:"4f629bb94b765c8a3a473a4909072c90"},{url:"404.html",revision:"bcaf78693b3db8f6ca77fd2194008592"},{url:"guide/additional/fromv2tov3/index.html",revision:"bd8ce6f7d4990ed4036e5ad4cef469c0"},{url:"guide/additional/fromv3tov4/index.html",revision:"b7514ce780fddf7bee74a7184a57de59"},{url:"guide/additional/fromv4tov5/index.html",revision:"9b4574533751cec63e431c71d2a75843"},{url:"guide/additional/fromv5tov6/index.html",revision:"edc50350dbd46565c93ae36a518e9ea1"},{url:"guide/additional/fromv6tov7/index.html",revision:"edbcab99eb169325560b78e2abdc3952"},{url:"guide/additional/fromv7tov8/index.html",revision:"8ad3b682f5be839616801527b1d228fa"},{url:"guide/commands/additionalfeatures/index.html",revision:"f995794fb793bd18e039620a42f0e9c3"},{url:"guide/commands/first/index.html",revision:"413e09114a92ad18a1f305030ec851f1"},{url:"guide/commands/gettingstarted/index.html",revision:"9cd10c2a068f68ffbdff5debaf509900"},{url:"guide/commands/usingargs/index.html",revision:"b06fff406f1bd3d4900265852236a7e3"},{url:"guide/commands/usingbuilders/index.html",revision:"f729a1eaafdce700f1a164651b820b8e"},{url:"guide/commands/usingsub/index.html",revision:"b2426a8595a8592fc444fcd7f21d2d43"},{url:"guide/components/create/index.html",revision:"b54825fc3c0eaefeb90eff67468c2be0"},{url:"guide/components/setup/index.html",revision:"8900e2561f7d7fcbabee7423b8afb557"},{url:"guide/database/guildlanguage/index.html",revision:"b0a55414faa1268fee42ed95f555af89"},{url:"guide/database/prefix/index.html",revision:"6614766ea90dcd27684033978cd8a2c0"},{url:"guide/database/setup/index.html",revision:"25c09dbef7166d93e98911d79a235cc9"},{url:"guide/events/create/index.html",revision:"2867a2ecc59866ec6e92c7b59229f702"},{url:"guide/events/moreevents/index.html",revision:"b2d2b4effcf0c406e21eabfc84feb8ec"},{url:"guide/events/setup/index.html",revision:"5e11b4a5e53ec5d739507fd6d959b7dd"},{url:"guide/events/usingbuilder/index.html",revision:"e144958c3b199bc71b899c73acd70f25"},{url:"guide/gettingstarted/basicbot/index.html",revision:"06f29109d872a15faa65818c34af8633"},{url:"guide/gettingstarted/installation/index.html",revision:"4b9191e223e4cb58fb7d0a98ba1fc166"},{url:"guide/index.html",revision:"92a79169a0cd66b04811b491607268f8"},{url:"guide/interactions/contextmenus/index.html",revision:"7f1ae95a22cbb0c6fa8e3125ff3fafb1"},{url:"guide/interactions/messagecomponents/index.html",revision:"f2fcc489b3170efac1cf7b7e9ddfa037"},{url:"guide/other/alwaysobtain/index.html",revision:"333d35862c893328fc54647550ec54f2"},{url:"guide/other/customlanguagefile/index.html",revision:"d2b34d0f30327932fd66a568c6e18ab4"},{url:"guide/other/inhibitor/index.html",revision:"a0a7babec3a6d3a7d15ad544ac820ba5"},{url:"guide/other/mentions/index.html",revision:"fa92989159f4a3e9bb20de2e6449e8fe"},{url:"guide/questions/commandrunoptions/index.html",revision:"64d5808c4f7ca6b5457fe035d7ed56e4"},{url:"guide/questions/guildundefined/index.html",revision:"72bddcfe320ec487774c7bb102e06cc2"},{url:"guide/questions/missingacces/index.html",revision:"153b1c851cb9d655dab388a99ab85939"},{url:"index.html",revision:"67728adbf114c5d87bf28c6352f3043d"},{url:"voice/beginner/example/index.html",revision:"0939f1240926ae4ddf13d172986f339f"},{url:"voice/beginner/faq/index.html",revision:"346a64ee510a6f184bf7dac97e389aff"},{url:"voice/beginner/setup/index.html",revision:"5e99830151b53d4599859b1d3fd409ef"},{url:"voice/index.html",revision:"9c0180bb5020761e6a8151f70f1358e3"}],{}),e.cleanupOutdatedCaches()}));
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
