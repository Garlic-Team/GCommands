(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{465:function(s,e,t){"use strict";t.r(e);var n=t(1),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"updating-from-v5-to-v6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-from-v5-to-v6"}},[s._v("#")]),s._v(" Updating from v5 to v6")]),s._v(" "),t("h2",{attrs:{id:"before-you-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start"}},[s._v("#")]),s._v(" Before you start")]),s._v(" "),t("p",[s._v("v6 requires discord.js v12 or v13, so make sure you have these versions of discord.js and not others.")]),s._v(" "),t("p",[s._v("If you already have djs v12 or v13 use "),t("code",[s._v("npm i gcommands")]),s._v("."),t("br"),s._v("\nYou can make sure you have gcommands using "),t("code",[s._v("npm list gcommands")]),s._v(". If you still have v5 then use "),t("code",[s._v("npm uninstall gcommands")]),s._v(" and then reinstall.")]),s._v(" "),t("h2",{attrs:{id:"context-menus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context-menus"}},[s._v("#")]),s._v(" Context Menus")]),s._v(" "),t("p",[s._v("v6 now supports context menus!"),t("br"),s._v("\nRefer to the "),t("RouterLink",{attrs:{to:"/guide/interactions/contextmenus.html"}},[s._v("context menus")]),s._v(" section of this guide to get started.")],1),s._v(" "),t("h2",{attrs:{id:"arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[s._v("#")]),s._v(" Arguments")]),s._v(" "),t("p",[s._v("v6 now supports all arguments except "),t("code",[s._v("SUB_COMMNAD")]),s._v(" & "),t("code",[s._v("SUB_COMMAND_GROUP")]),s._v(" for legal commands, also supports "),t("code",[s._v("NUMBER")]),s._v(" type for slash commands."),t("br"),s._v("\nRefer to the "),t("RouterLink",{attrs:{to:"/guide/arguments/usingargsincmd.html"}},[s._v("arguments")]),s._v(" section of this guide to get started.")],1),s._v(" "),t("h2",{attrs:{id:"commonly-used-methods-that-changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonly-used-methods-that-changed"}},[s._v("#")]),s._v(" Commonly used methods that changed")]),s._v(" "),t("h3",{attrs:{id:"gcommands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcommands"}},[s._v("#")]),s._v(" GCommands")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("new GCommands")]),s._v(" is deprecated, and should already use the "),t("code",[s._v("new GCommandsClient")]),s._v(" which will automatically create a discord.js client and make the code prettier."),t("br"),s._v(" "),t("code",[s._v("GCommandsClient")]),s._v(" accepts "),t("a",{attrs:{href:"https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("gcommands settings"),t("OutboundLink")],1),s._v(" and also "),t("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/typedef/ClientOptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("discord.js client"),t("OutboundLink")],1),s._v(" settings.")]),s._v(" "),t("h4",{attrs:{id:"gcommandsoptions-slash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcommandsoptions-slash"}},[s._v("#")]),s._v(" GCommandsOptions#slash")]),s._v(" "),t("p",[t("code",[s._v("GCommandsOptions#slash")]),s._v(" has been replaced with "),t("code",[s._v("GCommandsOptions#commands")]),s._v(" to support context menus.")]),s._v(" "),t("h4",{attrs:{id:"gcommandsoptions-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcommandsoptions-language"}},[s._v("#")]),s._v(" GCommandsOptions#language")]),s._v(" "),t("p",[s._v("New languages "),t("code",[s._v("indonesian")]),s._v(", "),t("code",[s._v("italian")]),s._v(" have been added.")]),s._v(" "),t("h3",{attrs:{id:"interactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[s._v("#")]),s._v(" Interactions")]),s._v(" "),t("p",[t("code",[s._v("<Interaction>.id")]),s._v(" has been replaced with "),t("code",[s._v("<Interaction.customId>")]),s._v(". The "),t("code",[s._v("<Interaction>.id")]),s._v(" is currently the discord interaction id, not the customId."),t("br"),s._v(" "),t("code",[s._v("<ButtonInteraction/SelectMenuInteraction>.clicker")]),s._v(" is deprecated, "),t("code",[s._v("<Interaction>.member/user")]),s._v(" is used.")]),s._v(" "),t("h3",{attrs:{id:"message-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-components"}},[s._v("#")]),s._v(" Message Components")]),s._v(" "),t("p",[t("code",[s._v("<MessageComponent>.setID()")]),s._v(" is deprecated, "),t("code",[s._v("<MessageComponent>.setCustomId()")]),s._v(" is used.")]),s._v(" "),t("h4",{attrs:{id:"handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling"}},[s._v("#")]),s._v(" Handling")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("createButtonCollector, createSelectMenuCollector, awaitButtons and awaitSelectMenus")]),s._v(" are deprecated and only "),t("code",[s._v("createMessageComponentCollector, awaitMessageComponents")]),s._v(" are used and then you use "),t("code",[s._v("interaction.isSelectMenu()")]),s._v(" for example when "),t("a",{attrs:{href:"https://gcommands.js.org/docs/#/docs/main/dev/class/GInteraction?scrollTo=isApplication",target:"_blank",rel:"noopener noreferrer"}},[s._v("filtering"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[s._v("#")]),s._v(" Command")]),s._v(" "),t("p",[s._v("Added the ability to reload a command without restarting the bot using "),t("code",[s._v('<Command>.reload(), client.gcommands.get("name").reload()')]),s._v("."),t("br"),s._v("\nThe option to use the "),t("code",[s._v("usage")]),s._v(" parameter in commands has been added."),t("br"),s._v("\nYou can detect if there is a channel thread, using "),t("code",[s._v("channelThreadOnly")]),s._v("."),t("br"),s._v("\nLegal commands support the optional arguments.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[t("code",[s._v("channelThreadOnly")]),s._v(" only works with djs v13.")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" GCommandsClient "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gcommands"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCommandsClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("options\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nclient\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nclient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"token"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"other-additionals-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-additionals-fixes"}},[s._v("#")]),s._v(" Other Additionals & Fixes")]),s._v(" "),t("h3",{attrs:{id:"gpayload-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpayload-options"}},[s._v("#")]),s._v(" GPayload#options")]),s._v(" "),t("p",[s._v("Fixed "),t("code",[s._v("GPayload#options#inlineReply")]),s._v(" option."),t("br"),s._v("\nA "),t("code",[s._v("stickers")]),s._v(" option has been added that allows you to send a sticker in a message.")]),s._v(" "),t("h3",{attrs:{id:"gcommandsclient"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcommandsclient"}},[s._v("#")]),s._v(" GCommandsClient")]),s._v(" "),t("p",[s._v("Added events "),t("code",[s._v("commandExecute")]),s._v(" and "),t("code",[s._v("commandError")]),s._v(".")]),s._v(" "),t("h4",{attrs:{id:"gcommandsoptions-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcommandsoptions-prefix"}},[s._v("#")]),s._v(" GCommandsOptions#prefix")]),s._v(" "),t("p",[s._v("Fixed a "),t("code",[s._v("prefix")]),s._v(" option that didn't allow to have multiple character prefixes.")]),s._v(" "),t("h3",{attrs:{id:"diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[s._v("#")]),s._v(" diff")]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" multi character prefix\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" Number argument type\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" mentionable argument type for message commands\n")])]),s._v("\n[-] Command\n"),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" command.channelThreadOnly // djs v13+ only\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" command.usage\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" command.reload()\n")])]),s._v("\n[-] Interaction\n\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.clicker\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.member\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.user\n")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.id\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.customId\n")])]),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.discordId\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.id\n")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.setID\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" interaction.setCustomId\n")])]),s._v("\n[-] Translations\n\n"),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" indonesian\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" italian\n")])]),s._v("\n[-] GCommands\n\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" new GCommands\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" new GCommandsClient\n")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" GCommandsOptions.slash\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" GCommandsOptions.commands\n")])]),s._v("\n[-] Collectors\n\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" createButtonCollector\n")]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" createSelectMenuCollector\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" createMessageComponentCollector\n")])]),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" awaitButtons\n")]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" awaitSelectMenus\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(" awaitMessageComponents\n")])])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("h2",{attrs:{id:"more-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-changes"}},[s._v("#")]),s._v(" More Changes")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/guide/interactions/contextmenus.html"}},[s._v("Context Menus")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);