const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const brandtitle = document.getElementsByClassName('brand-title')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

brandtitle.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.remove('active');        
    }
})

/**Parallax effect */
const parallax = document.getElementsByClassName("parallax-effect")[0]

/*add event listener(scroll event) for the window object(for Parallax effect) */
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;/**value of how much the user has scroll from the top*/
    console.log('Offset: ' + offset);
    console.log('offset * 0.7 = ' + offset * 0.7);
    parallax.style.backgroundPositionY = offset * 0.5 + "px";/**backgroundposition on the Y-axe from the style of the element of id parallax moves on the scroll offset * 0.5*/
    //parallax.style.backgroundPositionY = offset * 1 + "px";/**backgroundposition on the Y-axe from the style of the element of id parallax moves on the scroll offset(fixed) */
    //parallax.style.backgroundPositionY = offset * 1.5 + "px";/**backgroundpositionY from the style of the element of id parallax = the scroll offset * 1.5(opposite direction)*/
})

/**Slideshow - forward */
var i = 0;
var images = [];
var time = 1000;

images[0] = "url('images/photo2.jpg')";
images[1] = "url('images/photo1.jpg')";
images[2] = "url('images/logoperso3.png')";

document.getElementsByClassName('slideshow')[0].style.backgroundImage = images[0]
// On windows load, show the image source
window.onload = document.getElementsByClassName('slideshow')[0].style.backgroundImage

function forwardButton(){
    // Check If Index Is Under Max
    if(i < images.length - 1){
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To 0 to initialize the image source back to the index of 0
        i = 0;
    }
    // on button click event, show the image source with the current index of i
    document.getElementsByClassName('slideshow')[0].style.backgroundImage = images[i]
}

/**Slideshow - Backward */
function backwardButton(){

    // Check If Index Is Over 0
    if(i > 0){
        // Remove 1 to Index
        i--;
    } else {
        // Reset Back To 0 to initialize the image source back to the index of 2
        i = 2;
    }
    // on button click event, show the image source with the current index of i
    document.getElementsByClassName('slideshow')[0].style.backgroundImage = images[i];
}


// Change Image
/*function slideshowLive(){
    document.getElementsByClassName('slideshowlive')[0].style.backgroundImage = images[i]

    // Check If Index Is Under Max
    if(i < images.length - 1){
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To 0
        i = 0;
    }

    // Run function every x seconds
    setTimeout("slideshowLive()", time);
}

// Run function when page loads
window.onload=slideshowLive;*/