const { CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest, CellsChartArea_GetChartAreaBorderRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";


cellsApi.cellsConditionalFormattingsGetWorksheetConditionalFormattings(req)
    .then((result) => {
        console.log(result)

    });