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
    "Building The Brand Foundation",
    "From Mock-up to WordPress",
    "Circular Designing",
    "Overriding POS Defaults",
    "Staying In Touch"
];

const imageDescriptions = [
    "After collecting information, examples, and ideas, I moved onto trying to find the connection where all of them would meet in the new website. There were a lot of things I needed to consider with this website since they didn’t really have much of an established brand. They had their logos which they used pretty loosely but no colors or fonts or anything to keep their brand consistent. So I referred to their labels that they had been using for the past 10 years as the foundation because of the familiarity their customers already have with those labels.",
    "After checking in with the manager, they gave me permission to continue with my work and move from the mock-up to making it real. The issue I first ran into was that the business had two different logos for their two different tasting rooms that were on all the labeling, but they also had a company logo. The big issue was that customers didn’t really recognize the main company logo since it never appeared on labels but needed to be present on the website. So that left me with figuring out a way to take two logos that look nothing alike and put them together on the home page so customers know they are in the right place but still having the main company logo as well. ",
    "Even with the mock-up as my reference, I realized as I went along that there was so much more that I could do. I knew my process was going to be circular and evolve as I became more and more familiar with the branding I was trying to achieve. After completing the home page, I moved on to other pages and became reinspired and circled back to the homepage. I believe that this process of going back and forth between the home page and the other pages helped maintain continuity on the website. ",
    "For the integrations, there were a lot of issues that I faced with the default styling that the software offered. Their stylesheets didn’t always fit well into the pages I had designed and particularly their flex-box seemed to always flex in the opposite direction from what felt natural. It was tricky trying to work around their stylesheet without having access to it but there was a lot I could do with the stylesheet built into WordPress. I achieved the look that I was going for and also solved the problems that customers were facing at check out. ",
    "Throughout this process, I would check in with the manager and other lower level managers to get feedback on the direction I was taking the website. It was important to me to know that we were all on the same page and that this was fleshing out well in their eyes. Communication and understanding were always my biggest priority and so I actively sought out ways to keep my manager as informed as possible throughout the whole designing process and after. "
];

const basePath = "images/sobonWebsite/galleryImages/";

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
