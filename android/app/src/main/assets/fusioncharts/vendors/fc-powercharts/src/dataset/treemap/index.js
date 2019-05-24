import{ComponentInterface}from'../../../../fc-core/src/component-interface';import{priorityList}from'../../../../fc-core/src/schedular';import{pluck,pluckNumber,parsexAxisStyles,extend2 as fcExtend,BLANKSTRING,preDefStr,parseUnsafeString,TRACKER_FILL}from'../../../../fc-core/src/lib';import{addDep}from'../../../../fc-core/src/dependency-manager';import treeMapAnimation from'./index.animation';var UNDEF,HIDDEN='hidden',DEFAULT_CURSOR=preDefStr.DEFAULT,POINTER='pointer',MOUSEOVER='mouseOver',MOUSEOUT='mouseOut',ROLLOVER='DataPlotRollOver',ROLLOUT='DataPlotRollOut',createGroup=function(a,b,c){var d=c.getFromEnv('animationManager');return d.setAnimation({el:'group',attr:{name:a},container:b,state:'appearing',component:c,doNotRemove:!0,label:'group'})},kdTreeAbs=function(a){'use strict';function b(b,a,c){return b>=a&&b<=c}function c(a,b,f,g){var h,i={},j=g?'y':'x';return b===f?(i.point=a[b],i):1==f-b?(a[b][j]>a[f][j]?(i.point=a[b],i.left={point:a[f]}):(i.point=a[f],i.left={point:a[b]}),i):(h=b+f>>1,g?e(a,h,b,f):d(a,h,b,f),i.point=a[h],i.left=c(a,b,h-1,!g),i.right=c(a,h+1,f,!g),i)}function d(a,b,c,e){for(var g,h,k,v,w,x,y,A,B,C;e>c;){for(600<e-c&&(g=e-c+1,h=b-c+1,k=q(g),v=.5*u(2*k/3),w=.5*r(k*v*(g-v)/g)*(0>h-g/2?-1:1),x=l(c,o(b-h*v/g+w)),y=p(e,o(b+(g-h)*v/g+w)),d(a,b,x,y)),A=a[b],B=c,C=e,f(a,c,b),a[e].x>A.x&&f(a,c,e);B<C;){for(f(a,B,C),B++,C--;a[B].x<A.x;)B++;for(;a[C].x>A.x;)C--}a[c].x===A.x?f(a,c,C):(C++,f(a,C,e)),C<=b&&(c=C+1),b<=C&&(e=C-1)}}function e(a,b,c,d){for(var g,h,k,v,w,x,y,A,B,C;d>c;){for(600<d-c&&(g=d-c+1,h=b-c+1,k=q(g),v=.5*u(2*k/3),w=.5*r(k*v*(g-v)/g)*(0>h-g/2?-1:1),x=l(c,o(b-h*v/g+w)),y=p(d,o(b+(g-h)*v/g+w)),e(a,b,x,y)),A=a[b],B=c,C=d,f(a,c,b),a[d].y>A.y&&f(a,c,d);B<C;){for(f(a,B,C),B++,C--;a[B].y<A.y;)B++;for(;a[C].y>A.y;)C--}a[c].y===A.y?f(a,c,C):(C++,f(a,C,d)),C<=b&&(c=C+1),b<=C&&(d=C-1)}}function f(a,b,c){var d=a[b];a[b]=a[c],a[c]=d}var g,h=a&&a[0]&&a[0].plotDetails.rect||5,l=Math.max,o=Math.floor,r=Math.sqrt,p=Math.min,q=Math.log,u=Math.exp,j=Math.pow,k={};for(a=a||[],g=a.length;g--;)a[g].r>h&&(h=a[g].r),a[g].x=+a[g].plotDetails.rect.x,a[g].y=+a[g].plotDetails.rect.y;return k={tree:c(a,0,a.length-1,!1),search:function(a,c){function d(d){var f=b(a,d.x1,d.x2)&&b(c,d.y1,d.y2),g=e(a,c,d.point.x,d.point.y);return i?void(f?p?d.point.i>i.point.i&&(i=d,p=f,q=g):(i=d,p=f,q=g):!p&&g<q&&(i=d,p=f,q=g)):(i=d,p=f,void(q=g))}function e(a,b,c,d){return r(j(a-c,2)+j(b-d,2))}function f(a){a&&a.point&&(b(a.point.x,l,m)&&b(a.point.y,n,o)&&d(a),l<=a.point.x&&g(a.left),m>=a.point.x&&g(a.right))}function g(a){a&&a.point&&(b(a.point.x,l,m)&&b(a.point.y,n,o)&&d(a),n<=a.point.y&&f(a.left),o>=a.point.y&&f(a.right))}var i,k=this.tree,l=a-h,m=a+h,n=c-h,o=c+h,p=!1,q=0;return f(k),i&&i.point||i},searchTreemap:function(a,b){var c,d=function(a){return c?void(a.i>c.i&&(c=a)):void(c=a)},e=function(c,f){if(c&&c.point){var g=c.point.x,h=g+c.point.plotDetails.rect.width,i=c.point.y,j=i+c.point.plotDetails.rect.height;c.point.x2=h,c.point.y2=j,a>=g&&a<=h&&b>=i&&b<=j&&d(c.point),e(c.left,!f),e(c.right,!f)}};return e(this.tree,!1),c}},a.sort(function(c,a){return c.i-a.i}),k};addDep({name:'treeMapAnimation',type:'animationRule',extension:treeMapAnimation});class TreeMapDS extends ComponentInterface{constructor(){super();var a=this;a.components={},a.conf={},a.graphics={elemStore:{rect:[],label:[],highlight:[],hot:[],polypath:[]}}}getName(){return'treeMap'}configureAttributes(a){if(!a)return;this.config.JSONData=a.data[0];let b,c,d,e=this,f=e.getFromEnv('chart'),g=e.conf,h=f.getFromEnv('chart-attrib');g.metaTreeInf={},b=h.algorithm||'squarified',g.algorithm=b.toLowerCase(),g.range=void 0,g.horizontalPadding=pluckNumber(h.horizontalpadding,5),g.horizontalPadding=0>g.horizontalPadding?0:g.horizontalPadding,g.verticalPadding=pluckNumber(h.verticalpadding,5),g.verticalPadding=0>g.verticalPadding?0:g.verticalPadding,g.showParent=pluckNumber(h.showparent,1),g.showChildLabels=pluckNumber(h.showchildlabels,0),g.showHoverEffect=pluckNumber(h.showhovereffect,1),g.highlightParentsOnHover=pluckNumber(h.highlightparentsonhover,0),g.defaultParentBGColor=pluck(h.defaultparentbgcolor,void 0),g.defaultNavigationBarBGColor=pluck(h.defaultnavigationbarbgcolor,g.defaultParentBGColor),g.showTooltip=pluckNumber(h.showtooltip,1),g.baseFontSize=pluckNumber(h.basefontsize,10),g.baseFontSize=1>g.baseFontSize?1:g.baseFontSize,g.labelFontSize=pluckNumber(h.labelfontsize,void 0),g.labelFontSize=1>g.labelFontSize?1:g.labelFontSize,g.baseFont=pluck(h.basefont,'Verdana, Sans'),g.labelFont=pluck(h.labelfont,void 0),g.baseFontColor=pluck(h.basefontcolor,'#000000').replace(/^#?([a-f0-9]+)/ig,'#$1'),g.labelFontColor=pluck(h.labelfontcolor,void 0),g.labelFontColor&&(g.labelFontColor=g.labelFontColor.replace(/^#?([a-f0-9]+)/ig,'#$1')),g.labelFontBold=pluckNumber(h.labelfontbold,0),g.labelFontItalic=pluckNumber(h.labelfontitalic,0),g.plotBorderThickness=pluckNumber(h.plotborderthickness,1),g.plotBorderThickness=0>g.plotBorderThickness?0:5<g.plotBorderThickness?5:g.plotBorderThickness,g.plotBorderColor=pluck(h.plotbordercolor,'#000000').replace(/^#?([a-f0-9]+)/ig,'#$1'),g.tooltipSeparationCharacter=pluck(h.tooltipsepchar,','),g.plotToolText=parseUnsafeString(pluck(h.plottooltext,'')),g.parentLabelLineHeight=pluckNumber(h.parentlabellineheight,12),g.parentLabelLineHeight=0>g.parentLabelLineHeight?0:g.parentLabelLineHeight,g.labelGlow=pluckNumber(h.labelglow,1),g.labelGlowIntensity=pluckNumber(h.labelglowintensity,100)/100,g.labelGlowIntensity=0>g.labelGlowIntensity?0:1<g.labelGlowIntensity?1:g.labelGlowIntensity,g.labelGlowColor=pluck(h.labelglowcolor,'#ffffff').replace(/^#?([a-f0-9]+)/ig,'#$1'),g.labelGlowRadius=pluckNumber(h.labelglowradius,2),g.labelGlowRadius=0>g.labelGlowRadius?0:10<g.labelGlowRadius?10:g.labelGlowRadius,g.btnResetChartTooltext=pluck(h.btnresetcharttooltext,'Back to Top'),g.btnBackChartTooltext=pluck(h.btnbackcharttooltext,'Back to Parent'),g.rangeOutBgColor=pluck(h.rangeoutbgcolor,'#808080').replace(/^#?([a-f0-9]+)/ig,'#$1'),g.rangeOutBgAlpha=pluckNumber(h.rangeoutbgalpha,100),g.rangeOutBgAlpha=1>g.rangeOutBgAlpha||100<g.rangeOutBgAlpha?100:g.rangeOutBgAlpha,c=pluckNumber(h.maxdepth),g.maxDepth=c===void 0?void 0:Math.max(c,1),d=g.showNavigationBar=pluckNumber(h.shownavigationbar,1),g.slicingMode=pluck(h.slicingmode,'alternate'),g.navigationBarHeight=pluckNumber(h.navigationbarheight),g.navigationBarHeightRatio=pluckNumber(h.navigationbarheightratio),g.navigationBarBorderColor=pluck(h.navigationbarbordercolor,g.plotBorderColor).replace(/^#?([a-f0-9]+)/ig,'#$1'),g.navigationBarBorderThickness=d?pluckNumber(h.navigationbarborderthickness,g.plotBorderThickness):0,g.seperatorAngle=pluckNumber(h.seperatorangle)*(Math.PI/180),g.isConfigured=!0,e.setState('dirty',!0)}createContainer(){var a,b,c,d,e=this,f=e.getLinkedParent().getChildContainer();a=e.getContainer('plots')||e.addContainer('plots',createGroup('plots',f.defaultGroup,e)),b=e.getContainer('datalabels')||e.addContainer('datalabels',createGroup('datalabels',f.defaultGroup,e).insertAfter(a)),c=e.getContainer('tracker')||e.addContainer('tracker',createGroup('tracker',f.defaultGroup,e)),e.getContainer('line-hot')||e.addContainer('line-hot',createGroup('line-hot',c,e)),d=e.getContainer('labelhighlight')||e.addContainer('labelhighlight',createGroup('labelhighlight',b,e)),e.getContainer('labelfloat')||e.addContainer('labelfloat',createGroup('labelfloat',b,e).insertAfter(d))}_getHoveredPlot(a,b){var c,d,e,f=this,g=f.config.kdTree||{};for(e=Object.keys(g),d=e.length-1;-1<d;d--)if(f.config.kdTree[e[d]].searchTreemap(a,b)){c=f.config.kdTree[e[d]].searchTreemap(a,b);break}if(c)return f.pointObj=c,{pointIndex:c.i||c.index,hovered:!0,pointObj:c}}kdTreePartioning(){var a,b,c=this,d=c.getFromEnv('chartConfig').trackerConfig,e={};for(a=d.length;a--;)d[a].i=a,void 0===e[d[a].node.meta.depth]&&(e[d[a].node.meta.depth]=[]),e[d[a].node.meta.depth].push(d[a]);for(c.config.kdTree={},b=Object.keys(e),a=b.length-1;-1<a;a--)c.config.kdTree[b[a]]=kdTreeAbs&&kdTreeAbs(e[b[a]])}_rolloverResponseSetter(a,b,c){var d=a.getData(),e=c.getFromEnv('animationManager'),f=this.getFromEnv('chart');d&&0!==d.showHoverEffect&&(!f.getState('drill')&&(e.setAnimationState(MOUSEOVER),e.setAnimation({el:a,label:'rect',component:c,attr:a.getData().setRolloverAttr})),f.plotEventHandler(a,b,ROLLOVER))}_rolloutResponseSetter(a,b,c){var d=a.getData(),e=c.getFromEnv('animationManager'),f=this.getFromEnv('chart');d&&0!==d.showHoverEffect&&(!f.getState('drill')&&(e.setAnimationState(MOUSEOUT),e.setAnimation({el:a,label:'rect',component:c,doNotRemove:!0,attr:a.getData().setRolloutAttr})),f.plotEventHandler(a,b,ROLLOUT))}_getParentNode(a=[]){let b,c=this,d=c.conf.navigationBarNodes||[],e=d.length,f=a.length,g=a[f-2],h=a[f-1],j=!1;if(2>f)return!1;for(b=0;b<e;b++)if(d[b].id===g.id){j=!0;break}return j?h:g}_firePlotEvent(a,b,c){var d,e=this,f=e.config.currentToolTip,g=e.getFromEnv('chartConfig'),h=g.trackerConfig[b||0],i=e.getContainer('tracker'),j=h&&h.node&&h.node.plotItem,k=h&&h.plotDetails&&h.plotDetails.toolText,l=e.getFromEnv('toolTipController'),m=c.originalEvent,n=e.graphics.singleTracker,o=e.pointObj,p=o.plotDetails,q=e.conf.showHoverEffect,r=e.conf.highlightParentsOnHover,s=h&&h.node.path,t=e._getParentNode(s),u=t&&t.rect;j?r&&t?d={x:u.x,y:u.y,width:u.width,height:u.height,stroke:'rgba(255,255,255,0)'}:d={x:p.rect.x||0,y:p.rect.y||0,width:p.rect.width||0,height:p.rect.height||0,stroke:'rgba(255,255,255,0)'}:(j=h&&(h.node.plotItem||h.node.polyPathItem),p={},p.rect={}),n=e.graphics.singleTracker=e.getFromEnv('animationManager').setAnimation({el:e.graphics.singleTracker||'rect',attr:d,component:e,label:'tracker',container:i,doNotRemove:!0}).toFront();j&&(j.node.style.cursor=POINTER,n.node.style.cursor=POINTER,'fc-mouseover'===a?(q?h.evtFns.hover[0](n):n.attr('fill',TRACKER_FILL),k&&(f?l.draw(m,k,f):f=e.config.currentToolTip=l.draw(m,k))):'fc-mouseout'===a?(j.node.style.cursor=DEFAULT_CURSOR,n.node.style.cursor=POINTER,n.attr({x:0,y:0,width:0,height:0,stroke:'#ffffff',"stroke-width":'0px'}),n.toFront(),l.hide(f),e._rolloutResponseSetter(j,c,e)):'fc-click'===a?(h&&h.evtFns&&h.evtFns.click&&h.evtFns.click[0](),e.config.kdTree={},e.addJob('click',e.kdTreePartioning.bind(e),priorityList.tracker)):'fc-mousemove'===a?k&&(f?l.draw(m,k,f):f=e.config.currentToolTip=l.draw(m,k)):void 0)}draw(){var a,b,c,d,e,f,g,h,i,j,k,l,m=this,n=m.conf,o=m.getFromEnv('chart'),p=m.getFromEnv('chartConfig'),q=p.trackerConfig,r=p.canvasLeft,s=p.canvasRight,t=p.canvasBottom,u=p.canvasTop,v=m.getFromEnv('chart-attrib'),w=n.metaTreeInf,x=m.graphics.elemStore,y={},z=n._graphicPool||(n._graphicPool={}),A={},B=['fontFamily','fontSize','fontWeight','fontStyle'],C={},D=n,E=m.getFromEnv('colorManager'),F=this.getFromEnv('ref'),G=m.getFromEnv('animationManager'),H=F.containerManager,I=F.algorithmFactory,J={};for(q&&(q.length=0),m.createContainer(),k=parsexAxisStyles({},{},v,{fontFamily:'Verdana,sans',fontSize:'10px'}),(i=0,j=B.length);i<j;i++)l=B[i],l in k&&(C[l]=k[l]);H.remove(),a=m.getContainer('plots'),b=m.getContainer('datalabels'),b.css(C),c=m.getContainer('labelhighlight'),d=m.getContainer('labelfloat'),n.colorRange=E,w.effectiveWidth=s-r,w.effectiveHeight=t-u,w.startX=r,w.startY=u,A.x=w.effectiveWidth/2,A.y=w.effectiveHeight/2,A.x=w.effectiveWidth/2,A.y=w.effectiveHeight/2,y.drawPolyPath=function(b,c,d){var e,f=o.getState('drill')?'updating':'appearing';return J[d.id]&&delete J[d.id],e=G.setAnimation({el:y.graphicPool(!1,'polyPathItem')||'path',container:a,attr:{path:b.path},css:c,state:f,label:'path',component:m}),e&&x.polypath.push(e),e},y.drawRect=function(b,c,d,f,g){var h,i,j,k,l={},n={};for(h in j=o.getState('drill')?'updating':'appearing',J[g.id]&&delete J[g.id],b)i=b[h],0>i&&(b[h]=0,n.visibility='hidden');return fcExtend(l,b),l.x=A.x,l.y=A.y,l.height=0,l.width=0,e=G.setAnimation({el:y.graphicPool(!1,'plotItem')||'rect',container:a,attr:b,css:Object.assign(c,n),state:j,props:g.__props,label:'rect',component:m}).toFront(),k&&x.rect.push(k),e},y.drawText=function(a,b,e,f,g={},h){var i,j,k,l,n,p,q={},r=e.textAttrs,s=e.highlightAttrs;return k=o.getState('drill')?'updating':'appearing',J[h.id]&&delete J[h.id],fcExtend(q,r),delete q.fill,q['stroke-linejoin']='round',delete g.opacity,a=0>b.x||0>b.y?BLANKSTRING:a,l=G.setAnimation({el:y.graphicPool(!1,'labelItem')||y.graphicPool(!1,'pathlabelItem')||'text',container:d,component:m,attr:Object.assign({},r,g,{text:a,x:b.x,y:b.y,visibility:'visible'}),state:k,label:'labelItem'}),l.show(),p=s.visibility!==HIDDEN,delete s.visibility,n=G.setAnimation({el:y.graphicPool(!1,'highlightItem')||y.graphicPool(!1,'pathhighlightItem')||'text',container:c,component:m,attr:Object.assign({},g,s,{x:b.x,y:b.y,text:p?a:'',visibility:'visible'}),css:{lineHeight:1.2*q.fontSize+'px'},state:k,label:'highlightItem'}),m.prevLabelGlowVisibility!==p&&!0===p&&n.show(),m.prevLabelGlowVisibility=p,x.label.push(i),x.highlight.push(j),{label:l,highlightMask:n}},y.disposeItems=function(a,b){var c,d,e,f=b||['plotItem','labelItem','hotItem','highlightItem','polyPathItem','pathlabelItem','pathhighlightItem','stackedpolyPathItem','stackedpathlabelItem','stackedpathhighlightItem'];for(c=0;c<f.length;c+=1)e=f[c],d=a[e],d&&'text'===d.type&&d.attr({text:'',"text-bound":[]}),d&&!d.removed&&(d=G.setAnimation({el:d,component:m})),a[e]=UNDEF},y.disposeChild=function(){var a,b=function(){return a.disposeItems},c=function(a,d){var e,f;for(b(a),e=0;e<(a.getChildren()||[]).length;e++)f=a.getChildren(),e=c(f[e],e);return d};return function(d){var e=d.getParent();a||(a=this,b=b()),e?a.disposeChild(e):c(d,0)}}(),y.disposeSelectedChildren=function(){var a,b=function(){return a.addRemovalNodes},c=function(a,d){var e,f;for(b(a),e=0;e<(a.getChildren()||[]).length;++e)f=a.getChildren(),e=c(f[e],e);return d};return function(d){var e=d.getParent();a||(a=this,b=b()),e?a.addRemovalNodes(e):c(d,0)}}(),y.addRemovalNodes=function(a){J[a.id]=a},y.hideNodes=function(){var a,b,c,d,e=['plotItem','labelItem','hotItem','highlightItem','polyPathItem','pathlabelItem','pathhighlightItem','stackedpolyPathItem','stackedpathlabelItem','stackedpathhighlightItem'];for(let f in J)for(c=J[f],a=0;a<e.length;a+=1)d=e[a],b=c[d],b&&'text'===b.type&&b.attr({text:'',"text-bound":[]}),b=b&&!b.removed&&G.setAnimation({el:b,component:m,label:'gen'}),c[d]=UNDEF},y.graphicPool=function(){return function(a,b,c){var d,e=z[b];if(e||(e=z[b]=[]),('hotItem'===b||'pathhotItem'===b)&&c.remove(),a)e.push(c);else if(d=e.splice(0,1)[0],d)return d.show(),d}}(),y.disposeComplimentary=function(a){var b,c,d=this,e=a.getParent(),f=a.getSiblingCount('left');e&&(c=e.getChildren(),b=c.splice(f,1)[0],d.disposeChild(a),c.splice(f,0,b)),d.removeLayers()},y.removeLayers=function(){var a,b,c,d,e;for(d=x.hot,e=d.length,b=e,a=0;a<b;a++)c=d[a],c&&c.remove();d.length=0},m.getState('dirty')&&(I.init(n.algorithm,!0,n.maxDepth),g=I.plotOnCanvas(m.config.JSONData,o._getCleanValue()),H.init(m,w,y,f,g)),H.draw(),h=I.applyShadeFiltering({fill:D.rangeOutBgColor,opacity:.01*D.rangeOutBgAlpha},function(a){var b=this;b.plotItem&&b.plotItem.css(a)}),m.addExtEventListener('legendUpdate',function(a,b){h.call(this,{start:b.maxMinArray[0].min,end:b.maxMinArray[0].max}),n.range={min:b.maxMinArray[0].min,max:b.maxMinArray[0].max}},m.getFromEnv('colorManager')),n.isConfigured=!1,m.addJob('buildKDTreeID',m.kdTreePartioning.bind(m),priorityList.tracker)}getType(){return'dataset'}setJSONIndex(a){this.config.index=a}getJSONIndex(){return this.config.index||0}}export default TreeMapDS;