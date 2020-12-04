const { CellsWorkbookApi, CellsWorkbook_GetWorkbookSettingsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookSettingsRequest();
req.name = filename;
req.folder = "";

cellsApi.cellsWorkbookGetWorkbookSettings(req)
    .then((result) => {
        console.log(result)
    });