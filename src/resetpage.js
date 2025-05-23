const resetDOM = function(){
    const content = document.querySelector("#content");
    const header = document.querySelector("header");

    header.removeAttribute("class");
    content.removeAttribute("class")
    
    content.replaceChildren();
}

export {resetDOM}