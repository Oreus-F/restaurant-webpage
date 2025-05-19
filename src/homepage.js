import mainImg from "../../../asset/img/mainGalette.jpeg"


const homepageLoading = function(){
    const banderole = document.createElement("div");
    banderole.setAttribute("id", "banderole");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "Breizh in our hearts";
    p2.textContent = "Hapiness in your plate";

    banderole.appendChild(p1);
    banderole.appendChild(p2);

    const img = document.createElement("img");
    img.src = mainImg;

   
}