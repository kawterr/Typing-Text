const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developper"
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Blogger"
    }, 8000); // 1s= 1000ms
    
}

textLoad();
setInterval(textLoad, 12000);