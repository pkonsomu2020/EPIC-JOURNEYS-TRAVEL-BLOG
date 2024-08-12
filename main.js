// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

// Function to toggle the menu visibility
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("responsive");
}




// BLOGS CATEGORIES REDIRECTION //
function redirectToDiverseExperience() {
    
    window.location.href = 'Components/diverseexperience.html';
}

function redirectToCoastalExplore() {
    
    window.location.href = 'components/coastalexplore.html';
}

function redirectToMarineLife() {
    
    window.location.href = 'Components/marinelife.html';
}

function redirectToDramaticCliffs() {
    
    window.location.href = 'Components/dramaticcliffs.html';
}

function redirectToSereneBeaches() {
    
    window.location.href = 'Components/serenebeaches.html';
}

function redirectToCharmingCoastal() {
    
    window.location.href = 'components/coastaltowns.html';
}

function redirectToCulturalCoast() {
    
    window.location.href = 'Components/culturalheritage.html';
}

function redirectToCoastalRegions() {
    
    window.location.href = 'components/coastalregions.html';
}





// SLIDESHOW FUNCTIONALITY //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Automatic slideshow
let slideInterval = setInterval(function() {
  plusSlides(1); // Call plusSlides with an argument to move to the next slide
}, 2000);

// Pause the slideshow when hovering over the container
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(slideInterval);
});

// Resume the slideshow when mouse leaves the container
slideshowContainer.addEventListener('mouseleave', function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 4000);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



document.addEventListener('DOMContentLoaded', () => {
    const userCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
    if (userCookie) {
        const user = JSON.parse(decodeURIComponent(userCookie.split('=')[1]));
        const navLinks = document.getElementById('nav-links');
        navLinks.innerHTML = `
            <a href="index.html">Home</a>
            <a href="about.html">About us</a>
            <a href="blogs.html">Blogs</a>
            <a href="contact.html">Contacts</a>
            <span>Welcome, ${user.name}</span>
            <a href="#" onclick="logout()">Logout</a>
        `;
    }
});

function logout() {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    location.reload();
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}