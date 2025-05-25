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
    const week = wichWeek(date, weeks);
    const day = date.getDate();
    const year = date.getFullYear();

    const obj = {date, day, week, month, year};
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


const createCalendar = function(firstDay, actual = {date : 1}){
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
    let calendarBody = document.querySelectorAll("td");

    if (calendarBody.length > 35){
        const extraChild = calendar.querySelectorAll("tr");
        calendar.removeChild(extraChild[extraChild.length - 1])
    }
    calendarBody.forEach(item => item.replaceChildren())
}


const increaseMonth = function(today){
    const caption = document.querySelector("caption");
    let displayedMonth = caption.textContent.toLowerCase();
    let year = displayedMonth === "décembre" ? year +=1 : today.year;
    
    const N1Month = wichMonth(today.date, months, 1);
    const N1firstDate =  getDayInfo(N1Month[1], 1, year);
    

    const N2Month = wichMonth(N1firstDate.date, months, 1);
    const N2firstDate = getDayInfo(N2Month[1], 1, year);

    
    if (displayedMonth === today.month[0]) {
        
        removeCalendar();
        createCalendar(N1firstDate);
        caption.textContent = N1Month[0];

    } else if (displayedMonth === N1Month[0]){

        removeCalendar();
        createCalendar(N2firstDate);
        caption.textContent = N2Month[0];

    } else {
        alert("Ces dates ne sont pas encore disponible");
    }
    
    
}


const decreaseMonth = function(today){
    const caption = document.querySelector("caption");
    let displayedMonth = caption.textContent.toLowerCase();
    let year = displayedMonth === "janvier" ? year -=1 : today.year;

    const N0firstDate = getDayInfo(today.month[1], 1, today.year);

    const N1Month = wichMonth(today.date, months, 1);
    const N1firstDate =  getDayInfo(N1Month[1], 1, year);

    const N2Month = wichMonth(N1firstDate.date, months, 1);

    if(displayedMonth === N2Month[0]){
        removeCalendar();
        createCalendar(N1firstDate);
        caption.textContent = N1Month[0];
    } else if (displayedMonth === N1Month[0]){
        removeCalendar();
        createCalendar(N0firstDate, today);
        caption.textContent = today.month[0]
    };
}


const createDialog = function(){
    const content = document.querySelector("#content");

    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "reservation");

    const div = document.createElement("div");
    div.setAttribute("id", "bookingInfo");

    dialog.appendChild(div);
    content.appendChild(dialog);
}


const createTable = function(){

    const div = document.querySelector("#bookingInfo")

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
    
        } else {
            button.textContent = ">";
            button.addEventListener("click", () => {increaseMonth(today)})
        }
    
        arrow.appendChild(button)
    });
      
}


const displayCalendar = function(){
    const today = getDayInfo();
    const Todays1st = getDayInfo(today.month[1], 1, today.year);

    createDialog();
    createTable();
    activateArrows(today);
    createCalendar(Todays1st, today);

    const dialog = document.querySelector("#reservation");
    dialog.showModal();
}


export default displayCalendar 