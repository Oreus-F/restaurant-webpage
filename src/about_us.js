import TXT_AboutUS from "../asset/txt/AboutUS.txt"
const AU_TXT = TXT_AboutUS.split(";");

import metroIcon from "../asset/img/metro.svg";


const loadingAboutUs = function(){
    const header = document.querySelector("header");
    header.classList.toggle("about_us");


    const content = document.querySelector("#content");
    const div = document.createElement("div");

    div.setAttribute("id", "aboutUs");


    div.appendChild(createAboutSection());
    div.appendChild(createContact());


    content.appendChild(div);

    
};


const createAboutSection = function(){
    const div = document.createElement("div");
    div.classList.toggle("content-center");

    const h1 = document.createElement("h1");
    h1.textContent = 'About "Them" ?';

    div.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = AU_TXT[0];
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.textContent = AU_TXT[1];
    div.appendChild(p2);

    const p3 = document.createElement("p");
    const link = document.createElement("a");
    link.textContent = "Le P'tit Breton";
    link.setAttribute("href", "https://www.leptitbreton-creperie.com");
    link.setAttribute("rel", "noreferrer noopener");
    link.setAttribute("target", "_blank");
    p3.appendChild(link)
    div.appendChild(p3)
    

    return div;
}


const createContact = function(){
    const div = document.createElement("div");
    div.classList.toggle("content-center");

    const h1 = document.createElement('h1');
    h1.textContent = "Contact";
    div.appendChild(h1);

    const container = document.createElement("div");
    const img= document.createElement("img");


    container.appendChild(img);

    const name = document.createElement("p");
    name.textContent = "Odin's crêperie";
    const adress = document.createElement("p");
    adress.textContent = "11 rue d'Odin";
    const hour = document.createElement("p");
    hour.textContent = "12.00 - 15.00  / 19.00 - 22.30";

    const metro = document.createElement("p");
    const span = document.createElement("span");
    const iconImg = document.createElement("img");
    iconImg.src = metroIcon;
    iconImg.setAttribute("height", "20px");
    iconImg.setAttribute("width", "20px");
    
    span.appendChild(iconImg);
    metro.appendChild(span);

    const span2 = document.createElement("span");
    span2.textContent = "Somewhere Station"
    metro.appendChild(span2)

    /* 
    
    - trouver meilleure icon pour metro et bus 
    - soit trouver la bonne couleur soit la changer (icon)
    - placer faux numéro de tel 
    - créer le grid element pour tout placer
    - garder les écrans en full screen pour les futurs travaux ! 
    
    */
    
    


    return div
}




export {loadingAboutUs};