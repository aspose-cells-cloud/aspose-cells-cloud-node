const { CellsWorksheetsApi, CellsWorksheets_DeleteWorksheetCommentRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_DeleteWorksheetCommentRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "C1";
req.folder = "";

cellsApi.cellsWorksheetsDeleteWorksheetComment(req)
    .then((result) => {
        console.log(result)
    });