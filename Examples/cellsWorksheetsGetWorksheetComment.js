const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetCommentRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsWorksheets_GetWorksheetCommentRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "B3";
req.folder = "";

cellsApi.cellsWorksheetsGetWorksheetComment(req)
    .then((result) => {
        console.log(result)
    });