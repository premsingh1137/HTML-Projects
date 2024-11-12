//Add for bubble effect
(function() {
    var paper, circs, i, nowX, nowY, timer, props = {}, toggler = 0, elie, dx, dy, rad, cur, opa;
    function ran(min, max)  
    {  
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 
    function moveIt()
    {
        for(i = 0; i < circs.length; ++i)
        {            
            if (! circs[i].time) 
            {
                circs[i].time  = ran(30, 2000);
                circs[i].deg   = ran(179, 100);
                circs[i].vel   = ran(1, 5);  
                circs[i].curve = ran(0, 1);
                circs[i].fade  = ran(0, 1);
                circs[i].grow  = ran(-2, 2); 
            }                
            nowX = circs[i].attr("cx");
            nowY = circs[i].attr("cy");   
            dx = circs[i].vel * Math.cos(circs[i].deg * Math.PI/180);
            dy = circs[i].vel * Math.sin(circs[i].deg * Math.PI/180);
            nowX += dx;
            nowY += dy;
            if (nowX < 0) nowX = 1600 + nowX;
            else          nowX = nowX % 1600;            
            if (nowY < 0) nowY = 1600 + nowY;
            else          nowY = nowY % 1600;            
            circs[i].attr({cx: nowX, cy: nowY});            
            rad = circs[i].attr("r");
            if (circs[i].grow > 0) circs[i].attr("r", Math.min(20, rad +  .1));
            else                   circs[i].attr("r", Math.max(10,  rad -  .1));            
            if (circs[i].curve > 0) circs[i].deg = circs[i].deg + 2;
            else                    circs[i].deg = circs[i].deg - 2;            
            opa = circs[i].attr("fill-opacity");
            if (circs[i].fade > 0) {
                circs[i].attr("fill-opacity", Math.max(.3, opa -  .01));
                circs[i].attr("stroke-opacity", Math.max(.3, opa -  .01)); }
            else {
                circs[i].attr("fill-opacity", Math.min(1, opa +  .01));
                circs[i].attr("stroke-opacity", Math.min(1, opa +  .01)); }
            circs[i].time = circs[i].time - 1;            
            if (circs[i].vel < 1) circs[i].time = 0;
            else circs[i].vel = circs[i].vel - .05;                     
        } 
        timer = setTimeout(moveIt, 50);
    }    
    window.onload = function () {
        paper = Raphael("canvas", 1600,1000);
        circs = paper.set();
        for (i = 0; i < 30; ++i)
        {
            opa = ran(3,10)/10;
            circs.push(paper.circle(ran(0,500), ran(0,500), ran(10,30)).attr({"fill-opacity": opa,
                                                                           "stroke-opacity": opa}));
        }
        circs.attr({fill: "#f63d4f", stroke: "#f1888e"});
        moveIt();
        elie = document.getElementById("toggle");
        elie.onclick = function() {
            (toggler++ % 2) ? (function(){
                    moveIt();
                    elie.value = " Stop ";
                }()) : (function(){
                    clearTimeout(timer);
                    elie.value = " Start ";
                }());
        }
    };
}());
// Add for Civitavecchia section slider
$(function () {
      $("#slider3").responsiveSlides({
		auto:false,
        pager: true,
        nav: true,
        manualControls: '#slider3-pager',
      });		
      $("#slider4").responsiveSlides({
        auto:false,
        pager: true,
        nav: true,
        speed:500,
        namespace: "callbacks",       
      });
    });
// Add for Civitavecchia section tab
$('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);

                $name.text($tab.text());

                $info.show();
            }
        });

        $('#verticalTab').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true
        });
// Add for login Toggle	
 jQuery(function(){
		jQuery('.login, .close-btn').click(function(){				
			if( $('.login').hasClass("open") ){
				$('.login').removeClass("open");
				$(".login a").removeClass("active")	
			} else {
				$('.login').addClass("open");
				$(".login a").addClass("active")	
			}	
			jQuery('#login-box').slideToggle();	
		});		
	 });	 
	
