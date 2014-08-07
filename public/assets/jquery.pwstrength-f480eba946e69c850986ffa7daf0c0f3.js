/**
 * jquery.pwstrength http://matoilic.github.com/jquery.pwstrength
 *
 * @version v0.1.1
 * @author Mato Ilic <info@matoilic.ch>
 * @copyright 2013 Mato Ilic
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
!function(t){function e(e){var i,n=t.pwstrength(t(this).val()),s=e.data;i=s.classes[n],s.indicator.removeClass(s.indicator.data("pwclass")),s.indicator.data("pwclass",i),s.indicator.addClass(i),s.indicator.find(s.label).html(s.texts[n])}t.pwstrength=function(t){var e,i,n,s,o=0,r=t.length;return o+=5>r?0:8>r?5:16>r?10:15,i=t.match(/[a-z]/g),i&&(o+=1),e=t.match(/[A-Z]/g),e&&(o+=5),e&&i&&(o+=2),n=t.match(/\d/g),n&&n.length>1&&(o+=5),s=t.match(/\W/g),s&&(o+=s.length>1?15:10),e&&i&&n&&s&&(o+=15),t.match(/\s/)&&(o+=10),15>o?0:20>o?1:35>o?2:50>o?3:4},t.fn.pwstrength=function(i){var i=t.extend({label:".label",classes:["pw-very-weak","pw-weak","pw-mediocre","pw-strong","pw-very-strong"],texts:["very weak","weak","mediocre","strong","very strong"]},i||{});return i.indicator=t("#"+this.data("indicator")),this.keyup(i,e)}}(jQuery);