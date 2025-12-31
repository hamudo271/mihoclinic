"use strict";
var photobakery_grid_array = [],
    $pswp_gallery_array = [],
    photobakery_packery_array = [],
    photobakery_kenburns = [],
    photobakery_split_sliders = [],
    photobakery_grid_filter_array = [],
    photobakery_window = jQuery(window);

function photobakery_check_lazy(this_obj) {
    var win_scroll = photobakery_window.scrollTop(),
        this_offset = this_obj.offset().top,
        check_val = photobakery_window.height()*2 + win_scroll;

    if (check_val > this_offset && !this_obj.hasClass('loading')) {
        this_obj.click();
    }
}

// Photoswipe Lightbox
if (jQuery('.elementor-editor-active').size() > 0) {} else {
    if (jQuery('.photobakery_photoswipe_wrapper').length) {
        var caption_state = jQuery('.photobakery_photoswipe_wrapper').attr('data-caption'),
            caption_padding_top = jQuery('.photobakery_photoswipe_wrapper').attr('data-caption-top'),
            caption_padding_bottom = jQuery('.photobakery_photoswipe_wrapper').attr('data-caption-bottom'),
            caption_font_size = jQuery('.photobakery_photoswipe_wrapper').attr('data-caption-size'),
            caption_uppercase = jQuery('.photobakery_photoswipe_wrapper').attr('data-caption-uppercase'),
            caption_upper_style = 'text-transform: none';

        if (caption_uppercase == 'yes') {
            caption_upper_style = 'text-transform: uppercase';
        }

        var photoswipe_html = '\
			<!-- Root element of PhotoSwipe. Must have class pswp. -->\
			<div class="pswp photobakery_pswp" tabindex="-1" role="dialog" aria-hidden="true">\
				<div class="pswp__bg"></div><!-- PSWP Background -->\
				\
				<div class="pswp__scroll-wrap">\
					<div class="pswp__container">\
						<div class="pswp__item"></div>\
						<div class="pswp__item"></div>\
						<div class="pswp__item"></div>\
					</div><!-- .pswp__container -->\
					\
					<div class="pswp__ui pswp__ui--hidden">\
						<div class="pswp__top-bar">\
							<!--  Controls are self-explanatory. Order can be changed. -->\
							<div class="pswp__counter"></div>\
							\
							<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\
							<button class="pswp__button pswp__button--share" title="Share"></button>\
							<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\
							\
							<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\
							<!-- element will get class pswp__preloader--active when preloader is running -->\
							<div class="pswp__preloader">\
								<div class="pswp__preloader__icn">\
								  <div class="pswp__preloader__cut">\
									<div class="pswp__preloader__donut"></div>\
								  </div><!-- .pswp__preloader__cut -->\
								</div><!-- .pswp__preloader__icn -->\
							</div><!-- .pswp__preloader -->\
						</div><!-- .pswp__top-bar -->\
						\
						<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\
							<div class="pswp__share-tooltip"></div>\
						</div><!-- .pswp__share-modal -->\
						\
						<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\
						<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\
						\
						<div class="pswp__caption">\
							<div class="pswp__caption__center" style="font-size:'+ caption_font_size +'px; line-height:'+ caption_font_size +'px; padding:'+caption_padding_top+'px 0 '+caption_padding_bottom+'px 0; '+caption_upper_style+'"></div>\
						</div><!-- .pswp__caption -->\
					</div><!-- .pswp__ui pswp__ui--hidden -->\
				</div><!-- .pswp__scroll-wrap -->\
			</div><!-- .pswp -->\
			';

        jQuery('body').append(photoswipe_html);

        var $pswp = jQuery('.photobakery_pswp')[0];

        jQuery('.photobakery_photoswipe_wrapper').each(function(){
            var this_id = jQuery(this).attr('data-uniqid'),
                $this = jQuery(this);
            $pswp_gallery_array['photobakery_gallery_' + this_id] = {};
            $pswp_gallery_array['photobakery_gallery_' + this_id].slides = [];
            jQuery(this).find('.photobakery_pswp_slide').each(function(){
                if (jQuery(this).hasClass('photobakery_pswp_video_slide')) {
                    var photobakery_thishref = jQuery(this).attr('href');
                    if(photobakery_thishref.indexOf('youtu') + 1) {
                        //YT Video
                        var videoid_split = photobakery_thishref.split('='),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoid + '?controls=1&autoplay=0&showinfo=0&modestbranding=1&wmode=opaque&rel=0&hd=1&disablekb=1" frameborder="0" allowfullscreen></iframe></div>';
                    }
                    if(photobakery_thishref.indexOf('vimeo') + 1) {
                        //Vimeo Video
                        var videoid_split = photobakery_thishref.split('m/'),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://player.vimeo.com/video/' + videoid + '?api=1&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=0&loop=0&controls=1" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div>';0
                    }
                    var this_item = {
                        html : photobakery_pswp_html,
                        title: jQuery(this).attr('data-caption')
                    };
                    $pswp_gallery_array['photobakery_gallery_' + this_id].slides.push(this_item);
                } else {
                    var item_size = jQuery(this).data('size').split('x'),
                        item_width = item_size[0],
                        item_height = item_size[1],
                        this_item = {
                            src : jQuery(this).attr('href'),
                            w : item_width,
                            h : item_height,
                            title: jQuery(this).attr('data-caption')
                        };
                    $pswp_gallery_array['photobakery_gallery_' + this_id].slides.push(this_item);
                }
            });
        });
    }

    jQuery(document).on('click', '.photobakery_pswp_slide', function (event) {
        event.preventDefault();
        var $index = parseInt(jQuery(this).attr('data-count'), 10),
            this_id = jQuery(this).parents('.photobakery_photoswipe_wrapper').attr('data-uniqid'),
            overlay = jQuery(this).parents('.photobakery_photoswipe_wrapper').attr('data-overlay'),
            options = {
                index: $index,
                bgOpacity: overlay,
                showHideOpacity: true
            };

        // Initialize PhotoSwipe
        var photobakery_lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, $pswp_gallery_array['photobakery_gallery_' + this_id].slides, options);
        photobakery_lightBox.init();
        photobakery_lightBox.listen('gettingData', function(index, item) {
            if (jQuery('.photobakery_pswp_video_wrapper').size() > 0) {
                var photobakery_window_height = jQuery(window).height();
                if (jQuery('.pswp__top-bar').size() > 0) {
                    photobakery_window_height = photobakery_window_height - jQuery('.pswp__top-bar').height()*2;
                }
                if (jQuery('#wpadminbar').size() > 0) {
                    photobakery_window_height = photobakery_window_height - jQuery('#wpadminbar').height();
                }
                if ((jQuery(window).width()/16)*9 > photobakery_window_height) {
                    var set_width = (photobakery_window_height/9)*16,
                        set_height = photobakery_window_height;
                } else {
                    var set_height = (jQuery(window).width()/16)*9,
                        set_width = jQuery(window).width();
                }
                jQuery('.photobakery_pswp_video_wrapper').width(set_width).height(set_height);
            }
        });
    });

    jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
        jQuery('#swipebox-next').click();
        e.stopPropagation();
    });

    jQuery(document).on("click", "#swipebox-container", function (e) {
        jQuery('#swipebox-close').click();
    });
}

jQuery(document).ready(function () {
    // Isotope Activation
    if (jQuery('div').is('.photobakery_isotope_trigger')) {
        jQuery('.photobakery_isotope_trigger').each(function () {
            jQuery(this).isotope();
        });
    }
});

