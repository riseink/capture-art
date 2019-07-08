var app = {



    initialize: function(){
		this.checkForAdblock();
		this.toggleBounce();
        this.hamburgerAnimation();
		this.initailizeMailchimpForm();
		this.animatePageScrolltoAnchor();
        this.initializeHorizontalBanners();
		this.initalizeMaginificPopup();
		this.initalizeExpandingContent();
        
    },
	
	
	checkForAdblock: function(){
		if( window.canRunAds === undefined && $('#targetAnimations').length > 0){
		        // adblocker detected
			alert(" ❗Yikes, you are about to look at some sweet ads! AD BLOCKER will definitely break this page. Please turn it off and reload.  Cheers 🍺🍺");

			
			
		      }
		
	},
	
	toggleBounce: function(){
		
    	var checkForBounce = $('.scroll-indicator');
        if (checkForBounce){
		    setTimeout(function(){
		        $(".scroll-indicator").toggleClass("bounce");
				$('.target_color_bounce').toggleClass("color_bounced");
		    }, 1000);
               
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
		  		  	  
					  $(this).find(".tap-container").toggle();
					  
          			
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
		  
	     });	
	},
	
    initalizeExpandingContent: function(){

		
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			console.log('mobile detected');
			$('.icon-container').find(".fa").removeClass('fa-minus-square');
			$('.icon-container').find(".fa").addClass('fa-plus-square');
		}
		
		else {
			
		$(".expanded-content").hide();
		$(".expanded-content.leave-open").show();
		
		$('.icon-container').on("click",".fa-plus-square",function(){
		  $(this).removeClass('fa-plus-square');
		  $(this).addClass('fa-minus-square');
	  	});
		
		$('.icon-container').on("click",".fa-minus-square",function(){
		  $(this).addClass('fa-plus-square');
		  $(this).removeClass('fa-minus-square');
		
		});
		
		
		
        $('.expanding-content-container').find('.target-expanding-content').click(function(){

              $(this).next().slideToggle('fast');
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



    
};

app.initialize();
