;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="f9b9966f5350730b14a4c876e6e12e49";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["OxbAjEES2e5F"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["OxbAjEES2e5F"].options={"account":{"accountId":"xo4X7CrD9sCa","service":"googleanalytics","userId":"102135825568604347657"},"id":"","organization":"108527661","social":true,"web-properties-for-104320176":"UA-104320176-1","web-properties-for-106473186":"UA-106473186-1","web-properties-for-108527661":"UA-108527661-5","web-properties-for-3662352":"UA-3662352-43","web-properties-for-50175692":"UA-50175692-1","web-properties-for-50927427":"UA-50927427-1","web-properties-for-52353094":"UA-52353094-1","web-properties-for-52885655":"UA-52885655-3","web-properties-for-53164437":"UA-53164437-5","web-properties-for-53243825":"UA-53243825-1","web-properties-for-54183607":"UA-54183607-1","web-properties-for-54528241":"UA-54528241-1","web-properties-for-54636600":"UA-54636600-1","web-properties-for-54739383":"UA-54739383-1","web-properties-for-55269045":"UA-55269045-1","web-properties-for-55774309":"UA-55774309-1","web-properties-for-57112716":"UA-57112716-1","web-properties-for-58157052":"UA-58157052-2","web-properties-for-59864620":"UA-59864620-1","web-properties-for-612595":"UA-612595-20","web-properties-for-64057835":"UA-64057835-1","web-properties-for-65272798":"UA-65272798-1","web-properties-for-65638112":"UA-65638112-1","web-properties-for-69624004":"UA-69624004-1","web-properties-for-70695500":"UA-70695500-1","web-properties-for-71897120":"UA-71897120-1","web-properties-for-76485533":"UA-76485533-2","web-properties-for-76773672":"UA-76773672-1","web-properties-for-83595156":"UA-83595156-1","webPropertySchemaNames":["web-properties-for-54636600","web-properties-for-54739383","web-properties-for-52353094","web-properties-for-69624004","web-properties-for-104320176","web-properties-for-65638112","web-properties-for-83595156","web-properties-for-53164437","web-properties-for-106473186","web-properties-for-57112716","web-properties-for-70695500","web-properties-for-50175692","web-properties-for-65272798","web-properties-for-50927427","web-properties-for-54528241","web-properties-for-59864620","web-properties-for-3662352","web-properties-for-53243825","web-properties-for-58157052","web-properties-for-55269045","web-properties-for-55774309","web-properties-for-612595","web-properties-for-108527661","web-properties-for-76773672","web-properties-for-52885655","web-properties-for-54183607","web-properties-for-64057835","web-properties-for-71897120","web-properties-for-76485533"]};;if(CloudflareApps.matchPage(CloudflareApps.installs['OxbAjEES2e5F'].URLPatterns)){(function(){var options=CloudflareApps.installs['OxbAjEES2e5F'].options
var id
if(options.account&&options.organization){id=options['web-properties-for-'+options.organization]}else{id=(options.id||'').trim()}
if(!id){console.log('Cloudflare Google Analytics: Disabled. UA-ID not present.')
return}else if("OxbAjEES2e5F"==='preview'){console.log('Cloudflare Google Analytics: Enabled',id)}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split('#')[0].match(/[^?=&]+=([^&]*)?/g)
for(var i=0,chunk;chunk=parameters[i];++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split('=')[1])}}}}
window.dataLayer=window.dataLayer||[]
function gtag(){window.dataLayer.push(arguments)}
gtag('js',new Date())
gtag('config',id)
var vendorScript=document.createElement('script')
vendorScript.src='https://www.googletagmanager.com/gtag/js?id='+id
document.head.appendChild(vendorScript)
if(options.social){window.addEventListener('load',function googleAnalyticsSocialTracking(){var FB=window.FB
var twttr=window.twttr
if('FB'in window&&'Event'in FB&&'subscribe'in window.FB.Event){FB.Event.subscribe('edge.create',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'like',content_id:targetUrl})})
FB.Event.subscribe('edge.remove',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'unlike',content_id:targetUrl})})
FB.Event.subscribe('message.send',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'send',content_id:targetUrl})})}
if('twttr'in window&&'events'in twttr&&'bind'in twttr.events){twttr.events.bind('tweet',function(event){if(event){var targetUrl
if(event.target&&event.target.nodeName==='IFRAME'){targetUrl=resolveParameter(event.target.src,'url')}
gtag('event','share',{method:'twitter',event_action:'tweet',content_id:targetUrl})}})}},false)}}())}