jQuery(window).on('load', function () {
    jQuery('.photobakery_js_bg_image').each(function() {
        jQuery(this).css('background-image', 'url('+jQuery(this).attr('data-src')+')');
    });
    before_after_setup();

    // --------------------------- //
    // --- Before/After Widget --- //
    // --------------------------- //
    jQuery('.photobakery_before_after').on('mousemove', function(e) {
        var this_offset = jQuery(this).offset().left,
            mouse_pos = e.pageX - this_offset,
            current_pos = jQuery(this).find('.photobakery_after_image').width();
        jQuery(this).find('.photobakery_after_image').width(mouse_pos);
        jQuery(this).find('.photobakery_before_after_divider').css('left', mouse_pos + 'px');
    });

    jQuery('.photobakery_before_after').on('touchmove', function(e) {
        var touch = e.originalEvent.touches[0],
            this_offset = jQuery(this).offset().left,
            set_pos = touch.pageX - this_offset;
        if (set_pos < 0) set_pos = 0;
        if (set_pos > jQuery(this).width()) set_pos = jQuery(this).width();

        jQuery(this).find('.photobakery_after_image').width(set_pos);
        jQuery(this).find('.photobakery_before_after_divider').css('left', set_pos + 'px');
    });
    
    // --------------------------------- //
    // --- Gallery Grid and Masonry ---  //
    // --------------------------------- //
    jQuery('.photobakery_grid_wrapper').each(function () {
        if (jQuery('div').is('.photobakery_gallery_grid_isotope_trigger')) {
            jQuery('.photobakery_gallery_grid_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery($this_obj);
        }

        if (jQuery('div').is('.photobakery_gallery_masonry_isotope_trigger')) {
            jQuery('.photobakery_gallery_masonry_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery($this_obj);
        }

        if (jQuery('div').is('.photobakery_gallery_media_grid_isotope_trigger')) {
            jQuery('.photobakery_gallery_media_grid_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery($this_obj);
        }

        if (jQuery('div').is('.photobakery_gallery_media_masonry_isotope_trigger')) {
            jQuery('.photobakery_gallery_media_masonry_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery($this_obj);
        }
    });
    
    // ------------------------- //
    // --- Gallery Justified --- //
    // ------------------------- //
    jQuery('.photobakery_justified_wrapper').each(function () {
        if (jQuery('div').is('.photobakery_justified_gallery')) {
            jQuery('.photobakery_justified_gallery').each(function(){
                var $this = jQuery(this),
                    setpad = $this.attr('data-setpad'),
                    rowheight = $this.attr('data-rowheight'),
                    lastRow = $this.attr('data-lastRow');
                $this.justifiedGallery({
                    rowHeight : rowheight,
                    lastRow : lastRow,
                    margins : setpad
                });
            });
        }

        var photobakery_justified_array = [];
        var $this_obj = jQuery(this);
        photobakery_justified_array["photobakery_justified_" + $this_obj.attr('data-uniqid')] = {};
        var this_array = photobakery_justified_array["photobakery_justified_" + $this_obj.attr('data-uniqid')];
        this_array.id = jQuery(this).attr('data-uniqid');
        this_array.showed = 0;
        this_array.items = [];

        var this_items_array = this_array.items;
        if ($this_obj.find('.photobakery_justified_gallery_array').length) {
            $this_obj.find('.photobakery_justified_gallery_array').each(function() {
                jQuery(this).find('.photobakery_justified_array_item').each(function() {
                    var $this = jQuery(this),
                        photobakery_justified_item = {};
                    photobakery_justified_item.slide_type = $this.attr('data-type');
                    photobakery_justified_item.img = $this.attr('data-img');
                    photobakery_justified_item.thmb = $this.attr('data-thmb');
                    photobakery_justified_item.title = $this.attr('data-title');
                    photobakery_justified_item.capt = $this.attr('data-caption');
                    photobakery_justified_item.alt = $this.attr('data-alt');
                    photobakery_justified_item.overlay = $this.attr('data-overlay');
                    photobakery_justified_item.counter = $this.attr('data-counter');
                    photobakery_justified_item.size = $this.attr('data-size');
                    this_items_array.push(photobakery_justified_item);
                });
                jQuery(this).remove();
            });
        }

        this_array.obj = jQuery('.photobakery_justified_wrapper'+this_array.id);

        this_array.init = function () {
            var this_obj = this;
            this.obj.find('.justified_load_more').on("click", function () {
                this_obj.loadmore.call(this_obj);
            });
            this.setup.call(this);
            this.preloader.call(this);
        };

        this_array.preloader = function() {
            var this_obj = this,
                $this_dom = this.obj;
            if ($this_dom.find('.load_anim_grid:first').size() > 0) {
                (function (img, src) {
                    img.src = src;
                    img.onload = function () {
                        $this_dom.find('.load_anim_grid:first').removeClass('load_anim_grid').removeClass('anim_el').animate({
                            'z-index': '15'
                        }, 50, function() {
                            this_obj.setup.call(this_obj);
                            this_obj.preloader.call(this_obj);
                        });
                    };
                }(new Image(), $this_dom.find('.load_anim_grid:first').find('img').attr('src')));
            } else {
                var $button = $this_dom.find('.justified_load_more');
                $button.removeClass('photobakery_ajax_query_posts_disabled');
                if ($button.hasClass('lazy_loading')) {
                    $button.removeClass('loading');
                    photobakery_check_lazy($button);
                }

                this_obj.setup.call(this_obj);
            }
        };

        this_array.setup = function() {
            var this_obj = this,
                $this_dom = this.obj,
                $photobakery_dp = $this_dom.find('.photobakery_dp');
            if (jQuery('body').hasClass('photobakery_drag_protection')) {
                $photobakery_dp.on('mousedown',function(e){
                    e.preventDefault();
                });
            }
            if ($this_dom.find('.photobakery_js_bg_color').length) {
                $this_dom.find('.photobakery_js_bg_color').each(function () {
                    jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
                });
            }
            $this_dom.find('.photobakery_justified_item').each(function(){
                if (jQuery(this).hasClass('anim_el2')) {
                    jQuery(this).removeClass('anim_el2');
                }
            });
        };

        this_array.loadmore = function() {
            var this_obj = this,
                $this_dom = this.obj,
                photobakery_what_to_append = '',
                photobakery_grid_post_per_page = $this_dom.attr('data-perload'),
                photobakery_items_radius = $this_dom.attr('data-radius'),
                photobakery_caption_color = $this_dom.attr('data-color'),
                photobakery_uniqid = this.id,
                photobakery_allposts = this.items.length,
                photobakery_count = $this_dom.find('.photobakery_justified_item').size(),
                photobakery_ins_container = $this_dom.find('.photobakery_justified_gallery'),
                photobakery_load_more_button = $this_dom.find('.justified_load_more');

            if (this.showed >= photobakery_allposts) {
                if ($this_dom.hasClass('demo_mode')) {
                    this_obj.showed = 0;
                    this_obj.loadmore.call(this_obj);
                } else {
                    photobakery_load_more_button.slideUp(300);
                }
            } else {
                var photobakery_now_step = this.showed + parseInt(photobakery_grid_post_per_page) - 1;
                if ((photobakery_now_step + 1) < photobakery_allposts) {
                    var photobakery_limit = photobakery_now_step;
                } else {
                    var photobakery_limit = photobakery_allposts - 1;
                    if ($this_dom.hasClass('demo_mode')) {
                        this_obj.showed = 0;
                    } else {
                        photobakery_load_more_button.slideUp(300);
                    }
                }

                $this_dom.find('.justified_load_more').addClass('loading');

                for (var i = this.showed; i <= photobakery_limit; i++) {
                    var photobakery_thishref = this.items[i].img,
                        photobakery_what_to_append = photobakery_what_to_append +'\
			                <a class="photobakery_pswp_slide photobakery_justified_item photobakery_dp photobakery_no_select anim_el anim_el2 load_anim_grid grid_b2p" href="' + photobakery_thishref +'" data-elementor-open-lightbox="no" data-size="'+ this.items[i].size +'" data-count="'+ photobakery_count +'" data-caption="'+ this.items[i].capt +'" style="border-radius: ' + photobakery_items_radius + ';">\
			                    <img alt="' + this.items[i].alt + '" src="'+ this.items[i].thmb +'"/>\
			                    <div class="grid-item-content">\
			                        <h6 style="color: ' + photobakery_caption_color + ';">'+ this.items[i].title +'</h6>\
			                    </div>\
			                    <div class="grid-item-overlay"></div>\
			                </a>';
                    photobakery_count++;

                    // PSWP React
                    if (this.items[i].slide_type == 'video') {
                        if(photobakery_thishref.indexOf('youtu') + 1) {
                            //YT Video
                            var videoid_split = photobakery_thishref.split('='),
                                videoid = videoid_split[1],
                                photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoid + '?controls=1&autoplay=0&showinfo=0&modestbranding=1&wmode=opaque&rel=0&hd=1&disablekb=1" frameborder="0" allowfullscreen></iframe></div>';
                        }
                        if(photobakery_thishref.indexOf('vimeo') + 1) {
                            //Vimeo Video
                            var videoid_split = photobakery_thishref.split('m/'),
                                videoid = videoid_split[1],
                                photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://player.vimeo.com/video/' + videoid + '?api=1&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=0&loop=0&controls=1" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div>';
                        }
                        var this_item = {
                            html : photobakery_pswp_html
                        };
                        $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                    } else {
                        var item_size = this.items[i].size.split('x'),
                            item_width = item_size[0],
                            item_height = item_size[1],
                            this_item = {
                                src : photobakery_thishref,
                                w : item_width,
                                h : item_height,
                                title: this.items[i].capt
                            };
                        $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                    }

                    this.showed++;
                }

                photobakery_ins_container.append(photobakery_what_to_append);
                photobakery_ins_container.justifiedGallery('norewind');

                this_obj.setup.call(this_obj);
                this_obj.preloader.call(this_obj);
            }
        };

        if (jQuery('.lazy_loading').length) {
            var $this = jQuery(this).find('.lazy_loading'),
                win_scroll = jQuery(window).scrollTop(),
                this_offset = jQuery($this).offset().top,
                check_val = jQuery(window).height()*2 + win_scroll;

            if (check_val > this_offset && !$this.hasClass('loading')) {
                $this.click();
            }

            jQuery(window).on('scroll', function() {
                var win_scroll = jQuery(window).scrollTop(),
                    this_offset = jQuery($this).offset().top,
                    check_val = jQuery(window).height()*2 + win_scroll;

                if (check_val > this_offset  && !$this.hasClass('loading')) {
                    $this.click();
                }
            });
        }

        var $this_obj = jQuery(this),
            this_obj = photobakery_justified_array["photobakery_justified_" + $this_obj.attr('data-uniqid')];
        this_obj.init.call(this_obj);
    });
    
    // ----------------------- //
    // --- Gallery Packery --- //
    // ----------------------- //
    jQuery('.photobakery_packery_wrapper').each(function () {
        jQuery('.photobakery_gallery_packery_isotope_trigger').each(function () {
            jQuery(this).isotope({
                layoutMode: 'packery'
            });

            var container = jQuery(this);

            setTimeout(function () {
                container.isotope({
                    layoutMode: 'packery'
                });
            }, 200, container);
        });

        var $this_obj = jQuery(this);
        photobakery_packery_array["photobakery_packery_" + $this_obj.attr('data-uniqid')] = {};
        var this_array = photobakery_packery_array["photobakery_packery_" + $this_obj.attr('data-uniqid')];
        this_array.id = jQuery(this).attr('data-uniqid');
        this_array.showed = 0;
        this_array.items = [];

        var this_items_array = this_array.items;
        if ($this_obj.find('.photobakery_packery_gallery_array').length) {
            $this_obj.find('.photobakery_packery_gallery_array').each(function() {
                jQuery(this).find('.photobakery_packery_array_item').each(function(){
                    var $this = jQuery(this),
                        photobakery_packery_item = {};
                    photobakery_packery_item.slide_type = $this.attr('data-type');
                    photobakery_packery_item.img = $this.attr('data-img');
                    photobakery_packery_item.thmb = $this.attr('data-thmb');
                    photobakery_packery_item.title = $this.attr('data-title');
                    photobakery_packery_item.capt = $this.attr('data-caption');
                    photobakery_packery_item.alt = $this.attr('data-alt');
                    photobakery_packery_item.overlay = $this.attr('data-overlay');
                    photobakery_packery_item.counter = $this.attr('data-counter');
                    photobakery_packery_item.size = $this.attr('data-size');
                    this_items_array.push(photobakery_packery_item);
                });
                jQuery(this).remove();
            });
        }

        this_array.obj = jQuery('.photobakery_packery_'+this_array.id);

        this_array.init = function () {
            var this_obj = this;
            this.obj.find('.packery_load_more').on("click", function () {
                this_obj.loadmore.call(this_obj);
            });
            this.setup.call(this);
            this.preloader.call(this);

            jQuery(window).on('resize', function() {
                this_array.setup.call(this_array);
            });
        };

        this_array.preloader = function() {
            var this_obj = this,
                $this_dom = this.obj;
            if ($this_dom.find('.load_anim:first').size() > 0) {
                (function (img, src) {

                    img.src = src;
                    img.onload = function () {
                        $this_dom.find('.load_anim:first').removeClass('load_anim').removeClass('anim_el').animate({
                            'z-index': '15'
                        }, 200, function() {
                            $this_dom.find('.photobakery_packery_inner').isotope('layout');
                            this_obj.setup.call(this_obj);
                            this_obj.preloader.call(this_obj);
                        });
                    };
                }(new Image(), $this_dom.find('.load_anim:first').find('.packery-item-inner').attr('data-src')));
            } else {
                this_obj.setup.call(this_obj);
            }
        };

        this_array.setup = function() {
            var this_obj = this,
                $this_dom = this.obj,
                $photobakery_dp = $this_dom.find('.photobakery_dp');
            if (jQuery('body').hasClass('photobakery_drag_protection')) {
                $photobakery_dp.on('mousedown',function(e){
                    e.preventDefault();
                });
            }

            $this_dom.find('.photobakery_packery_inner').each(function() {
                if (jQuery(window).width() > 760) {
                    var	small_item = Math.floor((jQuery(this).width())/4),
                        large_item = small_item*2;
                } else {
                    small_item = Math.floor(jQuery(this).width());
                    large_item = small_item;
                }
                jQuery(this).find('.packery-item').each(function(){
                    if (jQuery(this).hasClass('anim_el2')) {
                        jQuery(this).removeClass('anim_el2');
                    }
                    var set_item_width = small_item,
                        set_item_height = small_item;
                    if (jQuery(this).hasClass('packery-item1') || jQuery(this).hasClass('packery-item7')) {
                        set_item_width = large_item;
                        set_item_height = large_item;
                    }
                    if (jQuery(this).hasClass('packery-item4') || jQuery(this).hasClass('packery-item8')) {
                        set_item_width = large_item;
                        set_item_height = small_item;
                    }
                    jQuery(this).css({
                        'width' : set_item_width+'px',
                        'height' : set_item_height+'px'
                    });
                    if (jQuery(this).hasClass('anim_el2')) {
                        jQuery(this).removeClass('anim_el2');
                    }
                });
                jQuery('.photobakery_packery_inner').isotope('layout');
                setTimeout("jQuery('.photobakery_packery_inner').isotope('layout')",1000);
            });

        };



        this_array.loadmore = function() {
            var this_obj = this,
                $this_dom = this.obj,
                photobakery_what_to_append = '',
                photobakery_packery_post_per_page = $this_dom.attr('data-perload'),
                photobakery_items_radius = $this_dom.attr('data-radius'),
                photobakery_items_padding = $this_dom.attr('data-padding'),
                photobakery_caption_color = $this_dom.attr('data-color'),
                photobakery_uniqid = this.id,
                photobakery_allposts = this.items.length,
                photobakery_count = $this_dom.find('.packery-item').size(),
                photobakery_ins_container = $this_dom.find('.photobakery_packery_inner'),
                photobakery_load_more_button = $this_dom.find('.packery_load_more'),
                items_showed = this_obj.showed,
                last_demo_load = false;
            var current_count = parseInt($this_dom.find('.packery-item:last').attr('data-count'));

            if (this.showed >= photobakery_allposts) {
                photobakery_load_more_button.slideUp(300);
            } else {
                var photobakery_now_step = this.showed + parseInt(photobakery_packery_post_per_page) - 1;
                if ((photobakery_now_step + 1) < photobakery_allposts) {
                    var photobakery_limit = photobakery_now_step;
                } else {
                    if ($this_dom.hasClass('demo_mode')) {
                        this_obj.showed = 0;
                        if ((photobakery_now_step + 1) == photobakery_allposts) {
                            last_demo_load = true;
                            var photobakery_limit = photobakery_now_step;
                        } else {
                            this_obj.loadmore.call(this_obj);
                        }
                    } else {
                        var photobakery_limit = photobakery_allposts - 1;
                        photobakery_load_more_button.slideUp(300);
                    }
                }

                var photobakery_swipebox_class = '';
                if (jQuery('.photobakery_single_gallery_wrapper ').size() > 0) {
                    photobakery_swipebox_class = 'swipebox';
                }
                for (var i = items_showed; i <= photobakery_limit; i++) {
                    current_count ++;
                    if (current_count > 8) {
                        current_count = 1;
                    }
                    var photobakery_thishref = this_obj.items[i].img,
                        photobakery_what_to_append = photobakery_what_to_append +'\
                        <div class="photobakery_gallery_item packery-item packery-item'+ current_count +' element anim_el anim_el2 load_anim packery_b2p" data-count="'+ current_count +'" style="padding-left: ' + photobakery_items_padding + '; padding-bottom: ' + photobakery_items_padding + ';">\
                            <div class="packery-item-inner" data-src="'+ this_obj.items[i].thmb +'" style="background-image: url('+ this_obj.items[i].thmb +'); border-radius: ' + photobakery_items_radius + ';">\
                                <a href="' + photobakery_thishref +'" class="photobakery_pswp_slide photobakery_dp photobakery_no_select" data-elementor-open-lightbox="no" data-size="'+ this_obj.items[i].size +'" data-count="'+ photobakery_count +'" data-caption="'+ this.items[i].capt +'">\
                                    <div class="packery-item-content">\
                                        <h4 style="color: ' + photobakery_caption_color + ';">'+ this_obj.items[i].title +'</h4>\
                                    </div>\
                                    <div class="packery-item-overlay"></div>\
                                </a>\
                                <div class="photobakery-img-preloader"></div>\
                            </div>\
                        </div>';

                    photobakery_count++;
                    var item_size = this_obj.items[i].size.split('x'),
                        item_width = item_size[0],
                        item_height = item_size[1],
                        this_item = {
                            src : photobakery_thishref,
                            w : item_width,
                            h : item_height,
                            title: this_obj.items[i].capt
                        };
                    $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);

                    this_obj.showed++;
                }

                var $photobakery_newItems = jQuery(photobakery_what_to_append);

                if (photobakery_ins_container.data('isotope')) {
                    photobakery_ins_container.isotope('insert', $photobakery_newItems, function() {
                        photobakery_ins_container.find('.photobakery_packery_inner').ready(function() {
                            this_obj.setup.call(this_obj);
                        });
                    });
                }
                this_obj.setup.call(this_obj);
                this_obj.preloader.call(this_obj);
            }
            jQuery('.photobakery_packery_inner').isotope("layout");
            setTimeout(function () {jQuery('.gallery_packery').isotope("layout");}, 1500);
        };

        var $this_obj = jQuery(this),
            this_obj = photobakery_packery_array["photobakery_packery_" + $this_obj.attr('data-uniqid')];
        this_obj.init.call(this_obj);
    });
    
    // ------------------------- //
    // --- Gallery Ken Burns --- //
    // ------------------------- //
    jQuery('.photobakery_css_kenburns').each(function () {
        var $this = jQuery(this),
            this_id = $this.attr('data-id');

        photobakery_kenburns['photobakery_kenburns_'+this_id] = {};
        var $this_obj = photobakery_kenburns['photobakery_kenburns_'+this_id];

        $this_obj.id = this_id;
        $this_obj.obj = $this;
        $this_obj.active_slide = 0;
        $this_obj.max = $this.find('.photobakery_css_kenburns_slide').length;
        $this_obj.time = $this.attr('data-time');
        $this_obj.slide_time = parseInt($this.attr('data-time'),10) + parseInt($this.attr('data-fade'),10);
        $this_obj.zoom = $this.attr('data-zoom');
        $this_obj.fade = $this.attr('data-fade');

        $this_obj.setup = function(action) {
            var $this_obj_in = $this_obj;
            if (jQuery('.photobakery_css_kenburns_single').length) {
                var setHeight = photobakery_window.height(),
                    setTop = 0;
                $this_obj_in.obj.height(setHeight).css('top', setTop+'px');
            } else {
                if ($this_obj_in.obj.hasClass('auto_height')) {
                    var setHeight = $this_obj_in.obj.parents('section.elementor-element').children('.elementor-container').height() - parseInt($this_obj_in.obj.parents('.elementor-column-wrap').css('padding-top'),10) - parseInt($this_obj_in.obj.parents('.elementor-column-wrap').css('padding-bottom'),10);
                    $this_obj_in.obj.height(setHeight);
                }

                if ($this_obj_in.obj.hasClass('screen_height')) {
                    var setHeight = jQuery(window).height();
                    if (jQuery('#wpadminbar').length && !$this_obj_in.obj.hasClass('photobakery_page_kenburns')) {
                        setHeight = setHeight - jQuery('#wpadminbar').height();
                    }
                    $this_obj_in.obj.height(setHeight);
                }
            }
        };

        $this_obj.move = function(dir) {
            var $this_obj_in = $this_obj;
            if (dir > 0)
                $this_obj_in.active_slide++;
            if (dir < 0)
                $this_obj_in.active_slide--;

            $this_obj_in.active_slide = $this_obj_in.check.call($this_obj_in, $this_obj_in.active_slide);
            $this_obj_in.update.call($this_obj_in,$this_obj_in.active_slide);
        };

        $this_obj.check = function(check_id) {
            var $this_obj_in = this;
            check_id = parseInt(check_id,10);
            if (check_id < 1)
                check_id = $this_obj_in.max;
            if (check_id > $this_obj_in.max)
                check_id = 1;
            return check_id;
        };

        $this_obj.update = function(active) {
            var $this_obj_in = $this_obj;
            clearInterval($this_obj_in.interval);

            $this_obj_in.next_slide = $this_obj_in.active_slide + 1;
            $this_obj_in.prev_slide = $this_obj_in.active_slide - 1;

            $this_obj_in.prev_slide = $this_obj_in.check.call($this_obj_in, $this_obj_in.prev_slide);
            $this_obj_in.next_slide = $this_obj_in.check.call($this_obj_in, $this_obj_in.next_slide);

            var photobakery_slides = $this_obj_in.obj.find('.photobakery_css_kenburns_slide'),
                this_active = $this_obj_in.obj.find('[data-count='+ active +']'),
                this_prev = $this_obj_in.obj.find('[data-count='+ $this_obj_in.prev_slide +']'),
                this_next = $this_obj_in.obj.find('[data-count='+ $this_obj_in.next_slide +']');


            photobakery_slides.removeClass('active');
            photobakery_slides.removeClass('prev_slide');
            photobakery_slides.removeClass('next_slide');

            this_prev.addClass('prev_slide');
            this_active.addClass('active');
            this_next.addClass('next_slide');

            $this_obj_in.interval = setInterval(function() {
                $this_obj_in.move.call($this_obj_in,1);
            }, $this_obj_in.time);
        };

        $this_obj.goto = function(slide) {
            var $this_obj_in = $this_obj;
            $this_obj_in.active_slide = slide;

            if ($this_obj_in.active_slide < 1)
                $this_obj_in.active_slide = $this_obj_in.max;
            if ($this_obj_in.active_slide > $this_obj_in.max)
                $this_obj_in.active_slide = 1;

            $this_obj_in.update.call($this_obj_in,$this_obj_in.active_slide);
        };

        // Init
        $this_obj.interval = setInterval(function() {
            $this_obj.move.call($this_obj,1);
        }, $this_obj.time);

        $this_obj.obj.after('\
            <style>\
                .photobakery_css_kenburns'+ $this_obj.id +' .photobakery_css_kenburns_slide {\
                    transition: transform '+ $this_obj.slide_time +'ms ease-in-out, opacity '+ $this_obj.fade +'ms;\
                }\
                .photobakery_css_kenburns'+ $this_obj.id +' .slide_zoom_out {\
                    transform: scale('+ $this_obj.zoom +');\
                }\
                .photobakery_css_kenburns'+ $this_obj.id +' .photobakery_css_kenburns_slide.prev_slide.slide_zoom_in,\
                .photobakery_css_kenburns'+ $this_obj.id +' .photobakery_css_kenburns_slide.active.slide_zoom_in {\
                    transform: scale('+ $this_obj.zoom +');\
                }\
            </style>\
        ');

        $this_obj.setup($this_obj,'');
        if ($this_obj.active_slide == 0)
            $this_obj.goto.call($this_obj,1);

        // Window Events
        jQuery(window).on('load', function(){
            $this_obj.obj.removeClass('photobakery_module_loading');
            $this_obj.setup.call($this_obj,'');
        });
        jQuery(window).on('resize', function(){
            $this_obj.setup.call($this_obj,'');
        });
    });
    
    // ---------------------- //
    // --- Gallery Ribbon --- //
    // ---------------------- //
    jQuery('.photobakery_ribbon_slider_wrapper').each(function () {
        var autoplay = jQuery(this).attr('data-autoplay'),
            speed = parseInt(jQuery(this).attr('data-speed'),10),
            pause = jQuery(this).attr('data-pause'),
            set_pad = parseInt(jQuery(this).attr('data-pad'),10);
        if (autoplay == 'yes') {
            autoplay = true;
        } else {
            autoplay = false;
        }
        if (pause == 'yes') {
            pause = true;
        } else {
            pause = false;
        }

        ribbon_setup();

        jQuery(this).on("initialized.owl.carousel", function (e) {
            jQuery(this).css("opacity", "1");
        });
        jQuery(this).owlCarousel(
            {
                items: 3,
                center: true,
                lazyLoad: true,
                loop: true,
                autoplay: autoplay,
                autoplayTimeout: speed,
                autoplayHoverPause: pause,
                autoWidth: true,
                dots: false,
                margin: set_pad,
                nav: true,
                navText: ["", ""]
            }
        );

        jQuery(this).trigger('refresh.owl.carousel');

        jQuery(window).on('resize', function () {
            var container = jQuery('.photobakery_ribbon_slider_wrapper');

            ribbon_setup();
            container.trigger('refresh.owl.carousel');
        });
    });
    
    // ---------------------- //
    // --- Gallery Slider --- //
    // ---------------------- //
    var slider_container = jQuery('.photobakery_slider_wrapper'),
        photobakery_sliders = [];

    slider_container.each(function () {
        var $this = jQuery(this),
            this_id = $this.attr('data-id');
        photobakery_sliders[this_id] = {};
        var this_obj = photobakery_sliders[this_id];

        this_obj.id = $this.attr('data-id');
        this_obj.obj = $this;
        this_obj.slides_inner = $this.find('.photobakery_slider_slide_inner');
        this_obj.active_slide = 0;
        this_obj.options = {
            autoplay: $this.attr('data-autoplay'),
            speed: $this.attr('data-interval'),
            thumbs: $this.attr('data-thumbs'),
            max: $this.find('.photobakery_slider_slide').length,
        };
        this_obj.interval = setInterval(function(){
            this_obj.move.call(this_obj,1)
        }, this_obj.options.speed);

        this_obj.init = function() {
            var $this_obj_in = this;
            $this_obj_in.setup(this,'');
            if ($this_obj_in.active_slide == 0)
                $this_obj_in.goto.call(this,1);

            // Touch and Click Events
            $this_obj_in.obj.on("swipeleft", function () {
                $this_obj_in.move.call($this_obj_in,1);
            });
            $this_obj_in.obj.on("swipeup", function () {
                $this_obj_in.move.call($this_obj_in,1);
            });
            $this_obj_in.obj.on("swiperight", function () {
                $this_obj_in.move.call($this_obj_in,-1);
            });
            $this_obj_in.obj.on("swipedown", function () {
                $this_obj_in.move.call($this_obj_in,-1);
            });

            $this_obj_in.obj.find('.photobakery_slider_btn_prev').on('click', function(){
                $this_obj_in.move.call($this_obj_in,-1);
            });
            $this_obj_in.obj.find('.photobakery_slider_btn_next').on('click', function(){
                $this_obj_in.move.call($this_obj_in,1);
            });

            // Window Events
            if (jQuery('.elementor-editor-active').size() > 0) {
                $this_obj_in.obj.removeClass('photobakery_module_loading');
            }

            jQuery(window).on('load', function(){
                $this_obj_in.obj.removeClass('photobakery_module_loading');
                $this_obj_in.setup.call($this_obj_in,'');
            });
            jQuery(window).on('resize', function(){
                $this_obj_in.setup.call($this_obj_in,'');
            });
        };

        this_obj.setup = function(action) {
            var $this_obj_in = this;
            switch (action) {
                default:
                    if ($this_obj_in.options.thumbs == 'on') {
                        var	$photobakery_slider_thumbs = this.obj.find('.photobakery_slider_thumbs'),
                            $photobakery_slider_thumbs_inner = $photobakery_slider_thumbs.find('.photobakery_slider_thumbs_inner');

                        $photobakery_slider_thumbs_inner.removeClass('centered_thumbs');
                        if ($photobakery_slider_thumbs_inner.height() < $photobakery_slider_thumbs.height()) {
                            $photobakery_slider_thumbs_inner.addClass('centered_thumbs');
                        }
                    }
                    if (jQuery('.photobakery_single_gallery_wrapper').length) {
                        var this_height = jQuery(window).height(),
                            this_top = 0;

                        if (jQuery('#wpadminbar').length) {
                            this_height = this_height - jQuery('#wpadminbar').height();
                            this_top = jQuery('#wpadminbar').height();
                        }
                        if ($this_obj_in.obj.attr('data-header') == 'yes') {
                            this_height = this_height - photobakery_header.height();
                            this_top = this_top + photobakery_header.height();
                        }
                        if ($this_obj_in.obj.attr('data-footer') == 'yes') {
                            this_height = this_height - photobakery_footer.height();
                        }
                        $this_obj_in.obj.height(this_height).css('top', this_top + 'px');

                        $this_obj_in.slides_inner.width(this.obj.width()).height(this.obj.height());

                        if (photobakery_footer.length) {
                            photobakery_footer.css({
                                'position' : 'fixed',
                                'left' : '0px',
                                'bottom' : '0px',
                                'width' : '100%',
                            });
                        }
                    } else {
                        if ($this_obj_in.obj.hasClass('auto_height')) {
                            var $this_column_wrap = $this_obj_in.obj.parents('.elementor-column-wrap'),
                                this_height = $this_obj_in.obj.parents('section.elementor-element').children('.elementor-container').height() - parseInt($this_column_wrap.css('padding-top'),10) - parseInt($this_column_wrap.css('padding-bottom'),10);
                            $this_obj_in.obj.height(this_height);

                        } else if ($this_obj_in.obj.hasClass('screen_height')) {
                            var this_height = jQuery(window).height();
                            if (jQuery('#wpadminbar').size() > 0) {
                                this_height = this_height - jQuery('#wpadminbar').height();
                            }

                            if ($this_obj_in.obj.hasClass('exclude_class')) {
                                if ($this_obj_in.obj.attr('data-classes') !== '') {
                                    var ex_classes_array = $this_obj_in.obj.attr('data-classes').split(",");
                                    jQuery.each(ex_classes_array, function(index,value) {
                                        this_height = this_height - jQuery(value).height();
                                    });
                                }
                            }
                            if ($this_obj_in.obj.hasClass('exclude_height')) {
                                if ($this_obj_in.obj.attr('data-rheight') !== '') {
                                    this_height = this_height - parseInt($this_obj_in.obj.attr('data-rheight'),10);
                                }
                            }

                            this_height = Math.ceil(this_height);
                            $this_obj_in.obj.height(this_height);
                        }
                        $this_obj_in.slides_inner.width($this_obj_in.obj.width()).height($this_obj_in.obj.height());
                    }
            }
        };

        this_obj.check = function(check_id) {
            var $this_obj_in = this;
            check_id = parseInt(check_id,10);
            if (check_id < 1)
                check_id = $this_obj_in.options.max;
            if (check_id > $this_obj_in.options.max)
                check_id = 1;
            return check_id;
        };

        this_obj.move = function(dir) {
            var $this_obj_in = this;
            var this_obj = this;
            $this_obj_in.obj.removeClass('move_bck');
            $this_obj_in.obj.removeClass('move_frw');
            if (dir > 0) {
                $this_obj_in.active_slide++;
                $this_obj_in.obj.addClass('move_frw');
            }
            if (dir < 0) {
                $this_obj_in.active_slide--;
                $this_obj_in.obj.addClass('move_bck');
            }
            $this_obj_in.active_slide = $this_obj_in.check.call($this_obj_in, $this_obj_in.active_slide);
            setTimeout(function(){
                this_obj.update.call(this_obj,this_obj.active_slide);
            },100);
        };

        this_obj.update = function(active) {
            var $this_obj_in = this;
            clearInterval($this_obj_in.interval);

            var photobakery_slides = $this_obj_in.obj.find('.photobakery_slider_slide'),
                photobakery_slides_inner = $this_obj_in.obj.find('.photobakery_slider_slide_inner'),
                this_active = $this_obj_in.obj.find('[data-count='+ active +']'),
                prev_id = active - 1,
                next_id = active + 1;

            prev_id = $this_obj_in.check.call($this_obj_in, prev_id);
            next_id = $this_obj_in.check.call($this_obj_in, next_id);

            photobakery_slides.removeClass('prev');
            photobakery_slides.removeClass('active');
            photobakery_slides.removeClass('next');


            $this_obj_in.obj.find('[data-count='+ prev_id +']').addClass('prev');
            this_active.addClass('active');
            $this_obj_in.obj.find('[data-count='+ next_id +']').addClass('next');

            if (!$this.hasClass('pause_on_hover') || ($this.hasClass('pause_on_hover') && !$this.hasClass('photobakery_kbd_activated'))) {
                if ($this_obj_in.options.autoplay == 'on') {
                    $this_obj_in.interval = setInterval(function(){
                        $this_obj_in.move.call($this_obj_in,1)
                    }, $this_obj_in.options.speed);
                }
            }
        };

        this_obj.goto = function(slide) {
            var $this_obj_in = this;
            $this_obj_in.active_slide = slide;

            if ($this_obj_in.active_slide < 1)
                $this_obj_in.active_slide = $this_obj_in.options.max;
            if ($this_obj_in.active_slide > $this_obj_in.options.max)
                $this_obj_in.active_slide = 1;

            $this_obj_in.update.call($this_obj_in,$this_obj_in.active_slide);
        };

        var $this = jQuery(this),
            this_id = $this.attr('data-id'),
            this_obj = photobakery_sliders[this_id];
        this_obj.init.apply(this_obj);
    });

    slider_container.on('mouseover', function(){
        var $this = jQuery(this),
            this_id = $this.attr('data-id'),
            this_obj = photobakery_sliders[this_id];

        $this.addClass('photobakery_kbd_activated');
        if ($this.hasClass('pause_on_hover') && $this.attr('data-autoplay') === 'on') {
            clearInterval(this_obj.interval);
        }
    });

    slider_container.on('mouseleave', function(){
        var $this = jQuery(this),
            this_id = $this.attr('data-id'),
            this_obj = photobakery_sliders[this_id];

        $this.removeClass('photobakery_kbd_activated');
        if ($this.hasClass('pause_on_hover') && $this.attr('data-autoplay') === 'on') {
            this_obj.interval = setInterval(function(){
                this_obj.move.call(this_obj,1)
            }, this_obj.options.speed);
        }
    });

    jQuery(document.documentElement).keyup(function (event) {
        if (slider_container.length == 1) {
            var this_id = slider_container.attr('data-id'),
                this_obj = photobakery_sliders[this_id];
            if ((event.keyCode == 37 || event.keyCode == 38)) {
                event.preventDefault();
                this_obj.move.call(this_obj,-1);
            }
            if ((event.keyCode == 39 || event.keyCode == 40)) {
                event.preventDefault();
                this_obj.move.call(this_obj,1);
            }
        } else if (jQuery('.photobakery_kbd_activated').length) {
            var this_id = jQuery('.photobakery_kbd_activated').attr('data-id'),
                this_obj = photobakery_sliders[this_id];
            if ((event.keyCode == 37 || event.keyCode == 38)) {
                event.preventDefault();
                this_obj.move.call(this_obj,-1);
            }
            if ((event.keyCode == 39 || event.keyCode == 40)) {
                event.preventDefault();
                this_obj.move.call(this_obj,1);
            }
        }
    });
    
    // ------------------------------- //
    // --- Gallery Shift and Split --- //
    // ------------------------------- //
    jQuery('.photobakery_split_wrapper').each(function () {
        var this_id = jQuery(this).attr('data-id');

        photobakery_split_setup(this_id);
    });
    
    // ----------------------------------------- //
    // --- Gallery Proofing Grid and Masonry --- //
    // ----------------------------------------- //
    jQuery('.photobakery_grid_wrapper').each(function () {
        if (jQuery('div').is('.photobakery_gal_proofing_grid_isotope_trigger')) {
            jQuery('.photobakery_gal_proofing_grid_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_proofing_gallery($this_obj);
        }

        if (jQuery('div').is('.photobakery_gal_proofing_masonry_isotope_trigger')) {
            jQuery('.photobakery_gal_proofing_masonry_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_proofing_gallery($this_obj);
        }
    });

    // -------------------------------------------- //
    // --- Grid and Masonry Widgets with Filter --- //
    // -------------------------------------------- //
    jQuery('.photobakery_grid_wrapper').each(function () {
        if (jQuery('div').is('.photobakery_gallery_grid_filter_isotope_trigger')) {
            jQuery('.photobakery_gallery_grid_filter_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery_w_filter($this_obj);
        }

        if (jQuery('div').is('.photobakery_gallery_masonry_filter_isotope_trigger')) {
            jQuery('.photobakery_gallery_masonry_filter_isotope_trigger').each(function () {
                jQuery(this).isotope();

                var container = jQuery(this);
                setTimeout(function () {
                    container.isotope();
                }, 500, container);
            });

            var $this_obj = jQuery(this);
            register_grid_gallery_w_filter($this_obj);
        }
    });
});

jQuery(window).on('resize', function () {
    before_after_setup();
});

function before_after_setup() {
    /* Before After Module Setup*/
    if (jQuery('.photobakery_before_after').size() > 0) {
        jQuery('.photobakery_before_after').each(function() {
            if (jQuery(this).width() > jQuery(this).find('.photobakery_before_image').width()) {
                jQuery(this).css('max-width', jQuery(this).find('.photobakery_before_image').width()+'px');
            } else {
                jQuery(this).css('max-width', 'auto');
            }
            jQuery(this).find('.photobakery_after_image').css('width', '50%');
            jQuery(this).find('.photobakery_before_after_divider').css('left', '50%');
        });
    }
}

function register_grid_gallery($this_obj) {
    photobakery_grid_array["photobakery_grid_" + $this_obj.attr('data-uniqid')] = {};
    var this_array = photobakery_grid_array["photobakery_grid_" + $this_obj.attr('data-uniqid')];
    this_array.id = $this_obj.attr('data-uniqid');
    this_array.showed = 0;
    this_array.items = [];

    // Lazy Loading
    if (jQuery('.lazy_loading').length) {
        jQuery('.lazy_loading').each(function() {
            var $this = jQuery(this);
            if (!$this.hasClass('portfel_ajax_query_posts_disabled')) {
                photobakery_check_lazy($this);
            }
        });
        photobakery_window.on('scroll', function() {
            jQuery('.lazy_loading').each(function() {
                var $this = jQuery(this);
                if (!$this.hasClass('portfel_ajax_query_posts_disabled')) {
                    photobakery_check_lazy($this);
                }
            });
        });
    }

    var this_items_array = this_array.items;
    if ($this_obj.find('.photobakery_grid_gallery_array').length) {
        $this_obj.find('.photobakery_grid_gallery_array').each(function() {
            jQuery(this).find('.photobakery_grid_array_item').each(function() {
                var $this = jQuery(this),
                    photobakery_grid_item = {};
                photobakery_grid_item.slide_type = $this.attr('data-type');
                photobakery_grid_item.img = $this.attr('data-img');
                photobakery_grid_item.thmb = $this.attr('data-thmb');
                photobakery_grid_item.title = $this.attr('data-title');
                photobakery_grid_item.capt = $this.attr('data-caption');
                photobakery_grid_item.alt = $this.attr('data-alt');
                photobakery_grid_item.overlay = $this.attr('data-overlay');
                photobakery_grid_item.counter = $this.attr('data-counter');
                photobakery_grid_item.size = $this.attr('data-size');
                this_items_array.push(photobakery_grid_item);
            });
            jQuery(this).remove();
        });
    }

    this_array.obj = $this_obj;

    this_array.init = function () {
        var this_obj = this;
        this.obj.find('.grid_load_more').on("click", function () {
            this_obj.loadmore.call(this_obj);
        });
        this.setup.call(this);
        this.preloader.call(this);
    };

    this_array.preloader = function() {
        var this_obj = this,
            $this_dom = this.obj;
        if ($this_dom.find('.load_anim_grid:first').size() > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {

                    $this_dom.find('.load_anim_grid:first').removeClass('load_anim_grid').removeClass('anim_el').animate({
                        'z-index': '15'
                    }, 200, function() {
                        $this_dom.find('.photobakery_grid_inner').isotope('layout');
                        this_obj.setup.call(this_obj);
                        this_obj.preloader.call(this_obj);
                    });
                };
            }(new Image(), $this_dom.find('.load_anim_grid:first').find('img').attr('src')));
        } else {
            if ($this_dom.find('.lazy_loading').length) {
                photobakery_check_lazy($this_dom.find('.lazy_loading'));
            }
            this_obj.setup.call(this_obj);
        }
    };

    this_array.setup = function() {
        var this_obj = this,
            $this_dom = this.obj,
            $photobakery_dp = $this_dom.find('.photobakery_dp');
        if (jQuery('body').hasClass('photobakery_drag_protection')) {
            $photobakery_dp.on('mousedown',function(e){
                e.preventDefault();
            });
        }
        $this_dom.find('.grid-item').each(function(){
            if (jQuery(this).hasClass('anim_el2')) {
                jQuery(this).removeClass('anim_el2');
            }
        });
        if ($this_obj.find('.photobakery_grid_inner').size() > 0) {
            $this_dom.find('.photobakery_grid_inner').isotope('layout');
            setTimeout("jQuery('.photobakery_grid_inner').isotope('layout')",1000);
        }
    };

    this_array.loadmore = function() {
        var this_obj = this,
            $this_dom = this.obj,
            photobakery_what_to_append = '',
            photobakery_grid_post_per_page = $this_dom.attr('data-perload'),
            photobakery_color = $this_dom.attr('data-color'),
            photobakery_radius = $this_dom.attr('data-radius'),
            photobakery_content_radius = $this_dom.attr('data-content-radius'),
            photobakery_padding = $this_dom.attr('data-padding'),
            photobakery_uniqid = this.id,
            photobakery_allposts = this.items.length,
            photobakery_count = $this_dom.find('.grid-item').size(),
            photobakery_ins_container = $this_dom.find('.photobakery_grid_inner'),
            photobakery_load_more_button = $this_dom.find('.grid_load_more'),
            items_showed = this_obj.showed,
            last_demo_load = false;

        if (this.showed >= photobakery_allposts) {
            if ($this_dom.hasClass('demo_mode')) {
                this_obj.showed = 0;
                this_obj.loadmore.call(this_obj);
            } else {
                photobakery_load_more_button.slideUp(300);
            }
        } else {
            var photobakery_now_step = items_showed + parseInt(photobakery_grid_post_per_page) - 1;
            if ((photobakery_now_step + 1) < photobakery_allposts) {
                var photobakery_limit = photobakery_now_step;
            } else {
                if ($this_dom.hasClass('demo_mode')) {
                    this_obj.showed = 0;
                    if ((photobakery_now_step + 1) == photobakery_allposts) {
                        last_demo_load = true;
                        var photobakery_limit = photobakery_now_step;
                    } else {
                        this_obj.loadmore.call(this_obj);
                    }
                } else {
                    var photobakery_limit = photobakery_allposts - 1;
                    photobakery_load_more_button.slideUp(300);
                }
            }

            var photobakery_swipebox_class = '';
            if (jQuery('.photobakery_single_gallery_wrapper ').size() > 0) {
                photobakery_swipebox_class = 'swipebox';
            }
            for (var i = items_showed; i <= photobakery_limit; i++) {
                var photobakery_thishref = this_obj.items[i].img,
                    photobakery_what_to_append = photobakery_what_to_append +'\
		<div class="photobakery_gallery_item grid-item element anim_el anim_el2 load_anim_grid grid_b2p" style="padding-left: ' + photobakery_padding + '; padding-bottom: ' + photobakery_padding + ';">\
			<div class="grid-item-inner">\
				<a href="' + photobakery_thishref +'" class="photobakery_pswp_slide photobakery_dp photobakery_no_select" data-elementor-open-lightbox="no" data-size="'+ this.items[i].size +'" data-count="'+ photobakery_count +'" data-caption="'+ this.items[i].capt +'" style="border-radius: ' + photobakery_radius + ';">\
					<img src="'+ this.items[i].thmb +'" alt="' + this.items[i].alt + '" class="grid_thmb"/>\
					<div class="grid-item-content" style="border-radius: ' + photobakery_content_radius + '">\
						<h4 style="color: ' + photobakery_color + ';">'+ this.items[i].title +'</h4>\
					</div>\
					<div class="grid-item-overlay"></div>\
				</a>\
				<div class="photobakery-img-preloader"></div>\
			</div>\
		</div>';
                photobakery_count++;

                // PSWP React
                if (this.items[i].slide_type == 'video') {
                    if(photobakery_thishref.indexOf('youtu') + 1) {
                        //YT Video
                        var videoid_split = photobakery_thishref.split('='),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoid + '?controls=1&autoplay=0&showinfo=0&modestbranding=1&wmode=opaque&rel=0&hd=1&disablekb=1" frameborder="0" allowfullscreen></iframe></div>';
                    }
                    if(photobakery_thishref.indexOf('vimeo') + 1) {
                        //Vimeo Video
                        var videoid_split = photobakery_thishref.split('m/'),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://player.vimeo.com/video/' + videoid + '?api=1&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=0&loop=0&controls=1" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div>';
                    }
                    var this_item = {
                        html : photobakery_pswp_html,
                        title: this.items[i].capt
                    };
                    $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                } else {
                    var item_size = this.items[i].size.split('x'),
                        item_width = item_size[0],
                        item_height = item_size[1],
                        this_item = {
                            src : photobakery_thishref,
                            w : item_width,
                            h : item_height,
                            title: this.items[i].capt
                        };
                    $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                }
                if (!last_demo_load) {
                    this.showed++;
                }
            }

            var $photobakery_newItems = jQuery(photobakery_what_to_append);

            if (photobakery_ins_container.data('isotope')) {
                photobakery_ins_container.isotope('insert', $photobakery_newItems, function() {
                    photobakery_ins_container.find('.photobakery_grid_inner').ready(function() {
                        photobakery_ins_container.isotope('layout');
                        this_obj.setup.call(this_obj);
                    });
                });
            }
            this_obj.setup.call(this_obj);
            this_obj.preloader.call(this_obj);
        }
        jQuery('.photobakery_grid_inner').isotope("layout");
        setTimeout(function () {jQuery('.gallery_grid').isotope("layout");}, 1500);
    };

    this_array.init.call(this_array);
}

function register_proofing_gallery($this_obj) {
    photobakery_grid_array["photobakery_grid_" + $this_obj.attr('data-uniqid')] = {};
    var this_array = photobakery_grid_array["photobakery_grid_" + $this_obj.attr('data-uniqid')];
    this_array.id = $this_obj.attr('data-uniqid');
    this_array.showed = 0;
    this_array.items = [];

    var this_items_array = this_array.items;
    if ($this_obj.find('.photobakery_grid_gallery_array').length) {
        $this_obj.find('.photobakery_grid_gallery_array').each(function() {
            jQuery(this).find('.photobakery_grid_array_item').each(function() {
                var $this = jQuery(this),
                    photobakery_grid_item = {};
                photobakery_grid_item.slide_type = $this.attr('data-type');
                photobakery_grid_item.img = $this.attr('data-img');
                photobakery_grid_item.thmb = $this.attr('data-thmb');
                photobakery_grid_item.title = $this.attr('data-title');
                photobakery_grid_item.capt = $this.attr('data-caption');
                photobakery_grid_item.alt = $this.attr('data-alt');
                photobakery_grid_item.overlay = $this.attr('data-overlay');
                photobakery_grid_item.counter = $this.attr('data-counter');
                photobakery_grid_item.size = $this.attr('data-size');
                this_items_array.push(photobakery_grid_item);
            });
            jQuery(this).remove();
        });
    }

    this_array.obj = jQuery('.photobakery_grid_'+this_array.id);

    this_array.init = function () {
        var this_obj = this;
        this.setup.call(this);
        this.preloader.call(this);
    };

    this_array.preloader = function() {
        var this_obj = this,
            $this_dom = this.obj;
        if ($this_dom.find('.load_anim_grid:first').size() > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    $this_dom.find('.load_anim_grid:first').removeClass('load_anim_grid').removeClass('anim_el').animate({
                        'z-index': '15'
                    }, 200, function() {
                        $this_dom.find('.photobakery_grid_inner').isotope('layout');
                        this_obj.setup.call(this_obj);
                        this_obj.preloader.call(this_obj);
                    });
                };
            }(new Image(), $this_dom.find('.load_anim_grid:first').find('img').attr('src')));
        } else {
            this_obj.setup.call(this_obj);
        }
    };

    this_array.setup = function() {
        var this_obj = this,
            $this_dom = this.obj,
            $photobakery_dp = $this_dom.find('.photobakery_dp');
        if (jQuery('body').hasClass('photobakery_drag_protection')) {
            $photobakery_dp.on('mousedown',function(e){
                e.preventDefault();
            });
        }
        $this_dom.find('.grid-item').each(function(){
            if (jQuery(this).hasClass('anim_el2')) {
                jQuery(this).removeClass('anim_el2');
            }
        });
        if ($this_obj.find('.photobakery_grid_inner').size() > 0) {
            $this_dom.find('.photobakery_grid_inner').isotope('layout');
            setTimeout("jQuery('.photobakery_grid_inner').isotope('layout')",1000);
        }
    };

    this_array.init.call(this_array);
}

function ribbon_setup() {
    if (jQuery('.photobakery_ribbon_slider_wrapper.auto_height').size() > 0) {
        jQuery('.photobakery_ribbon_slider_wrapper.auto_height').each(function() {
            var setHeight = parseInt(jQuery(this).parents('section.elementor-element').children('.elementor-container').css('min-height'),10) - parseInt(jQuery(this).parents('.elementor-column-wrap').css('padding-top'),10) - parseInt(jQuery(this).parents('.elementor-column-wrap').css('padding-bottom'),10);
            jQuery(this).height(setHeight);
            jQuery(this).find('.photobakery_ribbon_slide').each(function(){
                jQuery(this).width(setHeight*jQuery(this).attr('data-ratio'));
            });
        });
    }
    if (jQuery('.photobakery_ribbon_slider_wrapper.screen_height').size() > 0) {
        jQuery('.photobakery_ribbon_slider_wrapper.screen_height').each(function() {
            var $this = jQuery(this),
                setHeight = jQuery(window).height();
            if (jQuery('#wpadminbar').size() > 0) {
                setHeight = setHeight - jQuery('#wpadminbar').height();
            }

            if ($this.hasClass('exclude_class')) {
                if ($this.attr('data-classes') !== '') {
                    var ex_classes_array = $this.attr('data-classes').split(",");
                    jQuery.each(ex_classes_array, function(index,value) {
                        setHeight = setHeight - jQuery(value).height();
                    });
                }
            }
            if ($this.hasClass('exclude_height')) {
                if ($this.attr('data-rheight') !== '') {
                    setHeight = setHeight - parseInt($this.attr('data-rheight'),10);
                }
            }

            setHeight = Math.ceil(setHeight);
            jQuery(this).height(setHeight);
            jQuery(this).find('.photobakery_ribbon_slide').each(function() {
                var set_width = Math.ceil(setHeight*jQuery(this).attr('data-ratio'));
                jQuery(this).width(set_width);
            });

            if (!jQuery('.photobakery_footer').hasClass('photobakery_template_footer_solid') && jQuery(this).attr('data-footer') !== 'yes') {
                jQuery(this).find('.photobakery_ribbon_content').css('bottom', jQuery('.photobakery_footer').height()).addClass('remove_gradient_overlay');
                jQuery(this).find('.photobakery_slider_overlay_gradient').hide();
            }

        });
    }
}

function photobakery_split_setup(this_id) {
    var $this = jQuery('.photobakery_split_wrapper'+this_id);
    photobakery_split_sliders[this_id] = {};

    var this_obj = photobakery_split_sliders[this_id];
    this_obj.lastChange = +new Date();
    this_obj.id = this_id;
    this_obj.obj = $this;
    this_obj.slider = $this.find('.photobakery_split');
    this_obj.active_left = 0;
    this_obj.active_right = 0;
    this_obj.max_left = $this.find('.photobakery_left_slide').length;
    this_obj.max_right = $this.find('.photobakery_right_slide').length;
    this_obj.state = 'loading';

    this_obj.init = function() {
        var this_obj_in = this;
        this_obj_in.setup(this_obj_in,'');
        if (this_obj_in.active_slide == 0)
            this_obj_in.change.call(this_obj_in,1);

        this_obj_in.left_slides = [];
        this_obj_in.obj.find('.photobakery_left_slide').each(function(){
            this_obj_in.left_slides[jQuery(this).attr('data-count')] = {};
            this_obj_in.left_slides[jQuery(this).attr('data-count')].src = jQuery(this).attr('data-src');
            this_obj_in.left_slides[jQuery(this).attr('data-count')].html = jQuery(this).html();
        });

        this_obj_in.right_slides = [];
        this_obj_in.obj.find('.photobakery_right_slide').each(function(){
            this_obj_in.right_slides[jQuery(this).attr('data-count')] = {};
            this_obj_in.right_slides[jQuery(this).attr('data-count')].src = jQuery(this).attr('data-src');
            this_obj_in.right_slides[jQuery(this).attr('data-count')].html = jQuery(this).html();
        });

        this_obj_in.obj.find('.photobakery_left_slide').remove();
        this_obj_in.obj.find('.photobakery_right_slide').remove();

        // Slides Init
        this_obj_in.active_left = 1;
        this_obj_in.active_right = 1;
        var $this_slider = this_obj_in.slider;
        var before_slide_left, active_slide_left, after_slide_left, after_slide_left_count = 2;
        if (this_obj_in.max_left < 2)
            after_slide_left_count = 1;
        before_slide_left = '\
<div class="photobakery_left_slide photobakery_split_before photobakery_split_slide" data-count="'+ this_obj_in.max_left +'" style="background-image:url('+ this_obj_in.left_slides[this_obj_in.max_left].src +')">\
	'+ this_obj_in.left_slides[this_obj_in.max_left].html +'\
</div>';
        active_slide_left = '\
<div class="photobakery_left_slide photobakery_split_active photobakery_split_slide" data-count="1" style="background-image:url('+ this_obj_in.left_slides[1].src +')">\
	'+ this_obj_in.left_slides[1].html +'\
</div>';
        after_slide_left = '\
<div class="photobakery_left_slide photobakery_split_after photobakery_split_slide" data-count="'+ after_slide_left_count +'" style="background-image:url('+ this_obj_in.left_slides[after_slide_left_count].src +')">\
	'+ this_obj_in.left_slides[after_slide_left_count].html +'\
</div>';
        $this_slider.append(before_slide_left).append(active_slide_left).append(after_slide_left);

        var before_slide_right, active_slide_right, after_slide_right, after_slide_right_count = 2;
        if (this_obj_in.max_right < 2)
            after_slide_right_count = 1;
        before_slide_right = '\
<div class="photobakery_right_slide photobakery_split_before photobakery_split_slide" data-count="'+ this_obj_in.max_right +'" style="background-image:url('+ this_obj_in.right_slides[this.max_right].src +')">\
	'+ this_obj_in.right_slides[this.max_right].html +'\
</div>';
        active_slide_right = '\
<div class="photobakery_right_slide photobakery_split_active photobakery_split_slide" data-count="1" style="background-image:url('+ this_obj_in.right_slides[1].src +')">\
	'+ this_obj_in.right_slides[1].html +'\
</div>';
        after_slide_right = '\
<div class="photobakery_right_slide photobakery_split_after photobakery_split_slide" data-count="'+ after_slide_right_count +'" style="background-image:url('+ this_obj_in.right_slides[after_slide_right_count].src +')">\
	'+ this_obj_in.right_slides[after_slide_right_count].html +'\
</div>';
        $this_slider.append(before_slide_right).append(active_slide_right).append(after_slide_right);

        // Touch and Click Events
        this_obj_in.obj.on("swipeleft", function () {
            this_obj_in.change.call(this_obj_in,1);
        });
        this_obj_in.obj.on("swipeup", function () {
            this_obj_in.change.call(this_obj_in,1);
        });
        this_obj_in.obj.on("swiperight", function () {
            this_obj_in.change.call(this_obj_in,-1);
        });
        this_obj_in.obj.on("swipedown", function () {
            this_obj_in.change.call(this_obj_in,-1);
        });

        this_obj_in.obj.find('.photobakery_split_btn_prev').on('click', function(){
            this_obj_in.change.call(this_obj_in,-1);
        });
        this_obj_in.obj.find('.photobakery_split_btn_next').on('click', function(){
            this_obj_in.change.call(this_obj_in,1);
        });

        this_obj_in.obj.on('mousewheel', function(event) {
            event.preventDefault();
            if(+new Date() - this.lastChange > 100){
                var half_screen = photobakery_window.width()/2;
                if (event.deltaY < 0) {
                    if (event.pageX <= half_screen) {
                        this_obj_in.change.call(this_obj_in,1);
                    } else {
                        this_obj_in.change.call(this_obj_in,-1);
                    }
                }
                if (event.deltaY > 0) {
                    if (event.pageX <= half_screen) {
                        this_obj_in.change.call(this_obj_in,-1);
                    } else {
                        this_obj_in.change.call(this_obj_in,1);
                    }
                }
                this.lastChange = +new Date();
            } else {
                this.lastChange = +new Date();
            }
        });

        // Window Events
        jQuery(window).on('load', function(){
            this_obj_in.obj.removeClass('photobakery_module_loading');
            this_obj_in.setup.call(this_obj_in,'');
        });
        jQuery(window).on('resize', function(){
            this_obj_in.setup.call(this_obj_in,'');
        });
    };

    this_obj.setup = function(action) {
        var this_obj_in = this,
            $this_obj = this_obj_in.obj;
        switch (action) {
            default:
                if (jQuery('.photobakery_split_wrapper').hasClass('photobakery_vertical_split')) {
                    if (photobakery_window.height() > photobakery_window.width()) {
                        jQuery('.photobakery_split_wrapper').removeClass('photobakery_vertical_split').addClass('photobakery_horizontal_split');
                    } else {
                        jQuery('.photobakery_split_wrapper').removeClass('photobakery_horizontal_split').addClass('photobakery_vertical_split');
                    }
                }

                if (jQuery('.photobakery_single_gallery_wrapper').length) {
                    var this_height = photobakery_window.height(),
                        this_top = 0;

                    if (jQuery('#wpadminbar').length) {
                        this_height = this_height - jQuery('#wpadminbar').height();
                        this_top = jQuery('#wpadminbar').height();
                    }
                    if (this.obj.attr('data-header') == 'yes') {
                        this_height = this_height - photobakery_header.height();
                        this_top = this_top + photobakery_header.height();
                    }
                    if (this.obj.attr('data-footer') == 'yes') {
                        this_height = this_height - photobakery_footer.height();
                    }
                    this.obj.height(this_height).css('top', this_top + 'px');

                    if (photobakery_footer.length) {
                        photobakery_footer.css({
                            'position' : 'fixed',
                            'left' : '0px',
                            'bottom' : '0px',
                            'width' : '100%'
                        });
                    }
                } else {
                    if ($this_obj.hasClass('auto_height')) {
                        var $this_column_wrap = $this_obj.parents('.vc_row');

                        this_height = $this_column_wrap.find('.vc_column-inner').height();

                        $this_obj.height(this_height);
                    }
                    if ($this_obj.hasClass('screen_height')) {
                        this_height = photobakery_window.height();
                        
                        if (jQuery('#wpadminbar').size() > 0) {
                            this_height = this_height - jQuery('#wpadminbar').height();
                        }

                        if ($this_obj.hasClass('exclude_class')) {
                            if ($this_obj.attr('data-classes') !== '') {
                                var ex_classes_array = $this_obj.attr('data-classes').split(",");
                                jQuery.each(ex_classes_array, function(index,value) {
                                    this_height = this_height - jQuery(value).height();
                                });
                            }
                        }
                        if ($this_obj.hasClass('exclude_height')) {
                            if ($this_obj.attr('data-rheight') !== '') {
                                this_height = this_height - parseInt($this_obj.attr('data-rheight'),10);
                            }
                        }

                        this_height = Math.ceil(this_height);
                        $this_obj.height(this_height);
                    }
                }

        }
    };

    this_obj.fix_item = function(check_item,side) {
        var this_obj_in = this;
        if(side == 'left')
            var max_count = this_obj_in.max_left;
        if(side == 'right')
            var max_count = this_obj_in.max_right;

        if (this_obj_in.obj.hasClass('infinity_scroll')) {
            if (check_item < 1)
                check_item = max_count;
            if (check_item > max_count)
                check_item = 1;
        } else {
            if (check_item < 1)
                check_item = 1;
            if (check_item > max_count)
                check_item = max_count;
        }
        return check_item;
    };

    this_obj.change = function(dir) {
        var this_obj_in = this;
        var this_obj = this;
        if (dir > 0) {
            this_obj_in.obj.find('.photobakery_split_before').remove();
            this_obj_in.obj.find('.photobakery_split_active').removeClass('photobakery_split_active').addClass('photobakery_split_before');
            this_obj_in.obj.find('.photobakery_split_after').removeClass('photobakery_split_after').addClass('photobakery_split_active');

            this_obj_in.active_left++;
            this_obj_in.active_right++;
            this_obj_in.active_left = this_obj_in.fix_item.call(this_obj, this_obj.active_left, 'left');
            this_obj_in.active_right = this_obj_in.fix_item.call(this_obj, this_obj.active_right, 'right');

            var left_after = this_obj_in.active_left + 1,
                right_after = this_obj_in.active_right + 1;
            left_after = this_obj_in.fix_item.call(this_obj, left_after, 'left');
            right_after = this_obj_in.fix_item.call(this_obj, right_after, 'right');

            var append_left = '\
		<div class="photobakery_left_slide photobakery_split_after photobakery_split_slide" data-count="'+ left_after +'" style="background-image:url('+ this_obj_in.left_slides[left_after].src +')">\
			'+ this_obj_in.left_slides[left_after].html +'\
		</div>';
            var append_right = '\
		<div class="photobakery_right_slide photobakery_split_after photobakery_split_slide" data-count="'+ right_after +'" style="background-image:url('+ this_obj_in.right_slides[right_after].src +')">\
			'+ this_obj_in.right_slides[right_after].html +'\
		</div>';

            this_obj_in.slider.append(append_left).append(append_right);
        }
        if (dir < 0) {
            this_obj_in.obj.find('.photobakery_split_after').remove();
            this_obj_in.obj.find('.photobakery_split_active').removeClass('photobakery_split_active').addClass('photobakery_split_after');
            this_obj_in.obj.find('.photobakery_split_before').removeClass('photobakery_split_before').addClass('photobakery_split_active');

            this_obj_in.active_left--;
            this_obj_in.active_right--;
            this_obj_in.active_left = this_obj_in.fix_item.call(this_obj_in, this_obj_in.active_left, 'left');
            this_obj_in.active_right = this_obj_in.fix_item.call(this_obj_in, this_obj_in.active_right, 'right');

            var left_before = this_obj_in.active_left - 1,
                right_before = this_obj_in.active_right - 1;
            left_before = this_obj_in.fix_item.call(this_obj_in, left_before, 'left');
            right_before = this_obj_in.fix_item.call(this_obj_in, right_before, 'right');

            var append_left = '\
		<div class="photobakery_left_slide photobakery_split_before photobakery_split_slide" data-count="'+ left_before +'" style="background-image:url('+ this_obj_in.left_slides[left_before].src +')">\
			'+ this_obj_in.left_slides[left_before].html +'\
		</div>';
            var append_right = '\
		<div class="photobakery_right_slide photobakery_split_before photobakery_split_slide" data-count="'+ right_before +'" style="background-image:url('+ this_obj_in.right_slides[right_before].src +')">\
			'+ this_obj_in.right_slides[right_before].html +'\
		</div>';

            this_obj_in.slider.append(append_left).append(append_right);
        }
    };

    this_obj.load = function() {
        var this_obj_in = this;
        if (this_obj_in.obj.find('.photobakery_split2preload:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.photobakery_split2preload:first').removeClass('photobakery_split2preload').animate({
                        'z-index': '3'
                    }, 10, function() {
                        this_obj_in.load.call(this_obj_in);
                    });
                };
            }(new Image(), jQuery('.photobakery_split2preload:first').attr('data-src')));
        } else {
            this_obj_in.obj.removeClass('photobakery_module_loading');
            this_obj_in.init.apply(this_obj_in);
        }
    };

    this_obj.load.apply(this_obj);

    jQuery(this).on('mouseover', function(){
        var $this = jQuery(this),
            this_id = $this.attr('data-id'),
            this_obj = photobakery_split_sliders[this_id];

        $this.addClass('photobakery_kbd_activated');
    });

    jQuery(this).on('mouseleave', function(){
        var $this = jQuery(this),
            this_id = $this.attr('data-id'),
            this_obj = photobakery_split_sliders[this_id];

        $this.removeClass('photobakery_kbd_activated');
    });

    jQuery(document.documentElement).keyup(function (event) {
        var this_id = jQuery('.photobakery_kbd_activated').attr('data-id'),
            this_obj = photobakery_split_sliders[this_id];

        if ((event.keyCode == 37 || event.keyCode == 38)) {
            event.preventDefault();
            this_obj.change.call(this_obj,-1);
        }
        if ((event.keyCode == 39 || event.keyCode == 40)) {
            event.preventDefault();
            this_obj.change.call(this_obj,1);
        }
    });
}

