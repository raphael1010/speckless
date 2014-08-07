/*!
xCharts v0.3.0 Copyright (c) 2012, tenXer, Inc. All Rights Reserved.
@license MIT license. http://github.com/tenXer/xcharts for details
*/
!function(){function t(t){return _.chain(_.range(t,10)).reverse().map(function(t){return'g[data-index="'+t+'"]'}).value().join(", ")}function e(t,e){var i=t.getAttribute("class");return(null!==i?i.replace(/color\d+/g,""):"")+" color"+e}function i(t,e){return _.chain(t).pluck("data").flatten().pluck(e).uniq().filter(function(t){return void 0!==t&&null!==t}).value().sort(d3.ascending)}function n(t){var e,i,n=t[0],s=t[1];return n===s&&(i=Math.max(Math.round(n/10),4),n-=i,s+=i),e=s-n,n=n?n-e/10:n,n=t[0]>0?Math.max(n,0):n,s=s?s+e/10:s,s=t[1]<0?Math.min(s,0):s,[n,s]}function s(t,e,i,s){var o,r=_.chain(e).pluck("data").flatten().value();return o={x:d3.extent(r,function(t){return t.x}),y:d3.extent(r,function(t){return t.y})},_.each([i,s],function(e,i){var s,a=i?"y":"x";o[a]=d3.extent(r,function(t){return t[a]}),"ordinal"!==e&&_.each([a+"Min",a+"Max"],function(i,r){"time"!==e&&(s=n(o[a])),t.hasOwnProperty(i)&&null!==t[i]?o[a][r]=t[i]:"time"!==e&&(o[a][r]=s[r])})}),o}function o(){var t=document;return!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}function r(t,e,i,n){var s,r=this;return r._options=n=_.defaults(n||{},d),o()===!1?n.unsupported(i):(r._selector=i,r._container=d3.select(i),r._drawSvg(),r._mainStorage={},r._compStorage={},e=_.clone(e),t&&!e.type&&(e.type=t),r.setData(e),void d3.select(window).on("resize.for."+i,function(){s&&clearTimeout(s),s=setTimeout(function(){s=null,r._resize()},500)}))}var r,a={},l={},h={};(function(){var t=this,e=t._,i={},n=Array.prototype,s=Object.prototype,o=Function.prototype,r=n.push,a=n.slice,l=n.concat,h=s.toString,c=s.hasOwnProperty,u=n.forEach,d=n.map,p=n.reduce,f=n.reduceRight,m=n.filter,g=n.every,v=n.some,y=n.indexOf,b=n.lastIndexOf,w=Array.isArray,x=Object.keys,C=o.bind,_=function(t){return t instanceof _?t:this instanceof _?void(this._wrapped=t):new _(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):t._=_,_.VERSION="1.4.3";var k=_.each=_.forEach=function(t,e,n){if(null!=t)if(u&&t.forEach===u)t.forEach(e,n);else if(t.length===+t.length){for(var s=0,o=t.length;o>s;s++)if(e.call(n,t[s],s,t)===i)return}else for(var r in t)if(_.has(t,r)&&e.call(n,t[r],r,t)===i)return};_.map=_.collect=function(t,e,i){var n=[];return null==t?n:d&&t.map===d?t.map(e,i):(k(t,function(t,s,o){n[n.length]=e.call(i,t,s,o)}),n)};var S="Reduce of empty array with no initial value";_.reduce=_.foldl=_.inject=function(t,e,i,n){var s=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return n&&(e=_.bind(e,n)),s?t.reduce(e,i):t.reduce(e);if(k(t,function(t,o,r){s?i=e.call(n,i,t,o,r):(i=t,s=!0)}),!s)throw new TypeError(S);return i},_.reduceRight=_.foldr=function(t,e,i,n){var s=arguments.length>2;if(null==t&&(t=[]),f&&t.reduceRight===f)return n&&(e=_.bind(e,n)),s?t.reduceRight(e,i):t.reduceRight(e);var o=t.length;if(o!==+o){var r=_.keys(t);o=r.length}if(k(t,function(a,l,h){l=r?r[--o]:--o,s?i=e.call(n,i,t[l],l,h):(i=t[l],s=!0)}),!s)throw new TypeError(S);return i},_.find=_.detect=function(t,e,i){var n;return T(t,function(t,s,o){return e.call(i,t,s,o)?(n=t,!0):void 0}),n},_.filter=_.select=function(t,e,i){var n=[];return null==t?n:m&&t.filter===m?t.filter(e,i):(k(t,function(t,s,o){e.call(i,t,s,o)&&(n[n.length]=t)}),n)},_.reject=function(t,e,i){return _.filter(t,function(t,n,s){return!e.call(i,t,n,s)},i)},_.every=_.all=function(t,e,n){e||(e=_.identity);var s=!0;return null==t?s:g&&t.every===g?t.every(e,n):(k(t,function(t,o,r){return(s=s&&e.call(n,t,o,r))?void 0:i}),!!s)};var T=_.some=_.any=function(t,e,n){e||(e=_.identity);var s=!1;return null==t?s:v&&t.some===v?t.some(e,n):(k(t,function(t,o,r){return s||(s=e.call(n,t,o,r))?i:void 0}),!!s)};_.contains=_.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):T(t,function(t){return t===e})},_.invoke=function(t,e){var i=a.call(arguments,2);return _.map(t,function(t){return(_.isFunction(e)?e:t[e]).apply(t,i)})},_.pluck=function(t,e){return _.map(t,function(t){return t[e]})},_.where=function(t,e){return _.isEmpty(e)?[]:_.filter(t,function(t){for(var i in e)if(e[i]!==t[i])return!1;return!0})},_.max=function(t,e,i){if(!e&&_.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.max.apply(Math,t);if(!e&&_.isEmpty(t))return-1/0;var n={computed:-1/0,value:-1/0};return k(t,function(t,s,o){var r=e?e.call(i,t,s,o):t;r>=n.computed&&(n={value:t,computed:r})}),n.value},_.min=function(t,e,i){if(!e&&_.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.min.apply(Math,t);if(!e&&_.isEmpty(t))return 1/0;var n={computed:1/0,value:1/0};return k(t,function(t,s,o){var r=e?e.call(i,t,s,o):t;n.computed>r&&(n={value:t,computed:r})}),n.value},_.shuffle=function(t){var e,i=0,n=[];return k(t,function(t){e=_.random(i++),n[i-1]=n[e],n[e]=t}),n};var E=function(t){return _.isFunction(t)?t:function(e){return e[t]}};_.sortBy=function(t,e,i){var n=E(e);return _.pluck(_.map(t,function(t,e,s){return{value:t,index:e,criteria:n.call(i,t,e,s)}}).sort(function(t,e){var i=t.criteria,n=e.criteria;if(i!==n){if(i>n||void 0===i)return 1;if(n>i||void 0===n)return-1}return t.index<e.index?-1:1}),"value")};var D=function(t,e,i,n){var s={},o=E(e||_.identity);return k(t,function(e,r){var a=o.call(i,e,r,t);n(s,a,e)}),s};_.groupBy=function(t,e,i){return D(t,e,i,function(t,e,i){(_.has(t,e)?t[e]:t[e]=[]).push(i)})},_.countBy=function(t,e,i){return D(t,e,i,function(t,e){_.has(t,e)||(t[e]=0),t[e]++})},_.sortedIndex=function(t,e,i,n){i=null==i?_.identity:E(i);for(var s=i.call(n,e),o=0,r=t.length;r>o;){var a=o+r>>>1;s>i.call(n,t[a])?o=a+1:r=a}return o},_.toArray=function(t){return t?_.isArray(t)?a.call(t):t.length===+t.length?_.map(t,_.identity):_.values(t):[]},_.size=function(t){return null==t?0:t.length===+t.length?t.length:_.keys(t).length},_.first=_.head=_.take=function(t,e,i){return null==t?void 0:null==e||i?t[0]:a.call(t,0,e)},_.initial=function(t,e,i){return a.call(t,0,t.length-(null==e||i?1:e))},_.last=function(t,e,i){return null==t?void 0:null==e||i?t[t.length-1]:a.call(t,Math.max(t.length-e,0))},_.rest=_.tail=_.drop=function(t,e,i){return a.call(t,null==e||i?1:e)},_.compact=function(t){return _.filter(t,_.identity)};var A=function(t,e,i){return k(t,function(t){_.isArray(t)?e?r.apply(i,t):A(t,e,i):i.push(t)}),i};_.flatten=function(t,e){return A(t,e,[])},_.without=function(t){return _.difference(t,a.call(arguments,1))},_.uniq=_.unique=function(t,e,i,n){_.isFunction(e)&&(n=i,i=e,e=!1);var s=i?_.map(t,i,n):t,o=[],r=[];return k(s,function(i,n){(e?n&&r[r.length-1]===i:_.contains(r,i))||(r.push(i),o.push(t[n]))}),o},_.union=function(){return _.uniq(l.apply(n,arguments))},_.intersection=function(t){var e=a.call(arguments,1);return _.filter(_.uniq(t),function(t){return _.every(e,function(e){return _.indexOf(e,t)>=0})})},_.difference=function(t){var e=l.apply(n,a.call(arguments,1));return _.filter(t,function(t){return!_.contains(e,t)})},_.zip=function(){for(var t=a.call(arguments),e=_.max(_.pluck(t,"length")),i=Array(e),n=0;e>n;n++)i[n]=_.pluck(t,""+n);return i},_.object=function(t,e){if(null==t)return{};for(var i={},n=0,s=t.length;s>n;n++)e?i[t[n]]=e[n]:i[t[n][0]]=t[n][1];return i},_.indexOf=function(t,e,i){if(null==t)return-1;var n=0,s=t.length;if(i){if("number"!=typeof i)return n=_.sortedIndex(t,e),t[n]===e?n:-1;n=0>i?Math.max(0,s+i):i}if(y&&t.indexOf===y)return t.indexOf(e,i);for(;s>n;n++)if(t[n]===e)return n;return-1},_.lastIndexOf=function(t,e,i){if(null==t)return-1;var n=null!=i;if(b&&t.lastIndexOf===b)return n?t.lastIndexOf(e,i):t.lastIndexOf(e);for(var s=n?i:t.length;s--;)if(t[s]===e)return s;return-1},_.range=function(t,e,i){1>=arguments.length&&(e=t||0,t=0),i=arguments[2]||1;for(var n=Math.max(Math.ceil((e-t)/i),0),s=0,o=Array(n);n>s;)o[s++]=t,t+=i;return o};var P=function(){};_.bind=function(t,e){var i,n;if(t.bind===C&&C)return C.apply(t,a.call(arguments,1));if(!_.isFunction(t))throw new TypeError;return i=a.call(arguments,2),n=function(){if(!(this instanceof n))return t.apply(e,i.concat(a.call(arguments)));P.prototype=t.prototype;var s=new P;P.prototype=null;var o=t.apply(s,i.concat(a.call(arguments)));return Object(o)===o?o:s}},_.bindAll=function(t){var e=a.call(arguments,1);return 0==e.length&&(e=_.functions(t)),k(e,function(e){t[e]=_.bind(t[e],t)}),t},_.memoize=function(t,e){var i={};return e||(e=_.identity),function(){var n=e.apply(this,arguments);return _.has(i,n)?i[n]:i[n]=t.apply(this,arguments)}},_.delay=function(t,e){var i=a.call(arguments,2);return setTimeout(function(){return t.apply(null,i)},e)},_.defer=function(t){return _.delay.apply(_,[t,1].concat(a.call(arguments,1)))},_.throttle=function(t,e){var i,n,s,o,r=0,a=function(){r=new Date,s=null,o=t.apply(i,n)};return function(){var l=new Date,h=e-(l-r);return i=this,n=arguments,0>=h?(clearTimeout(s),s=null,r=l,o=t.apply(i,n)):s||(s=setTimeout(a,h)),o}},_.debounce=function(t,e,i){var n,s;return function(){var o=this,r=arguments,a=function(){n=null,i||(s=t.apply(o,r))},l=i&&!n;return clearTimeout(n),n=setTimeout(a,e),l&&(s=t.apply(o,r)),s}},_.once=function(t){var e,i=!1;return function(){return i?e:(i=!0,e=t.apply(this,arguments),t=null,e)}},_.wrap=function(t,e){return function(){var i=[t];return r.apply(i,arguments),e.apply(this,i)}},_.compose=function(){var t=arguments;return function(){for(var e=arguments,i=t.length-1;i>=0;i--)e=[t[i].apply(this,e)];return e[0]}},_.after=function(t,e){return 0>=t?e():function(){return 1>--t?e.apply(this,arguments):void 0}},_.keys=x||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var i in t)_.has(t,i)&&(e[e.length]=i);return e},_.values=function(t){var e=[];for(var i in t)_.has(t,i)&&e.push(t[i]);return e},_.pairs=function(t){var e=[];for(var i in t)_.has(t,i)&&e.push([i,t[i]]);return e},_.invert=function(t){var e={};for(var i in t)_.has(t,i)&&(e[t[i]]=i);return e},_.functions=_.methods=function(t){var e=[];for(var i in t)_.isFunction(t[i])&&e.push(i);return e.sort()},_.extend=function(t){return k(a.call(arguments,1),function(e){if(e)for(var i in e)t[i]=e[i]}),t},_.pick=function(t){var e={},i=l.apply(n,a.call(arguments,1));return k(i,function(i){i in t&&(e[i]=t[i])}),e},_.omit=function(t){var e={},i=l.apply(n,a.call(arguments,1));for(var s in t)_.contains(i,s)||(e[s]=t[s]);return e},_.defaults=function(t){return k(a.call(arguments,1),function(e){if(e)for(var i in e)null==t[i]&&(t[i]=e[i])}),t},_.clone=function(t){return _.isObject(t)?_.isArray(t)?t.slice():_.extend({},t):t},_.tap=function(t,e){return e(t),t};var M=function(t,e,i,n){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof _&&(t=t._wrapped),e instanceof _&&(e=e._wrapped);var s=h.call(t);if(s!=h.call(e))return!1;switch(s){case"[object String]":return t==e+"";case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=i.length;o--;)if(i[o]==t)return n[o]==e;i.push(t),n.push(e);var r=0,a=!0;if("[object Array]"==s){if(r=t.length,a=r==e.length)for(;r--&&(a=M(t[r],e[r],i,n)););}else{var l=t.constructor,c=e.constructor;if(l!==c&&!(_.isFunction(l)&&l instanceof l&&_.isFunction(c)&&c instanceof c))return!1;for(var u in t)if(_.has(t,u)&&(r++,!(a=_.has(e,u)&&M(t[u],e[u],i,n))))break;if(a){for(u in e)if(_.has(e,u)&&!r--)break;a=!r}}return i.pop(),n.pop(),a};_.isEqual=function(t,e){return M(t,e,[],[])},_.isEmpty=function(t){if(null==t)return!0;if(_.isArray(t)||_.isString(t))return 0===t.length;for(var e in t)if(_.has(t,e))return!1;return!0},_.isElement=function(t){return!(!t||1!==t.nodeType)},_.isArray=w||function(t){return"[object Array]"==h.call(t)},_.isObject=function(t){return t===Object(t)},k(["Arguments","Function","String","Number","Date","RegExp"],function(t){_["is"+t]=function(e){return h.call(e)=="[object "+t+"]"}}),_.isArguments(arguments)||(_.isArguments=function(t){return!(!t||!_.has(t,"callee"))}),_.isFunction=function(t){return"function"==typeof t},_.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},_.isNaN=function(t){return _.isNumber(t)&&t!=+t},_.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==h.call(t)},_.isNull=function(t){return null===t},_.isUndefined=function(t){return void 0===t},_.has=function(t,e){return c.call(t,e)},_.noConflict=function(){return t._=e,this},_.identity=function(t){return t},_.times=function(t,e,i){for(var n=Array(t),s=0;t>s;s++)n[s]=e.call(i,s);return n},_.random=function(t,e){return null==e&&(e=t,t=0),t+(0|Math.random()*(e-t+1))};var F={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};F.unescape=_.invert(F.escape);var N={escape:RegExp("["+_.keys(F.escape).join("")+"]","g"),unescape:RegExp("("+_.keys(F.unescape).join("|")+")","g")};_.each(["escape","unescape"],function(t){_[t]=function(e){return null==e?"":(""+e).replace(N[t],function(e){return F[t][e]})}}),_.result=function(t,e){if(null==t)return null;var i=t[e];return _.isFunction(i)?i.call(t):i},_.mixin=function(t){k(_.functions(t),function(e){var i=_[e]=t[e];_.prototype[e]=function(){var t=[this._wrapped];return r.apply(t,arguments),O.call(this,i.apply(_,t))}})};var z=0;_.uniqueId=function(t){var e=""+ ++z;return t?t+e:e},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},$=/\\|'|\r|\n|\t|\u2028|\u2029/g;_.template=function(t,e,i){i=_.defaults({},i,_.templateSettings);var n=RegExp([(i.escape||I).source,(i.interpolate||I).source,(i.evaluate||I).source].join("|")+"|$","g"),s=0,o="__p+='";t.replace(n,function(e,i,n,r,a){return o+=t.slice(s,a).replace($,function(t){return"\\"+L[t]}),i&&(o+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),n&&(o+="'+\n((__t=("+n+"))==null?'':__t)+\n'"),r&&(o+="';\n"+r+"\n__p+='"),s=a+e.length,e}),o+="';\n",i.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var r=Function(i.variable||"obj","_",o)}catch(a){throw a.source=o,a}if(e)return r(e,_);var l=function(t){return r.call(this,t,_)};return l.source="function("+(i.variable||"obj")+"){\n"+o+"}",l},_.chain=function(t){return _(t).chain()};var O=function(t){return this._chain?_(t).chain():t};_.mixin(_),k(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=n[t];_.prototype[t]=function(){var i=this._wrapped;return e.apply(i,arguments),"shift"!=t&&"splice"!=t||0!==i.length||delete i[0],O.call(this,i)}}),k(["concat","join","slice"],function(t){var e=n[t];_.prototype[t]=function(){return O.call(this,e.apply(this._wrapped,arguments))}}),_.extend(_.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this),h={getInsertionPoint:t,colorClass:e};var c=.25;l.ordinal=function(t,e,n){var s=i(t,e);return d3.scale.ordinal().domain(s).rangeRoundBands(n,c)},l.linear=function(t,e,i,n){return d3.scale.linear().domain(n).nice().rangeRound(i)},l.exponential=function(t,e,i,n){return d3.scale.pow().exponent(.65).domain(n).nice().rangeRound(i)},l.time=function(t,e,i,n){return d3.time.scale().domain(_.map(n,function(t){return new Date(t)})).range(i)},l.xy=function(t,e,i,n){var o=t._options,a=s(o,e,i,n),l={},h=[o.axisPaddingLeft,t._width],c=[t._height,o.axisPaddingTop];return _.each([i,n],function(t,i){var n=0===i?"x":"y",s=0===i?h:c,o=r.getScale(t);l[n]=o(e,n,s,a[n])}),l},function(){function t(t,e,i){t.xScale2=d3.scale.ordinal().domain(d3.range(0,i.length)).rangeRoundBands([0,t.xScale.rangeBand()],.08)}function e(t,e,i,n,s){var a,c,u=t.yZero;a=t._g.selectAll(r+i).data(n,function(t){return t.className}),a.enter().insert("g",l).attr("data-index",o).style("opacity",0).attr("class",function(t,e){var n=_.uniq((i+t.className).split(".")).join(" ");return n+" bar "+h.colorClass(this,e)}).attr("transform",function(e,i){return"translate("+t.xScale2(i)+",0)"}),c=a.selectAll("rect").data(function(t){return t.data},function(t){return t.x}),c.enter().append("rect").attr("width",0).attr("rx",3).attr("ry",3).attr("x",function(e){return t.xScale(e.x)+t.xScale2.rangeBand()/2}).attr("height",function(e){return Math.abs(u-t.yScale(e.y))}).attr("y",function(e){return e.y<0?u:t.yScale(e.y)}).on("mouseover",s.mouseover).on("mouseout",s.mouseout).on("click",s.click),e.barGroups=a,e.bars=c}function i(t,e,i){var n=t.yZero;e.barGroups.attr("class",function(t,e){return h.colorClass(this,e)}).transition().duration(i).style("opacity",1).attr("transform",function(e,i){return"translate("+t.xScale2(i)+",0)"}),e.bars.transition().duration(i).attr("width",t.xScale2.rangeBand()).attr("x",function(e){return t.xScale(e.x)}).attr("height",function(e){return Math.abs(n-t.yScale(e.y))}).attr("y",function(e){return e.y<0?n:t.yScale(e.y)})}function n(t,e,i){e.bars.exit().transition().duration(i).attr("width",0).remove(),e.barGroups.exit().transition().duration(i).style("opacity",0).remove()}function s(t,e,i){var n=t.xScale2?t.xScale2.rangeBand()/2:0;delete t.xScale2,e.bars.transition().duration(i).attr("width",0).attr("x",function(e){return t.xScale(e.x)+n})}var o=2,r="g.bar",l=h.getInsertionPoint(o);a.bar={postUpdateScale:t,enter:e,update:i,exit:n,destroy:s}}(),function(){function t(t,e,i,n){function a(t){return[t.data]}var l,c,u,d=t._options.interpolation,p=function(e){return t.xScale2||t.xScale.rangeBand?t.xScale(e.x)+t.xScale.rangeBand()/2:t.xScale(e.x)},f=function(e){return t.yScale(e.y)},m=d3.svg.line().x(p).interpolate(d),g=d3.svg.area().x(p).y1(t.yZero).interpolate(d);l=t._g.selectAll(o+i).data(n,function(t){return t.className}),l.enter().insert("g",r).attr("data-index",s).attr("class",function(t,e){var n=_.uniq((i+t.className).split(".")).join(" ");return n+" line "+h.colorClass(this,e)}),c=l.selectAll("path.fill").data(a),c.enter().append("path").attr("class","fill").style("opacity",0).attr("d",g.y0(f)),u=l.selectAll("path.line").data(a),u.enter().append("path").attr("class","line").style("opacity",0).attr("d",m.y(f)),e.lineContainers=l,e.lineFills=c,e.linePaths=u,e.lineX=p,e.lineY=f,e.lineA=g,e.line=m}function e(t,e,i){e.lineContainers.attr("class",function(t,e){return h.colorClass(this,e)}),e.lineFills.transition().duration(i).style("opacity",1).attr("d",e.lineA.y0(e.lineY)),e.linePaths.transition().duration(i).style("opacity",1).attr("d",e.line.y(e.lineY))}function i(t,e){e.linePaths.exit().style("opacity",0).remove(),e.lineFills.exit().style("opacity",0).remove(),e.lineContainers.exit().remove()}function n(t,e,i){e.linePaths.transition().duration(i).style("opacity",0),e.lineFills.transition().duration(i).style("opacity",0)}var s=3,o="g.line",r=h.getInsertionPoint(s);a.line={enter:t,update:e,exit:i,destroy:n}}(),function(){function t(t,e,i,n,o){var r;s.enter(t,e,i,n,o),r=e.lineContainers.selectAll("circle").data(function(t){return t.data},function(t){return t.x}),r.enter().append("circle").style("opacity",0).attr("cx",e.lineX).attr("cy",e.lineY).attr("r",5).on("mouseover",o.mouseover).on("mouseout",o.mouseout).on("click",o.click),e.lineCircles=r}function e(t,e,i){s.update.apply(null,_.toArray(arguments)),e.lineCircles.transition().duration(i).style("opacity",1).attr("cx",e.lineX).attr("cy",e.lineY)}function i(t,e){e.lineCircles.exit().remove(),s.exit.apply(null,_.toArray(arguments))}function n(t,e,i){s.destroy.apply(null,_.toArray(arguments)),e.lineCircles&&e.lineCircles.transition().duration(i).style("opacity",0)}var s=a.line;a["line-dotted"]={enter:t,update:e,exit:i,destroy:n}}(),function(){function t(t,e,i,n,s){o.enter(t,e,i,n,s)}function e(t){function e(t,e){return t+e.y}var i=_.map(t,function(t){var i=t.data.length,n=_.clone(t.data);for(t=_.clone(t);i;)i-=1,n[i]=_.clone(t.data[i]),n[i].y0=t.data[i].y,n[i].y=_.reduce(_.first(t.data,i),e,t.data[i].y);return _.extend(t,{data:n})});return i}function i(t){t.hasOwnProperty("cumulativeOMainData")&&(t._mainData=t.cumulativeOMainData,delete t.cumulativeOMainData,t._compData=t.cumulativeOCompData,delete t.cumulativeOCompData)}function n(t){i(t),t.cumulativeOMainData=t._mainData,t._mainData=e(t._mainData),t.cumulativeOCompData=t._compData,t._compData=e(t._compData)}function s(t){i(t),o.destroy.apply(null,_.toArray(arguments))}var o=a["line-dotted"];a.cumulative={preUpdateScale:n,enter:t,update:o.update,exit:o.exit,destroy:s}}();var u=[[]],d={mouseover:function(){},mouseout:function(){},click:function(){},axisPaddingTop:0,axisPaddingRight:0,axisPaddingBottom:5,axisPaddingLeft:20,paddingTop:0,paddingRight:0,paddingBottom:20,paddingLeft:60,tickHintX:10,tickFormatX:function(t){return t},tickHintY:10,tickFormatY:function(t){return t},xMin:null,xMax:null,yMin:null,yMax:null,dataFormatX:function(t){return t},dataFormatY:function(t){return t},unsupported:function(t){d3.select(t).text("SVG is not supported on your browser")},empty:function(){},notempty:function(){},timing:750,interpolation:"monotone",sortX:function(t,e){return t.x||e.x?t.x<e.x?-1:1:0}};return r.setVis=function(t,e){if(a.hasOwnProperty(t))throw'Cannot override vis type "'+t+'".';a[t]=e},r.getVis=function(t){if(!a.hasOwnProperty(t))throw'Vis type "'+t+'" does not exist.';return _.clone(a[t])},r.setScale=function(t,e){if(l.hasOwnProperty(t))throw'Scale type "'+t+'" already exists.';l[t]=e},r.getScale=function(t){if(!l.hasOwnProperty(t))throw'Scale type "'+t+'" does not exist.';return l[t]},r.visutils=h,_.defaults(r.prototype,{setType:function(t,e){var i=this;if(!i._type||t!==i._type){if(!a.hasOwnProperty(t))throw'Vis type "'+t+'" is not defined.';i._type&&i._destroy(i._vis,i._mainStorage),i._type=t,i._vis=a[t],e||i._draw()}},setData:function(t){function e(t){var e=_.map(_.clone(t.data),function(t){var e=_.clone(t);return t.hasOwnProperty("x")&&(e.x=n.dataFormatX(t.x)),t.hasOwnProperty("y")&&(e.y=n.dataFormatY(t.y)),e}).sort(n.sortX);return _.extend(_.clone(t),{data:e})}var i=this,n=i._options,s=_.clone(t);if(!t.hasOwnProperty("main"))throw'No "main" key found in given chart data.';switch(t.type){case"bar":t.xScale="ordinal";break;case void 0:t.type=i._type}n.xMin=isNaN(parseInt(t.xMin,10))?n.xMin:t.xMin,n.xMax=isNaN(parseInt(t.xMax,10))?n.xMax:t.xMax,n.yMin=isNaN(parseInt(t.yMin,10))?n.yMin:t.yMin,n.yMax=isNaN(parseInt(t.yMax,10))?n.yMax:t.yMax,i._vis&&i._destroy(i._vis,i._mainStorage),i.setType(t.type,!0),s.main=_.map(s.main,e),i._mainData=s.main,i._xScaleType=s.xScale,i._yScaleType=s.yScale,s.hasOwnProperty("comp")?(s.comp=_.map(s.comp,e),i._compData=s.comp):i._compData=[],i._draw()},setScale:function(t,e){var i=this;switch(t){case"x":i._xScaleType=e;break;case"y":i._yScaleType=e;break;default:throw'Cannot change scale of unknown axis "'+t+'".'}i._draw()},_drawSvg:function(){var t,e,i,n=this,s=n._container,o=n._options,r=parseInt(s.style("width").replace("px",""),10),a=parseInt(s.style("height").replace("px",""),10);t=s.selectAll("svg").data(u),t.enter().append("svg").attr("height",a).attr("width",r).attr("class","xchart"),t.transition().attr("width",r).attr("height",a),e=t.selectAll("g").data(u),e.enter().append("g").attr("transform","translate("+o.paddingLeft+","+o.paddingTop+")"),i=e.selectAll("g.scale").data(u),i.enter().append("g").attr("class","scale"),n._svg=t,n._g=e,n._gScale=i,n._height=a-o.paddingTop-o.paddingBottom-o.axisPaddingTop-o.axisPaddingBottom,n._width=r-o.paddingLeft-o.paddingRight-o.axisPaddingLeft-o.axisPaddingRight},_resize:function(){var t=this;t._drawSvg(),t._draw()},_drawAxes:function(){if(!this._noData){{var t,e,i,n,s,o,r,a=this,l=a._options,h=a._gScale.transition().duration(l.timing),c=l.tickHintX,d=l.tickHintY,p=a._height+l.axisPaddingTop+l.axisPaddingBottom;d3.svg.line().x(function(t){return t})}n=d3.svg.axis().scale(a.xScale).ticks(c).tickSize(-a._height).tickFormat(l.tickFormatX).orient("bottom"),i=a._gScale.selectAll("g.axisX").data(u),i.enter().append("g").attr("class","axis axisX").attr("transform","translate(0,"+p+")"),i.call(n),r=a._gScale.selectAll(".axisX g")[0],r.length>a._width/80&&(r.sort(function(t,e){var i=/translate\(([^,)]+)/;return t=t.getAttribute("transform").match(i),e=e.getAttribute("transform").match(i),parseFloat(t[1],10)-parseFloat(e[1],10)}),d3.selectAll(r).filter(function(t,e){return e%(Math.ceil(r.length/c)+1)}).remove()),o=d3.svg.axis().scale(a.yScale).ticks(d).tickSize(-a._width-l.axisPaddingRight-l.axisPaddingLeft).tickFormat(l.tickFormatY).orient("left"),s=a._gScale.selectAll("g.axisY").data(u),s.enter().append("g").attr("class","axis axisY").attr("transform","translate(0,0)"),h.selectAll("g.axisY").call(o),t=a._gScale.selectAll("g.axisZero").data([[]]),t.enter().append("g").attr("class","axisZero"),e=t.selectAll("line").data([[]]),e.enter().append("line").attr("x1",0).attr("x2",a._width+l.axisPaddingLeft+l.axisPaddingRight).attr("y1",a.yZero).attr("y2",a.yZero),e.transition().duration(l.timing).attr("y1",a.yZero).attr("y2",a.yZero)}},_updateScale:function(){var t,e,i=this,n=function(){return _.union(i._mainData,i._compData)},s=n(),o=i._vis;delete i.xScale,delete i.yScale,delete i.yZero,o.hasOwnProperty("preUpdateScale")&&o.preUpdateScale(i,s,i._mainData,i._compData),s=n(),t=l.xy(i,s,i._xScaleType,i._yScaleType),i.xScale=t.x,i.yScale=t.y,e=i.yScale.domain()[0],i.yZero=i.yScale(e>0?e:0),o.hasOwnProperty("postUpdateScale")&&o.postUpdateScale(i,s,i._mainData,i._compData)},_enter:function(t,e,i,n){var s=this,o={click:s._options.click,mouseover:s._options.mouseover,mouseout:s._options.mouseout};s._checkVisMethod(t,"enter"),t.enter(s,e,n,i,o)},_update:function(t,e){var i=this;i._checkVisMethod(t,"update"),t.update(i,e,i._options.timing)},_exit:function(t,e){var i=this;i._checkVisMethod(t,"exit"),t.exit(i,e,i._options.timing)},_destroy:function(t,e){var i=this;i._checkVisMethod(t,"destroy");try{t.destroy(i,e,i._options.timing)}catch(n){}},_draw:function(){var t,e,i=this,n=i._options;i._noData=0===_.flatten(_.pluck(i._mainData,"data").concat(_.pluck(i._compData,"data"))).length,i._updateScale(),i._drawAxes(),i._enter(i._vis,i._mainStorage,i._mainData,".main"),i._exit(i._vis,i._mainStorage),i._update(i._vis,i._mainStorage),t=_.chain(i._compData).groupBy(function(t){return t.type}),e=t.keys(),_.each(i._compStorage,function(t,n){if(-1===e.indexOf(n).value()){var s=a[n];i._enter(s,t,[],".comp."+n.replace(/\W+/g,"")),i._exit(s,t)}}),t.each(function(t,e){var n,s=a[e];i._compStorage.hasOwnProperty(e)||(i._compStorage[e]={}),n=i._compStorage[e],i._enter(s,n,t,".comp."+e.replace(/\W+/g,"")),i._exit(s,n),i._update(s,n)}),i._noData?n.empty(i,i._selector,i._mainData):n.notempty(i,i._selector)},_checkVisMethod:function(t,e){var i=this;if(!t[e])throw'Required method "'+e+'" not found on vis type "'+i._type+'".'}}),"function"==typeof define&&define.amd&&"object"==typeof define.amd?void define(function(){return r}):void(window.xChart=r)}();