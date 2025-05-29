// IMPORT

import calendarIcon from "../asset/img/calendar_icon.svg";
import calendarWhite from "../asset/img/calendar_white.svg";
import calendarBlue from "../asset/img/calendar_blue.svg";
import calendarAscent from "../asset/img/calendar_ascent.svg";


import hourIcon from "../asset/img/clock_icon.svg";
import hourWhite from "../asset/img/hour_white.svg";
import hourBlue from "../asset/img/hour_blue.svg";
import hourAscent from "../asset/img/hour_ascent.svg";

import personIcon from "../asset/img/person_icon.svg";
import personWhite from "../asset/img/person_white.svg";
import personBlue from "../asset/img/person_blue.svg";
import personAscent from "../asset/img/person_ascent.svg";

import recapIcon from "../asset/img/recap_icon.svg";
import recapWhite from "../asset/img/recap_white.svg";
import recapBlue from "../asset/img/recap_blue.svg";
import recapAscent from "../asset/img/recap_ascent.svg";

import separatorIcon from "../asset/img/separator.svg";
import separatorBlue from "../asset/img/separator_blue.svg";
import separatorAscent from "../asset/img/separator_ascent.svg";


// DISPLAY 

const createDialog = function(){
    const content = document.querySelector("#content");

    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "reservation");

    const div = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "réservation";
    div.appendChild(title)
    dialog.appendChild(div);

    const widget = createWidget();
    dialog.appendChild(widget);


    const booking = document.createElement("div");
    booking.setAttribute("id", "bookingInfo");

    dialog.appendChild(booking);

    const close = document.createElement("span");
    content.appendChild(dialog);
}


const createWidget = function() {
    const visualRecap = document.createElement("div");
    const bookingWidget = document.createElement("div");
    bookingWidget.setAttribute("id", "widget")

    for (let x=0; x <4; x++){
        const button = document.createElement("button");
        const icon = document.createElement("div");
        const img = document.createElement("img");
        if (x===0) {img.src = calendarBlue ; img.setAttribute("id", "calendarIcon")};
        if (x===1) {img.src = hourBlue ; img.setAttribute("id", "hour")};
        if (x===2) {img.src = personBlue ; img.setAttribute("id", "person")};
        if (x===3) {img.src = recapBlue ; img.setAttribute("id", "recap")};


        icon.appendChild(img);

        button.appendChild(icon)
        if (x < 3){
            const separator = document.createElement("div");
            const img = document.createElement("img");
            img.src = separatorBlue;
            separator.appendChild(img)
            button.appendChild(separator);
        };

        if (x > 0) button.setAttribute("diabled", "true");

        button.addEventListener("click", () => {
        });

        bookingWidget.appendChild(button);
    };

    visualRecap.appendChild(bookingWidget);
    return visualRecap;
}


const updateWidget = function(event){
    const widget = document.querySelector("#widget");
    const container = document.querySelector("#bookingInfo")
    const calendar = document.querySelector("#calendarIcon");
    const hour = document.querySelector("#hour");
    const person = document.querySelector("#person");
    const recap = document.querySelector("#recap");
    const buttons = widget.children;


    const state = [
        ["day", calendar, calendarWhite, calendarBlue, createCalendar],
        ["hour", hour, hourWhite, hourBlue, createHours],
        ["person", person, personWhite, personBlue, createPerson],
    ];

    const target = event.target;

    for(let x = 0; x < state.length; x++){
        if(target.closest(`.${state[x][0]}`)){
            widget.removeAttribute("class");
            widget.classList.toggle(`${state[x][0]}`);
            state[x][1].src = state[x][2];
            buttons[x].removeAttribute("disabled");
        };
    };


}


const changeDisplay = function(){
    const div = document.querySelector("#bookingInfo");
    div.replaceChildren();
};


const displayCalendar = function(){
    createDialog();
    createTable();
    activateArrows(today);
    createCalendar(Todays1st, today);

    const dialog = document.querySelector("#reservation");
    dialog.showModal();
}


const displayHour = function(info){

    changeDisplay();
    createHours(intervalHours, info.hour, info);    

};


const displayPerson =  function(info){
    changeDisplay();
    createPerson(info);
}


const displayRecap = function(info){
    changeDisplay();
    createRecap(info);
}


const closeDialog = function(){
    const dialog = document.querySelector("#reservation");
    const content = document.querySelector("#content"); 

    dialog.replaceChildren;
    content.removeChild(dialog);
}


// INFOS


const getInfos = function(mois, jour, annee){
    let date;
    if (mois && jour && annee) {
        date = new Date(`${annee}-${mois}-${jour}`);
    } else {
        date = new Date();
    }
    const month = wichMonth(date, months);
    const week = wichWeek(date, weeks);
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = getHours(date);

    const obj = {date, day, week, month, year, hour};
    return obj
};


const wichMonth = function(date, months, index){
    let result = date.getMonth();

    if (index) {result = result + index}
    return months[result];
};


const wichWeek = function(date, weeks){
    let result = date.getDay();
    return weeks[result]
}


const getHours = function(today){
    let hour = today.getHours();
    let min = today.getMinutes();
    if (min < 10) {min = min.toString().padStart(2, 0);};
    const result = `${hour.toString()}.${min}`
    
    return result;
}


// VARIABLES


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
    6 : ["samedi", "sturday", 5],
};


const intervalHours = [
    "12.00", "12.15", "12.30", "12.45", 
    "13.00", "13.15", "13.30", "13.45",
    "14.00", "14.15", "14.30", "14.45", "15.00", 
    "19.00", "19.15", "19.30", "19.45",
    "20.00", "20.15", "20.30", "20.45",
    "21.00", "21.15", "21.30", "21.45",
    "22.00", "22.15", "22.30",
];


let info = {};

/* PICK A DAY */


const createCalendar = function(firstDay, actual = firstDay){
    let calendarBody = document.querySelectorAll("td");
    const caption = document.querySelector("caption");
    caption.textContent = firstDay.month[0];

    let counter = 1;
    let allMonth = (firstDay.week[2] + firstDay.month[2]);

    if (allMonth > calendarBody.length){
        const tr = document.createElement("tr");
        for (let x = 0; x < 7; x++){
            const td = document.createElement("td");
            tr.appendChild(td);
        };

        calendar.appendChild(tr)

        calendarBody = calendar.querySelectorAll("td")
    }
    

    calendarBody.forEach((td, index) => {
        const button = document.createElement("button");
        td.appendChild(button);
        
        
        if(index >= firstDay.week[2] && index < (allMonth)){
            button.textContent = counter;
            

            if (button.textContent < actual.day){
                button.setAttribute("disabled", "true");
            } else {
                button.addEventListener("click", (event) => {
                    info.day = button.textContent;
                    info.month = actual.month[0];
                    info.hour = (button.textContent != actual.day) ? firstDay.hour : actual.hour;
                    updateWidget(event);
                    displayHour(info);
                });
            }

            counter ++
        } else {
            button.setAttribute("data-date", "none")
            button.setAttribute("disabled", "true")

        }

        if((actual.hour > "22.00") && (button.textContent == actual.day)) button.setAttribute("disabled", "true")
    });
}


const removeCalendar = function(){
    let calendarBody = document.querySelectorAll("td");

    if (calendarBody.length > 35){
        const extraChild = calendar.querySelectorAll("tr");
        calendar.removeChild(extraChild[extraChild.length - 1])
    }
    calendarBody.forEach(item => item.replaceChildren())
}


