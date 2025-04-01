document.addEventListener("DOMContentLoaded", function() {
    const openIcon = document.getElementById("dropdown-menu__open");
    const closeIcon = document.getElementById("dropdown-menu__close");
    const dropdownMenuList = document.getElementById("dropdown-menu__list");
    const menuWidth = document.getElementById("dropdown-menu");

    openIcon.addEventListener("click", function() {

        dropdownMenuList.style.display = "flex";

        setTimeout(function(){
            menuWidth.style.width = "100vw";
        }, 100);

        openIcon.style.visibility = "hidden";

    });

    closeIcon.addEventListener("click", function() {

        menuWidth.style.width = "0vw";

        setTimeout(function() {
            dropdownMenuList.style.display = "none";

        openIcon.style.visibility = "visible";

        }, 1000);

    });
});

const imageFilenames = [
    "01galleryImage.jpg",
    "02galleryImage.jpg",
    "03galleryImage.jpg",
    "04galleryImage.jpg"
];

const imageTitles = [
    "Piecing Together The Label.",
    "Design Dumping",
    "Decisions, Decisions, Decisions",
    "Final Details"
];

const imageDescriptions = [
    "We were hunting for a balance of traditional roots but fresh new feel that many wineries and businesses look for in a redesign. I decided to focus on three things that I noticed as reoccuring themes in the labels I liked from my research. The typography, our seal, and a drawing of the estate. ",
    "I made two designs each with small variations branching into about 20 different labels. I had a lot of ideas and I needed to get all of them in one place to get a better feel of what I was shooting for and what the client wanted. The two designs were a minimal label with the winery seal as the focal point or a larger more traditional estate label with a sketch of the vineyards as the centerpiece.  ",
    "The bulk of the time spent in the creation of these labels was spent waiting for higher ups to have spare time to look over the options for the design and let me know which direction they preferred. I really liked the more minimal design with the seal since the size of the seal would make it stand out more on the shelf without changing the shape of the label or costing the company more money. However, the company decided on the more traditional estate label. ",
    "After the final decision on which label to use was made, I was able to start ironing out the last few details of the label. My original design was to have each label match the shape of the bottle. The traditional wine bottles that are long and uniform width, I had intended to make a long label to fit that versus the Bordeaux style bottles which would have a square version of that same label with a shorter/longer back label. However, in the final drafts of this label that was vetoed."
];

const basePath = "images/wineLabeling/galleryImages/";

let currentIndex = 0;

// Get elements
const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const imageTitle = document.getElementById("imageTitle");
const imageDescription = document.getElementById("imageDescript");

// Function to update the image
function updateImage() {
    const imagePath = basePath + imageFilenames[currentIndex];
    galleryImage.src = imagePath;

    imageTitle.textContent = imageTitles[currentIndex];
    imageDescription.textContent = imageDescriptions[currentIndex];

}

// Function to go to the previous image
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
    updateImage();
});

// Function to go to the next image
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    updateImage();
});

// Initial image setup
updateImage();
