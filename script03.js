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
    "Logos & Fonts",
    "Colors",
    "Creating the Graphic Standard",
    "First Posts"
];

const imageDescriptions = [
    "I created a space where I could play around with different colors and fonts with the company logos to feel out which ones would work well. I knew for fonts I wanted a serif that would go with the wine club logo and the logo for one of the tasting rooms. It was really tricky to find something that would go with both tasting room logos since they were so different. I also wanted a more modern sans serif for regular text to give the brand a more modern feeling. ",
    "Some of the high end wines that were made by this company used a specific color scheme in the labels and the caps. Since these wines have been using those labels and caps for years I wanted to incorporate those in the brand because they were also really memorable for a wine company. There aren’t a lot of brands out there that use purple and yellow in the industry. ",
    "At this point I had all the pieces I wanted, I just needed to put them together. When making the graphic standard I really need to see it in action to get a good idea of if it works or not. You see all these cute mini graphic standards online but seeing it being executed in posts and stories is what really lets you know it was successful. So, the first thing I did was start to put together some posts with the rough plan I had made. I was able to tweak the fonts and colors so that it worked together well and then move it back to the graphic standard.",
    "When cleaning the social media I knew I wanted to not just make it look better but also make it more functional. I changed the profile picture from some bottles of wine to our main logo, created highlights for people to see both tasting rooms and our award winning wines, pinned a post with the winery hours right to the top, and created a Linktree so that users could navigate to our website, email, reviews, and wine club. "
];

const basePath = "images/socialMedia/galleryImages/";

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