// Item Approve
jQuery(document).on('click', '.grid-item-button-approve', function (event) {
    event.preventDefault();
    var item_container = jQuery(this).parents('.grid-item-proofing'),
        this_link = jQuery(this);
    if (item_container.hasClass('approved')) {
        // Already Approved
        jQuery.post(photobakery_ajaxurl.url, {
            action:'photobakery_photo_proofing',
            module_id : jQuery(this).attr('data-moduleid'),
            img_id : jQuery(this).attr('data-imgid'),
            action_type : 'remove'
        }, function (response) {
            item_container.removeClass('approved');
            item_container.addClass('unviewed');
            this_link.find('i').removeClass().addClass('pm-icon-ok-circled');
        });
    } else {
        // Not Approved
        // Already Approved
        jQuery.post(photobakery_ajaxurl.url, {
            action:'photobakery_photo_proofing',
            module_id : jQuery(this).attr('data-moduleid'),
            img_id : jQuery(this).attr('data-imgid'),
            action_type : 'approve'
        }, function (response) {
            item_container.addClass('approved');
            item_container.removeClass('unviewed');
            this_link.find('i').removeClass().addClass('pm-icon-minus-circled');
        });

    }
    if (item_container.hasClass('unapproved')) {
        // Was Unapproved
        item_container.removeClass('unapproved');
        item_container.find('.grid-item-button-unapprove i').removeClass().addClass('pm-icon-cancel-circled');
    }
});

