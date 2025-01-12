let chartData = {
    labels: [],
    datasets: [{
        data: []
    }]
};

$.get(window.location.pathname + "/chart-data", function(data, status){
    let percent_change = calculatePercent(data.result);
    $('#percent').text(percent_change + '%');
    calculateButton(percent_change, 'percent');
    console.log(data);
    for (day of data) {
        chartData.labels.push(day.t_date);
        chartData.datasets[0].data.push(parseInt(day.price_close.toFixed(2), 10));
    }
    let chLine = $("#chLine");
    if (chLine) {
    new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
        scales: {
        yAxes: [{
            ticks: {
            beginAtZero: false
            }
        }]
        },
        legend: {
            display: false
        }
    }
    });
    }
});