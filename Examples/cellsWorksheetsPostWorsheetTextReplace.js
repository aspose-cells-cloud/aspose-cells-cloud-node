const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetTextSearchRequest, DataSorter } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorsheetTextReplaceRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.oldValue = "1234";
req.newValue = "56678";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostWorsheetTextReplace(req)
    .then((result) => {
        console.log(result)
    });