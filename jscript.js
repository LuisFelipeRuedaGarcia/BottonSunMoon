const sphere = document.querySelector('.sphere');

let background = document.querySelector('.background');
let stars = document.querySelector('.stars');

sphere.addEventListener('click',()=>{
    background.classList.toggle("dusk");
    stars.classList.toggle("newstar");
});
