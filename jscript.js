const sphere = document.querySelector('.sphere');

let background = document.querySelector('.background');

sphere.addEventListener('click',()=>{
    background.classList.toggle("dusk");
});
