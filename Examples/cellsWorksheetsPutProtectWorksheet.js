const { CellsWorksheetsApi, CellsWorksheets_PutProtectWorksheetRequest, ProtectSheetParameter } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"



var req = new CellsWorksheets_PutProtectWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
var protectParameter = new ProtectSheetParameter();
protectParameter.protectionType = "All";
protectParameter.password = "123";
req.protectParameter = protectParameter;
req.folder = "";

return cellsWorksheetsApi.cellsWorksheetsPutProtectWorksheet(req)
    .then((result) => {
        console.log(result)
    });