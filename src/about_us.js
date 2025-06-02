import TXT_AboutUS from "../asset/txt/AboutUS.txt"
const AU_TXT = TXT_AboutUS.split(";");


const loadingAboutUs = function(){
    const header = document.querySelector("header");
    header.classList.toggle("about_us");


    const content = document.querySelector("#content");
    const div = document.createElement("div");

    div.setAttribute("id", "aboutUs");


    div.appendChild(createAboutSection());


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


    const link = document.createElement("a");
    link.textContent = "Le P'tit Breton";
    link.setAttribute("href", "https://www.leptitbreton-creperie.com");
    link.setAttribute("rel", "noreferrer noopener");
    link.setAttribute("target", "_blank");
    div.appendChild(link)
    

    return div;
}



export {loadingAboutUs};