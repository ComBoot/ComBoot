$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});

$(function () {
    $('.list-group.checked-list-box .list-group-item').each(function () {
        
        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = ($widget.data('color') ? $widget.data('color') : "primary"),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };
            
        $widget.css('cursor', 'pointer')
        $widget.append($checkbox);

        // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });
          

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        // Initialization
        function init() {
            
            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }
            
            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span> ');
            }
        }
        init();
    });
});

$(document).ready(function() {
  $('.btn').tooltip({container: 'body'});
});

$(document).ready(function() {
	$("select").addClass("selectpicker");
	$(".selectpicker").attr({"data-width": "auto"});
	$(".selectpicker").selectpicker();
});

$(document).ready(function() {
	$(".top").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});
});

$(document).ready(function() {
    $(".top2").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});


(function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()})(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var o=["opacity",e,~~(100*t),i,n].join("-"),r=.01+100*(i/n),a=Math.max(1-(1-t)/e*(100-r),t),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return f[o]||(c.insertRule("@"+l+"keyframes "+o+"{"+"0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+a+"}"+"}",c.cssRules.length),f[o]=1),o}function n(t,e){var i,n,o=t.style;if(void 0!==o[e])return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;d.length>n;n++)if(i=d[n]+e,void 0!==o[i])return i}function o(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function r(t){for(var e=1;arguments.length>e;e++){var i=arguments[e];for(var n in i)void 0===t[n]&&(t[n]=i[n])}return t}function a(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function s(t){return this===void 0?new s(t):(this.opts=r(t||{},s.defaults,p),void 0)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}c.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,n){function r(){return o(i("group",{coordsize:u+" "+u,coordorigin:-l+" "+-l}),{width:u,height:u})}function a(t,a,s){e(f,e(o(r(),{rotation:360/n.lines*t+"deg",left:~~a}),e(o(i("roundrect",{arcsize:n.corners}),{width:l,height:n.width,left:n.radius,top:-n.width>>1,filter:s}),i("fill",{color:n.color,opacity:n.opacity}),i("stroke",{opacity:0}))))}var s,l=n.length+n.width,u=2*l,d=2*-(n.width+n.length)+"px",f=o(r(),{position:"absolute",top:d,left:d});if(n.shadow)for(s=1;n.lines>=s;s++)a(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;n.lines>=s;s++)a(s);return e(t,f)},s.prototype.opacity=function(t,e,i,n){var o=t.firstChild;n=n.shadow&&n.lines||0,o&&o.childNodes.length>e+n&&(o=o.childNodes[e+n],o=o&&o.firstChild,o=o&&o.firstChild,o&&(o.opacity=i))}}var u,d=["webkit","Moz","ms","O"],f={},c=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};s.defaults={},r(s.prototype,{spin:function(e){this.stop();var i,n,r=this,s=r.opts,l=r.el=o(t(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),d=s.radius+s.length+s.width;if(e&&(e.insertBefore(l,e.firstChild||null),n=a(e),i=a(l),o(l,{left:("auto"==s.left?n.x-i.x+(e.offsetWidth>>1):parseInt(s.left,10)+d)+"px",top:("auto"==s.top?n.y-i.y+(e.offsetHeight>>1):parseInt(s.top,10)+d)+"px"})),l.setAttribute("role","progressbar"),r.lines(l,r.opts),!u){var f,c=0,p=(s.lines-1)*(1-s.direction)/2,h=s.fps,m=h/s.speed,g=(1-s.opacity)/(m*s.trail/100),v=m/s.lines;(function y(){c++;for(var t=0;s.lines>t;t++)f=Math.max(1-(c+(s.lines-t)*v)%m*g,s.opacity),r.opacity(l,t*s.direction+p,f,s);r.timeout=r.el&&setTimeout(y,~~(1e3/h))})()}return r},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,r){function a(e,i){return o(t(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*l+r.rotate)+"deg) translate("+r.radius+"px"+",0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var s,l=0,d=(r.lines-1)*(1-r.direction)/2;r.lines>l;l++)s=o(t(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:u&&i(r.opacity,r.trail,d+l*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&e(s,o(a("#000","0 0 4px #000"),{top:"2px"})),e(n,e(s,a(r.color,"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){t.childNodes.length>e&&(t.childNodes[e].style.opacity=i)}});var h=o(t("group"),{behavior:"url(#default#VML)"});return!n(h,"transform")&&h.adj?l():u=n(h,"animation"),s});

(function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)})(this,function(t){"use strict";function e(t){if(t===void 0)return console.warn("Ladda button target must be defined."),void 0;t.querySelector(".ladda-label")||(t.innerHTML='<span class="ladda-label">'+t.innerHTML+"</span>");var e=i(t),n=document.createElement("span");n.className="ladda-spinner",t.appendChild(n);var r,a={start:function(){return t.setAttribute("disabled",""),t.setAttribute("data-loading",""),clearTimeout(r),e.spin(n),this.setProgress(0),this},startAfter:function(t){return clearTimeout(r),r=setTimeout(function(){a.start()},t),this},stop:function(){return t.removeAttribute("disabled"),t.removeAttribute("data-loading"),clearTimeout(r),r=setTimeout(function(){e.stop()},1e3),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(e){e=Math.max(Math.min(e,1),0);var n=t.querySelector(".ladda-progress");0===e&&n&&n.parentNode?n.parentNode.removeChild(n):(n||(n=document.createElement("div"),n.className="ladda-progress",t.appendChild(n)),n.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),t.setAttribute("disabled",""),this},isLoading:function(){return t.hasAttribute("data-loading")}};return o.push(a),a}function n(t,n){n=n||{};var r=[];"string"==typeof t?r=a(document.querySelectorAll(t)):"object"==typeof t&&"string"==typeof t.nodeName&&(r=[t]);for(var i=0,o=r.length;o>i;i++)(function(){var t=r[i];if("function"==typeof t.addEventListener){var a=e(t),o=-1;t.addEventListener("click",function(){a.startAfter(1),"number"==typeof n.timeout&&(clearTimeout(o),o=setTimeout(a.stop,n.timeout)),"function"==typeof n.callback&&n.callback.apply(null,[a])},!1)}})()}function r(){for(var t=0,e=o.length;e>t;t++)o[t].stop()}function i(e){var n,r=e.offsetHeight;r>32&&(r*=.8),e.hasAttribute("data-spinner-size")&&(r=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(n=e.getAttribute("data-spinner-color"));var i=12,a=.2*r,o=.6*a,s=7>a?2:3;return new t({color:n||"#fff",lines:i,radius:a,length:o,width:s,zIndex:"auto",top:"auto",left:"auto",className:""})}function a(t){for(var e=[],n=0;t.length>n;n++)e.push(t[n]);return e}var o=[];return{bind:n,create:e,stopAll:r}});

$(window).load(function(){
            // Bind normal buttons
            Ladda.bind( 'div:not(.progress-demo) button', { timeout: 1500 } );

            // Bind progress buttons and simulate loading progress
            Ladda.bind( '.progress-demo button', {
                callback: function( instance ) {
                    var progress = 0;
                    var interval = setInterval( function() {
                        progress = Math.min( progress + Math.random() * 0.1, 1 );
                        instance.setProgress( progress );

                        if( progress === 1 ) {
                            instance.stop();
                            clearInterval( interval );
                        }
                    }, 200 );
                }
            } );

            // You can control loading explicitly using the JavaScript API
            // as outlined below:

            // var l = Ladda.create( document.querySelector( 'button' ) );
            // l.start();
            // l.stop();
            // l.toggle();
            // l.isLoading();
            // l.setProgress( 0-1 );
});

$(document).ready(function() {
	$('.colour-picker').colorpicker({
        format: 'hex'
    });
});

$(document).ready(function() {
    $('#site-logo img').attr('class','img-responsive center-block');
});

$(document).ready(function() {
    $('.pagination-line a:not(.btn)').attr('class','btn btn-default btn-xs');
    $('.topic-pagination a:not(.btn)').attr('class','btn btn-default btn-sm');
    if (!($('.topic-pagination a').hasClass('no-btn'))){
        $('.topic-pagination strong').attr('class','btn btn-primary btn-sm disabled');
    };
    $('.page-sep').remove();
});
$(document).ready(function() {
     $('.pm-to a:not(.btn)').attr('class','btn btn-default btn-sm');
});

$(document).ready(function() {
    $(".btn-radio-group .btn-radio").click(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).addClass('active');
        return true;
    });
    
    $(".btn-radio-group .btn-radio input:checked").each(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).parent().addClass("active");
    })
    
});

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});