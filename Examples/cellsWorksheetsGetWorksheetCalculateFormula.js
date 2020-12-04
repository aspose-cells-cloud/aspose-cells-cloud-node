const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetCalculateFormulaRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorksheets_GetWorksheetCalculateFormulaRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.formula = "=NOW()";
req.folder = "";

return cellsApi.cellsWorksheetsGetWorksheetCalculateFormula(req)
    .then((result) => {
        console.log(result)
    });