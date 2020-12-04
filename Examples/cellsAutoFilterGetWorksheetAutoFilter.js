const { CellsAutoFilterApi, CellsAutoFilter_GetWorksheetAutoFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_GetWorksheetAutoFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsAutoFilterGetWorksheetAutoFilter(req)
    .then((result) => {
        console.log(result)
    });