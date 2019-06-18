const { CellsWorksheetValidationsApi, CellsWorksheetValidations_PostWorksheetValidationRequest, Validation, CellArea } = require("asposecellscloud");
let date = require('date-and-time');

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetValidationsApi = new CellsWorksheetValidationsApi(AppSid, AppKey);
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

cellsWorksheetValidationsApi.cellsWorksheetValidationsPostWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });