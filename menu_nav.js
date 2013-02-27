$(document).ready(function(){

	var viewport;
	var page;
	var pageContent;
	var slidingMenu;
	var slidingMenuContent;
	var isMenuOpen = false;
	var visiblePageMargin = 55;
	var maximumMenuWith = 500;
	var preloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

	initMetrics();

	function initMetrics() {

		page = $("#page");
		pageContent  = $("#pageContent");
		slidingMenu  = $("#slidingMenu");
		slidingMenuContent = $("#slidingMenuContent");
		viewport = {
	    	width  : $(window).width(),
	    	height : $(window).height()
		};
	}


	function openMenu() { 

		isMenuOpen = true;
		//Rem : Had to do this here because viewport.width value could have been updated since next open/close. If we rotate the device for example
	    var menuWidth = viewport.width - visiblePageMargin;

	    if(viewport.width > (maximumMenuWith+visiblePageMargin) ){
			menuWidth = maximumMenuWith;	
		} 

		//Rem : Unecessary except for windows phone7.5 where div with lower z-index are clickable....
		slidingMenu.css("visibility","visible");

		adjustHeight();
	    
	    page.animate({
	       left: menuWidth+"px"
	    }, { duration: 300 });
	}
	

	function closeMenu() {

		isMenuOpen = false;

    	page.animate(
    		{	left: "0px" }, 
    		{	duration: 180 , 
    			//For wp7 where div with lower z-index are clickable....
     			//SetTimeout to hide the menu only after closing
	    		complete: function() { slidingMenu.css("visibility","hidden");}
			}
		)
    	.animate({
            height : "100%"
    	}, { duration: 0 });
	}

	//Use to avoid overflow problem with scroll
	function adjustHeight() {

		var menuHeight = slidingMenu.height();
	    var pageHeight = page.height();
	    var MenuContentHeight = slidingMenuContent.height();
	    //to avoid overflow block on Android < 2.3
	    if(pageHeight < menuHeight){
	    	slidingMenu.css("height",MenuContentHeight+"px");	
	    	page.css("height",MenuContentHeight+"px");	
	    } 
	    else{
	    	slidingMenu.css("height",pageHeight+"px");
	    } 
	} 

	function loadPage(url) {

		closeMenu();
        pageContent.html(preloader);
        //Rem : Timeout is only necessary for demo purpose, to display the loader. Remove it for production.
        setTimeout( pageContent.load(url, function() {/* no callbacks */}), 1200);
	}

	function orientationChange() {

		//We must wait at least 500ms before recalculate metrics, 
		//If we don't, some old phones send the old metrics value instead of new orientation values
		window.setTimeout(function() {
	        
	        initMetrics();

			if(isMenuOpen) openMenu(); 
			else closeMenu();

	    }, 500);
	}

	//trigger the opening or closing action
	$("a.show-menu-button").click(function () {
		
		var pagePosition = page.css('left');
		
		if(pagePosition == "0px") {
			openMenu();
		}
		else { 
			closeMenu(); 
		}
	});

	//Some windows phones (7.5) does'nt fired the "orientationchange" event, that's why we must use "resize" event
	window.addEventListener("resize", orientationChange, false);
	window.addEventListener("orientationchange", orientationChange, false);


	//detect hash change
	$(window).bind('hashchange', function (e) { 
    
	    var hash = location.hash;
	    var url = "";

	    //For windows phone 7.5, the view doesn't automatically scroll to top when the pageContent is load
	    window.scrollTo(0, 1);
	    
	    if(hash == ''){
	        url = "short.php";
	    } else{
	        url = hash.split("#")[1];
	    } 

	    loadPage(url); 
 	});
});