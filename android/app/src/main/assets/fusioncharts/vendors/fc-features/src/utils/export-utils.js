import{isCanvasElemSupported}from'./lib-svg-to-canvas';import Ajax from'../../../fc-core/src/ajax';let extractNonDataImageFromSVG=function(a){var b,c,d,e,f,g;b=/(<image [^\>]*href=["']([^\>'"]*)["'][^\>]*\>)/g,c=/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i,d=[];do e=b.exec(a),null!==e&&(f=e[1],g=e[2],!c.test(g)&&d.push(f));while(e&&null!==e);return d},removeImagesWithNonDataURL=function(a){let b,c,d;for(b=extractNonDataImageFromSVG(a),c=0;c<b.length;c++)d=b[c],a=a.replace(d,'');return a},extractNonDataURLFromSVG=function(a,b){var c,d,e,f,g;b=!(b!==void 0)||b,c=/<image [^\>]*href=["']([^\>'"]*)["'][^\>]*\>/g,d=/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i,e=[];do if(f=c.exec(a),null!==f){if(g=f[1],d.test(g))continue;b&&(g=parseUrl(g).href),e.push(g)}while(f&&null!==f);return e},parseUrl=function(a){var b=document.createElement('div');return b.innerHTML='<a></a>',b.firstChild.href=a,b.innerHTML=b.innerHTML,b.firstChild},EXPORTACTION={DOWNLOAD:'download',SAVE:'save',DOWNLOADSAVE:'download-save'},EXPORTMODE={CLIENT:'client',SERVER:'server',AUTO:'auto'},EXPORTFORMAT={PNG:'png',SVG:'svg',JPEG:'jpeg',JPG:'jpg',PDF:'pdf',XLS:'xls'},LOGMODE={CLIENT:'client',SERVER:'server',AUTO:'auto'},createExportActionOldString=function(a){var b={download:EXPORTACTION.DOWNLOAD,"download-save":EXPORTACTION.DOWNLOAD,save:EXPORTACTION.SAVE}[a];return b},objCacheFunctions=function(){let a,b,c,d;return a={},a.cacheCompleted=!1,b=function(b,c,d){var e,f,g,h;if(c=c||!1,e=extractNonDataURLFromSVG(b),f=e.length,isCanvasElemSupported()&&!c&&f)for(g=0,h=0;h<f;h++)(function(){var b,c,i;return b=h,c=e[b],c in a?(g++,void(f===g&&(a.cacheCompleted=!0,d()))):void(i=new Image,i.crossOrigin='',i.onload=function(){var b,e,h;b=document.createElement('canvas'),b.width=i.width,b.height=i.height,e=b.getContext('2d'),e.drawImage(this,0,0);try{h=b.toDataURL('image/png'),a[c]={loaded:!0,notCORS:!0,imageUri:h}}catch(b){a[c]={loaded:!0,notCORS:!1}}finally{g++,f===g&&(a.cacheCompleted=!0,d())}},i.onerror=function(){a[c]={loaded:!1},g++,f===g&&(a.cacheCompleted=!0,d())},i.src=c)})();else d()},c=function(b){return a[b]},d=function(){return a.cacheCompleted},{cacheAllImages:b,getImageCachedDetails:c,isCacheAllImagesCompleted:d}}(),cacheAllImages=objCacheFunctions.cacheAllImages,getImageCachedDetails=objCacheFunctions.getImageCachedDetails,isCacheAllImagesCompleted=objCacheFunctions.isCacheAllImagesCompleted,makeImageUrlsAbsolute=function(a){return a=a.replace(/<image [^\>]*\>/gi,function(a){return a=a.replace(/(:href=")([^"]*)(")/gi,function(a,b,c,d){return b+parseUrl(c).href+d}),a}),a},embedImagesWithNonDataURL=function(a){let b,c,d,e;for(a=makeImageUrlsAbsolute(a),b=extractNonDataURLFromSVG(a),c=0;c<b.length;c++)d=b[c],e=getImageCachedDetails(d),void 0!==e&&e.loaded&&e.notCORS&&e.imageUri&&(a=a.replace(d,e.imageUri));return a},replaceImagesWithNonDataUrl=function(a){return a=embedImagesWithNonDataURL(a),a=removeImagesWithNonDataURL(a),a},hasUndownloadableImage=function(a){return a=embedImagesWithNonDataURL(a),a!==removeImagesWithNonDataURL(a)},logChartsWithoutCheck=function(a,b){let c=new Ajax(function(){},function(){});for(let c in a)a.hasOwnProperty(c)&&(a[c]=encodeURIComponent(a[c]));c.post(b.logHandler,a)},logCharts=function(a,b){b.logEnabled&&b.logMode!==LOGMODE.SERVER&&logChartsWithoutCheck(a,b)},addSVGHeader=function(a){return'<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+a},svgStrToDataUrl=function(a){let b=addSVGHeader(a);return b='data:image/svg+xml;base64,'+window.btoa(window.unescape(encodeURIComponent(b))),b};export{EXPORTACTION,EXPORTMODE,EXPORTFORMAT,LOGMODE,createExportActionOldString,objCacheFunctions,cacheAllImages,getImageCachedDetails,isCacheAllImagesCompleted,makeImageUrlsAbsolute,embedImagesWithNonDataURL,replaceImagesWithNonDataUrl,hasUndownloadableImage,removeImagesWithNonDataURL,extractNonDataURLFromSVG,parseUrl,extractNonDataImageFromSVG,logCharts,svgStrToDataUrl};