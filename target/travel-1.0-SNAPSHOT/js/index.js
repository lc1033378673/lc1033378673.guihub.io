!function(a){var e={};function o(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return a[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=a,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(a,e,function(t){return n[t]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="//zuhaowan.zuhaowan.com/static/www3.0/dubhe/",o(o.s="fTGA")}({EJge:function(t,n,a){"use strict";var e={init:function(t){this.source=t,this.asTask(),this.timer=null,this.layerId=null,this.home_pop=null},addHtml:function(){$("body").append('<div class="unlockHbBox"><div class="unlockHbBoxBtn">立即领取</div>    <div class="unlockHbBoxClose tipsClose"></div></div><div class="HbtaskBox">    <div class="HbtaskBoxClose tipsClose"></div>    <div class="HbtaskMoney"><span>5</span>元</div>    <div class="HbtaskTime">00:00:00</div></div>    <div class="layui-m-layerchild  layui-m-anim-scale getTask">        <div class="getTaskBg">            <div class="taskBox"><span class="taskBoxDay"></span>天内再下<span class="unlockHb_order">1</span>单，得<span class="taskBoxMoney">5</span>元红包礼包</div>            <div class="taskMoney"><span>5</span>元</div>        </div>        <div class="getTaskBtn"></div>    </div>    <div class="Unlock">        <div class="UnlockBg">            <div class="countDownTips">倒计时</div>            <div class="countDownBox">                <span>0</span>                <span>0</span>                <em>:</em>                <span>0</span>                <span>0</span>                <em>:</em>                <span>0</span>                <span>0</span>            </div>            <div class="taskBox"><span class="taskBoxDay"></span>天内再下<span class="unlockHb_order">1</span>单，得<span class="taskBoxMoney">5</span>元红包礼包</div>\t\t \t <div class="taskGetHbList"></div>\t\t \t <div class="taskGetHbTip">注：奖励红包在任务达成后由系统自动发放</div>        </div>    </div>'),this.collectTask(),this.closeTips();var t=this;$(".unlockHbBox").click(function(){$(this).hide(),t.getTaskBox()}),$(".HbtaskBox").click(function(){$(this).hide(),t.getHbtaskBox()})},closeTips:function(){$(".tipsClose").click(function(t){t.stopPropagation(),$(this).parent().hasClass("unlockHbBox")?$(".unlockHbBox").hide():$(".HbtaskBox").hide()})},GetQueryString:function(t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(n);return null!=a?unescape(a[2]):null},asTask:function(){var n=this,t=3;1==n.source&&(t=this.GetQueryString("unlockTask")?this.GetQueryString("unlockTask"):3),this.post("/huodong/UnlockTask/asTask",{system:t},function(t){1==t.status&&1==t.data.switch&&(1==n.source&&(n.home_pop=t.data.home_pop),n.addHtml(),n.taskInfo())})},taskInfo:function(){var a=this;this.post("/huodong/UnlockTask/taskInfo",{},function(t){var n;1==t.status&&1==t.data.code&&(0==t.data.state?($(".taskBoxDay").html(t.data.day),$(".taskBoxMoney").html(t.data.total_price),$(".taskMoney span").html(t.data.total_price),$(".unlockHb_order").html(t.data.order_num),1==a.source&&1!=a.home_pop||3==a.source?$(".unlockHbBox").show():a.getTaskBox()):"1"==t.data.state&&($(".HbtaskMoney span").html(t.data.total_price),$(".taskBoxDay").html(t.data.day),$(".taskBoxMoney").html(t.data.total_price),$(".unlockHb_order").html(t.data.order_num),n="",t.data.hb_list.forEach(function(t){n+='<div class="taskGetHbItem"><span>'+t.money+"</span>元",1<Number(t.num)&&(n+='<div class="taskGetHbItemNum">x'+t.num+"</div>"),n+="</div>"}),$(".taskGetHbList").html(n),$(".HbtaskBox").show(),a.interval(t.data.time)))})},getTaskBox:function(){this.layerId=layer.open({type:1,shade:.6,skin:"getTaskShade",resize:!1,area:["270px","440px"],title:!1,content:$(".getTask"),cancel:function(){console.log(111),$(".unlockHbBox").show()}})},getHbtaskBox:function(){this.layerId=layer.open({type:1,shade:.6,skin:"UnlockBox",resize:!1,area:["270px","330px"],title:!1,content:$(".Unlock"),cancel:function(){$(".HbtaskBox").show()}})},interval:function(t){var n,a,e,o,i;0!=t?(t--,n=(9<Math.floor(t/60/60)?Math.floor(t/60/60):"0"+Math.floor(t/60/60)).toString(),a=(9<Math.floor(t/60%60)?Math.floor(t/60%60):"0"+Math.floor(t/60%60)).toString(),e=(9<Math.floor(t%60)?Math.floor(t%60):"0"+Math.floor(t%60)).toString(),o="<span>"+n[0]+"</span><span>"+n[1]+"</span><em>:</em><span>"+a[0]+"</span><span>"+a[1]+"</span><em>:</em><span>"+e[0]+"</span><span>"+e[1]+"</span>",$(".HbtaskTime").html(n+":"+a+":"+e),$(".countDownBox").html(o),(i=this).timer=setTimeout(function(){i.interval(t)},1e3)):location.href=location.href},collectTask:function(){var a=this;$(".getTaskBtn").click(function(){a.post("/huodong/UnlockTask/collectTask",{},function(t){var n;1==t.status?(layer.close(a.layerId),$(".HbtaskMoney span").html(t.data.total_price),$(".taskBoxDay").html(t.data.day),$(".taskBoxMoney").html(t.data.total_price),$(".unlockHb_order").html(t.data.order_num),n="",t.data.hb_list.forEach(function(t){n+='<div class="taskGetHbItem"><span>'+t.money+"</span>元",1<Number(t.num)&&(n+='<div class="taskGetHbItemNum">x'+t.num+"</div>"),n+="</div>"}),$(".taskGetHbList").html(n),a.getHbtaskBox(),a.interval(t.data.time)):layer.msg(t.message,{time:2e3})})})},post:function(t,n,a){$.ajax({url:t,type:"POST",data:n,success:function(t){a&&a(t)},error:function(){}})}};n.a=e},fTGA:function(t,n,a){"use strict";a.r(n);function C(t){var n=e(t);if(0<n.length&&+localStorage.getItem(n[0])<H())return 1}function T(t){for(var n=e(t),a=0;a<n.length;a++)localStorage.removeItem(n[a])}function e(t){for(var n=[],a=0;a<localStorage.length;a++){var e=localStorage.key(a);new RegExp("^"+t+"\\d").test(e)&&n.push(e)}return n}function H(){var t=new Date,n=t.getFullYear(),a=+t.getMonth()+1,e=t.getDate();return new Date(n+"-"+a+"-"+e).getTime()}var o=a("EJge"),i={getLoginNeckOrTop:function(){var a=this;zhw.get(zhw.api.user.loginNeckOrTop).done(function(t){1==t.status&&($(".zhw-header .user-box").html(t.loginTop),$(".zhw-news .login_neck_wrap").html(t.loginNeck),$("#consoleGame")[1==t.otherInfo.console_game_switch?"show":"hide"]());var n=t.otherInfo?t.otherInfo.real_name_flag:0;a.initAds(n)})},initJifen:function(){var n=0,a=$(".sign-in-tip");zhw.get(zhw.api.userClub.isSign).done(function(t){a.fadeIn(300),1==t.login&&(n=1,t.vip_id,1==t.sign&&a.addClass("active"))}),a.find(".sign-in-tip-btn").on("click",function(){return 0==n?(layer.msg("请先登录后签到",{time:2e3},function(){window.location.href="/login.html"}),void _hmt.push(["_trackEvent","首页","右侧签到","登录"])):void zhw.post(zhw.api.userClub.signIn).done(function(t){1==t.status?($(".sign-dailog").removeClass("active"),a.addClass("active"),layer.open({type:1,time:2e3,title:!1,closeBtn:0,resize:!1,content:'\n              <div class="sign-dialog-seccess">\n                <div class="sds-img">\n              </div>\n              <div class="sds-result">\n                恭喜您签到成功\n              </div>\n              <div class="sds-points">\n                获得：'.concat(t.data,"积分奖励</div>\n              </div>\n              ")})):layer.msg(t.message)})})},initEffects:function(){var t=$(".zhw-banner"),e=t.find(".banner-flex-msg"),o=$(".zhw-main-bg"),n=new Swiper(t.find(".zhw-swiper-container")[0],{width:720,height:380,autoplay:3e3,loop:!0,autoplayDisableOnInteraction:!1,nextButton:".zhw-swiper-next",prevButton:".zhw-swiper-prev",lazyLoading:!0,lazyLoadingInPrevNext:!0,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!0,onSlideChangeStart:function(t){var n=t.slides[t.activeIndex],a=$(n).attr("data-url");e.removeClass("banner-flex-msg-on").eq(t.realIndex).addClass("banner-flex-msg-on"),a&&o.css("background-image","url("+a+")"),window._da}});e.on("click",function(){n.slideTo($(this).index()+1)}),t.on({mouseover:n.stopAutoplay,mouseleave:n.startAutoplay}),$(".home-new-change").on({mouseenter:function(){var t=$(this);t.addClass("home-new-change-on").siblings().removeClass("home-new-change-on");var n=t.attr("data-url");$(".home-news-more").find("a").attr("href",n),$(".home-new-list").hide().eq(t.index()).show()}});var a=$(".zhw-together"),i=a.find(".play-list"),s=a.find(".home-to-switch"),d=a.find(".home-to-more"),r=[];i.find(".play-list-li").on("mouseenter",function(t){var n=$(this),a=n.index();n.addClass("active").siblings().removeClass("active"),$.each(r,function(t,n){t!==a&&n&&n.stopAutoplay()}),r[a]?(r[a].stopAutoplay(),r[a].startAutoplay()):r[a]=n.find(".swiper-container-see").swiper({autoplay:3e3,simulateTouch:!1,loop:!0,direction:"vertical"})}),s.on("click",function(){var t=$(this),n=t.index(),a="home-to-switch-on";t.hasClass(a)||(t.addClass(a).siblings().removeClass(a),"1"==t.attr("data-id")?(d.hide(),i.eq(1).find(".play-list-li").each(function(){var t,n,a,e;$(this).attr("data-inited")||(n=(t=$(this)).attr("data-src"),e=(a=t.find("img")).attr("data-src"),t.css({"background-image":"url(".concat(n,")")}).attr("data-inited",1),a.attr("src",e))})):d.show(),$.each(r,function(t,n){n&&n.destroy()}),r=[],i.hide().eq(n).show(),i.eq(n).find(".play-list-li").filter(".active").trigger("mouseenter"))}),$("#free-play-ellipsis .details-ellipsis").dotdotdot();var l=$(window);l.on("scroll",lodash.throttle(function(){h(),g()},100));var c=.8*l.height(),u=$(".zhw-searchbar");function h(){l.scrollTop()>=c?u.addClass("top-fixed"):u.removeClass("top-fixed")}u.find(".search-kf").on("click",function(){zhw.im.openImChatDefault()});var p=!1,f=$(".zhw-activity .act-item-bg");var m=$(".zhw-activity"),v=m.offset().top;function g(){var t=l.height()+l.scrollTop();v-10<=t&&(m.addClass("part-show"),p||(p=!0,f.each(function(t,n){var a=$(this),e=a.attr("data-lazy");a.css({"background-image":"url(".concat(e,")")})}),f.removeAttr("data-lazy"))),t<=v-50&&m.removeClass("part-show")}$(".zhw-free .lazy");g(),h()},initAds:function(t){var n=$(".ad-lc-optimus"),a=n.attr("data-id");0<n.length&&(n.show(),adsShowCount(a),n.find(".close").on("click",function(){$.cookie("lft_ads_state",1,{path:"/"}),n.fadeOut(150)}));var e,o,i,s,d=$(".ad-rb-random");0<d.length&&(e=$('input[name="ads_userid"]').val(),o=(new Date).setHours(24,0,0,0)-1,i=0,null!=e&&(i=$.cookie(e)),s=$.cookie("ads_state"),(null!=e&&1!=i||null==e&&1!=s)&&(d.removeClass("hide").addClass("show"),adsShowCount(d.find("input[name='randAds']").val())),d.find(".close").on("click",function(){d.removeClass("show").addClass("hide"),e?$.cookie(e,1,{expires:o,path:"/"}):$.cookie("ads_state",1,{expires:o,path:"/"})}));var r=$(".ad-ff-popup");0<r.length&&(r.show(),r.find(".previn-mask-close").on("click",function(){r.hide()}),r.find(".previn-a-close").on("click",function(t){r.hide(),$(this).attr("href")||t.preventDefault()}));var l=$(".ad-ft-header");0<l.length&&l.find(".close").on("click",function(t){l.slideUp(),t.preventDefault()})},initAnalytics:function(){var t=$(".zhw-banner");window.getBannerId=function(){return t.find(".swiper-slide-active").attr("data-id")},$(function(){t.find(".zhw-swiper-prev").on("click",function(){dataShowCount(getBannerId())}),t.find(".zhw-swiper-next").on("click",function(){dataShowCount(getBannerId())})})},nonage:function(){var n=$(".nonage_modal"),t=n.find(".i_kone"),a=$(".open_nonage"),e=$("#userId").val(),o=localStorage.getItem("nonage_popup"+e);C("nonage_popup")&&T("nonage_popup"),o!=H()&&zhw.post("/AntiIndulgeYoung/checkUserAllowMessage",{}).done(function(t){1==t.status&&(n.show(),localStorage.setItem("nonage_popup"+e,H()),_hmt.push(["_trackEvent","官网","青少年模式","弹窗弹出"]))}),t.on("click",function(){n.hide(),_hmt.push(["_trackEvent","官网","青少年模式","弹窗-我知道了"])}),a.on("click",function(){_hmt.push(["_trackEvent","官网","青少年模式","弹窗-进入青少年"])})},antiAddiction:function(){var o=$(".antiAddiction_modal"),t=$(".antiAddiction_close"),i=o.find(".modal_con"),s=o.find(".user_name"),d=o.find(".order"),r=o.find(".order_time"),l=o.find(".order_hour"),c=l.find(".day_box"),u=l.find(".holiday_box"),h=o.find(".recharge"),p=o.find(".recharge_time"),f=o.find(".recharge_money"),m=f.find(".once_box"),v=f.find(".month_box"),g=o.find(".limit"),k=o.find(".limit_hour"),_=o.find(".limit_money"),y=o.find(".i_kone"),n=o.find(".no_prompt"),w=$(".my_antiAddiction"),a=$("#userId").val(),x=$.cookie("stamp"),e=localStorage.getItem("antiAddiction_popup"+a),b=localStorage.getItem("antiAddiction_popup_stamp");function B(){o.hide()}C("antiAddiction_popup")&&T("antiAddiction_popup"),e!=H()&&x!=b&&zhw.post("/AntiIndulgeAll/antiIndulgeMessage",{}).done(function(t){var n,a,e;1==t.status&&(n=t.data,a=n.orderData,e=n.rechargeData,1==n.isFirstMessage?(r.find("span").text("".concat(a.rent_time_day_begin,":00——").concat(a.rent_time_day_end,":00")),c.find("span").text(a.dingdan_hour_day),u.find("span").text(a.dingdan_hour_holiday),w.hide(),-1==a.rent_time_day_begin&&-1==a.dingdan_hour_day&&-1==a.dingdan_hour_holiday&&d.remove(),-1==a.rent_time_day_begin&&r.hide(),-1==a.dingdan_hour_day&&-1==a.dingdan_hour_holiday&&l.hide(),-1==a.dingdan_hour_day&&(c.hide(),u.find("i").hide()),-1==a.dingdan_hour_holiday&&u.hide(),p.find("span").text("".concat(e.start_time,":00——").concat(e.end_time,":00")),m.find("span").text(e.moneyDay),v.find("span").text(e.moneyMonth),-1==e.start_time&&-1==e.moneyDay&&-1==e.moneyMonth&&h.remove(),-1==e.start_time&&p.hide(),-1==e.moneyDay&&-1==e.moneyMonth&&f.hide(),-1==e.moneyDay&&m.hide(),-1==e.moneyMonth&&v.hide(),function(t,n){t.text("我知道了 ("+n+"s)");var a=setInterval(function(){0<n?(n--,t.addClass("active"),t.text("我知道了 ("+n+"s)")):(clearInterval(a),n=5,t.text("我知道了"),t.removeClass("active"))},1e3)}(y,5)):(k.find(".day").text(a.orderLessH),_.find(".month").text(e.moneyMonthLess),s.text(n.userName),i.addClass("last"),d.remove(),h.remove(),-1==a.orderLessH&&-1==e.moneyMonthLess&&g.hide(),-1==a.orderLessH&&k.hide(),-1==e.moneyMonthLess&&_.hide(),o.addClass("is_second"),w.show()),o.show(),localStorage.setItem("antiAddiction_popup_stamp",x),_hmt.push(["_trackEvent","官网","防沉迷提醒","弹窗弹出"]))}),t.on("click",function(){B()}),y.on("click",function(){$(this).hasClass("active")||(B(),_hmt.push(["_trackEvent","官网","防沉迷提醒","我知道了"]))}),w.on("click",function(){_hmt.push(["_trackEvent","官网","防沉迷提醒","我的防沉迷"])}),n.on("click",function(){var t=$(this);t.hasClass("active")?(t.removeClass("active"),localStorage.removeItem("antiAddiction_popup"+a)):(t.addClass("active"),localStorage.setItem("antiAddiction_popup"+a,H()),_hmt.push(["_trackEvent","官网","防沉迷提醒","今日不再提醒"]))})},init:function(){this.getLoginNeckOrTop(),this.initJifen(),this.initEffects(),this.initAnalytics(),this.nonage(),this.antiAddiction(),o.a.init(1)}};$(function(){i.init()})}});