const { CellsChartAreaApi, CellsChartArea_GetChartAreaBorderRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsChartAreaApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new model.CellsChartArea_GetChartAreaFillFormatRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.chartIndex = 0;
req.folder = "";

cellsChartAreaApi.cellsChartAreaGetChartAreaFillFormat(req)
    .then((result) => {
        console.log(result)
    });