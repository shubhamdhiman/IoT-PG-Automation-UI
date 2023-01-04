var slider = document.getElementById("slider1")
        
document.getElementById('speed').innerHTML = slider.value;
    
var progressBar = document.getElementById("progressBar")

slider.oninput = function(){
    progressBar.style.width = this.value + '%';
    document.getElementById("speed").innerHTML = this.value;
}

var weekdayId = document.getElementById("weekday")
var weekday2Id = document.getElementById("weekday2")
var monthId = document.getElementById("month")
var month2Id = document.getElementById("month2")
var dateId = document.getElementById("date")
var date2Id = document.getElementById("date2")
var hourId = document.getElementById("hour")
var minuteId = document.getElementById("minute")
    
const date = new Date()

var month = date.toLocaleString('default',{month:'short'})

monthId.innerHTML = month
month2Id.innerHTML = month

var weekday = date.toLocaleString('default',{weekday:'long'})

weekdayId.innerHTML = weekday
weekday2Id.innerHTML = weekday

if(date.getDate()<10){
    dateId.innerHTML = "0"+date.getDate()
    date2Id.innerHTML = "0"+date.getDate()
}else{
    dateId.innerHTML = date.getDate()
    date2Id.innerHTML = date.getDate()
}


var to_string_hour = date.getHours().toString()
var to_string_minute = date.getMinutes().toString()

if(to_string_hour.length !== 2){
    let hour = "0" + date.getHours()
    hourId.innerHTML = hour
    console.log(hour)
}else{
    if(Number(date.getHours())>12){
        let hour = Number(date.getHours()) - 12
        if(hour<10){
            let hour_to_string = "0" + hour 
            hourId.innerHTML = hour_to_string
        }else{
            let hour_number = hour
            hourId.innerHTML = hour_number
        }
    }else{
        hourId.innerHTML = date.getHours()
    }
    
}
if(to_string_minute.length !== 2){
    if(Number(date.getHours()>12)){
        let minute = "0" + date.getMinutes() + " PM"
        minuteId.innerHTML = minute
    }else{
        let minute = "0" + date.getMinutes() + " AM"
        minuteId.innerHTML = minute
    }
        
}else{
    if(Number(date.getHours()>12)){
        let minute = date.getMinutes() + " PM"
        minuteId.innerHTML = minute
    }
    else{
        let minute =date.getMinutes() + " AM"
        minuteId.innerHTML = minute
    }
    
}


