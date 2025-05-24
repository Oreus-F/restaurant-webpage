const test = document.querySelector("#test");


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


const getDayInfo = function(mois, jour, annee){
    let date;
    if (mois && jour && annee) {
        date = new Date(`${annee}-${mois}-${jour}`);
    } else {
        date = new Date();
    }
    const month = wichMonth(date, months);
    const firstDay = getFirstDay(date, weeks, months)
    const full = getFullDate(date, weeks, months);

    const all = {date, month, firstDay, full};
    return all
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


const getFullDate = function(ref, weeks, months){
    const day = wichDay(ref, weeks);
    const date = ref.getDate();
    const month = wichMonth(ref, months);
    const year = ref.getFullYear();

    const obj = {day, date, month, year}
    return obj;
}


const getFirstDay = function(today, weeks, months, specificMonth){
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

    return obj;
}


const createCalendar = function(firstDay, actual = {date : 1}){
    let counter = 1;
    let allMonth = (firstDay.day[2] + firstDay.month[2]);

    if (allMonth > calendarBody.length){
        const tr = document.createElement("tr");
        for (let x = 0; x < 7; x++){
            const td = document.createElement("td");
            tr.appendChild(td);
        };

        calendar.appendChild(tr)

        calendarBody = calendar.querySelectorAll("td")
    }
    

    calendarBody.forEach((day, index) => {
        const button = document.createElement("button");
        day.appendChild(button);
        
        
        if(index >= firstDay.day[2] && index < (allMonth)){
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
    if (calendarBody.length > 35){
        const extraChild = calendar.querySelectorAll("tr");
        calendar.removeChild(extraChild[extraChild.length - 1])
    }
    calendarBody.forEach(item => item.replaceChildren())
}


const increaseMonth = function(today){
    const caption = document.querySelector("caption");
    let nextMonth = wichMonth(today.date, months, 1);
    
    const ref = [today.month, nextMonth];
    let displayedMonth = caption.textContent.toLowerCase();
    let firstDay =  getFirstDay(today.date, weeks, months, nextMonth);
    
    if (ref[0].includes(displayedMonth)) {
        
        removeCalendar();
        createCalendar(firstDay);
        caption.textContent = nextMonth[0];

    } else if (ref[1].includes(displayedMonth)){

        const newMonth = getDayInfo(nextMonth[1], firstDay.date, firstDay.year);
        nextMonth = wichMonth(newMonth.date, months, 1);
        firstDay = getFirstDay(newMonth.date, weeks, months, nextMonth);
        removeCalendar();
        createCalendar(firstDay);
        caption.textContent = nextMonth[0];

    } else {
        alert("Ces dates ne sont pas encore disponible");
    }
    
    
}

/* TEST CREA TABLEAU UTILE */

const calendar = document.querySelector("#calendar");
let calendarBody = document.querySelectorAll("td");
const arrow = document.querySelector("#arrow");
const arrows = arrow.querySelectorAll("th");







arrows.forEach((arrow, index) => {
    const button = document.createElement("button");
    if (index === 0) { 
        button.textContent = "<"

    } else {
        button.textContent = ">";
        button.addEventListener("click", () => {increaseMonth(today)})
    }

    arrow.appendChild(button)
});


const today = getDayInfo();

createCalendar(today.firstDay, today.full);




export * from "./calendar-test"