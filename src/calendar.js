// IMPORT
import {months, weeks, intervalHours, calendarBlue, calendarWhite,
    hourBlue, hourWhite, personBlue, personWhite, separatorBlue,
    recapBlue, recapWhite
} from "./variables.js"


let info = {};


// DISPLAY 

const createDialog = function(){
    const content = document.querySelector("#content");

    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "reservation");

    const div = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "reservation";

    const close = document.createElement("span");
    const button = document.createElement("button");
    button.textContent = "X";

    button.addEventListener("click", () => {
        closeDialog();
    })

    close.appendChild(button);
    
    div.appendChild(title)
    div.appendChild(close);
    
    dialog.appendChild(div);

    const widget = createWidget();
    dialog.appendChild(widget);


    const booking = document.createElement("div");
    booking.setAttribute("id", "bookingInfo");

    dialog.appendChild(booking);





    content.appendChild(dialog);
}


const createWidget = function() {
    const visualRecap = document.createElement("div");
    const bookingWidget = document.createElement("div");
    bookingWidget.setAttribute("id", "widget");
    bookingWidget.classList.toggle("day");


    const state = [
        ["day", "calendarIcon", calendarWhite],
        ["hour", "hour", hourBlue],
        ["person", "person", personBlue],
        ["recap", "recap", recapBlue],
    ];

    for (let x=0; x <4; x++){
        const button = document.createElement("button");
        const icon = document.createElement("div");
        const img = document.createElement("img");
        const span = document.createElement("span");


        for (let y = 0; y < state.length; y++){
            if (x === y){
                img.src = state[y][2];
                img.setAttribute(`id`, `${state[y][1]}`);
                span.setAttribute("data-state", `${state[y][0]}`)
            }
        }


        icon.appendChild(img);
        button.appendChild(icon);
 
        const separator = document.createElement("div");

        if (x < 3){

            const imgSeparator = document.createElement("img");
            imgSeparator.src = separatorBlue;
            separator.appendChild(imgSeparator);
            
        };

        button.appendChild(separator);
        
        button.addEventListener("click", (event) => {
            updateWidget(event);
        });
        

        button.appendChild(span);
        button.setAttribute("disabled", "true");
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
        ["day", calendar, calendarWhite, calendarBlue, buttons[0]],
        ["hour", hour, hourWhite, hourBlue, buttons[1], displayHour],
        ["person", person, personWhite, personBlue, buttons[2], displayPerson],
        ["recap", recap, recapWhite, recapBlue, buttons[3], displayRecap],
        [calendar, hour, person, recap],
    ];


    

    const target = event.target;
    const data = event.target.getAttribute("data-state");


    if (target.closest("#widget")) {
        updateBackward(state, data, buttons);
    } else {
        updateForward(state, target, buttons);
    };


}


const updateForward = function(state, target, buttons){

    for(let x = 0; x < state.length -1; x++){

        if(target.closest(`.${state[x][0]}`)){

            widget.removeAttribute("class");
            widget.classList.toggle(`${state[x+1][0]}`);
            state[x+1][1].src = state[x+1][2];
            buttons[x].removeAttribute("disabled");

        };
    };
}


const updateBackward = function(state, data, buttons){

    for (let a = 0; a < state.length - 2; a++){
        
        if(data === state[a][0]){

            widget.removeAttribute("class");
            

            if (a === 0){

                widget.classList.toggle(`${state[a][0]}`);
                
                changeDisplay();
                createTable();
                activateArrows(today);
                createCalendar(Todays1st, today);

            } else {

                widget.classList.toggle(`${state[a][0]}`);
                state[a][5](info);
            };

            for (let y= 0; y < state.length - 1; y++){
                if (y > a){state[y][1].src = state[y][3]};
                if (y >= a){state[y][4].setAttribute("disabled", "true")};  
            }
            
        };
    };

};



const changeDisplay = function(){
    const div = document.querySelector("#bookingInfo");
    div.removeAttribute("class");
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
    createHours(intervalHours, info.hourOfDay, info);    

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


const addProperties = function(prop, value){
    info[prop] = value;
}


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
                    addProperties("day", button.textContent);
                    addProperties("month", actual.month[0]);
                    (button.textContent != actual.day) ? addProperties("hourOfDay", firstDay.hour) : addProperties("hourOfDay", actual.hour);
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
    let year = displayedMonth === "december" ? year +=1 : today.year;
    
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
    let year = displayedMonth === "january" ? year -=1 : today.year;

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

    const days = ["M", "T", "W", "T", "F", "S", "S"];
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
    

    const title = document.createElement("h2");
    title.textContent = "Select a time";
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
    dej.textContent = "lunch";
    div.appendChild(dej);

    for(let x=0; x < interval.length; x++){

        if(interval[x] < "15.30"){

            const button = document.createElement("button");
            const hour = interval[x].replace(".", ":");
            button.textContent = hour;
            button.addEventListener("click", (event) => {
                updateWidget(event)
                addProperties("hour", button.textContent);
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
                addProperties("hour", button.textContent)
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
    div.classList.toggle("person");

    const title = document.createElement("h2");
    title.textContent = "How many people";
    div.appendChild(title);

    const container = document.createElement("div");

    for (let x = 1; x < 21; x++){
        const button = document.createElement("button");
        button.textContent = x;
        button.addEventListener("click", (event) => {
            addProperties("person", button.textContent);
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
    p.textContent = "Put your email to complete the reservation";
    form.appendChild(p);


    const container = document.createElement("div");

    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = "email address*";
    label.appendChild(span);
    container.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("name", "email");
    input.setAttribute("required", "true");

    let placeholder = "Your email address";

    input.setAttribute("placeholder", placeholder);
    container.appendChild(input)
    form.appendChild(container);


    const comment = document.createElement("textarea");

    let placeholderComment = "For more informations";

    comment.setAttribute("placeholder", placeholderComment);
    form.appendChild(comment);




    const button = document.createElement("button");
    button.textContent = "book";
    button.addEventListener("click", () => {
        closeDialog();
        alert("Not the purpose of this project, but it was fun to create though");
    })
    form.appendChild(button);





    div.appendChild(form);
    return div
}


const today = getInfos();
const Todays1st = getInfos(today.month[1], 1, today.year);


export default displayCalendar