var grow = $(".grow");

	var tl = new TimelineLite({paused:true});

	tl.from(grow, 0.2, {scale:0.5, transformOrigin : "50% 100%"});

	tl.eventCallback("onUpdate", updateSlider);
		
	$("#slider").slider({
	  range: false,
	  min: 0,
	  max: 100,
	  step:.1,
	  slide: function ( event, ui ) {
		tl.pause();
		tl.progress( ui.value/100 );
		}
	});

    $("#sliderM").slider({
	  range: false,
	  min: 0,
	  max: 100,
	  step:.1,
	  slide: function ( event, ui ) {
		tl.pause();
		tl.progress( ui.value/100 );
		}
	});
			
	function updateSlider() {
        $("#slider").slider("value", tl.progress() *100);
        $("#sliderM").slider("value", tl.progress() *100);
	} 	

	tl.progress(0)

$(document).ready(function(){
    
    $(".kysymys").click(function(){
        $(this).next(".info").toggle();
    });
    
    $(".nayta").click(function(){
        var $this=$(this);
        
        $(this).next(".in").toggle();
        $this.toggleClass('nayta');
        
        if($this.hasClass('nayta')){
            $this.text('Näytä selvennys');
        }
        else{
            $this.text('Piilota selvennys');
        }
    });
    
    /*MOB*/
    $(".paina").click(function(){
        if($(this).next(".more").hasClass("more")){
            $(this).next(".more").removeClass("more");
            $(this).next("div").addClass("less");
        }
        
        else if($(this).next(".less").hasClass("less")){
            $(this).next(".less").addClass("more");
            $(this).next(".more").removeClass("less");
        }
    });
    
     $(".kysymysM").click(function(){
        if($(this).next(".infoM").is(":visible")){
            $(this).next(".infoM").css("display","none");
        }
         
        else{
            $(this).next(".infoM").css("display","block");
         }
    });
});    