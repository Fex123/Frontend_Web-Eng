
let test = JSON.parse(localStorage.getItem("Test"))

alert(test[0].firstName);

window.addEventListener("load", function(){
    alert("Hallo");

    let type = 'vorlesungstermin'

    let data = script.getLecturer();

    var HTML = "<table border=0 width=100% class='table'><tr><th>Vorlesung</th><th>Datum</th><th>Start</th><th>Ende</th></tr>";

    for (element of data) {
        HTML += "<tr><td>" + element.id + "</td>"
        HTML += "<tr><td>" + element.firstName + "</td>"
        HTML += "<td>" + element.lastName + "</td>"
        HTML += "<td>" + element.lectures + "</td>"
        HTML += "<td>" + element.email + "</td>"
        HTML += "<td>" + element.studyProgram + "</td>"
        HTML += `<td scope="col"><img src="assets/edit.png" width="25px" onclick="editVorlesungstermin(${element.id})"><img src="assets/delete.png"width="25px" onclick="onDeletData('${type}', ${element.id})"></tr>`
    }

    HTML += "</table>";
})