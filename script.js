
class Lecturer {
  constructor(id, firstName, lastName, email,lectures,studyProgram) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.lecture = lectures;
    this.email = email;
    this.studyProgram = studyProgram;
  }
}
class Lecture{
    constructor(id, duration, lectureName, moduleName,lecturer,studyProgram) {
      this.id = id;
      this.duration = duration;
      this.lectureName = lectureName;
      this.moduleName = moduleName;
      this.lecturer = lecturer;
      this.studyProgram = studyProgram;
    }
}
class StudyProgram {
    constructor(id, name,shortName) {
      this.id = id;
      this.name = name;
      this.shortName = shortName;
    }
}
class Semester {
    constructor(id, number,endDate,name,startDate,studyClass) {
      this.id = id;
      this.number=number;
      this.endDate=endDate;
      this.name=name;
      this.startDate=startDate;
      this.StudyClass=studyClass;
    }
}
class LectureDate {
    constructor(id, endDate,startDate,lecturer,lecture,semester) {
      this.id = id;
      this.endDate = endDate;
      this.startDate = startDate;
      this.lecturer = lecturer;
      this.lecture = lecture;
      this.semester = semester;
    }
}
class StudyClass {
    constructor(id, endDate, name, startDate, studyProgram) {
      this.id = id;
      this.endDate = endDate;
      this.name = name;
      this.startDate = startDate;
      this.studyProgram = studyProgram;
    }
}
const lecturer = [];
//document.getElementById("lecturers_addButton").addEventListener("dblclick", addLecturer());
function addLecturer(){
  
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const lectures=document.getElementById("lectures").value;
    const email=document.getElementById("email").value;
    lecturer.push(new Lecturer(lecturer.length,firstName,lastName,lectures,email,null)) 
    localStorage.setItem("Test",JSON.stringify(lecturer))
}
/*document.getElementById("lecturers_editButton").addEventListener("click", editLecturer(id));
function updateLecturer(id){
  const firstName=document.getElementById("firstName").value;
  const lastName=document.getElementById("lastName").value;
  const lectures=document.getElementById("lectures").value;
  const email=document.getElementById("email").value;
  lecturer[id]=new Lecturer(id,firstName,lastName,lectures,email,null);
  localStorage.setItem("Test",JSON.stringify(lecturer))
}

document.getElementById("lecturers_changeButton").addEventListener("click", updateLecturer);
//updateLecturer(){
    //
//}

export function getLecturer(){
    return lecturer;
}

/*let myArray = localStorage.getItem("Test");
alert("Test")
let myList = document.getElementById("myList");

for (let i = 0; i < myArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = myArray[i];
  myList.appendChild(listItem);
}*/
if(document.URL === "http://127.0.0.1:5501/uniplaner/lecturer.html"){
let myArray = JSON.parse(localStorage.getItem("Test"));

let myTable = document.getElementById("myTable");
alert(myArray);

for (let i = 0; i < myArray.length; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < myArray[i].length; j++) {
    let cell = document.createElement("td");
    cell.textContent = myArray[i][j];
    row.appendChild(cell);
  }

  myTable.appendChild(row);
}}