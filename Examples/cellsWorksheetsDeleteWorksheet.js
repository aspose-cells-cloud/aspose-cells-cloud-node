const { CellsWorksheetsApi, CellsWorksheets_DeleteUnprotectWorksheetRequest, ProtectSheetParameter } = require("asposecellscloud");
let date = require('date-and-time');

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi  = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsWorksheets_DeleteWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsDeleteWorksheet(req)
    .then((result) => {
        console.log(result)
    });