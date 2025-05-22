import liste_galette from "../asset/txt/liste_galette.txt";
import liste_crepe from "../asset/txt/liste_crepe.txt";
import liste_glace from "../asset/txt/liste_galette.txt";
import liste_vins from "../asset/txt/liste_vins.txt";
import liste_sans_alcool from "../asset/txt/liste_sans_alcool.txt";




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
    liste.appendChild(p3);
    return liste;

}


const deleteLIElement = function(text){
    return text = text.splice(0, 3)
}




const loadingMenu = function(){
    const header = document.querySelector("header");
   

    const pageMenu = document.createElement("div")
    


    const content = document.querySelector("#content");
    
    


}


export {loadingMenu}