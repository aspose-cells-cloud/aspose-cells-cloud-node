const { CellsWorksheetValidationsApi, CellsWorksheetValidations_PostWorksheetValidationRequest, Validation, CellArea } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheetValidations_PostWorksheetValidationRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.validationIndex = 0;
req.folder = "Temp";
var validation = new Validation();
var area = new CellArea();
area.startRow = 0;
area.endRow = 0;
area.startColumn = 0;
area.endColumn = 0;
validation.areaList = [];
validation.areaList.push(area);
validation.formula1 = "=(OR(A1=\"Yes\",A1=\"No\"))";
validation.type = "Custom";
validation.ignoreBlank = true;
req.validation = validation;

cellsApi.cellsWorksheetValidationsPostWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });