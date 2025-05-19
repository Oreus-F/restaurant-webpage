const loadingMenu = function(){
    const header = document.querySelector("header");
    if (header.getAttribute("class") !== "menu") header.classList.toggle("menu")

    const pageMenu = document.createElement("div")
    


    const content = document.querySelector("#content");
    content.classList.toggle("menu")
    content.appendChild(pageMenu)
    


}


export {loadingMenu}