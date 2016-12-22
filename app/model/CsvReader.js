//Custom csv reader for model classes
Ext.define('nordantech2.model.CsvReader', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.csv',
    // converts csv into json
    toJson: function(csv){
    var array = CSVToArray(csv, ";");
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k];
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");
    //str = Ext.decode(str);

    return str;
    },
    // override parent method
    getResponseData: function(response) {
        try {
            return this.readRecords(response.responseText);
        } catch (ex) {
            error = new Ext.data.ResultSet({
                total  : 0,
                count  : 0,
                records: [],
                success: false,
                message: ex.message
            });
            this.fireEvent('exception', this, response, error);
            console.log(error);
            return error;
        }
    },
    // override parent method
    readRecords: function(strData) {
        var results = this.toJson(strData);
        results = JSON.parse(results);
        return this.callParent([results]);
    }
});
    //converts csv to and array
    function CSVToArray(strData, strDelimiter){
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp((
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
    }