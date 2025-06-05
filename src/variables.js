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

import list_galette from "../asset/txt/list_galettes.txt";
import list_crepe from "../asset/txt/list_crepe.txt";
import list_ice_cream from "../asset/txt/list_ice_cream.txt";
import list_cider from "../asset/txt/list_cider.txt";
import list_wines from "../asset/txt/list_wines.txt";
import list_alcohol_free from "../asset/txt/list_alcohol_free.txt";


const textMenu = [list_galette, list_crepe, list_ice_cream, list_cider, list_wines, list_alcohol_free];




import EN_TXT_AboutUS from  "../asset/txt/EN_AboutUS.txt";
const AU_TXT = EN_TXT_AboutUS.split(";");


/* VAR */


const months = {
    0: ["january", "january", 31],
    1: ["febuary", "febuary", 28],
    2: ["march", "march", 31],
    3: ["april", "april", 30],
    4: ["may", "may", 31],
    5: ["june", "june", 30],
    6: ["july", "july", 31],
    7: ["august", "august", 31],
    8: ["september", "september", 30],
    9: ["october", "october", 31],
    10: ["november", "november", 30],
    11: ["december", "december", 31],

};


const weeks = {
    0 : ["sunday", "sunday", 6],
    1 : ["monday", "monday", 0],
    2 : ["tuesday", "tuesday", 1],
    3 : ["wednesday", "wednesday", 2],
    4 : ["thursday", "thursday", 3],
    5 : ["friday", "friday", 4],
    6 : ["saturday", "saturday", 5],
};


const openHour = ["12:00pm", "03:00pm", "07:00pm", "10:00pm"];



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
mainImg, textMenu, AU_TXT, metroIcon, busIcon, restaurantImg};
