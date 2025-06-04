import { openHour, weeks, Txt_AboutUs, busIcon, metroIcon, restaurantImg } from "./variables";


const lang = "EN";


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

    for (let x = 0; x < Txt_AboutUs.length; x++){
        const p = document.createElement("p");
        p.textContent = Txt_AboutUs[x];
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
    div.classList.toggle("content-contact");

    const h1 = document.createElement('h1');
    h1.textContent = "Contact";


    div.appendChild(h1);
    div.appendChild(displayLocation());
    div.appendChild(displayInformation())
    
    return div
}


const displayLocation = function(){
    const div = document.createElement("div");
    div.classList.toggle("adress");
    const img = document.createElement("img");
    img.src = restaurantImg;

    div.appendChild(img);

    const name = document.createElement("p");
    name.textContent = "Odin's crêperie";
    const adress = document.createElement("p");
    adress.textContent = lang === "FR" ? "11 rue d'Odin, 75000 PARIS" : "11 Odin's Street";
    const phone = document.createElement("p");
    phone.textContent = "01 11 11 11 11";
    
    div.appendChild(name);
    div.appendChild(adress);
    div.appendChild(phone);

    let metroStation = lang === "FR" ? "Quelque part Station" : "Somewhere Station";
    let busStation = lang === "FR" ? "Probablement le lieu" : "Probably somewhere"

    div.appendChild(createInfo(metroIcon, metroStation));
    div.appendChild(createInfo(busIcon, busStation));


    return div
}



const displayInformation = function(){
    const div = document.createElement("div");
    div.classList.toggle("informations");


    div.appendChild(displayHour());

    return div
}



const displayHour = function(){
    const div = document.createElement('div');
    let size = Object.keys(weeks).length

    const h2 = document.createElement("h2");
    h2.textContent = lang === "FR" ? "horaires" : "hours";
    div.appendChild(h2);

    for (let x= 0; x < size; x++){
        div.appendChild(createSchedule(openHour, weeks, x))
    };

    return div
}



const createSchedule = function(hour, week, index){

    const p = document.createElement("p");
    const spanW = document.createElement("span");
    spanW.textContent = week[index][0];

    const spanH = document.createElement("span");
    spanH.textContent = `${hour[0]} - ${hour[1]} / ${hour[2]} - ${hour[3]}`;

    p.appendChild(spanW);
    p.appendChild(spanH);

    return p
}



const createInfo = function(source, text){
    const p = document.createElement("p");
    const span = document.createElement("span");
    const icon = document.createElement("img");
    
    icon.src = source;
    icon.setAttribute("height", "30px");
    icon.setAttribute("width", "30px");
    
    span.appendChild(icon);
    p.appendChild(span);

    const spanText = document.createElement("span");
    spanText.textContent = text
    p.appendChild(spanText);


    return p
}




export {loadingAboutUs};