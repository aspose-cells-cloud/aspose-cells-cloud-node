const { CellsChartAreaApi, CellsChartArea_GetChartAreaBorderRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new model.CellsChartArea_GetChartAreaFillFormatRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.chartIndex = 0;
req.folder = "";

cellsApi.cellsChartAreaGetChartAreaFillFormat(req)
    .then((result) => {
        console.log(result)
    });