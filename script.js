window.addEventListener('DOMContentLoaded', (event) => {
    const cvButton = document.getElementById('cv-button');
    cvButton.addEventListener('click', () => {
        window.open('CV-15-05-23.pdf', '_blank');
    });
});

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


  