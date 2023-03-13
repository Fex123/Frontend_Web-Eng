class StudyProgram {
    constructor(id, shortName, name) {
        this.id = id;
        this.shortName = shortName;
        this.name = name;
    }
}
class StudyProgramModel {
    constructor() { }
    addStudyProgramWithId(studyProgram, id) {

    }
    getStudyPrograms() {
        return getData("studyPrograms");
    }
    addStudyProgram(studyProgram) {
        setData("studyPrograms", studyProgram);
    }
    editStudyProgram(newStudyProgram) {
        setData("studyPrograms", newStudyProgram);
    }
    findStudyProgram(id) {
        for (let studyProgram of getData("studyPrograms")) {
            if (studyProgram.id === id) {
                return studyProgram;
            }
        }
    }
    deleteStudyProgram(id) {
        const newStudyPrograms = [];
        for (let studyProgram of getData("studyPrograms")) {
            if (studyProgram.id !== id) {
                newStudyPrograms.push(studyProgram);
            }
        }
        setData("studyPrograms", newStudyPrograms)
    }
}

function loadList() {

    let studyPrograms = studyProgramModel.getStudyPrograms();
    if (studyPrograms === null) {
        studyPrograms = [];
    }

    const studyprogramlistTemplate = document.createElement("template");
    studyprogramlistTemplate.innerHTML = /* html */ `    
    <div class="contentwrapper d-flex flex-column">
      <div class="bar d-flex justify-content-between mb-3 flex-row">
        <h2 id="contentTitle">Studiengänge</h2>
        <button class="btn btn-primary" type="submit" id="btnTopAction" onclick="addStudyProgramHTML()" Style="background-color:#ff8000">+ Hinzufügen</button>
      </div>
      <div class="contentCard p-3 bg-body rounded shadow-sm w-100 h-auto" id="contentCard">
       <div class="d-flex text-muted" id="list_table" style="overflow-x: auto;">
        
      </div>
    </div>
    </div>
    
`;
    document.getElementById("content").innerHTML = studyprogramlistTemplate.innerHTML;

    let HTML = "<table border=0 width=100% class='table'><tr><th>Kürzel</th><th>Name</th></tr>";
    for (element of studyPrograms) {
        let id = element.id
        let shortName = element.shortName;
        let name = element.name;
        HTML += "<tr><td>" + shortName + "</td>"
        HTML += "<td>" + name + "</td>"
        HTML += `<td scope="col"><img src="../Bilder/edit.png" width="25px" onclick="editStudyProgramHTML(${id})"><img src="Bilder/delete.png"width="25px" onclick="deleteStudyProgram(${id})"></tr>`
    }

    if (studyPrograms.length == 0) {
        HTML += "<tr><td>Keine Einträge</td><td>Keine Einträge</td></tr>"
    }
    HTML += "</table>";
    document.getElementById("list_table").innerHTML = HTML;
}

const studyProgramModel = new StudyProgramModel();
window.addEventListener("load", function () {

    loadList();

});

function addStudyProgramHTML() {
    studyprogramlistTemplate.innerHTML = `    
    <div class="contentwrapper d-flex flex-column">
    <div class="section-title">
    <h2>Dozent hinzufügen</h2>
  </div>
  <div>
    <div class="row">
      <div class="col-md-8 col-md-offset-3">
        <form method="post">
          <div class="form-group">
            <label for="shortName">Vorname</label>
            <input type="text" id="shortName" placeholder="shortName">
          </div>
          <div class="form-group">
            <label for="name">Nachname</label>
            <input type="text" id="name" placeholder="name">
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <button type="submit" name="create-space"
                  class="btn btn-success" value="Speichern" onclick="addStudyProgram()"></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
    </div>
    
`;
    document.getElementById("content").innerHTML = studyprogramlistTemplate.innerHTML
}
function addStudyProgram() {
    let studyPrograms = studyProgramModel.getStudyPrograms();
    if (studyPrograms === null) {
        studyPrograms = [];
    }
    let countStudyPrograms = null;
    if (studyPrograms === null) {
        countStudyPrograms = 0;
    } else {
        countStudyPrograms = studyPrograms.length;
    }
    const shortName = document.getElementById("shortName").value;
    const name = document.getElementById("name").value;

    studyPrograms.push(new StudyProgram(countStudyPrograms, shortName, name));
    studyProgramModel.addStudyProgram(studyPrograms);
    loadList();
}
function editStudyProgramHTML(id) {

    let studyPrograms = studyProgramModel.getStudyPrograms();
    if (studyPrograms === null) {
        studyPrograms = [];
    }
    let shortName = null;
    let name = null;
    for (element of studyPrograms) {
        if(element.id === id){
            shortName = element.shortName;
            name = element.name;
        }
    }

    studyprogramlistTemplate.innerHTML = `    
    <div class="contentwrapper d-flex flex-column">
    <div class="section-title">
    <h2>Dozent überarbeiten</h2>
  </div>
  <div>
    <div class="row">
      <div class="col-md-8 col-md-offset-3">
        <form method="post" >
          <div class="form-group">
            <label for="shortName">Vorname</label>
            <input type="text" id="shortName" value="${shortName}">
          </div>
          <div class="form-group">
            <label for="name">Nachname</label>
            <input type="text" id="name" value="${name}">
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <button type="submit" name="create-space"
                  class="btn btn-success" value="Speichern" onclick="editStudyProgram(${id})"></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
    </div>
    
`;
    document.getElementById("content").innerHTML = studyprogramlistTemplate.innerHTML
}
function editStudyProgram(id) {
    let studyPrograms = studyProgramModel.getStudyPrograms();
    let editElement = null;
    let count = 0; 
    for (item of studyPrograms) {
        if (item.id == id) {
            editElement = item;
            break;
        }
        count++;
    }
    editElement.shortName = document.getElementById("shortName").value
    editElement.name = document.getElementById("name").value;
    studyPrograms[count] = editElement;
    studyProgramModel.addStudyProgram(studyPrograms)
    loadList();
}
function deleteStudyProgram(id) {
    studyProgramModel.deleteStudyProgram(id)
    loadList();
}
/*
function setSelcetionStudiengang() {
    let data = getDataFromLocalStorage('studiengang')
    console.log(data)
    var HTML = ""
    for (item of data) {
        console.log(item.bezeichnung)
        HTML += "<option value=" + item.id + ">" + item.bezeichnung + "</option>";
    }
    document.getElementById("selectStudiengang2").innerHTML = HTML;
}

function editStudyProgram(id) {
    console.log("editSemester")
    let data = getDataFromLocalStorage('semester')
    let editElement = "No data found"
    for (item of data) {
        if (item.id == id) {
            editElement = item
        }
    }
    document.getElementById("bezeichnung").value = editElement.bezeichnung
    document.getElementById("datum").value = editElement.datum
    //delet old object
    let dataType = 'semester'
    console.log("delete: " + dataType + id);
    let newData = getDataFromLocalStorage(dataType)
    setDataToLocalStorage(dataType, newData.filter(item => { return item.id != id }))
  }
    */

