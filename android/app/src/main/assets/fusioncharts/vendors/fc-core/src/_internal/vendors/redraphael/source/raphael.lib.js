let UNDEF,BLANK='__blank',nullStr='\u2400',E='',arrayToStr='[object Array]',objectToStr='[object Object]',objectStr='object',dashedAttr2CSSMap={"font-family":'fontFamily',"font-size":'fontSize',"text-anchor":'textAnchor',"font-weight":'fontWeight',"letter-spacing":'letterSpacing',"font-style":'fontStyle'},loadRefImage=function(a,b){var c=b.src,d=a._.RefImg;d||(d=a._.RefImg=new Image);void 0===b.src||(d.src=c,a._.RefImg=d)},showRecursively=function(a){for(var b={},c=a,d=b,e=function(){for(var c=a,d=b;c;)d._doHide&&c.hide(),c=c.parent,d=d.parent};c;)c.node&&c.node.style&&'none'===c.node.style.display&&(c.show(),d._doHide=!0),c=c.parent,d.parent={},d=d.parent;return e},checkCyclicRef=function(a,b){for(var c=b.length,d=-1;c--;)if(a===b[c])return d=c,d;return d},getArrayCopy=function(a){var b,c,d;for(b=0,c=a.length,d=Array(c);b<c;b++)d[b]=a[b];return d},merge=function(a,b,c,d,e){var f,g,h,i,j;if(e?(d.push(a),e.push(b)):(d=[a],e=[b]),b instanceof Array)for(f=0;f<b.length;f+=1){try{g=a[f],h=b[f]}catch(a){continue}typeof h==objectStr?((null===g||typeof g!=objectStr)&&(g=a[f]=h instanceof Array?[]:{}),j=checkCyclicRef(h,e),-1===j?merge(g,h,c,d,e):g=a[f]=d[j]):!(c&&h===UNDEF)&&(a[f]=h)}else for(f in b){try{g=a[f],h=b[f]}catch(a){continue}null!==h&&typeof h==objectStr?(i=Object.prototype.toString.call(h),i===objectToStr?((null===g||typeof g!=objectStr)&&(g=a[f]={}),j=checkCyclicRef(h,e),-1===j?merge(g,h,c,d,e):g=a[f]=d[j]):i===arrayToStr?((null===g||!(g instanceof Array))&&(g=a[f]=[]),j=checkCyclicRef(h,e),-1===j?merge(g,h,c,d,e):g=a[f]=d[j]):a[f]=h):a[f]=h}return a};export default function(a,b,c,d){if(typeof a!=objectStr&&typeof b!=objectStr)return null;if(typeof b!=objectStr||null===b)return a;if('undefined'==typeof a&&(a=b instanceof Array?[]:{}),d)for(var e in b)a[e]=b[e];else merge(a,b,c);return a}var cacher=function(a,b,c,d,e,f,g){function h(f){var h,k,l,m=g?f:getArrayCopy(arguments).join(nullStr);return m=m===E?BLANK:m,h=i[m],h?h.__prev&&(i[h.__prev].__next=h.__next,h.__next?h.__next.__prev=h.__prev:i.__end=h.__prev):(h=i[m]={},a&&(i[m][d]=c?c(a.apply(b,arguments)):a.apply(b,arguments)),null===i.__end&&(i.__end=m),j++,j>e&&i.__end&&(k=i[i.__end],i[k.__prev].__next=null,delete i[i.__end],i.__end=k.__prev,j--)),l=i.__start,l!==h&&(h.__prev=null,h.__next=l,l&&(l.__prev=m),i.__start=h),i[m][d]}var i=f||{},j=0;return void 0===i.__start&&(i.__start=null),void 0===i.__end&&(i.__end=null),e=e||1e3,d=d||'item',h};export{merge,getArrayCopy,dashedAttr2CSSMap,loadRefImage,showRecursively,cacher};