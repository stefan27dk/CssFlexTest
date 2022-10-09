
// FUNCTIONS ###################################################################

// TOGGLE-VERTICAL-BARS ========================================================
function toggleBars(e)
{ 
    let current = e.currentTarget;
    let currentBar = document.getElementById(current.value); // The toggler buttons have assigned value for the specific bar they need to toggle ex. toggler value for topbar is value="top-bar", the toggler id is id="top-bar-toggler" than later evt. you can use the value "top-bar"+"toggler" to get the toggler, but in this case we just pass it to the next funktion to use it insteat of doing getElement
    if(currentBar.style.display === 'none')
    {
        currentBar.style.display = 'flex';
        // current.style.transform += "rotate(360deg)";
        // current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
    }
    else    
    {
        currentBar.style.display = 'none';
        // current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
        // current.style.transform += "rotate(-180deg)";
    }

    // changeToggleBarIcon(current.value);
    changeToggleBarIcon(current);
}

 

// Change Togglebar Icon =======================================================
function changeToggleBarIcon(toggler)
{
    // let barToggler = document.getElementById(bar+"-toggler").children[0]; // Get the toggler 
    let barTogglerText = toggler.children[0]; // Get the toggler text, which is the first child the arrow text ">>" 
    
    if(barTogglerText.innerHTML== "‹‹")
    {
        barTogglerText.innerHTML="››";
    }
    else
    {
        barTogglerText.innerHTML="‹‹";
    }
}




// // SCROLLING HORIZONTALY =====================================================
scrollHorizontal = (e) =>
{
    e.preventDefault(); 
    e.currentTarget.scrollLeft += e.deltaY;
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
document.getElementById('top-bar-centerizer').addEventListener("wheel", scrollHorizontal);

// BOTTOMBAR
document.getElementById('bottom-bar-centerizer').addEventListener("wheel", scrollHorizontal);



 

