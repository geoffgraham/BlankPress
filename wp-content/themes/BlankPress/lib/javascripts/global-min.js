// Uncomment to initialize Foundation JavaScript
// $(document).foundation();
// @codekit-append main-menu.js
// @codekit-append accordian.js
// @codekit-append jquery.fittext.js
// @codekit-append jquery.lettering.js
/* **********************************************
     Begin main-menu.js
********************************************** */$(document).ready(function(){$("body").addClass("js");var e=$("#menu"),t=$(".menu-link"),n=$("#wrap");t.click(function(){t.toggleClass("active");n.toggleClass("active");return!1})});(function(e){var t=e(".accordion > dd").hide();e(".accordion > dt > a").click(function(){t.slideUp();e(this).parent().next().is(":hidden")&&e(this).parent().next().slideDown();return!1})})(jQuery);(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize.fittext orientationchange.fittext",n)})}})(jQuery);(function(e){function t(t,n,r,i){var s=t.text().split(n),o="";if(s.length){e(s).each(function(e,t){o+='<span class="'+r+(e+1)+'">'+t+"</span>"+i});t.empty().append(o)}}var n={init:function(){return this.each(function(){t(e(this),"","char","")})},words:function(){return this.each(function(){t(e(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";t(e(this).children("br").replaceWith(n).end(),n,"line","")})}};e.fn.lettering=function(t){if(t&&n[t])return n[t].apply(this,[].slice.call(arguments,1));if(t==="letters"||!t)return n.init.apply(this,[].slice.call(arguments,0));e.error("Method "+t+" does not exist on jQuery.lettering");return this}})(jQuery);