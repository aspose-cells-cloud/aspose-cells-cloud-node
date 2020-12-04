const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetTextSearchRequest, DataSorter } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetTextSearchRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.text = "123456";
req.folder = "";

cellsApi.cellsWorksheetsPostWorksheetTextSearch(req)
    .then((result) => {
        console.log(result)
    });