const images = document.querySelectorAll(".app .image");

console.log(images);

function expandImage(event){

    for(const image of images) {
        image.classList.remove("active");
    }

    const clickedImage = event.target;
    clickedImage.classList.add("active");
}

function expandImage2(event){
    const activeImage = document.querySelector(".app .image.active");
    if(activeImage !== null){
        activeImage.classList.remove("active");
    }
    const clickedImage = event.target;
    clickedImage.classList.add("active");
}

// for (let i = 0; i < images.length; i++) {
//   const currentImage = images[i];
//   currentImage.addEventListener("click", expandImage2);
// }

for(const image of images){
    image.onclick = expandImage;
}
