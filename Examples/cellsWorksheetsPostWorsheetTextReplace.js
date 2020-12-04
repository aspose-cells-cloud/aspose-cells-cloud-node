const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetTextSearchRequest, DataSorter } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorsheetTextReplaceRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.oldValue = "1234";
req.newValue = "56678";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostWorsheetTextReplace(req)
    .then((result) => {
        console.log(result)
    });