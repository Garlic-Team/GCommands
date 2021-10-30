"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.GCommandsClient=void 0;var _discord=require("discord.js");var _components=require("@gcommands/components");var _defaults=require("../typings/defaults");var _GCommandsDispatcher=require("./GCommandsDispatcher");var _GDatabaseLoader=require("../managers/GDatabaseLoader");var _GGuild=require("../structures/GGuild");var _GCommandLoader=require("../managers/GCommandLoader");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}class GCommandsClient extends _discord.Client{constructor(options){super(Object.assign(_defaults.GCommandsClientOptionsDefaults,options));if(!this.options.ownLanguageFile)this.languageFile=Promise.resolve().then(()=>_interopRequireWildcard(require("../util/message.json")));else this.languageFile=this.options.ownLanguageFile;this.commands=new _discord.Collection;this.aliases=new _discord.Collection;this.dispatcher=new _GCommandsDispatcher.GCommandsDispatcher(this);new _GDatabaseLoader.GDatabaseLoader(this);setImmediate(()=>{super.on("ready",()=>{this.loadSys()})})}loadSys(){new _GGuild.GGuild;setTimeout(()=>{// New GEventHandling(this);
// If (this.eventDir) new GEventLoader(this);
if(this.options.loader.componentDir)new _components.GComponents(this,{dir:this.options.loader.componentDir});new _GCommandLoader.GCommandLoader(this)},1000)}}exports.GCommandsClient=GCommandsClient;