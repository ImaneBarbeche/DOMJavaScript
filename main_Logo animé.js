let logo = document.getElementById('logo'); 
let value = 0; 

function animLogo(){ 

    if (value < 240) {   
        value++;
        logo.style.height = value + 'px';
        logo.style.width = value + 'px';
        logo.style.fontSize = value / 6 + 'px';
        
    } else {
        value = 0; 
    }
}

setInterval(animLogo, 10);
console.log('Animation started');