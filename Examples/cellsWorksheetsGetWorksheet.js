const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetRequest } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.verticalResolution = 100;
req.horizontalResolution = 90;
req.format = "png";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsGetWorksheet(req)
    .then((result) => {
        console.log(result)
    });