
// FUNCTIONS ###################################################################

// TOGGLE-VERTICAL-BARS ========================================================
function toggleBars(e)
{ 
    let current = e.currentTarget;
    let currentBar = document.getElementById(current.value);
    if(currentBar.style.display === 'none')
    {
        currentBar.style.display = 'block';
        // current.style.transform += "rotate(360deg)";
        // current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
    }
    else    
    {
        currentBar.style.display = 'none';
        // current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
        // current.style.transform += "rotate(-180deg)";
    }

    changeToggleBarIcon(current.value);
}

 

// Change Togglebar Icon =======================================================
function changeToggleBarIcon(bar)
{
    let barToggler = document.getElementById(bar+"-toggler").children[0];
    
    if(barToggler.innerHTML== "‹‹")
    {
        barToggler.innerHTML="››";
    }
    else
    {
        barToggler.innerHTML="‹‹";
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



 

