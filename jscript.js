const sphere = document.querySelector('.sphere');

let background = document.querySelector('.background');
let stars = document.querySelector('.stars');
let cloud = document.querySelector('.cloud');
sphere.addEventListener('click',()=>{
    background.classList.toggle("dusk");
    stars.classList.toggle("newstar");
    cloud.classList.toggle("down");
});
