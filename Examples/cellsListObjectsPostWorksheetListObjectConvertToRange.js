const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectConvertToRangeRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_PostWorksheetListObjectConvertToRangeRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.folder = "";

cellsApi.cellsListObjectsPostWorksheetListObjectConvertToRange(req)
    .then((result) => {
        console.log(result)
    });