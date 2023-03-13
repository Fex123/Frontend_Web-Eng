/*class StudyProgramModel {
    constructor() {
        this.database = new Database();
        this.studyPrograms = this.database.getData("studyPrograms")
    }
    getStudyPrograms(){
        return this.database.getData("studyPrograms");
    }
    addStudyProgram(studyProgram) {
        this.database.setData("studyPrograms", studyProgram);
    }
    editStudyProgram(newStudyProgram) {
        this.database.setData("studyPrograms", newStudyProgram);
    }
    findStudyProgram(id) {
        for (const studyProgram of this.database.getData("studyPrograms")) {
            if (studyProgram.id === id) {
                return studyProgram;
            }
        }
    }
    deleteStudyProgram(id) {
        const newStudyPrograms = [];
        for (const studyProgram of this.database.getData("studyPrograms")) {
            if (studyProgram.id !== id) {
               newStudyPrograms.push(studyProgram);                
            }
        }
        this.database.setData("studyPrograms", newStudyPrograms)
    }
}*/