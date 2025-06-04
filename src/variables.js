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

const text_Menu_FR = [liste_galette, liste_crepe, liste_glace, liste_cidre, liste_vins, liste_sans_alcool];

import TXT_AboutUS from "../asset/txt/AboutUS.txt"
const AU_TXT = TXT_AboutUS.split(";");

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


const weeks = {
    0 : ["dimanche", "sunday", 6],
    1 : ["lundi", "monday", 0],
    2 : ["mardi", "tuesday", 1],
    3 : ["mercredi", "wednesday", 2],
    4 : ["jeudi", "thursday", 3],
    5 : ["vendredi", "friday", 4],
    6 : ["samedi", "saturday", 5],
};


const openHour = ["12.00", "15.00", "19.00", "22.30"];


const intervalHours = [
    "12.00", "12.15", "12.30", "12.45", 
    "13.00", "13.15", "13.30", "13.45",
    "14.00", "14.15", "14.30", "14.45", "15.00", 
    "19.00", "19.15", "19.30", "19.45",
    "20.00", "20.15", "20.30", "20.45",
    "21.00", "21.15", "21.30", "21.45",
    "22.00", "22.15", "22.30",
];




export {months, weeks, openHour, intervalHours, 
    calendarWhite, calendarBlue, hourWhite, hourBlue,
personBlue, personWhite, recapBlue, recapWhite, separatorBlue,
mainImg, text_Menu_FR, AU_TXT, metroIcon, busIcon, restaurantImg};