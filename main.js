loadMainBarsState();

// FUNCTIONS ###################################################################

// TOGGLE-VERTICAL-BARS ========================================================
function toggleBars(e) {
    let current = e.currentTarget;
    let currentBar = document.getElementById(current.value); // The toggler buttons have assigned value for the specific bar they need to toggle ex. toggler value for topbar is value="top-bar", the toggler id is id="top-bar-toggler" than later evt. you can use the value "top-bar"+"toggler" to get the toggler, but in this case we just pass it to the next funktion to use it insteat of doing getElement
    
    if (currentBar.style.display === 'none') 
    {
        currentBar.style.display = 'block';
        localStorage.setItem(currentBar.id, 'block'); // Save bar state to local storage 
    }
    else 
    {
        currentBar.style.display = 'none';
        localStorage.setItem(currentBar.id, 'none'); // Save bar state to local storage 
    }

    // changeToggleBarIcon(current.value);
    changeTogglerIcon(current);
}



// Change Togglebar Icon =======================================================
function changeTogglerIcon(toggler) {
    // let barToggler = document.getElementById(bar+"-toggler").children[0]; // Get the toggler 
    let barTogglerText = toggler.children[0]; // Get the toggler text, which is the first child the arrow text ">>" 

    if (barTogglerText.innerHTML == "‹‹") {
        barTogglerText.innerHTML = "››";
    }
    else {
        barTogglerText.innerHTML = "‹‹";
    }
}




// SCROLLING HORIZONTALY =================================================================
scrollHorizontal = (e) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
}






// Load Bar State from local storage  =====================================================
function loadBarState(barId)
{
    let currentBar = document.getElementById(barId);
    let currentBarLStorageState = localStorage.getItem(barId);
    
    if (currentBarLStorageState !== null) 
    {
        currentBar.style.display = currentBarLStorageState;

        if(currentBarLStorageState == 'none')
        {
            changeTogglerIcon(document.getElementById(barId+"-toggler")); // Change toggler arrows
        }
    }
}




// LOAD ALL BARS STATE - FROM LOCAL STORAGE - On Page Load =====================================================
function loadMainBarsState() 
{
    loadBarState("left-bar");
    loadBarState("right-bar");
    loadBarState("top-bar");
    loadBarState("bottom-bar");
    // // Left-bar-----------------------------
    // let leftBar = document.getElementById('left-bar');
    // let leftBarLStorageState = localStorage.getItem('left-bar');

    // // Right-bar-----------------------------
    // let rightBar = document.getElementById('right-bar');
    // let rightBarLStorageState = localStorage.getItem('right-bar');

    // // Top-bar-----------------------------
    // let topBar = document.getElementById('top-bar');
    // let topBarLStorageState = localStorage.getItem('top-bar');

    // // Bottom-bar-----------------------------
    // let bottomBar = document.getElementById('bottom-bar');
    // let bottomBarLStorageState = localStorage.getItem('bottom-bar');




    // // One liner probably 33% slower
    // // leftBar.style.display = ((leftBarLStorageState !== null) ? leftBarLStorageState : "block");

    // // Left-bar-----------------------------
    // if (leftBarLStorageState !== null) 
    // {
    //     leftBar.style.display = leftBarLStorageState;
    //     changeTogglerIcon(current);
    // }
   


    // // Right-bar-----------------------------
    // if (rightBarLStorageState !== null)
    // {
    //     rightBar.style.display = rightBarLStorageState;
    //     changeTogglerIcon(current);
    // }
    


    // // Top-bar-----------------------------
    // if (topBarLStorageState !== null)
    // {
    //     topBar.style.display = topBarLStorageState;
    //     changeTogglerIcon(current);
    // }
     




    // // Bottom-bar-----------------------------
    // if (bottomBarLStorageState !== null)
    // {
    //     bottomBar.style.display = bottomBarLStorageState;
    //     changeTogglerIcon(current);
    // }
    

}




// Event Listeners ##############################################################
// LEFTBAR-TOGGLE-BTN
document.getElementById('left-bar-toggler').addEventListener("click", toggleBars);

//RIGHTBAR-TOGGLE-BTN
document.getElementById('right-bar-toggler').addEventListener("click", toggleBars);

//TOPBAR-TOGGLE-BTN
document.getElementById('top-bar-toggler').addEventListener("click", toggleBars);

//BOTTOMBAR-TOGGLE-BTN
document.getElementById('bottom-bar-toggler').addEventListener("click", toggleBars);


// TOPBAR
document.getElementById('top-bar-wrapper').addEventListener("wheel", scrollHorizontal, { passive: true });

// BOTTOMBAR
document.getElementById('bottom-bar-wrapper').addEventListener("wheel", scrollHorizontal, { passive: true });