//Add For Mobile menu scroll
var menuRight = document.getElementById( 'cbp-spmenu-s2' ),				
				showRight = document.getElementById( 'showRight' ),
				showRight1 = document.getElementById( 'showRight1' ),				
				showRightPush = document.getElementById( 'showRightPush' ),
				body = document.body;
			
			showRight.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRight' );
			};
			showRight1.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRight1' );
			};
			function disableOther( button ) {
				
				if( button !== 'showRight' ) {
					classie.toggle( showRight, 'disabled' );
				}				
			}
//For site scroll 
var caption=[
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>",
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>",
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>",
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>",
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>",
"<h1>Italy Shore excursion <span> are a great way to experience all that your destination has to offer</span></h1>"
];
var $portfolio = $('#portfolio'),
	$goTop = $('#go-top'),
	$preloader = $('#preloader'),
	InfoBox;
var $window = $(window),
	windowWidth = $window.width(),
	windowTop = $window.scrollTop(),
	mapObject, marker, yPos, coords, TimelineLite;
var App = {	
	start: function() {		
		// on window resize
		App.onResize();
		// on window load
		App.onLoad();
		// on page scroll
		App.onScroll();
		// on document ready
		App.onMousewheel();
		// initaite slider
		App.sliderInit();
		// bind all events
		App.bind();
		// form validation, captcha, etc.
		App.getInTouch();
		// navigation scroll to any section by .anchor class and #
		App.anchorScroll();
		// scroll to top button
		App.goTop(windowTop);
		// init the parallax effects
		App.homeParallax();
		// init owl carosuel
		App.owlCarousel();
		// sticky header menu
		App.sticky();
		// init the portfolio
		App.portfolio.start();		
	},	
	onScreen: function() {		
		if($('.charts').is_on_screen()) {
			App.pies();
		}		
		if($('.screens').is_on_screen()) {
			App.screens();
		}		
		if($('.facts').is_on_screen()) {
			App.facts();
		}		
	},	
	coreValues: function() {},	
	customers: function() {},	
	facts: function() {},	
	screens: function() {},	
	preloaderFinish: function() {},	
	sticky: function() {		
		if($(window).scrollTop() > 500) {
			$('#wrapper').addClass('sticky');
		}else{
			$('#wrapper').removeClass('sticky');
		}		
	},	
	owlCarousel: function() {},	
	pies: function() {		
		$('.chart').each(function() {});
	},	
	sliderInit: function() {		
		$('#carousel').height($(window).height());		
		if($('#carousel').length) {
			$.mbBgndGallery.buildGallery({
				containment:"#carousel",
				timer:2000,
				effTimer:4000,
				controls:"#controls",
				grayScale:false,
				shuffle:true,
				preserveWidth:false,
				onChange:function(idx){					
					$(".main-text").html(caption[idx.imageCounter]);					
				},
				effect:"zoom",				
				images:[
					"img/sliderimg1.jpg",
					"img/sliderimg2.jpg",
					"img/sliderimg3.jpg",
					"img/sliderimg4.jpg",
					"img/sliderimg5.jpg",
					"img/sliderimg6.jpg",
				]				
			});
		}
	},	
	slideText: function(index) {		
		$('.slide-text').stop(true,true).animate({'top': (index-1)*-21}, 300, 'easeOutExpo');		
	},	
	homeParallax: function() {		
		$('#portfolio-box').scroll(function() {});		
		$(window).scroll(function() {			
			if(windowWidth > 768) {
				if($('.references').is_on_screen()) {					
					yPos = ($(window).scrollTop() - ($('.references').offset().top + $('.references').outerHeight())) * 0.5;
					coords = '50% '+ yPos + 'px';					
					$('.references').css({ backgroundPosition: coords });
				}				
				if($('.testimonial').is_on_screen()) {					
					yPos = ($(window).scrollTop() - ($('.testimonial').offset().top + $('.testimonial').outerHeight())) * 0.5;
					coords = '50% '+ yPos + 'px';					
					$('.testimonial').css({ backgroundPosition: coords });
				}
			}			
		});
	},	
	onResize: function() {		
		$window.resize(function() {			
			if($('#portfolio-box.visible').length > 0) {
				$('#portfolio-box.visible').height($(window).height()).width($(window).width());
			}			
		});		
	},  
	onScroll: function() {		
		$window.on('scroll', function() {			
			App.sticky();			
			App.onScreen();			
			App.goTop($(window).scrollTop());			
		});		
	},  
	onLoad: function() {		
		$(window).load(function() {			
			App.preloader();			
		});		
	},  
	onMousewheel: function() {
		$('html, body').bind('DOMMouseScroll mousewheel', function() {
			$('html, body').stop(true,false);
		});
	},  
	bind: function() {		
		$(document).on('click', 'a[href="#"]', function(e) {
			e.preventDefault();
		});		
		$('.left ul a', $('#carousel')).bind('click', function(e) {
			e.preventDefault();
			App.carouselSwitch($(this).parent().attr('class'));
		});		
		$('.more', $portfolio).bind('click', function() {
			App.portfolioMore();
		});		
		$goTop.bind('click', function() {
			$('html, body').animate({scrollTop: 0}, 1200, 'easeOutExpo');
		});		
		$('.navigation a').bind('click', function() {
			$('html, body').stop(true,false);
		});				
		$('.mobile-menu a').click(function() {
			$(".mobile-menu ul.cbp-spmenu-right").removeClass("cbp-spmenu-open");
			$(".mobile-menu button.nav-mobile").removeClass("active");			
			});		
	},
	portfolioMore: function() {		
		setTimeout(function() {
			$portfolio.removeClass('animate').removeClass('ajaxed');
		}, 1500);		
		if(!$portfolio.hasClass('animate')) {			
			$portfolio.addClass('animate');			
			$.ajax({
				context: document.body,
				success: function(data) {					
					$("html, body").animate({
						scrollTop: $portfolio.offset().top + $portfolio.outerHeight(true) - 150
					}, 500, function() {						
						if(!$portfolio.hasClass('ajaxed')) {			
							$portfolio.addClass('ajaxed');						
							$('.inner', $portfolio).animate({'height': $portfolio.height() + $('.item', $portfolio).height()}, 900, 'easeInOutQuint', function() {
								$('ul', $portfolio).append(data);
								$portfolio.height('auto');								
								$('.item.ajax', $portfolio).each(function(index) {
									var $this = $(this);
									setTimeout(function() {
										$this.removeClass('ajax');
									}, 150 * (index+1));
								});								
								setTimeout(function() {
									$portfolio.removeClass('animate').removeClass('ajaxed');
								}, 600);
							});
						}
					});
					
				}
			});
		}
	},	
	preloader: function() {
		$preloader.delay(1000).fadeOut(300, function() {
			App.preloaderFinish();
		});
	},	
	goTop: function(windowTop) {},	
	map: function() {		
		var btn_zoom_in = document.getElementById('zoomin');
		if (btn_zoom_in !== null) {
			google.maps.event.addDomListener(btn_zoom_in, 'click', function() {
				mapObject.setZoom(mapObject.getZoom() + 1 );
			});
		}
		var btn_zoom_out = document.getElementById('zoomout');
		if (btn_zoom_out !== null) {
			google.maps.event.addDomListener(btn_zoom_out, 'click', function() {
				mapObject.setZoom(mapObject.getZoom() - 1 );
			});
		}		
		var mapContainer = document.getElementById('map');		
		if (mapContainer !== null) {
			App.create_map(mapContainer);
			App.create_marker();
			App.create_info();
		}
	},	
	create_map: function(mapContainer) {},	
	create_marker: function() {},	
	create_info: function() {},	
	getInTouch: function() {},	
	anchorScroll: function() {		
		$(".anchor").click(function(event) {
			var full_url = this.href,
			parts = full_url.split("#"),
			trgt = parts[1],
			targetElement = $("#"+trgt),
			target_offset = targetElement.offset(),
			target_top = target_offset.top - 60;			
			if(targetElement.length) {				
				event.preventDefault();
				$('html, body').animate({scrollTop:target_top}, 1000, 'easeOutExpo');				
			}
		});
	},	
};
App.portfolio = {	
	start: function() {		
		this.bind();		
	},	
	bind: function() {		
		$("#portfolio").on("click", '.item', function() {
      if($("html").hasClass("open") || App.portfolio.open($(this))) {
      return true;  
      }else{
			return false;
      }
		});		
		$(document).on("click", ".close-project", function() {
			App.portfolio.close();
		});		
	},	
	open: function(c) {		
		$("html").css({
			overflow : "hidden"
		}).addClass("open");		
		var g = new TimelineLite();
		var d = $(window);		
		var a = [], e = $("#portfolio-box");
			a.top = c.offset().top - $(window).scrollTop();
			a.left = c.offset().left;
			a.lar = c.width();
			a.alt = c.height();
			a.puloLeft = $(d).width() / 2 - a.lar / 2 - a.left;
			a.puloTop = $(d).height() / 2 - a.alt / 2 - a.top;		
		e.animate({
			top : a.top,
			left : a.left,
			width : a.lar,
			height : a.alt,
		}, 0, function() {
			e.addClass('visible');
		});		
		c.addClass("aberto").animate({
			opacity : 0
		}, {
			duration : 300,
			complete : function() {
				c.parent().removeClass("animando");				
				g.to(e, 0.5, {
					x : a.puloLeft,
					y : a.puloTop,
					ease : "Circ.easeInOut",
					delay : 0.1,
					onComplete : function() {
						$(".mostrador").addClass("zindex");
					}
				});
				g.to(e, 0.5, {
					width : $(d).width(),
					height : $(d).height(),
					x : -a.left,
					y : -a.top,
					ease : "Circ.easeInOut",
					onComplete : function() {						
						$('#portfolio-box .inner').fadeIn();						
						$('#portfolio-box').css('overflow-y', 'scroll');						
						$('#portfolio-box').find('.spinner').css('opacity', 0);						
						$.ajax({
							url: 'html/_project.html',
							context: document.body,
							success: function(data) {								
								$('#portfolio-box .inner').empty().append(data);								
								App.owlCarousel();								
							}
						});
					}
				});
			}
		});
	},	
	close: function() {		
		setTimeout(function() {
			$('#portfolio-box').find('.spinner').animate({'opacity': 1}, 100);
		}, 450);		
		$('#portfolio-box').css('overflow-y', 'hidden');		
		$("html").css({
			overflow : "auto"
		});		
		if($("html").hasClass("open")) {			
			$("#portfolio-box .inner").fadeOut(function() {				
				var a = [], c = $("#portfolio-box"), d = c, g = new TimelineLite(), f = $("#portfolio .aberto").closest('li');				
				a.top = f.offset().top - $(window).scrollTop();
				a.left = f.offset().left;
				a.lar = f.width();
				a.alt = f.height();
				a.puloLeft = $(d).width() / 2 - a.lar / 2 - a.left;
				a.puloTop = $(d).height() / 2 - a.alt / 2 - a.top;				
				c.css({
					"background-image" : ""
				}).removeClass("zindex");
				g.to(c, 0.6, {
					width : a.lar,
					height : a.alt,
					x : a.puloLeft,
					y : a.puloTop,
					ease : "Circ.easeInOut"
				});
				f.children(".aberto").removeClass("aberto").delay(600).animate({
					opacity : 1
				}, {
					duration : 300
				});
				g.to(c, 0.4, {
					x : 0,
					y : 0,
					ease : "Circ.easeInOut",
					delay : 0.1,
					onComplete : function() {						
						f.removeClass("animando").removeClass("projetoAberto");
						$("html").removeClass("open");
						c.removeClass('visible');						
						setTimeout(function() {
							c.css({
								width:0,
								height:0,
							});
						}, 300);
					}
				});
			});
		}
	}
};
$.fn.is_on_screen = function(){     
    var win = $(window);     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));     
};
var sections = {},
_height = $(window).height(),
i = 0;
$(document).ready(function() {	
    $('section').each(function(){
        sections[this.id] = $(this).offset().top;
    });	
	navHighlight();
    $(document).scroll(function() {
        navHighlight();
    });
});
function navHighlight() {	
	var pos = $(document).scrollTop() - ($window.height() / 2);	
	for(var i in sections) {		
		if(sections[i] > pos && sections[i] < pos + _height) {
			$('.navigation a').removeClass('active');
			$('.navigation a[href$="#' + i + '"]').addClass('active');
		}
	}
}