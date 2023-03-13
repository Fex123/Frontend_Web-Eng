class StudyProgramModel {
    constructor() {}
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