const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetCommentsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetCommentsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetsGetWorksheetComments(req)
    .then((result) => {
        console.log(result)
    });