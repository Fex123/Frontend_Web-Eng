
    function getData(key) {
        var tempData = localStorage.getItem(key);
        tempData = JSON.parse(tempData);
        return tempData;
    }
    function setData(key, objectToSave) {
        objectToSave = JSON.stringify(objectToSave);
        localStorage.setItem(key, objectToSave);
    }
