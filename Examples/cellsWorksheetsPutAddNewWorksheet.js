const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetTextSearchRequest, DataSorter } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"



var req = new CellsWorksheets_PutAddNewWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.position = 1;
req.sheettype = "VB";
req.folder = "";

cellsApi.cellsWorksheetsPutAddNewWorksheet(req)
    .then((result) => {
        console.log(result)
    });