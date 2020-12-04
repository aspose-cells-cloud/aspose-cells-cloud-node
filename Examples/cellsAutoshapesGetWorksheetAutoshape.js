const { CellsAutoshapesApi, CellsAutoshapes_GetWorksheetAutoshapeRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsAutoshapes_GetWorksheetAutoshapeRequest();
req.name = filename;
req.sheetName = "Sheet2";
req.autoshapeNumber = 4;
req.folder = "Temp";

cellsApi.cellsAutoshapesGetWorksheetAutoshape(req)
    .then((result) => {
        console.log(result)
    });