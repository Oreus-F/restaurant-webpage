import "./style.css";
import { resetDOM } from "./resetpage";
import { loading_homepage } from "./homepage";
import { loadingMenu } from "./menu";

// resetDOM();
loading_homepage();
// loadingMenu();

const reservation = document.querySelector("#reservation");

reservation.showModal();

