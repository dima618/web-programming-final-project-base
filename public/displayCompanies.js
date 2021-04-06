
function loadTableData(items) {
    const table = document.getElementById("tableBody");
    for ([index, company] of companies.entries()){
        let row = table.insertRow();
        let number = row.insertCell(0);
        let name = row.insertCell(1);
        let price = row.insertCell(2);

        number.innerHTML = index;
        name.innerHTML = company.name + ' (' + company.ticker + ')';
        price.innerHTML = company.days[company.days.length - 1].close + "$";
        //price.innerHTML = company.days[company.days.length-1].close + "$";
    };
}

companies = []
$.get(window.location.pathname + "/companies", function(data, status){
    // Populate my companies array with the data from index.js. Only grabbing the data I want.
    for (let i = 0; i < data.length; i++) {
        companies.push(data[i]);
    }

    // Load table and filter out the table depending on the search input value.
    loadTableData(companies);
});