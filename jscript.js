const sphere = document.querySelector('.sphere');

let background = document.querySelector('.background');
let stars = document.querySelector('.stars');
let cloud = document.querySelector('.cloud');
let sphereBackground = document.querySelector('.sphereBackground');
let moon = document.querySelector('.moon');
sphere.addEventListener('click',()=>{
    background.classList.toggle("dusk");
    stars.classList.toggle("newstar");
    cloud.classList.toggle("down");
    sphereBackground.classList.toggle("right");
    moon.classList.toggle("center");
});
