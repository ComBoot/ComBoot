/*
 * Version: 1.0
 */

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
    $('#coypright #author-name').each(function () {
        if ($(this).text() != 'Florian Gareis') {
            $(this).css('color', 'red');
        }
    });

    $('.btn').tooltip({container: 'body'});

    $('#group_colour_component').on('changeColor', function (ev) {
        $('input[name=group_colour]').val(ev.color.toHex().replace('#', ''));
    });

    $("select").addClass("selectpicker");
    $(".selectpicker").attr({"data-width": "auto"});
    $(".selectpicker").selectpicker();

    $('.top, .to-top, .top2').click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });

    $('#site-logo img').addClass('img-responsive center-block');

    $('.progress .progress-bar').progressbar({
        percent_format: function(percent) { return percent; }
    });

    $('.pagination-line a:not(.btn)').attr('class','btn btn-default btn-xs');
    $('.topic-pagination a:not(.btn), .forum-pagination a:not(.btn)').attr('class','btn btn-default btn-sm');
    if (!($('.topic-pagination a, .forum-pagination a').hasClass('no-btn'))){
        $('.topic-pagination strong, .forum-pagination strong').attr('class','btn btn-primary btn-sm disabled');
    };
    $('.page-sep').remove();

    $('.pm-to a:not(.btn)').attr('class','btn btn-default btn-sm');
    
    $('.btn-fix a').addClass('btn btn-primary btn-sm');

    $('.btn-radio-group .btn-radio').click(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).addClass('active');
        return true;
    });
    
    $('.btn-radio-group .btn-radio input:checked').each(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).parent().addClass('active');
    });
    
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
    $('#back-to-top').hover(function () {
        $('#back-to-top').tooltip('show');
    });

    var $this = $('.content img');
    var src = $this.attr('src');
    $this.attr('data-lightbox', src);

    if ($('#footer-nav .nav.fix-right-nav').length = 0){
        $('#footer-nav ul.navbar-nav').after('<ul class="nav navbar-nav navbar-right fix-right-nav"><li><p class="navbar-text" id="corypright">Design: <a href="http://zoker.me/go/comboot" target="_blank">ComBoot</a> by <a href="http://www.florian-gareis.de" target="_blank" id="author-name">Florian Gareis</a></p></li></ul>');
    }

    var dangercolor = $('.alert-danger').css('color');
    $('#alert-area').css('border-color', dangercolor);

    $('.color-picker').colorpicker({
        format: 'hex',
        align: 'left'
    });

    // Update notification function
    $.ajax('http://comboot.io/version.php').success(function (data) {
        $version = data.latestVersion;
        $message = data.message;
        if ($version > '1.0') {
            $('#update-notification').show();
            $('#update-notification .version').text($version);
        }
    });
});

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel-collapsible').find('.panel-body, .panel-footer').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
        $this.parents('.panel-collapsible').find('.panel-body, .panel-footer').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
});
function isImageFile(fname) {
    return fname.match(/\.(jpg|gif|bmp|jpeg|png)$/);
}

Prism.hooks.add('before-highlight', function(env) {
    env.element.innerHTML = env.element.innerHTML.replace(/<br\s*\/?>/g,'\n');
    env.code = env.element.textContent.replace(/^(?:\r?\n|\r)/,'');
});