// Item Unapprove
jQuery(document).on('click', '.grid-item-button-unapprove', function (event) {
    event.preventDefault();
    var item_container = jQuery(this).parents('.grid-item-proofing'),
        this_link = jQuery(this);
    if (item_container.hasClass('unapproved')) {
        // Already Unapprved
        jQuery.post(photobakery_ajaxurl.url, {
            action:'photobakery_photo_proofing',
            module_id : jQuery(this).attr('data-moduleid'),
            img_id : jQuery(this).attr('data-imgid'),
            action_type : 'remove'
        }, function (response) {
            item_container.removeClass('unapproved');
            item_container.addClass('unviewed');
            this_link.find('i').removeClass().addClass('pm-icon-cancel-circled');
        });
    } else {
        // Not Unapproved
        jQuery.post(photobakery_ajaxurl.url, {
            action:'photobakery_photo_proofing',
            module_id : jQuery(this).attr('data-moduleid'),
            img_id : jQuery(this).attr('data-imgid'),
            action_type : 'unapprove'
        }, function (response) {
            item_container.addClass('unapproved');
            item_container.removeClass('unviewed');
            this_link.find('i').removeClass().addClass('pm-icon-minus-circled');
        });
    }
    if (item_container.hasClass('approved')) {
        // Was Approved
        item_container.removeClass('approved');
        item_container.find('.grid-item-button-approve i').removeClass().addClass('pm-icon-ok-circled');
    }
});

