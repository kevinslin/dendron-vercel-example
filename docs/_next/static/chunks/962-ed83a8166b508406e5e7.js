(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return c}});var o=r(9008),n=r(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},l=function(e){var t,r=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var o="";e.title?(o=e.title,p.templateTitle&&(o=p.templateTitle.replace(/%s/g,(function(){return o})))):e.defaultTitle&&(o=e.defaultTitle),o&&r.push(n.createElement("title",{key:"title"},o));var i=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,l=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,c="";if(e.robotsProps){var h=e.robotsProps,u=h.nosnippet,s=h.maxSnippet,d=h.maxImagePreview,m=h.maxVideoPreview,f=h.noarchive,g=h.noimageindex,y=h.notranslate,v=h.unavailableAfter;c=(u?",nosnippet":"")+(s?",max-snippet:"+s:"")+(d?",max-image-preview:"+d:"")+(f?",noarchive":"")+(v?",unavailable_after:"+v:"")+(g?",noimageindex":"")+(m?",max-video-preview:"+m:"")+(y?",notranslate":"")}if(i||l?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),r.push(n.createElement("meta",{key:"robots",name:"robots",content:(i?"noindex":"index")+","+(l?"nofollow":"follow")+c})),r.push(n.createElement("meta",{key:"googlebot",name:"googlebot",content:(i?"noindex":"index")+","+(l?"nofollow":"follow")+c}))):(r.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+c})),r.push(n.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+c}))),e.description&&r.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&r.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){r.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&r.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var k=e.openGraph.type.toLowerCase();r.push(n.createElement("meta",{key:"og:type",property:"og:type",content:k})),"profile"===k&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===k&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){r.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&r.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===k&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){r.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&r.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==k&&"video.episode"!==k&&"video.tv_show"!==k&&"video.other"!==k||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&r.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&r.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&r.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&r.push(n.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||o})),(e.openGraph.description||e.description)&&r.push(n.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){r.push(n.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&r.push(n.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?r.push(n.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):p.defaultOpenGraphImageWidth&&r.push(n.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:p.defaultOpenGraphImageWidth.toString()})),e.height?r.push(n.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):p.defaultOpenGraphImageHeight&&r.push(n.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:p.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){r.push(n.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&r.push(n.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?r.push(n.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):p.defaultOpenGraphVideoWidth&&r.push(n.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:p.defaultOpenGraphVideoWidth.toString()})),e.height?r.push(n.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):p.defaultOpenGraphVideoHeight&&r.push(n.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:p.defaultOpenGraphVideoHeight.toString()})),e.secureUrl&&r.push(n.createElement("meta",{key:"og:video:secure_url"+t,property:"og:video:secure_url",content:e.secureUrl.toString()})),e.type&&r.push(n.createElement("meta",{key:"og:video:type"+t,property:"og:video:type",content:e.type.toString()}))})),e.openGraph.locale&&r.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&r.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&r.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,i;r.push(n.createElement("meta",a({key:"meta:"+(null!=(t=null!=(o=null!=(i=e.keyOverride)?i:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;r.push(n.createElement("link",a({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),r},c=(n.Component,function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,a=void 0!==r&&r,i=e.nofollow,p=e.robotsProps,c=e.description,h=e.canonical,u=e.openGraph,s=e.facebook,d=e.twitter,m=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return n.createElement(o.default,null,l({title:t,noindex:a,nofollow:i,robotsProps:p,description:c,canonical:h,facebook:s,openGraph:u,additionalMetaTags:m,twitter:d,titleTemplate:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(n.Component))},93367:function(e,t,r){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var n=((o=r(67294))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=n},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(a.AmpStateContext))};var o,n=(o=r(67294))&&o.__esModule?o:{default:o},a=r(93367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,o=e.hybrid,n=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return r||n&&i}},57947:function(e,t,r){"use strict";var o=r(61682);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(67294)),p=(a=r(60617))&&a.__esModule?a:{default:a},l=r(93367),c=r(74287),h=r(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,o={};return function(n){var a=!0,i=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){i=!0;var p=n.key.slice(n.key.indexOf("$")+1);e.has(p)?a=!1:e.add(p)}switch(n.type){case"title":case"base":t.has(n.type)?a=!1:t.add(n.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var h=m[l];if(n.props.hasOwnProperty(h))if("charSet"===h)r.has(h)?a=!1:r.add(h);else{var u=n.props[h],s=o[h]||new Set;"name"===h&&i||!s.has(u)?(s.add(u),o[h]=s):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return p["data-href"]=p.href,p.href=void 0,i.default.cloneElement(e,p)}return i.default.cloneElement(e,{key:a})}))}function g(e){var t=e.children,r=(0,i.useContext)(l.AmpStateContext),o=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(p.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,h.isInAmpMode)(r)},t)}g.rewind=function(){};var y=g;t.default=y},60617:function(e,t,r){"use strict";var o=r(83115),n=r(2553),a=r(62012),i=(r(50450),r(9807)),p=r(27690),l=r(99828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=l(e);if(t){var n=l(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return p(this,r)}}t.__esModule=!0,t.default=void 0;var h=r(67294),u=function(e){i(r,e);var t=c(r);function r(e){var a;return n(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(h.Component);t.default=u},9008:function(e,t,r){e.exports=r(57947)},38164:function(e,t,r){var o=r(54360);e.exports=function(e){if(Array.isArray(e))return o(e)}},61682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,r){var o=r(38164),n=r(27381),a=r(73585),i=r(95725);e.exports=function(e){return o(e)||n(e)||a(e)||i()}}}]);