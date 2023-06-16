/* CV button script */

window.addEventListener('DOMContentLoaded', (event) => {
    const cvButton = document.getElementById('cv-button');
    cvButton.addEventListener('click', () => {
        window.open('CV_07-06-23.pdf', '_blank');
    });
});


/* Typewriter script */

var TxtType = function(el, toRotate) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);   
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 100 - Math.random() * 50;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = 800;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 10;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate));
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



/* Artwork menu script */

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentPageUrl = window.location.pathname;

    // Get all the menu items
    const menuItems = document.querySelectorAll("nav ul li");

    // Loop through the menu items and check if the href matches the current page URL
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        const menuItemLink = menuItem.querySelector("a");
    
        // Check if the href matches the current page URL
        if (menuItemLink.getAttribute("href") === currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1, currentPageUrl.length)) {
            menuItem.classList.add("active");
            break; // Exit the loop if a match is found
        }
    }
    
    // Float the menu elements up to the top of the screen when the page is loaded
    const navContainer = document.querySelector(".nav-container");
    setTimeout(() => {
        navContainer.classList.add("animate");
    }, 100);
    
});

function changeGallery(number) {
    var gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear the current gallery

    if (number == 1) {
      createGridItem(gallery, "artwork/landy1.jpg", "artwork/landy2.jpg");
      createGridItem(gallery, "artwork/landscape1.jpg", "artwork/landscape2.jpg");
    } else if (number == 2) {
      createGridItem(gallery, "artwork/rdj1.jpg", "artwork/rdj2.jpg");
      createGridItem(gallery, "artwork/billie1.jpg", "artwork/billie2.jpg");
    } else if (number == 3) {
      createGridItem(gallery, "artwork/v1.jpg", "artwork/v2.jpg");
      createGridItem(gallery, "artwork/vv1.jpg", "artwork/vv2.jpg");
    }

    var buttons = document.querySelectorAll(".gallery-buttons button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    // Add the 'active' class to the clicked button
    var clickedButton = document.querySelector(".gallery-buttons button:nth-child(" + number + ")");
    clickedButton.classList.add("active");
}

function createGridItem(container, imageUrl, hoverImageUrl) {
    var gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    var image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "Artwork";
    image.className = "image";

    var imageHover = document.createElement("img");
    imageHover.src = hoverImageUrl;
    imageHover.alt = "Artwork Hover";
    imageHover.className = "image-hover";

    gridItem.appendChild(image);
    gridItem.appendChild(imageHover);

    container.appendChild(gridItem);
}


  