// Email Notify
jQuery(document).on('click', '.photobakery_photo_proofing_notified', function () {
    event.preventDefault();
    var this_button = jQuery(this),
        this_wrapper = this_button.parent('.photobakery_photo_proofing_notified_wrapper'),
        this_message = this_wrapper.find('.photobakery_photo_proofing_notified_message');
    this_button.slideUp(300);
    jQuery.post(photobakery_ajaxurl.url, {
        action : 'photobakery_photo_proofing_notify',
        email : jQuery(this).attr('data-email'),
        url : document.URL,
        message: jQuery(this).attr('data-message')
    }, function (response) {
        this_wrapper.addClass('photobakery_already_notified');
        this_message.html(response).slideDown(300);
    });
});

// Filtering
jQuery('.photobakery_grid_filter li a').on('click', function(){
    jQuery(this).parents('.photobakery_grid_filter').find('a').removeClass('is-checked');
    jQuery(this).parents('.photobakery_grid_filter').find('li').removeClass('is-checked');
    jQuery(this).addClass('is-checked');
    jQuery(this).parent().addClass('is-checked');
    var filterSelector = jQuery(this).attr('data-category');

    jQuery(this).parents('div.photobakery_proofing_cont').find('.isotope_filtering').isotope({
        filter: filterSelector
    });
    return false;
});

