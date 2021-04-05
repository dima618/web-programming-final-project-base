function calculatePercent(days){
    days = company.days
    currDay = days.length - 1
    percent = (days[currDay].close / days[currDay].open - 1).toFixed(4)
    return((percent * 100).toFixed(2))
}

function calculateButton(percent, id){
    if(percent > 1){
        $('#'+id).addClass("badge rounded-pill bg-success")
    } else if (percent < -1){
        $('#'+id).addClass("badge rounded-pill bg-danger")
    } else {
        "btn btn-secondary btn-sm"
    }
}