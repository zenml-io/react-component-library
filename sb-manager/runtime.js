import{Provider,renderStorybookUI}from"./chunk-GDQEFMXP.js";import{CHANNEL_CREATED,addons,createBrowserChannel}from"./chunk-5JPZKLB6.js";import"./chunk-62YMTM65.js";import"./chunk-YME6VNXZ.js";import{scope}from"./chunk-3F3RRPB3.js";import"./chunk-XP3HGWTR.js";var ReactProvider=class extends Provider{constructor(){super();let channel=createBrowserChannel({page:"manager"});addons.setChannel(channel),channel.emit(CHANNEL_CREATED),this.addons=addons,this.channel=channel,scope.__STORYBOOK_ADDONS_CHANNEL__=channel}getElements(type){return this.addons.getElements(type)}getConfig(){return this.addons.getConfig()}handleAPI(api){this.addons.loadAddons(api)}},{document}=scope,rootEl=document.getElementById("root");setTimeout(()=>{renderStorybookUI(rootEl,new ReactProvider)},0);