const resetDOM = function(){
    const content = document.querySelector("#content");
    const header = document.querySelector("header");

    if(header.getAttribute("class") === "menu") header.classList.toggle("menu");
    if(content.getAttribute("class") === "menu") content.classList.toggle("menu");
    
    content.removeChild;

}

export {resetDOM}