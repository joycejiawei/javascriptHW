let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $searchButton = document.querySelector("#search");

$searchButton.addEventListener("click", handleSearchClick);

let ufoData = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufoData.length; i++) {
        let info = ufoData[i];
        let fields = Object.keys(info);
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function handleSearchClick() {
    let filterDate = $dateInput.value.trim();
    ufoData = dataSet.filter(function(ufoSighting) {
        let searchDate = ufoSighting.datetime;
        if (searchDate === filterDate || filterDate === "") {
            return true}
        return false;
    });
    renderTable();

    $dateInput.value = "";
}

renderTable();