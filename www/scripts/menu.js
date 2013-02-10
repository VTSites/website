var timer	= 0; /*"global variables". can be used anywhere in the code*/
    var menuItem	= 0; /*""*/
    
    function openMenu(id) {	
        resetTimer(); /*tells when a menu is supposed to close after the cursor moves off of it*/
    
        if(menuItem) menuItem.style.visibility = 'hidden'; /*hides first menu if another is opened before its time ends*/
    
        menuItem = document.getElementById(id); /*the (id) shows which popup menu to show if 2 menus happen to be open at once. whichever id is input, that menu will appear.*/
        menuItem.style.visibility = 'visible'; /*makes the inputed "id" visible*/
    
    }
    
    function closeMenu() {
        if(menuItem) menuItem.style.visibility = 'hidden';
    }
    
    function setTimer() {
        timer = window.setTimeout(closeMenu, 100); /*timer is in milliseconds. delay for menu to close*/
    }
    
    function resetTimer() { /*resets timer. sets timer to zero*/
        if(timer) {
            window.clearTimeout(timer);
            timer = null;
        }
    }
	
	function changePic (id, picName) {
		image = document.getElementById(id);
		image.src = "buttons/" + picName;
	}
	
	function loadMenu()
	{
		document.write("<p> Hi this works </p>");
	}
	
	
	document.onclick = closeMenu;