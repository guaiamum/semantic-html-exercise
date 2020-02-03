const button = document.getElementsByClassName('btn').item(0);
let i = 0;
let id;

function animateBtn(){
    i++;
    if (i == 100) {
        if ( button.classList.contains("yellow") ) {
            button.classList.remove("yellow");
        }
        else {
            button.classList.add("yellow");
        }
        i = 0;
    }
    
    id = window.requestAnimationFrame(animateBtn);
    
};

id = window.requestAnimationFrame(animateBtn);


button.addEventListener(
    'click',
    () => {
        console.log(id);
        window.cancelAnimationFrame(id);
    }
)