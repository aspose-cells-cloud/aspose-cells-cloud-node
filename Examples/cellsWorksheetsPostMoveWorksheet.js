const { CellsWorksheetsApi, CellsWorksheets_PostCopyWorksheetRequest, CopyOptions } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostMoveWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
var moving = new model.WorksheetMovingRequest();
moving.destinationWorksheet = "Sheet3";
moving.position = "after";
req.moving = moving;
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostMoveWorksheet(req)
    .then((result) => {
        console.log(result)
    });