import liste_galette from "../asset/txt/liste_galette.txt";
import liste_crepe from "../asset/txt/liste_crepe.txt";
import liste_glace from "../asset/txt/liste_glace.txt";
import liste_cidre from "../asset/txt/liste_cidre.txt";
import liste_vins from "../asset/txt/liste_vins.txt";
import liste_sans_alcool from "../asset/txt/liste_sans_alcool.txt";


const create_title = function(text){
    const div = document.createElement("div");
    div.setAttribute("class", "content-center title-img listing");

    if (text[0] === "galettes" || text[0] === "crêpes"){
        div.classList.toggle(text[0])
        const title = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        h2.textContent = text[0]
        h3.textContent = text[1]
        title.appendChild(h2);
        title.appendChild(h3);
        div.appendChild(title)

        text.splice(0, 2);

        return div;

    } else {

        if(text[0] === "cidres & bières" || text[0] === "sans alcool"){
            text[0] === "cidres & bières" ? 
            div.classList.toggle("cidre-biere"): 
            div.classList.toggle("sans-alcool");
        } else {div.classList.toggle(text[0])};


        const title = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.textContent = text[0];

        text.splice(0, 1);
        
        title.appendChild(h2);
        div.appendChild(title);

        return div;
    };
}


const create_allergene = function(text){
    const p = document.createElement("p");
    p.textContent = text[0];

    return p;
}


const generate_li = function(text){
    const liste = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = text[0];
    p2.textContent = text[1];
    p3.textContent = text[2];
    liste.appendChild(p1);
    liste.appendChild(p2);

    if (p3.textContent === "empty") return liste;
    liste.appendChild(p3); 

    return liste;
};


const create_list = function(text){
    const ul = document.createElement("ul");
    let liLength = Math.floor((text.length)/3);
    for (let x = 0; x < liLength; x++){
        const li = generate_li(text);
        text.splice(0, 3);
        ul.appendChild(li);
    };

    return ul;
}


const create_menu = function(text){
    let textFile = text.split(";");
    const div = create_title(textFile);   
    div.appendChild(create_list(textFile));
    if(textFile.length !== 0) div.appendChild(create_allergene(textFile));
    return div
}


const loadingMenu = function(){

    const header = document.querySelector("header");
    if (header.getAttribute("class") !== "menu") header.classList.toggle("menu");

    const content = document.querySelector("#content");
    content.appendChild(create_menu(liste_galette));
    content.appendChild(create_menu(liste_crepe));
    content.appendChild(create_menu(liste_glace));
    content.appendChild(create_menu(liste_cidre));
    content.appendChild(create_menu(liste_vins));
    content.appendChild(create_menu(liste_sans_alcool));  
}


export {loadingMenu}