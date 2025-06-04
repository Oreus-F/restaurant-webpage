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


export {months, weeks, openHour, intervalHours};