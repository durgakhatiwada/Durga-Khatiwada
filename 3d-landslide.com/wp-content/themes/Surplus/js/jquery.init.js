jQuery(function($) {

    /**********************************
     **** Run on doc ready
     **********************************/
    $(document).ready(function() {

        //search toggle
        $('.mastersearch-toggle').click(function() {
            $('.master-social-links').hide().css({
                top: 0
            });
            $('.mastersocial-toggle').removeClass('mastersocial-toggle-active');

            var $searchForm = $('#mastersearch-form');
            if ($searchForm.is(':hidden')) {
                $(this).addClass('mastersearch-toggle-active');
                $searchForm.show().animate({
                    top: 35
                }, 300);
            } else {
                $(this).removeClass('mastersearch-toggle-active');
                $searchForm.hide().css({
                    top: 0
                });
            }
            return false;
        });

        //social toggle
        $('.mastersocial-toggle').click(function() {
            $('#mastersearch-form').hide().css({
                top: 0
            });
            $('.mastersearch-toggle').removeClass('mastersearch-toggle-active');

            var $socialLinks = $('.master-social-links');

            if ($socialLinks.is(':hidden')) {
                $(this).addClass('mastersocial-toggle-active');
                $socialLinks.show().animate({
                    top: 35
                }, 300);
            } else {
                $(this).removeClass('mastersocial-toggle-active');
                $socialLinks.hide().css({
                    top: 0
                });;
            }
            return false;
        });

        $(document).click(function(event) {
            if (!$(event.target).hasClass('mastersearch-input')) {
                $('#mastersearch-form').hide().css({
                    top: 0
                });
                $('.mastersearch-toggle').removeClass('mastersearch-toggle-active');
            }
            if (!$(event.target).hasClass('master-social-links')) {
                $('.master-social-links').hide().css({
                    top: 0
                });
                $('.mastersocial-toggle').removeClass('mastersocial-toggle-active');
            }
        });

        //notification toggle
        $(".notification-toggle").click(function() {
            var $span = $(this).children('span');
            var $notificationBar = $('#notification-bar');

            if ($notificationBar.is(':hidden')) {
                $("#notification-bar").slideDown('fast');
                $(this).addClass('notification-toggle-active');
                $span.addClass('awesome-icon-chevron-up')
                $span.removeClass('awesome-icon-chevron-down');
            } else {
                $("#notification-bar").slideUp('fast');
                $(this).removeClass('notification-toggle-active');
                $span.addClass('awesome-icon-chevron-down')
                $span.removeClass('awesome-icon-chevron-up');
            }
            return false;
        });

        // superFish
        $("ul.sf-menu").superfish({
            autoArrows: true,
            animation: {
                opacity: 'show',
                height: 'show'
            }
        });

        //remove current menu class from drop-downs
        $("ul.sf-menu ul li").removeClass("current-menu-item");

        // back to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('a[href=#toplink]').fadeIn();
            } else {
                $('a[href=#toplink]').fadeOut();
            }
        });
        $('a[href=#toplink]').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 200);
            return false;
        });

        //portfolio category selector
        $('#portfolio-category-toggle').click(function() {
            $(this).children('ul').slideToggle();
            $(this).children('a').toggleClass("toggle-active");
            return false;
        });

        // portfolio thumb swap gallery
        $('#thumb-swap-portfolio .swap-sub a').click(function() {
            var $allThumbs = $('#thumb-swap-portfolio .swap-sub img');
            var $src = $(this).children('img').attr('src');
            var $href = $(this).attr('href');

            $allThumbs.removeClass('active-swap');
            $(this).children('img').addClass('active-swap');

            if ($src != $('#thumb-swap-portfolio #swap-main img').attr('src')) {
                $('#thumb-swap-portfolio #swap-main a').attr('href', $href).children('img').attr('src', $src);
            }

            return false;
        });

        // PrettyPhoto Without gallery		
        $(".prettyphoto-link").prettyPhoto({
            theme: 'pp_default', // light_rounded / dark_rounded / light_square / dark_square / facebook */
            animation_speed: 'normal',
            allow_resize: true,
            keyboard_shortcuts: true,
            show_title: false,
            social_tools: false,
            slideshow: false,
            autoplay_slideshow: false
        });

        //PrettyPhoto With Gallery
        $("a[rel^='prettyPhoto'],.gallery a").prettyPhoto({
            theme: 'pp_default', // light_rounded / dark_rounded / light_square / dark_square / facebook */
            animation_speed: 'normal',
            allow_resize: true,
            keyboard_shortcuts: true,
            show_title: false,
            slideshow: 5000,
            social_tools: false,
            autoplay_slideshow: false,
            overlay_gallery: true
        });

        //opacity animations
        $('.home-entry img, .gallery-photo img, .loop-entry-thumbnail img, .portfolio-item img, .staff-img img, #stacked-portfolio-imgs img, .hp-highlight-img, #thumb-swap-portfolio #swap-main img, .service-item-img').hover(function() {
            $(this).stop(true, true).animate({
                opacity: 0.75
            }, 200)
        }, function() {
            $(this).stop(true, true).animate({
                opacity: 1
            }, 200)
        });

        // Toggle	
        $(".toggle_container").hide();
        $("h3.trigger").click(function() {
            $(this).toggleClass("active").next().slideToggle(200);
            return false; //Prevent the browser jump to the link anchor
        });

        // Tabvs & Accordion			
        $(".tabs").tabs();
        $(".accordion").accordion({
            autoHeight: false,
            speed: 200
        });

        //comment check
        $('#commentform').submit(function(e) {
            var $urlField = $(this).children('#url');
            if ($urlField.val() == 'Website') {
                $urlField.val('')
            }
        });

        // Equal Heights
        function equalHeight(group) {
            var tallest = 0;
            group.each(function() {
                var thisHeight = $(this).height();
                if (thisHeight > tallest) {
                    tallest = thisHeight;
                }
            });
            group.height(tallest);
        }
        equalHeight($(".pricing-content li"));
        equalHeight($(".pricing-header"));

    }); // END doc ready



    /**********************************
     **** Run on window load
     **********************************/
    $(window).load(function() {

        //homepage slides
        $('.full-slides, #portfolio-slides').flexslider({
            animation: "fade", //Select your animation type (fade/slide)
            slideshow: true, //Should the slider animate automatically by default? (true/false)
            slideshowSpeed: 6000, //Set the speed of the slideshow cycling, in milliseconds
            animationDuration: 600, //Set the speed of animations, in milliseconds
            directionNav: true, //Create navigation for previous/next navigation? (true/false)
            controlNav: true, //Create navigation for paging control of each slide? (true/false)
            keyboardNav: true, //Allow for keyboard navigation using left/right keys (true/false)
            touchSwipe: true, //Touch swipe gestures for left/right slide navigation (true/false)
            prevText: '<span class="awesome-icon-chevron-left"></span>', //Set the text for the "previous" directionNav item
            nextText: '<span class="awesome-icon-chevron-right"></span>', //Set the text for the "next" directionNav item
            randomize: false, //Randomize slide order on page load? (true/false)
            animationLoop: true, //Should the animation loop? If false, directionNav will received disabled classes when at either end (true/false)
            pauseOnAction: true, //Pause the slideshow when interacting with control elements, highly recommended. (true/false)
            pauseOnHover: false //Pause the slideshow when hovering over slider, then resume when no longer hovering (true/false)
            /** un-comment to animate transitions - note: may be a bit buggy
		start: function(slider){ // init the height of the first item on start
            var $new_height = slider.slides.eq(0).height();     
            slider.height($new_height);                                     
        },          
        before: function(slider){ // init the height of the next item before slide
            var $new_height = slider.slides.eq(slider.animatingTo).height();                
            if($new_height != slider.height()){
                slider.animate({ height: $new_height  }, 300);
            }
        }          
		*/
        });

        //content slides
        $('.content-slider').slides({
            effect: 'slide',
            preload: false,
            generatePagination: false,
            autoHeight: true,
            next: 'slides_next',
            prev: 'slides_prev',
            animationStart: function() {}
        });

    }); // END window load
}); // END function