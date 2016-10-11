//= require vendor/jquery
//= require vendor/hover_intent
//= require vendor/jquery.parallax-scroll
//= require vendor/demo.min
//= require vendor/menu
//= require vendor/jquery.magnific-popup.min
//= require vendor/modernizr-custom

var app = {

    initialize: function(){
		this.checkForChrome();
		this.checkForAdblock();
		this.toggleBounce();
        this.hamburgerAnimation();
		this.initailizeMailchimpForm();
		this.animatePageScrolltoAnchor();
        this.initializeHorizontalBanners();
		this.initalizeMaginificPopup();
		this.initalizeExpandingContent();
		this.initializeMap();
        this.initializeScrollingeffects();
        
    },
	
	checkForChrome: function(){
		   // Opera 8.0+
		var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		    // Firefox 1.0+
		var isFirefox = typeof InstallTrigger !== 'undefined';
		    // At least Safari 3+: "[object HTMLElementConstructor]"
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		    // Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		    // Edge 20+
		var isEdge = !isIE && !!window.StyleMedia;
		    // Chrome 1+
		var isChrome = !!window.chrome && !!window.chrome.webstore;
		    // Blink engine detection
		var isBlink = (isChrome || isOpera) && !!window.CSS;
		
			if (isChrome == true || isSafari == true) {
				// console.log('safari chrome detected')
			}
				
			 else {
				alert("Thanks for checking out my site. I strive for cutting edge design, some features are experimental and specific only to the -webkit package, thus my CSS fallbacks have been dumbed down in Firefox and IE. FOR BEST VIEWING EXPERINCE SWITCH TO SAFARI OR GOOGLE CHROME.  Cheers.");
				//Browser Specific Fallbacks
				$('.polygon-fill').addClass('fallback');
				$('.polygon-fill-right').addClass('fallback');
				$('#map').hide();
				
				
			}
				

	
	
	},
	
	checkForAdblock: function(){
		if( window.canRunAds === undefined && $('#targetAnimations').length > 0){
		        // adblocker detected
			alert(" ❗Yikes, you are about to look at some sweet ads! AD BLOCKER will definitely break this page. Please Turn is off and reload.  Cheers 🍺🍺");

			
			
		      }
		
	},
	
	toggleBounce: function(){
		
    	var $checkForBounce = $('.scroll-indicator');
	
        if ( $checkForBounce.length){
			
		    setTimeout(function(){
		        $(".scroll-indicator").toggleClass("bounce");
		    }, 1000);
               
        }
		
		else{
			return false;
		}
	
	},


	
    hamburgerAnimation: function(){
	    var slideRight = new Menu({
	      wrapper: '#o-wrapper',
	      type: 'slide-right',
	      menuOpenerClass: '.c-button',
	      maskId: '#c-mask'
	    });

	    var slideRightBtn = document.querySelector('#c-button--slide-right');
  
	    slideRightBtn.addEventListener('click', function(e) {
	      e.preventDefault;
	      slideRight.open();
	    });
		
		
    	$('a.c-menu__link').on('click',function(e){
  	      e.preventDefault;
		  $('#c-menu--slide-right').removeClass('is-active');
		  $('.c-mask').removeClass('is-active');
		  $('body').removeClass('has-active-menu');
			
		});

		
    },
	
	initailizeMailchimpForm: function(){
		$(".first-name").focus(function(){
		  	$(".first-name-help").slideDown(500);
		}).blur(function(){
		  $(".first-name-help").slideUp(500);
		});
		
		$(".last-name").focus(function(){
		  $(".last-name-help").slideDown(500);
		}).blur(function(){
		  $(".last-name-help").slideUp(500);
		});

		$(".email").focus(function(){
		  $(".email-help").slideDown(500);
		}).blur(function(){
		  $(".email-help").slideUp(500);
		});
	},
	
    animatePageScrolltoAnchor: function(){
        $('a[href*=#]:not([href=#])').click(function() {
			
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
		
    },
	
	initializeHorizontalBanners: function(){
	    $('.polygon-wrap').hoverIntent(function() {
	       
		   var windowWidth = $(window).width();
			
          		if (windowWidth <  770) {
					// Panel Height is static on mobile
		  			  var wrapHeight =  400;
          			
          		}
		  		
		  		else {
					
					// Panel Height is 29% wrapper width
					
  		  			var wrapHeight =  $('.wrapper').width();
  		  			var wrapHeight =  wrapHeight * 0.29166666666667;
		  						
		  		}
			
			// Vertically centers Panel copy within the panel
			
			var contentHeight =  $(this).find(".content-slider").height();
			var offsetHeight = (wrapHeight-contentHeight) * 0.5
			
 			$(this).find(".content-slider").css('marginTop', offsetHeight);
 			$(this).find(".banner-left").toggleClass('hovered');
 			$(this).find(".banner-right").toggleClass('hovered');
 			$(this).find(".content-left").toggleClass('hovered');
 			$(this).find(".content-right").toggleClass('hovered');
		  	$(this).find(".tap-container").toggle();
		  
	     });	
	},
	
    initalizeExpandingContent: function(){

		
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			console.log('mobile detected');
		}
		
		else {
			
		$(".expanded-content").hide();
		$(".expanded-content.leave-open").show();

        $('.expanding-content-container').find('.target-expanding-content').click(function(){

              $(this).next().slideToggle('fast');
			  $(".fa-plus-square").removeClass('fa-minus-square');
			  $(this).find(".fa-plus-square").toggleClass('fa-minus-square');
              $(".expanded-content").not($(this).next()).slideUp('fast');

		      $('body').animate({
		          scrollTop: $("a.offset_anchor_about").offset().top
		      }, 50);
		  	  
         });

	 	}
			
	},
	
	initalizeMaginificPopup: function(){
		$('.popup-300x600').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade target300x600',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	
		$('.popup-160x600').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade target160x600',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	
		$('.popup-728x90').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade target728x90',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	
		$('.popup-300x250').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade target300x250',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
		
	},

	initializeMap: function(){
		if ($('#map').length > 0) {
			var citymap = {
			  chicago_city_1: {
			    center: {lat: 41.878, lng: -87.629},
			    likely_diameter: 2,
				color: "#40dfff",
				opacity:.4
			  },
			  chicago_city_2: {
			    center: {lat: 41.878, lng: -87.629},
			    likely_diameter: .6,
				color: "#70e7ff",
				opacity:.3
	  
	  
			  },
			  chicago_city_3: {
			    center: {lat: 41.878, lng: -87.629},
			    likely_diameter: .4,
				color: "#9fedfd",
				opacity:.2
	  
	  
			  },
			  chicago_city_4: {
			    center: {lat: 41.878, lng: -87.629},
			    likely_diameter: .2,
				color: "#cef4fc",
				opacity:.1
	  
	  
	  
			  }

			  
			};
						



			window.initMap = function(){
			  // Create the map.
			  var myLatLng = {lat: 41.868, lng: -87.629};
			  
			  var map = new google.maps.Map(document.getElementById('map'), {
			    zoom: 12,
   			   scrollwheel: false,
			    center: {lat: 41.8819888, lng: -87.6791893},
			    mapTypeId: google.maps.MapTypeId.SATILITE,
				styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}] 
			  });
			
			var image = 'img/map-icon.png';
			  
  		    var marker = new google.maps.Marker({
  		      position: myLatLng,
  		      map: map,
  		      title: 'Hello World!',
    		  icon: image
				
				
  		    });
			  

			  // Construct the circle for each value in citymap.
			  // Note: We scale the area of the circle based on the population.
			  for (var city in citymap) {
			    // Add the circle for this city to the map.
			    var cityCircle = new google.maps.Circle({
			      strokeColor: citymap[city].color,
			      strokeOpacity: 0.8,
			      strokeWeight: 2,
			      fillColor: citymap[city].color,
				  fillOpacity: citymap[city].opacity,
			      map: map,
			      center: citymap[city].center,
			      radius: 1/(citymap[city].likely_diameter) * 10000
			    });
			  }
			}
		}
		
		else{
			
		}	
	},
	
    initializeScrollingeffects: function(){

	    var timer, el = $('body'),
	        flag = false;
	    $(window).scroll(function() {
	        if (!flag) {
	            flag = true;
	            $('.targetScroll').addClass('scrolling');
	            $('.targetScrollText').addClass('scrolling');
	            $('.targetScrollImage').addClass('scrollingImage');
				
				
	            $('.header').addClass('sticky');
	            //$('.logo-container img').addClass('sticky');
	            $('.hamburger-container').addClass('sticky');


	        }
	        clearTimeout(timer);
	        timer = setTimeout(function() {
	            $('.targetScroll').removeClass('scrolling');
	            $('.targetScrollText').removeClass('scrolling');
	            $('.targetScrollImage').removeClass('scrollingImage');
				
				

	            flag = false;
	        }, 200);
	    });

    },

    
};

$(document).ready(function(){
    app.initialize();
	console.log("Like what you see?  Let's get in touch.")
});
