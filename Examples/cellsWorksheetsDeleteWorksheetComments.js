const { CellsWorksheetsApi, CellsWorksheets_DeleteWorksheetCommentsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorksheets_DeleteWorksheetCommentsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetsDeleteWorksheetComments(req)
    .then((result) => {
        console.log(result)
    });