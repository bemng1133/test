var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.createElement("textarea");
div.style.position = "absolute";
div.style.left = "50%";
div.style.top = "50%";
div.style.background='transparent'

document.body.appendChild(div);

div.addEventListener('dblclick', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);


let text = 'nulled'
div.innerText  = text
div.style.resize= 'both';
let isPressed=1
document.addEventListener('keypress', (event) => {
    const keyName = event.key.toLocaleLowerCase();
    if(keyName!='x'&&keyName!='ч') return
    if(!isPressed){
        div.style.display = 'none'
        div.style.border = 'none'
        div.style['scrollbar-base-color'] = "#DCDCDC";
        isPressed=1
    } else {
        isPressed=0;
        div.style.display='block'
    }
});
