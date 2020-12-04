const { CellsApi, Cells_PostWorksheetCellSetValueRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostWorksheetCellSetValueRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "A1";
req.folder = "";
req.value = "1";
req.type = "int";
req.formula = null;
return cellsApi.cellsPostWorksheetCellSetValue(req)
  .then((result) => {
    console.log(result)
});