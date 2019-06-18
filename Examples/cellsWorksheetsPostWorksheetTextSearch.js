const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetTextSearchRequest, DataSorter } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetTextSearchRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.text = "123456";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostWorksheetTextSearch(req)
    .then((result) => {
        console.log(result)
    });