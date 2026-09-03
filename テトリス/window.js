const container = document.body;

const rect = container.getBoundingClientRect();
const width = rect.width;
const height = rect.height;

function windowsize(){
    const scaleX = window.innerWidth/width
    const scaleY = window.innerHeight/height;

    const scale = Math.min(scaleX,scaleY);
    container.style.zoom = scale*0.95;
}

windowsize();
window.addEventListener('resize', windowsize);