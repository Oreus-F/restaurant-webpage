const test = document.querySelector("#test");


const months = {
    0: ["Janvier", "January", 31],
    1: ["Février", "Febuary", 28],
    2: ["Mars", "March", 31],
    3: ["Avril", "April", 30],
    4: ["Mai", "May", 31],
    5: ["Juin", "June", 30],
    6: ["Juillet", "July", 31],
    7: ["Août", "August", 31],
    8: ["Septembre", "September", 30],
    9: ["Octobre", "October", 31],
    10: ["Novembre", "November", 30],
    11: ["Décembre", "December", 31],

};


const weeks = {
    0 : ["Dimanche", "Sunday", 6],
    1 : ["Lundi", "Monday", 0],
    2 : ["Mardi", "Tuesday", 1],
    3 : ["Mercredi", "Wednesday", 2],
    4 : ["Jeudi", "Thursday", 3],
    5 : ["Vendredi", "Friday", 4],
    6 : ["Samedi", "Saturday", 5],
};


const wichMonth = function(date, months, index){
    let result = date.getMonth();

    if (index) {result = result + index}
    return months[result];
};


const wichDay = function(date, weeks){
    let result = date.getDay();
    return weeks[result]
}


const getFullDate = function(weeks, months){
    let today = new Date();

    const day = wichDay(today, weeks);
    const date = today.getDate();
    const month = wichMonth(today, months);
    const year = today.getFullYear();

    const obj = {day, date, month, year}

    console.log(obj);
    return obj;
}


const getFirstDay = function(weeks, months, specificMonth){
    const today = new Date();
    let firstDay;
    let month;
    let year;
    
    if(specificMonth){
        month = specificMonth;
        year = today.getFullYear();
        firstDay = new Date(`${month[1]} 1, ${year}`)

    } else {
        month = wichMonth(today, months);
        year = today.getFullYear();

        firstDay = new Date(`${month[1]} 1, ${year}`)
    }


    const date = firstDay.getDate();
    const day = wichDay(firstDay, weeks);

    const obj = {day, date, month, year}

    console.log(obj);
    return obj;
}


const createCalendar = function(first, actual = {date : 1}){
    let counter = 1;


    calendarBody.forEach((day, index) => {
        const button = document.createElement("button");
        day.appendChild(button);
        
        
        if(index >= first.day[2] && index < (first.day[2] + first.month[2])){
            button.textContent = counter;
            

            if (button.textContent < actual.date){
                button.setAttribute("disabled", "true");
            } else {
                button.addEventListener("click", () => { 
                
                
                    return button.textContent;
                });
            }

            
            
            counter ++
        } else {
            button.setAttribute("disabled", "true")
        }
    });
}

const removeCalendar = function(){
    calendarBody.forEach(item => item.replaceChildren())
}


/* TEST CREA TABLEAU UTILE */

const calendarBody = document.querySelectorAll("td");
const arrow = document.querySelector("#arrow");
const arrows = arrow.querySelectorAll("th");

const ajd = getFullDate(weeks, months);
const avant = getFirstDay(weeks, months);


const today = new Date();

const nextMonth = wichMonth(today, months, 1);
const premierJofNextMonth = getFirstDay(weeks, months, nextMonth);
console.log(premierJofNextMonth)


arrows.forEach((arrow, index) => {
    const button = document.createElement("button");
    index === 0 ? button.textContent = "<" : button.textContent = ">";

    arrow.appendChild(button)
});






createCalendar(avant, ajd);



export * from "./calendar-test"