(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{361:function(t,e,n){"use strict";var i=n(0);e.a=new i.a},362:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},365:function(t,e,n){"use strict";n(360),n(79),n(106);var i=[{label:"v5 (stable)",version:"5.x",aliases:["5","stable"]},{label:"v4",version:"4.x",aliases:["4"]}],a=i[0];e.a={data:function(){return{branches:i,defaultBranch:a,selectedBranch:a.version}},mounted:function(){this.selectedBranch=localStorage.getItem("branch-version")||a.version},methods:{getBranch:function(t){return this.branches.find((function(e){return e.aliases.includes(t)||e.version===t}))},updateBranch:function(t){this.selectedBranch=t}}}},366:function(t,e,n){var i=n(16),a=n(14),o="["+n(362)+"]",r=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=a(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},373:function(t,e,n){var i=n(2),a=n(374);i({global:!0,forced:parseInt!=a},{parseInt:a})},374:function(t,e,n){var i=n(5),a=n(14),o=n(366).trim,r=n(362),s=i.parseInt,c=/^[+-]?0[Xx]/,u=8!==s(r+"08")||22!==s(r+"0x16");t.exports=u?function(t,e){var n=o(a(t));return s(n,e>>>0||(c.test(n)?16:10))}:s},383:function(t,e,n){n(2)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},406:function(t,e,n){},438:function(t,e,n){"use strict";n(406)},449:function(t,e,n){"use strict";n.r(e);n(383),n(55),n(373);var i=n(381),a=n.n(i),o=n(361),r={mixins:[n(365).a],data:function(){return{hideUntil:null}},computed:{showNotice:function(){return a.a.satisfies(a.a.coerce("4.x"),this.selectedBranch)&&(!this.hideUntil||Date.now()>parseInt(this.hideUntil))}},mounted:function(){o.a.$on("branch-update",this.updateBranch),this.hideUntil=localStorage.getItem("oldversion-notice-expiration")},destroyed:function(){o.a.$off("branch-update",this.updateBranch)},methods:{dismiss:function(){var t=Date.now()+6048e5;this.hideUntil=t,localStorage.setItem("oldversion-notice-expiration",t)}}},s=(n(438),n(1)),c=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.showNotice?e("div",{staticClass:"oldversion-notice"},[this._v("\n\tIt's possible that you can't see the whole guide now.\n\tWe no longer provide support, maintain bug fixes or new features for v4 of gcommands. "),e("a",{attrs:{href:"/guide/additional/fromv4tov5"}},[this._v("Please update your bot to version 5.")])]):this._e()}),[],!1,null,null,null);e.default=c.exports}}]);