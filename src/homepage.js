import { mainImg } from "./variables";


const loading_homepage = function(){
    const header = document.querySelector("header");
    header.classList.toggle("homepage");
    
    const banderole = document.createElement("div");
    banderole.setAttribute("id", "banderole");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "Breizh in our hearts:";
    p2.textContent = "Hapiness in your plate";

    banderole.appendChild(p1);
    banderole.appendChild(p2);

    const img = document.createElement("img");
    img.src = mainImg;

    const content = document.querySelector("#content");
    content.classList.toggle("home");
    content.appendChild(banderole);
    content.appendChild(img);
}


export {loading_homepage}