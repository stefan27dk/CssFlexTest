
// FUNCTIONS ###################################################################

// TOGGLE-VERTICAL-BARS ========================================================
toggleVerticalBar = (e) =>
{ 
    let current = e.currentTarget;
    let currentBar = document.getElementById(current.value);
    if(currentBar.style.display === 'none')
    {
        currentBar.style.display = 'block';
        current.style.transform += "rotate(360deg)";
        current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
    }
    else    
    {
        currentBar.style.display = 'none';
        current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
        current.style.transform += "rotate(-180deg)";
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
document.getElementById('toggleLeftBarButton').addEventListener("click", toggleVerticalBar);

//RIGHTBAR-TOGGLE-BTN
document.getElementById('toggleRightBarButton').addEventListener("click", toggleVerticalBar);

//BOTTOMBAR-TOGGLE-BTN
document.getElementById('toggleBottomBarButton').addEventListener("click", toggleVerticalBar);

// TOPBAR
document.getElementById('top-bar').addEventListener("wheel", scrollHorizontal);

// BOTTOMBAR
document.getElementById('bottom-bar').addEventListener("wheel", scrollHorizontal);



 