function register_grid_gallery_w_filter($this_obj) {
    photobakery_grid_filter_array["photobakery_grid_" + $this_obj.attr('data-uniqid')] = {};
    var this_array = photobakery_grid_filter_array["photobakery_grid_" + $this_obj.attr('data-uniqid')];
    this_array.id = $this_obj.attr('data-uniqid');
    this_array.showed = [];
    this_array.items = [];

    // Lazy Loading
    if (jQuery('.lazy_loading').length) {
        jQuery('.lazy_loading').each(function() {
            var $this = jQuery(this);
            if (!$this.hasClass('portfel_ajax_query_posts_disabled')) {
                photobakery_check_lazy($this);
            }
        });
        photobakery_window.on('scroll', function() {
            jQuery('.lazy_loading').each(function() {
                var $this = jQuery(this);
                if (!$this.hasClass('portfel_ajax_query_posts_disabled')) {
                    photobakery_check_lazy($this);
                }
            });
        });
    }

    if ($this_obj.find('.photobakery_grid_gallery_array').length) {

        $this_obj.find('.photobakery_grid_gallery_array').each(function() {
            var this_slug = jQuery(this).attr('data-categ');
            this_array.items[this_slug] = [];
            this_array.showed[this_slug] = 0;

            jQuery(this).find('.photobakery_grid_filter_array_item').each(function() {
                var $this = jQuery(this),
                    photobakery_grid_item = {};
                photobakery_grid_item.slide_type = $this.attr('data-type');
                photobakery_grid_item.img = $this.attr('data-img');
                photobakery_grid_item.thmb = $this.attr('data-thmb');
                photobakery_grid_item.title = $this.attr('data-title');
                photobakery_grid_item.capt = $this.attr('data-caption');
                photobakery_grid_item.alt = $this.attr('data-alt');
                photobakery_grid_item.overlay = $this.attr('data-overlay');
                photobakery_grid_item.counter = $this.attr('data-counter');
                photobakery_grid_item.size = $this.attr('data-size');
                this_array.items[this_slug].push(photobakery_grid_item);
            });
            jQuery(this).remove();
        });
    }

    this_array.obj = $this_obj;

    this_array.init = function () {
        var this_obj = this;

        this.obj.find('.grid_load_more').on("click", function () {
            this_obj.loadmore.call(this_obj,'default');
        });

        this.obj.find('.photobakery_grid_filter li a').on('click', function(){
            var $this = jQuery(this);
            $this.parents('.photobakery_grid_filter').find('a').removeClass('is-checked');
            $this.parents('.photobakery_grid_filter').find('li').removeClass('is-checked');
            $this.addClass('is-checked');
            $this.parent().addClass('is-checked');
            var filterSelector = $this.attr('data-category');

            $this.parents('.photobakery_grid_wrapper').find('.photobakery_load_more_button').hide();
            $this.parents('.photobakery_grid_wrapper').find('[data-categ="'+filterSelector.substring(1)+'"]').show();
            $this.parent('li').parent('ul').parent('div').find('.isotope_filtering').isotope({
                filter: filterSelector
            });


            if ($this.parent('li').hasClass('not-loaded-yet')) {
                $this.parent('li').removeClass('not-loaded-yet');
                this_obj.loadmore.call(this_obj,'first_load');
            }
            return false;
        });

        if (this.obj.find('.photobakery_grid_filter li').length) {
            var first_filter = this.obj.find('.photobakery_grid_filter li').eq(0).find('a'),
                load_more = this.obj.find('.photobakery_load_more_button'),
                current_categ = first_filter.attr('data-category').substring(1);

            first_filter.trigger('click');
            load_more.hide();
            this.obj.find('[data-categ="'+current_categ+'"]').show();
        }

        this.setup.call(this);
        this.preloader.call(this);
    };

    this_array.preloader = function() {
        var this_obj = this,
            $this_dom = this.obj;
        if ($this_dom.find('.load_anim_grid:first').size() > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {

                    $this_dom.find('.load_anim_grid:first').removeClass('load_anim_grid').removeClass('anim_el').animate({
                        'z-index': '3'
                    }, 200, function() {
                        $this_dom.find('.photobakery_grid_inner').isotope('layout');
                        this_obj.setup.call(this_obj);
                        this_obj.preloader.call(this_obj);
                    });
                };
            }(new Image(), $this_dom.find('.load_anim_grid:first').find('img').attr('src')));
        } else {
            if ($this_dom.find('.lazy_loading').length) {
                photobakery_check_lazy($this_dom.find('.lazy_loading'));
            }
            this_obj.setup.call(this_obj);
        }
    };

    this_array.setup = function() {
        var this_obj = this,
            $this_dom = this.obj,
            $photobakery_dp = $this_dom.find('.photobakery_dp');
        if (jQuery('body').hasClass('photobakery_drag_protection')) {
            $photobakery_dp.on('mousedown',function(e){
                e.preventDefault();
            });
        }
        $this_dom.find('.grid-item').each(function(){
            if (jQuery(this).hasClass('anim_el2')) {
                jQuery(this).removeClass('anim_el2');
            }
        });
        if ($this_obj.find('.photobakery_grid_inner').size() > 0) {
            $this_dom.find('.photobakery_grid_inner').isotope('layout');
            setTimeout("jQuery('.photobakery_grid_inner').isotope('layout')",1000);
        }
    };

    this_array.loadmore = function(action) {
        var this_obj = this,
            $this_dom = this.obj,
            this_categ = this.obj.find('a.is-checked').attr('data-category').substring(1),
            photobakery_what_to_append = '',
            photobakery_grid_post_per_page = $this_dom.attr('data-perload'),
            photobakery_color = $this_dom.attr('data-color'),
            photobakery_radius = $this_dom.attr('data-radius'),
            photobakery_content_radius = $this_dom.attr('data-content-radius'),
            photobakery_padding = $this_dom.attr('data-padding'),
            photobakery_uniqid = this.id,
            photobakery_allposts = this.items[this_categ].length,
            photobakery_count = $this_dom.find('.grid-item').size(),
            photobakery_ins_container = $this_dom.find('.photobakery_grid_inner'),
            photobakery_load_more_button = $this_dom.find('.grid_load_more[data-categ="'+this_categ+'"]'),
            items_showed = this_obj.showed[this_categ],
            last_demo_load = false;

        if (action == 'first_load') {
            photobakery_grid_post_per_page = $this_dom.attr('data-firstload');
        }

        if (this.showed[this_categ] >= photobakery_allposts) {
            if ($this_dom.hasClass('demo_mode')) {
                this_obj.showed[this_categ] = 0;
                this_obj.loadmore.call(this_obj,'default');
            } else {
                photobakery_load_more_button.slideUp(300, function(){
                    jQuery(this).remove();
                });
            }
        } else {
            var photobakery_now_step = items_showed + parseInt(photobakery_grid_post_per_page) - 1;
            if ((photobakery_now_step + 1) < photobakery_allposts) {
                var photobakery_limit = photobakery_now_step;
            } else {
                if ($this_dom.hasClass('demo_mode')) {
                    this_obj.showed[this_categ] = 0;
                    if ((photobakery_now_step + 1) == photobakery_allposts) {
                        last_demo_load = true;
                        var photobakery_limit = photobakery_now_step;
                    } else {
                        this_obj.loadmore.call(this_obj,'default');
                    }
                } else {
                    var photobakery_limit = photobakery_allposts - 1;
                    photobakery_load_more_button.slideUp(300, function(){
                        jQuery(this).remove();
                    });
                }
            }

            var photobakery_swipebox_class = '';
            if (jQuery('.photobakery_single_gallery_wrapper ').size() > 0) {
                photobakery_swipebox_class = 'swipebox';
            }
            for (var i = items_showed; i <= photobakery_limit; i++) {
                var photobakery_thishref = this_obj.items[this_categ][i].img,
                    photobakery_what_to_append = photobakery_what_to_append +'\
		<div class="photobakery_gallery_item grid-item element anim_el anim_el2 load_anim_grid grid_b2p '+ this_categ +'" style="padding-left: ' + photobakery_padding + '; padding-bottom: ' + photobakery_padding + '">\
			<div class="grid-item-inner">\
				<a href="' + photobakery_thishref +'" class="photobakery_pswp_slide photobakery_dp photobakery_no_select" data-elementor-open-lightbox="no" data-size="'+ this.items[this_categ][i].size +'" data-count="'+ photobakery_count +'" data-caption="'+ this.items[this_categ][i].capt +'" style="border-radius: ' + photobakery_radius + ';">\
					<img src="'+ this.items[this_categ][i].thmb +'" alt="' + this.items[this_categ][i].alt + '" class="grid_thmb"/>\
					<div class="grid-item-content" style="border-radius: ' + photobakery_content_radius + ';">\
						<h4 style="color: ' + photobakery_color + ';">'+ this.items[this_categ][i].title +'</h4>\
					</div>\
					<div class="grid-item-overlay"></div>\
				</a>\
				<div class="photobakery-img-preloader"></div>\
			</div>\
		</div>';
                photobakery_count++;

                // PSWP React
                if (this.items[this_categ][i].slide_type == 'video') {
                    if(photobakery_thishref.indexOf('youtu') + 1) {
                        //YT Video
                        var videoid_split = photobakery_thishref.split('='),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoid + '?controls=1&autoplay=0&showinfo=0&modestbranding=1&wmode=opaque&rel=0&hd=1&disablekb=1" frameborder="0" allowfullscreen></iframe></div>';
                    }
                    if(photobakery_thishref.indexOf('vimeo') + 1) {
                        //Vimeo Video
                        var videoid_split = photobakery_thishref.split('m/'),
                            videoid = videoid_split[1],
                            photobakery_pswp_html = '<div class="photobakery_pswp_video_wrapper"><iframe width="100%" height="100%" src="https://player.vimeo.com/video/' + videoid + '?api=1&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=0&loop=0&controls=1" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div>';
                    }
                    var this_item = {
                        html : photobakery_pswp_html
                    };
                    $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                } else {
                    var item_size = this.items[this_categ][i].size.split('x'),
                        item_width = item_size[0],
                        item_height = item_size[1],
                        this_item = {
                            src : photobakery_thishref,
                            w : item_width,
                            h : item_height,
                            title: this.items[this_categ][i].capt,
                        };
                    $pswp_gallery_array['photobakery_gallery_' + photobakery_uniqid].slides.push(this_item);
                }

                if (!last_demo_load) {
                    this.showed[this_categ]++;
                }
            }

            var $photobakery_newItems = jQuery(photobakery_what_to_append);

            if (photobakery_ins_container.data('isotope')) {
                photobakery_ins_container.isotope('insert', $photobakery_newItems, function() {
                    photobakery_ins_container.find('.photobakery_grid_inner').ready(function() {
                        photobakery_ins_container.isotope('layout');
                        this_obj.setup.call(this_obj);
                    });
                });
            }
            this_obj.setup.call(this_obj);
            this_obj.preloader.call(this_obj);
        }
        jQuery('.photobakery_grid_inner').isotope("layout");
        setTimeout(function () {jQuery('.gallery_grid').isotope("layout");}, 1500);
    };

    this_array.init.call(this_array);
}
