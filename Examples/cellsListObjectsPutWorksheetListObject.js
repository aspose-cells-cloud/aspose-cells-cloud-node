const { CellsListObjectsApi, CellsListObjects_PutWorksheetListObjectRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_PutWorksheetListObjectRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.startRow = 1;
req.startColumn = 1;
req.endRow = 6;
req.endColumn = 6;
req.folder = "";

cellsApi.cellsListObjectsPutWorksheetListObject(req)
    .then((result) => {
        console.log(result)
    });