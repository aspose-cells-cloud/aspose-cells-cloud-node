const { CellsWorksheetsApi, CellsWorksheets_PostCopyWorksheetRequest, CopyOptions } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostCopyWorksheetRequest();
req.name = filename1;
req.sheetName = "Sheet5";
req.sourceSheet = "Sheet6";
req.options = new CopyOptions();
req.options.columnCharacterWidth = true;
req.sourceWorkbook = filename;
req.sourceFolder = "";
req.folder = "";

return cellsWorksheetsApi.cellsWorksheetsPostCopyWorksheet(req)
    .then((result) => {
        console.log(result)
    });