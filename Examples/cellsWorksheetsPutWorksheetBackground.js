const { CellsWorksheetsApi, CellsWorksheets_PutWorksheetBackgroundRequest, ProtectSheetParameter } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PutWorksheetBackgroundRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.png = localPath + png;
req.folder = "";

return cellsWorksheetsApi.cellsWorksheetsPutWorksheetBackground(req)
    .then((result) => {
        console.log(result)
    });