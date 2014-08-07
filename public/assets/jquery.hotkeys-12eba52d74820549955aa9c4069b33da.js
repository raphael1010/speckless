/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/
!function(t){function e(e){if("string"==typeof e.data){var i=e.handler,n=e.data.toLowerCase().split(" "),s=["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color"];e.handler=function(e){if(this===e.target||!(/textarea|select/i.test(e.target.nodeName)||t.inArray(e.target.type,s)>-1)){var o="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],r=String.fromCharCode(e.which).toLowerCase(),a="",l={};e.altKey&&"alt"!==o&&(a+="alt+"),e.ctrlKey&&"ctrl"!==o&&(a+="ctrl+"),e.metaKey&&!e.ctrlKey&&"meta"!==o&&(a+="meta+"),e.shiftKey&&"shift"!==o&&(a+="shift+"),o?l[a+o]=!0:(l[a+r]=!0,l[a+t.hotkeys.shiftNums[r]]=!0,"shift+"===a&&(l[t.hotkeys.shiftNums[r]]=!0));for(var h=0,c=n.length;c>h;h++)if(l[n[h]])return i.apply(this,arguments)}}}}t.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}},t.each(["keydown","keyup","keypress"],function(){t.event.special[this]={add:e}})}(jQuery);