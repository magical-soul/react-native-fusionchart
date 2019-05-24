import{BLANK,pluck,pluckNumber,getColorCodeString,preDefStr,COMMASTRING,HASHSTRING,toRaphaelColor,regex,getFirstDefinedValue,HUNDREDSTRING}from'../lib/lib';import{convertColor,getDarkColor,getLightColor}from'../lib/lib-graphics';import BulletDataset from'./bullet';import{addDep}from'../dependency-manager';import ledAnimation from'../animation-rules/led-animation';var UNDEF,BLANKSTRING=BLANK,colorStrings=preDefStr.colors,COLOR_000000=colorStrings.c000000,showHoverEffectStr=preDefStr.showHoverEffectStr,BUTT='butt',POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,ledColorRangeFillMixStr='{light-10},{dark-10},{light-10},{dark-10}',ledColorRangeFillRatioStr='0,10,80,10',win=window,userAgent=win.navigator.userAgent,isIE=/msie/i.test(userAgent)&&!win.opera,TRACKER_FILL='rgba(192,192,192,'+(isIE?.002:1e-6)+')',math=Math,mathRound=math.round,mathMax=math.max,dropHash=regex.dropHash,SETROLLOVERATTR='setRolloverAttr',SETROLLOUTATTR='setRolloutAttr',EVENTARGS='eventArgs',M='M',L='L',Z='Z';addDep({name:'ledAnimation',type:'animationRule',extension:ledAnimation});class LedDataset extends BulletDataset{getType(){return'dataset'}getName(){return'led'}draw(){var a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,N,O,P,Q,R,S,T,U,V,W,X,Y,$,_,aa,ba,ca=this,da=ca.getFromEnv('chart'),ea=ca.config,fa=da.getFromEnv('dataSource').chart,ga=da.config,ha=da.getChildren('canvas')[0],ia=ha.getGraphicalElement(),ja=ha.config,ka=ia.canvasBorderElement,la=ia.colorRangeElems,ma=ia.canvasElementPath,na=ia.canvasHotElement,oa=ga.canvasLeft,pa=ga.canvasRight,qa=ga.canvasTop,ra=ga.canvasBottom,sa=ga.canvasWidth,ta=ga.canvasHeight,ua=da.getChildContainer().plotGroup,va=ca.getFromEnv('scale'),wa=va.getLimit().min,xa=va.getLimit().max,ya=pluckNumber(da.getFromEnv('dataSource').chart.reverseaxis,da.isAxisReverse),za=da.isHorizontal,Aa=function(a,b){return ya&&!za?{x:oa,y:qa+a*ta/(xa-wa),width:sa,height:(b-a)*ta/(xa-wa)}:ya||za?ya&&za?{x:oa+(sa-b*sa/(xa-wa)),y:qa,width:(b-a)*sa/(xa-wa),height:ta}:!ya&&za?{x:oa+a*sa/(xa-wa),y:qa,width:(b-a)*sa/(xa-wa),height:ta}:void 0:{x:oa,y:qa+(ta-b*ta/(xa-wa)),width:sa,height:(b-a)*ta/(xa-wa)}},Ba=ca.getFromEnv('color-manager'),Ca=ca.getFromEnv('number-formatter'),Da=da.getFromEnv('animationManager'),Ea=ea.showHoverEffect,Fa=function(a){var b=this;da.plotEventHandler(b,a)},Ga=function(a){var b,c,d,e=0;return function(){if(d=this,0!==d.data(showHoverEffectStr))for(e=0,b=a.length;e<b;e+=1)c=a[e],c.attr(d.data(SETROLLOVERATTR)[e])}},Ha=function(a){var b,c,d,e=0;return function(){if(d=this,0!==d.data(showHoverEffectStr))for(e=0,b=a.length;e<b;e+=1)c=a[e],c.attr(d.data(SETROLLOUTATTR)[e])}},Ia=[],Ja=[],Ka=ca.getContainer('trackerContainer'),La=da.getChildContainer('trackerGroup'),Ma=0,Na=!1;if(Ka||(Ka=ca.addContainer('trackerContainer',Da.setAnimation({el:'group',attr:{name:'led-hot'},container:La,component:ca}))),g=pluckNumber(fa.showgaugeborder,1),d=pluck(fa.gaugebordercolor,da.gaugeBorderColor,'333333'),h=g?pluckNumber(fa.gaugeborderthickness,da.gaugeBorderThickness,2):0,e=pluck(fa.gaugeborderalpha,HUNDREDSTRING),ja.gaugeFillColor=x=pluck(fa.gaugefillcolor,fa.ledbgcolor,COLOR_000000),t=pluckNumber(fa.usesamefillcolor,0),u=pluckNumber(fa.usesamefillbgcolor,t),ea.ledGap=v=pluckNumber(fa.ledgap,2),ea.ledSize=w=pluckNumber(fa.ledsize,2),ja.colorRangeFillMix=a=getFirstDefinedValue(fa.colorrangefillmix,fa.gaugefillmix,da.colorRangeFillMix,ledColorRangeFillMixStr),ja.colorRangeFillRatio=b=getFirstDefinedValue(fa.colorrangefillratio,fa.gaugefillratio,da.colorRangeFillRatio,fa.gaugefillratio,ledColorRangeFillRatioStr),ja.colorRangeGetter=O=ca.getFromEnv('colorRange'),ja.colorArray=c=O&&O.getColorRangeArr(wa,xa),d=pluck(d,COLOR_000000).replace(dropHash,HASHSTRING),e=pluckNumber(fa.colorrangeborderalpha,fa.gaugeborderalpha,100),f=pluckNumber(fa.showshadow,1),g=pluckNumber(fa.showgaugeborder,1),ja.colorRangeBorderThickness=h=g?pluckNumber(fa.colorrangeborderthickness,fa.gaugeborderthickness,2):0,y=za?sa:ta,z=v+w||1,A=y-w,B=xa-wa,C=h/2,D=oa-C,E=qa-C,F=oa+sa+C,G=qa+ta+C,H=parseInt(A/z,10)+1,I=A%z,w+=I/H,ea.sizeGapSum=z=w+v,ea.perLEDValueLength=W=B/H,J=oa,K=qa,U=pluck(fa.clickurl),R=Ca.getCleanValue(da.getFromEnv('dataSource').value),t||u)for(k=0,l=c.length;k<l;k+=1)if(R>=c[k].minvalue&&R<=c[k].maxvalue){P=c[k].code||Ba.getPlotColor(k),S=k;break}for(c&&0<c.length&&(Q=c[0].code||Ba.getPlotColor(0)),X=ya?pa:oa,Y=ya?qa:ra,(k=0,l=c&&c.length);k<l;k+=1)j=c[k],m=Aa(j.minvalue-wa,j.maxvalue-wa),$=mathRound((j.maxvalue-wa)/W),aa=$-Ma,Ma=$,_=aa*z,za||ya?!za&&ya?(m.height=_-v,m.y=Y,Y+=_):za&&!ya?(m.width=_-v,m.x=X,X+=_):za&&ya&&(m.width=_-v,m.x=X-m.width,X-=_):(m.height=_-v,m.y=Y-m.height,Y-=_),j.x=m.x,j.y=m.y,j.width=m.width,j.height=m.height,n=t?P:u&&k>S?Q:Q=j.code||Ba.getPlotColor(k),o=convertColor(getColorCodeString(pluck(j.bordercolor,n),d),pluckNumber(j.borderalpha,e)),p=Ba.parseColorMix(j.code,a),q=Ba.parseAlphaList(j.alpha,p.length),r=pluckNumber(j.borderAlpha,e),s=q.split(COMMASTRING),s=mathMax.apply(Math,s),s=mathMax(h&&r||0,s),ba={x:m.x,y:m.y,width:0>m.width?0:m.width,height:0>m.height?0:m.height,r:0,"stroke-width":0,stroke:o,fill:toRaphaelColor({FCcolor:{color:n,ratio:b,alpha:q,angle:180}})},T=Da.setAnimation({el:la&&la[k]||'rect',attr:ba,container:ua,component:ca,label:'plotBackground'}).toBack(),la&&la[k]||(ha.addGraphicalElement('colorRangeElems',T,!0),T.shadow({apply:f,opacity:s/100})),Ia.push({"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:getDarkColor(pluck(n,COLOR_000000),80)+COMMASTRING+getLightColor(pluck(n,COLOR_000000),80),alpha:pluckNumber(j.alpha,100),angle:za?90:0}})}),Ja.push({"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:pluck(n,COLOR_000000),alpha:pluckNumber(j.alpha,100)}})});for(la=ha.getGraphicalElement('colorRangeElems')||[],l=la.length-1;l>=k;)ha.removeGraphicalElement(la[l]),l--;for(V={link:U,value:R},ba={x:oa,y:qa,width:sa,height:ta,"stroke-width":0,fill:TRACKER_FILL},na?Da.setAnimation({el:na,attr:ba,container:Ka,component:ca}):(na=ia.canvasHotElement=Da.setAnimation({el:'rect',attr:ba,container:Ka,component:ca}),Na=!0),na.data(EVENTARGS,V).data(showHoverEffectStr,Ea).data(SETROLLOVERATTR,Ia).data(SETROLLOUTATTR,Ja),Na&&(U&&na.on('fc-click',Fa),na.hover(Ga(la),Ha(la))),za?J+=z-v/2:K+=z-v/2,N=[],ba={path:[M,D,E,L,F,E,F,G,D,G,Z],stroke:convertColor(d,e),"stroke-width":h,"stroke-linecap":BUTT},ka?Da.setAnimation({el:ka,attr:ba,component:ca}):ia.canvasBorderElement=Da.setAnimation({el:'path',attr:ba,container:ua,component:ca,label:'plotBackground'}).shadow({apply:f}).toBack(),k=1;k<H;k+=1)za?(N.push(M,J,K,L,J,K+ta),J+=z):(N.push(M,J,K,L,J+sa,K),K+=z);ba={path:N,stroke:convertColor(x,100),"stroke-width":v,"stroke-linecap":BUTT},ma?Da.setAnimation({el:ma,attr:ba,component:ca}):(ma=Da.setAnimation({el:'path',attr:ba,container:ua,component:ca,label:'plotBackground'}),ha.addGraphicalElement('canvasElementPath',ma)),ca.drawShade()}drawShade(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=Math.ceil,q=this,r=q.config,s=q.components.data,t=q.getFromEnv('chart'),u=t.getChildren('caption')[0],v=t.getChildren('subCaption')[0],w=u&&u.config.text&&u.config.height||0,x=u&&u.config.text&&u.config.captionPadding||0,y=v&&v.config.text&&v.config.height||0,z=t.getFromEnv('dataSource').chart,A=t.getFromEnv('animationManager'),B=q.getFromEnv('toolTipController'),C=q.getFromEnv('smartLabel'),D=t.config,E=D.canvasLeft,F=D.canvasTop,G=D.canvasHeight,H=D.canvasWidth,I=t.getChildContainer().plotGroup,J=q.getContainer('container'),K=q.getFromEnv('number-formatter'),L=r.isAxisReverse=pluckNumber(z.reverseaxis,t.isaxisreverse),M=r.isHorizontal=t.isHorizontal,N=s[0],O=N.graphics,P=N&&N.config,Q=q.getContainer('dataLabelContainer'),R=t.getChildContainer('datalabelsGroup'),S=t.getChildren('canvas')[0],T=t.config.dataLabelStyle,U=r.heightUsed,V=q.getFromEnv('scale'),W=V.getLimit().min;C.setStyle(T),d=t.getChildren('canvas')[0].config.gaugeFillColor,J||(J=q.addContainer('container',A.setAnimation({el:'group',attr:{name:'shade'},container:I,component:q}))),Q||(Q=q.addContainer('dataLabelContainer',A.setAnimation({el:'group',attr:{name:'datalabel'},container:R,component:q,label:'labelGroup'}))),e=K.getCleanValue(P.setValue),N.graphics||(N.graphics={}),l=(e-W)/r.perLEDValueLength,m=mathRound(l)*r.sizeGapSum-r.ledGap,n=p(G-m),o=p(H-m),L&&!M?g={x:E,y:F+m,width:H,height:n,r:0,"stroke-width":0,fill:convertColor(d,50)}:L||M?!L&&M?g={x:E+m,y:F,width:o,height:G,r:0,"stroke-width":0,fill:convertColor(d,50)}:L&&M&&(g={x:E,y:F,width:o,height:G,r:0,"stroke-width":0,fill:convertColor(d,50)}):g={x:E,y:F,width:H,height:n,r:0,"stroke-width":0,fill:convertColor(d,50)},N.graphics.element=A.setAnimation({el:N.graphics.element||'rect',attr:g,container:J,component:q,label:'plotRect'}),k=P.setTooltext===BLANK||P.setTooltext===UNDEF?P.toolTipValue:P.setTooltext,r.showTooltip?B.enableToolTip(S._graphics.canvasHotElement,k):B.disableToolTip(S._graphics.canvasHotElement),h=parseInt(T.lineHeight,10),f=h>U?D.height-D.marginBottom-U+h/2:D.height-D.marginBottom-h/2,f-=D.borderWidth,f-=(t._manageActionBarSpace&&t._manageActionBarSpace(.225*P.availableHeight)||{}).bottom,0===u.config.isOnTop&&(f-=w+y+x),O=N.graphics,P.displayValue!==BLANKSTRING&&P.displayValue!==UNDEF&&r.showValue?(a=C.getSmartText(P.displayValue,D.width,r.heightUsed),c=a.text,b=a.tooltext||BLANKSTRING,g={text:c,"text-anchor":POSITION_MIDDLE,x:H/2+E,y:f,"vertical-align":POSITION_MIDDLE,fill:T.color,direction:P.textDirection,"text-bound":[T.backgroundColor,T.borderColor,T.borderThickness,T.borderPadding,T.borderRadius,T.borderDash]},O.label=A.setAnimation({el:O.label||'text',attr:g,container:Q,component:q,label:'text'}),r.showTooltip?B.enableToolTip(O.label,b):B.disableToolTip(O.label),i=O.label.getBBox(),0>i.x+D.marginLeft&&(j=i.width-D.marginLeft,D.width<j&&(j=D.width-D.marginLeft),g={x:j/2},A.setAnimation({el:O.label,attr:g,component:q,label:'text'}))):(O.label&&B.disableToolTip(O.label),O.label=O.label&&A.setAnimation({el:O.label,component:q}))}}export default LedDataset;