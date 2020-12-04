const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetTextItemsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorksheets_GetWorksheetTextItemsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetsGetWorksheetTextItems(req)
    .then((result) => {
        console.log(result)
    });