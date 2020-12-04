const { CellsWorksheetsApi, CellsWorksheets_PostCopyWorksheetRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostMoveWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
var moving = new model.WorksheetMovingRequest();
moving.destinationWorksheet = "Sheet3";
moving.position = "after";
req.moving = moving;
req.folder = "";

cellsApi.cellsWorksheetsPostMoveWorksheet(req)
    .then((result) => {
        console.log(result)
    });