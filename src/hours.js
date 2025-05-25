const getHours = function(today){
    let hour = today.getHours();
    let min = today.getMinutes();
    if (min < 10) {min = min.toString().padStart(2, 0);};
    const result = `${hour.toString()}.${min}`
    
    return result;
}


const isOpenHour = function(today, hours){
    if (today > hours.day[0] && today < hours.day[1]) {
        console.log("It's Day time come eat")
    } else if (today > hours.night[0] && today < hours.night[1]){
        console.log("It's Night time come eat")
    } else {
        console.log("We're close, please check our schedule")
    }
}


let today = new Date();
today = getHours(today)



const openHours = {
    day : ["12.00", "14.30"],
    night : ["19.00", "22.30"]
};

console.log(today);
isOpenHour(today, openHours)








export * from "./hours"