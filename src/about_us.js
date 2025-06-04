import TXT_AboutUS from "../asset/txt/AboutUS.txt"
const AU_TXT = TXT_AboutUS.split(";");

import metroIcon from "../asset/img/metro-ascent.svg";
import busIcon from "../asset/img/bus-ascent.svg";
import restaurantImg from "../asset/img/ptitBreton.jpg";
import phoneIcon from "../asset/img/phone.svg";


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

    for (let x = 0; x < AU_TXT.length; x++){
        const p = document.createElement("p");
        p.textContent = AU_TXT[x];
        div.appendChild(p);
    }

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
    container.appendChild(displayAccess());

    div.appendChild(container);
  


    return div
}


const displayAccess = function(){
    const div = document.createElement("div");

    div.appendChild(createAccess(metroIcon, "Quelque part Station"));
    div.appendChild(createAccess(busIcon, "Probablement le lieu"))
    div.appendChild(createAccess(phoneIcon, "+331 11 11 11 11"));

    return div;
}


const createAccess = function(source, text){
    const p = document.createElement("p");
    const span = document.createElement("span");
    const icon = document.createElement("img");
    
    icon.src = source;
    icon.setAttribute("height", "20px");
    icon.setAttribute("width", "20px");
    
    span.appendChild(icon);
    p.appendChild(span);

    const spanText = document.createElement("span");
    spanText.textContent = text
    p.appendChild(spanText);


    return p
}


    /* 

    - placer faux numéro de tel 
    - créer le grid element pour tout placer

    
    */

export {loadingAboutUs};