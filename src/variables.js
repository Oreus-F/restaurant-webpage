/* LANG */


const lang = "EN"


/* IMAGES */

import mainImg from "/asset/img/mainGalette.jpeg"


import calendarWhite from "../asset/img/calendar_white.svg";
import calendarBlue from "../asset/img/calendar_blue.svg";


import hourWhite from "../asset/img/hour_white.svg";
import hourBlue from "../asset/img/hour_blue.svg";

import personWhite from "../asset/img/person_white.svg";
import personBlue from "../asset/img/person_blue.svg";

import recapBlue from "../asset/img/recap_blue.svg";
import recapWhite from "../asset/img/recap_white.svg";

import separatorBlue from "../asset/img/separator_blue.svg";



import metroIcon from "../asset/img/metro-ascent.svg";
import busIcon from "../asset/img/bus-ascent.svg";
import restaurantImg from "../asset/img/ptitBreton.jpg";



/* TEXT */


import liste_galette from "../asset/txt/liste_galette.txt";
import liste_crepe from "../asset/txt/liste_crepe.txt";
import liste_glace from "../asset/txt/liste_glace.txt";
import liste_cidre from "../asset/txt/liste_cidre.txt";
import liste_vins from "../asset/txt/liste_vins.txt";
import liste_sans_alcool from "../asset/txt/liste_sans_alcool.txt";


import list_galette from "../asset/txt/list_galettes.txt";
import list_crepe from "../asset/txt/list_crepe.txt";
import list_ice_cream from "../asset/txt/list_ice_cream.txt";
import list_cider from "../asset/txt/list_cider.txt";
import list_wines from "../asset/txt/list_wines.txt";
import list_alcohol_free from "../asset/txt/list_alcohol_free.txt";
 
const FR_Menu = [liste_galette, liste_crepe, liste_glace, liste_cidre, liste_vins, liste_sans_alcool];
const EN_Menu = [list_galette, list_crepe, list_ice_cream, list_cider, list_wines, list_alcohol_free];

const text_Menu = lang === "FR" ? FR_Menu : EN_Menu;


import FR_TXT_AboutUS from "../asset/txt/AboutUS.txt"
const FR_AboutUS = FR_TXT_AboutUS.split(";");

import EN_TXT_AboutUS from  "../asset/txt/EN_AboutUS.txt";
const EN_AboutUS = EN_TXT_AboutUS.split(";");


const Txt_AboutUs = lang === "FR" ? FR_AboutUS : EN_AboutUS;

/* VAR */


const months = {
    0: ["janvier", "january", 31],
    1: ["février", "febuary", 28],
    2: ["mars", "march", 31],
    3: ["avril", "april", 30],
    4: ["mai", "may", 31],
    5: ["juin", "june", 30],
    6: ["juillet", "july", 31],
    7: ["août", "august", 31],
    8: ["septembre", "september", 30],
    9: ["octobre", "october", 31],
    10: ["novembre", "november", 30],
    11: ["décembre", "december", 31],

};


if (lang === "EN"){
   for (const index in months){
    months[index][0] = months[index][1];
    console.log(months[index])
   };
};



const weeks = {
    0 : ["dimanche", "sunday", 6],
    1 : ["lundi", "monday", 0],
    2 : ["mardi", "tuesday", 1],
    3 : ["mercredi", "wednesday", 2],
    4 : ["jeudi", "thursday", 3],
    5 : ["vendredi", "friday", 4],
    6 : ["samedi", "saturday", 5],
};


if (lang === "EN"){
    for (const index in weeks){
        weeks[index][0] = weeks[index][1];
    };
};


const open_hours = {
    FR: ["12.00", "15.00", "19.00", "22.30"],
    EN: ["12:00pm", "03:00pm", "07:00pm", "10:00pm"],
};

const openHour = lang === "FR" ? open_hours.FR : open_hours.EN;


const intervalHours = [
    "12.00", "12.15", "12.30", "12.45", 
    "13.00", "13.15", "13.30", "13.45",
    "14.00", "14.15", "14.30", "14.45", 
    "15.00", "19.00", "19.15", "19.30",
    "19.45", "20.00", "20.15", "20.30",
    "20.45", "21.00", "21.15", "21.30",
    "21.45", "22.00", "22.15", "22.30",
];




export {months, weeks, openHour, intervalHours, 
    calendarWhite, calendarBlue, hourWhite, hourBlue,
personBlue, personWhite, recapBlue, recapWhite, separatorBlue,
mainImg, text_Menu, Txt_AboutUs, metroIcon, busIcon, restaurantImg};