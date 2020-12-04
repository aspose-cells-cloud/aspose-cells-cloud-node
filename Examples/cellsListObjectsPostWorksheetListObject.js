const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectRequest,ListObject } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsListObjects_PostWorksheetListObjectRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.listObject = new ListObject();
req.listObject.showHeaderRow = true;
req.folder = "";

cellsApi.cellsListObjectsPostWorksheetListObject(req)
    .then((result) => {
        console.log(result)

    });