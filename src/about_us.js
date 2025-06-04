import TXT_AboutUS from "../asset/txt/AboutUS.txt"
const AU_TXT = TXT_AboutUS.split(";");

import metroIcon from "../asset/img/metro-ascent.svg";
import busIcon from "../asset/img/bus-ascent.svg";
import restaurantImg from "../asset/img/ptitBreton.jpg";


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
    p3.textContent = AU_TXT[2];
    div.appendChild(p3);

    const p4 = document.createElement("p");
    p4.textContent = AU_TXT[3];
    div.appendChild(p4);

    const p5 = document.createElement("p");
    const link = document.createElement("a");
    link.textContent = "Le P'tit Breton";
    link.setAttribute("href", "https://www.leptitbreton-creperie.com");
    link.setAttribute("rel", "noreferrer noopener");
    link.setAttribute("target", "_blank");
    p5.appendChild(link);
    div.appendChild(p5);
    

    return div;
}


const createContact = function(){
    const div = document.createElement("div");
    div.classList.toggle("content-center");

    const h1 = document.createElement('h1');
    h1.textContent = "Contact";
    div.appendChild(h1);

    const container = document.createElement("div");
    container.classList.toggle("adress");
    const img = document.createElement("img");
    img.src = restaurantImg;

    container.appendChild(img);

    const name = document.createElement("p");
    name.textContent = "Odin's crêperie";
    const adress = document.createElement("p");
    adress.textContent = "11 rue d'Odin";
    const hour = document.createElement("p");
    hour.textContent = "12.00 - 15.00  / 19.00 - 22.30";

    container.appendChild(name);
    container.appendChild(adress);
    container.appendChild(hour);
    container.appendChild(createAccess());

    div.appendChild(container);
  


    return div
}


const createAccess = function(){
    const div = document.createElement("div");

    const metro = document.createElement("p");
    const span = document.createElement("span");
    const iconImg = document.createElement("img");
    
    iconImg.src = metroIcon;
    iconImg.setAttribute("height", "20px");
    iconImg.setAttribute("width", "20px");
    
    span.appendChild(iconImg);
    metro.appendChild(span);

    const span2 = document.createElement("span");
    span2.textContent = "Quelque part Station"
    metro.appendChild(span2);

    const bus = document.createElement("p");
    const span3 = document.createElement("span");
    const busImg = document.createElement("img");

    busImg.src = busIcon;
    busImg.setAttribute("height", "20px");
    busImg.setAttribute("width", "20px");

    span3.appendChild(busImg);
    bus.appendChild(span3);

    const span4 = document.createElement("span");
    span4.textContent = "Probablement le lieu"
    bus.appendChild(span4);
    

    div.appendChild(metro);
    div.appendChild(bus)

    return div;
}


    /* 
    
    - trouver meilleure icon pour metro et bus 
    - soit trouver la bonne couleur soit la changer (icon)
    - placer faux numéro de tel 
    - créer le grid element pour tout placer
    - garder les écrans en full screen pour les futurs travaux ! 
    
    */

export {loadingAboutUs};