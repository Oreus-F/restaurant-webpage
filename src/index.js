import "./style.css";
import { resetDOM } from "./resetpage";
import { loading_homepage } from "./homepage";
import { loadingMenu } from "./menu";
import displayReservation from "./calendar";
import { loadingAboutUs } from "./about_us";

const loadingFunctions = [loading_homepage, loadingMenu, loadingAboutUs, displayReservation];

const nav = document.querySelector("nav");
const buttons = nav.querySelectorAll("button");

for (let x = 0; x < buttons.length; x++){
    if (x === 3){
        buttons[x].addEventListener("click", () => {
            loadingFunctions[x]();
        });

        break
    };

    buttons[x].addEventListener("click", () => {
        resetDOM();
        loadingFunctions[x]("EN");
    })
}

loading_homepage();