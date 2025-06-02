import Lorem from "../asset/txt/Lorem.txt"


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
    h1.textContent = "About Us";

    div.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = Lorem;
    div.appendChild(p);

    return div;
}



export {loadingAboutUs};