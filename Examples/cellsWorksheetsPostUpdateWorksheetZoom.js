const { CellsWorksheetsApi, CellsWorksheets_PostUpdateWorksheetZoomRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"

var req = new CellsWorksheets_PostUpdateWorksheetZoomRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.value = 1;
req.folder = "";

cellsApi.cellsWorksheetsPostUpdateWorksheetZoom(req)
    .then((result) => {
        console.log(result)
    });