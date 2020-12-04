const { CellsChartAreaApi, CellsChartArea_GetChartAreaRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsChartArea_GetChartAreaRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.chartIndex = 0;
req.folder = "";

cellsApi.cellsChartAreaGetChartArea(req)
    .then((result) => {
        console.log(result)
    });