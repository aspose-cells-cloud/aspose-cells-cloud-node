const { CellsWorksheetsApi, CellsWorksheets_PutChangeVisibilityWorksheetRequest, DataSorter } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"



var req = new CellsWorksheets_PutChangeVisibilityWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.isVisible = true;
req.folder = "";

cellsApi.cellsWorksheetsPutChangeVisibilityWorksheet(req)
    .then((result) => {
        console.log(result)
    });