const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.verticalResolution = 100;
req.horizontalResolution = 90;
req.format = "png";
req.folder = "";

cellsApi.cellsWorksheetsGetWorksheet(req)
    .then((result) => {
        console.log(result)
    });