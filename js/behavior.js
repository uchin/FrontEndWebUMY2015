$(document).ready(function() {
    //Slider
        //Main Slider
		$('#slider').bxSlider({
		  mode: 'fade',
		  auto: true,
		  autoControls: true,
		  pause: 2000
		});
        //Slider News
		$('#slidernews').bxSlider({
		  mode: 'fade',
		  auto: true,
		  autoControls: true,
		  pause: 2000
		});
        //slider Fasilitas
        $('#fslider2,#fslider3,#fslider4,#fslider5,#fslider6,#fslider7,#fslider8,#fslider9').bxSlider({
		  mode: 'fade'
		});
    
    //Profil pimpinan
		$("#flip1").click(function() {
			$(".dsc1").slideToggle("slow");
        });
        $("#flip2").click(function() {
			$(".dsc2").slideToggle("slow");
		});
        $("#flip3").click(function() {
			$(".dsc3").slideToggle("slow");
		});
        $("#flip4").click(function() {
			$(".dsc4").slideToggle("slow");
		});
        $("#flip5").click(function() {
			$(".dsc5").slideToggle("slow");
		});
    
    //identitas        
        $("#ident1").click(function() {
			$(".identmore1").slideToggle("slow");
        });
        $("#ident2").click(function() {
			$(".identmore2").slideToggle("slow");
        });
        $("#ident3").click(function() {
			$(".identmore3").slideToggle("slow");
        });
        $("#ident4").click(function() {
			$(".identmore4").slideToggle("slow");
        });
        $("#ident5").click(function() {
			$(".identmore5").slideToggle("slow");
        });
    
    //change arrow up down for all class panah when clicked
        $(".panah").click(function() {
            var iSelector = $(this).find('span:first');
            if(iSelector.hasClass('icon-circle-down')) {
                iSelector.removeClass('icon-circle-down')
                iSelector.addClass('icon-circle-up')
            } else {
                iSelector.removeClass('icon-circle-up')
                iSelector.addClass('icon-circle-down')
            }
        });
    
    //tab prodi
        $('.tab-prodi').each(function(){
                var $active, $content, $links = $(this).find('a');
                $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
                //$active.addClass('active');
                $('.prodi-collapse').hide();

                $content = $($active[0].hash);

                // Hide the remaining content
                $links.not($active).each(function () {
                  $(this.hash).hide();
                });

                // Bind the click event handler
                $(this).on('click', 'a', function(e){
                  // Make the old tab inactive.
                  $active.removeClass('active');
                  $content.hide('slow');

                  // Update the variables with the new link and content
                  $active = $(this);
                  $content = $(this.hash);

                  // Make the tab active.
                  $active.addClass('active');
                  $content.slideToggle('slow');
                
                  //hide all content when icon clicked
                    $('.icon-prodi.h').click(function() {
                        $active.removeClass('active');
                        $content.hide('slow');
                    });

                  // Prevent the anchor's default click action
                  e.preventDefault();
                });
        });
    
    //pagination
        $(function() {
            $(".pagination").pagination({
                items: 10,
                itemsOnPage: 1,
                cssStyle: 'light-theme'
            });
        });
    
    //Zoom Image strukture organisasi
    $(function(){
			$('#ex3').zoom({ on:'click' });
		});
    
   
});

 