const increaseMonth = function(today){
    const arrow = document.querySelector("#arrow");
    const arrows = arrow.querySelectorAll("button");

    const caption = document.querySelector("caption");
    let displayedMonth = caption.textContent.toLowerCase();
    let year = displayedMonth === "décembre" ? year +=1 : today.year;
    
    const N1Month = wichMonth(today.date, months, 1);
    const N1firstDate =  getInfos(N1Month[1], 1, year);
    

    const N2Month = wichMonth(N1firstDate.date, months, 1);
    const N2firstDate = getInfos(N2Month[1], 1, year);

    
    if (displayedMonth === today.month[0]) {
        arrows[0].removeAttribute("disabled");
        removeCalendar();
        createCalendar(N1firstDate);
        caption.textContent = N1Month[0];

    } else if (displayedMonth === N1Month[0]){
        arrows[1].setAttribute("disabled", "true");
        removeCalendar();
        createCalendar(N2firstDate);
        caption.textContent = N2Month[0];

    }
    
    
}


const decreaseMonth = function(today){
    const arrow = document.querySelector("#arrow");
    const arrows = arrow.querySelectorAll("button");

    const caption = document.querySelector("caption");
    let displayedMonth = caption.textContent.toLowerCase();
    let year = displayedMonth === "janvier" ? year -=1 : today.year;

    const N0firstDate = getInfos(today.month[1], 1, today.year);

    const N1Month = wichMonth(today.date, months, 1);
    const N1firstDate =  getInfos(N1Month[1], 1, year);

    const N2Month = wichMonth(N1firstDate.date, months, 1);

    if(displayedMonth === N2Month[0]){
        arrows[1].removeAttribute("disabled")
        removeCalendar();
        createCalendar(N1firstDate);
        caption.textContent = N1Month[0];
    } else if (displayedMonth === N1Month[0]){
        arrows[0].setAttribute("disabled", "true");
        removeCalendar();
        createCalendar(N0firstDate, today);
        caption.textContent = today.month[0]
    };
}


const createTable = function(){

    const div = document.querySelector("#bookingInfo");
    div.classList.toggle("day");

    const table = document.createElement("table");
    table.setAttribute("id", "calendar");
    const caption = document.createElement("caption");
    table.appendChild(caption)


    const rowArrow = document.createElement("tr");
    rowArrow.setAttribute("id", "arrow");
    const left = document.createElement("th");
    const right = document.createElement("th");
    right.setAttribute("colspan", "6");
    rowArrow.appendChild(left);
    rowArrow.appendChild(right);
    table.appendChild(rowArrow);

    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const rowDay = document.createElement("tr");
    for (let i = 0; i < days.length; i++){
        const th = document.createElement("th");
        th.textContent = days[i];
        rowDay.appendChild(th);
    };
    table.appendChild(rowDay);


    for(let x = 0; x < 5; x++){
        const tr = document.createElement("tr");
        for(let y = 0; y < 7; y++){
            const td = document.createElement("td");
            tr.appendChild(td);
        };
        table.appendChild(tr);
    };


    div.appendChild(table);
}


const activateArrows = function(today){
    const arrow = document.querySelector("#arrow");
    const arrows = arrow.querySelectorAll("th");
    
    arrows.forEach((arrow, index) => {
        const button = document.createElement("button");
        if (index === 0) { 
            button.textContent = "<"
            button.addEventListener("click", () => decreaseMonth(today))
            button.setAttribute("disabled", "true");
    
        } else {
            button.textContent = ">";
            button.addEventListener("click", () => {increaseMonth(today)})
        }
    
        arrow.appendChild(button)
    });
      
}


/* HOURS */


const createHours = function(intervalHours, hour, info){
    const div = document.querySelector('#bookingInfo');
    div.classList.toggle("hour");
    div.classList.toggle("day");

    const title = document.createElement("h2");
    title.textContent = "Sélectionnez une heure";
    div.appendChild(title);

    const available = intervalHours.filter((interval) => interval > hour);

    if(available[0] < "15.30"){
        const dej = displayDej(available, info);
        div.appendChild(dej);
    };

    const diner = displayDiner(available, info);
    div.appendChild(diner);
}


