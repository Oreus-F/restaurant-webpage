import liste_galette from "../asset/txt/liste_galette.txt";
import liste_crepe from "../asset/txt/liste_crepe.txt";
import liste_glace from "../asset/txt/liste_galette.txt";
import liste_vins from "../asset/txt/liste_vins.txt";
import liste_sans_alcool from "../asset/txt/liste_sans_alcool.txt";


const create_galette = function(text){
    const div = document.createElement("div");
    div.setAttribute("class", "content-center title-img listing galettes");

    const title = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    h2.textContent = "galettes";
    h3.textContent = "farine de sarrasin (sans gluten*)";
    title.appendChild(h2);
    title.appendChild(h3);


    const ul = document.createElement("ul");

    let listeContent = text.split(";");
    let liLength = (listeContent.length)/3;

    for (let x = 0; x < liLength; x++ ){
        const li = createLI(listeContent);
        deleteLIElement(listeContent);
        ul.appendChild(li);
    };

    div.appendChild(title);
    div.appendChild(ul);

    return div;

}

const createLI = function(text){

    const liste = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = text[0];
    p2.textContent = text[1];
    p3.textContent = text[2];
    liste.appendChild(p1);
    liste.appendChild(p2);

    if (p3 === "empty") return liste;

    liste.appendChild(p3);
    
    return liste;

}


const deleteLIElement = function(text){
    return text = text.splice(0, 3)
}




const loadingMenu = function(){
    const header = document.querySelector("header");
    if (header.getAttribute("class") !== "menu") header.classList.toggle("menu")
    


    const content = document.querySelector("#content");

    const galette = create_galette(liste_galette);
    
    content.appendChild(galette);

}


export {loadingMenu}