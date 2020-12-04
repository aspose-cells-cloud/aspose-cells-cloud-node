const { CellsAutoshapesApi, CellsAutoshapes_GetWorksheetAutoshapesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoshapes_GetWorksheetAutoshapesRequest();
req.name = filename;
req.sheetName = "Sheet2";
req.folder = "";

cellsApi.cellsAutoshapesGetWorksheetAutoshapes(req)
    .then((result) => {
        console.log(result)
    });