const displayDej = function(interval, info){
    const div = document.createElement("div");
    const dej = document.createElement("p");
    dej.textContent = "déjeuner";
    div.appendChild(dej);

    for(let x=0; x < interval.length; x++){

        if(interval[x] < "15.30"){

            const button = document.createElement("button");
            const hour = interval[x].replace(".", ":");
            button.textContent = hour;
            button.addEventListener("click", (event) => {
                updateWidget(event)
                info.hour = button.textContent;
                displayPerson(info);
            });

            div.appendChild(button)
        };
    };
    
    return div;
};


const displayDiner = function(interval, info){
    const div = document.createElement("div");
    const diner = document.createElement("p");
    diner.textContent = "diner";
    div.appendChild(diner);

    for(let x=0; x < interval.length; x++){

        if(interval[x] > "15.30"){

            const button = document.createElement("button");
            const hour = interval[x].replace(".", ":");
            button.textContent = hour;
            button.addEventListener("click", (event) => {
                info.hour = button.textContent;
                updateWidget(event)
                displayPerson(info);
            });

            div.appendChild(button)
        };
    };
    
    return div;
};


// PERSON

const createPerson = function(info){
    const div = document.querySelector('#bookingInfo');
    div.classList.toggle("hour");
    div.classList.toggle("person");

    const title = document.createElement("h2");
    title.textContent = "Nombre de personne";
    div.appendChild(title);

    const container = document.createElement("div");

    for (let x = 1; x < 21; x++){
        const button = document.createElement("button");
        button.textContent = x;
        button.addEventListener("click", (event) => {
            info.person = button.textContent;
            updateWidget(event)
            displayRecap(info);
        })

        container.appendChild(button);
    };

    div.appendChild(container)
}


// RECAP


const createRecap = function(info){
    const div = document.querySelector('#bookingInfo');
    div.classList.toggle("person");
    div.classList.toggle("recap");
    
    const recap = showRecap(info);
    div.appendChild(recap);
    const form = createForm(info);
    div.appendChild(form);
    
}


const showRecap = function(info){
    const div = document.createElement("div");
    const container = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = "Odin's Crepe";

    const day = document.createElement("span");
    day.textContent = `${info.day} ${info.month}`;

    const separator1 = document.createElement("span");
    separator1.textContent = ".";

    const hour = document.createElement("span");
    hour.textContent = info.hour;

    const separator2 = document.createElement("span");
    separator2.textContent = ".";

    const person = document.createElement("span");
    person.textContent = `${info.person} Pers.`;

    div.appendChild(title);
    container.appendChild(day);
    container.appendChild(separator1);
    container.appendChild(hour);
    container.appendChild(separator2);
    container.appendChild(person);

    div.appendChild(container);
    return div
}


const createForm = function(info){
    const div =  document.createElement("div");
    
    const form = document.createElement("form");


    const p = document.createElement("p");
    p.textContent = "Entrez votre e-mail pour compléter votre réservation";
    form.appendChild(p);


    const container = document.createElement("div");

    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = "Adresse e-mail*";
    label.appendChild(span);
    container.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("name", "email");
    input.setAttribute("required", "true");
    input.setAttribute("placeholder", "Votre adresse e-mail");
    container.appendChild(input)
    form.appendChild(container);


    const comment = document.createElement("textarea");
    comment.setAttribute("placeholder", "Pour toutes informations complémentaires.");
    form.appendChild(comment);




    const button = document.createElement("button");
    button.textContent = "réserver";
    button.addEventListener("click", () => {
        closeDialog();
        alert("Not the purpose of this project, but it was fun to create though");
    })
    form.appendChild(button);





    div.appendChild(form);
    return div
}




const dialog = document.querySelector("#reservation");

const today = getInfos();
const Todays1st = getInfos(today.month[1], 1, today.year);

// dialog.showModal();

// displayHour(today)

export default displayCalendar