import "./style.css";
import { resetDOM } from "./resetpage";
import { homepageLoading } from "./homepage";
import { loadingMenu } from "./menu";
import txt from "../../../Downloads/txt.txt";

// homepageLoading();
// loadingMenu();

let array = txt.split(",")
console.log(array)

// Créer fichier text avec le text correct puis intégrer inside la bonne fonction