const { CellsWorksheetsApi, CellsWorksheets_PostRenameWorksheetRequest, CopyOptions } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostRenameWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.newname = "renametest";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostRenameWorksheet(req)
    .then((result) => {
        console.log(result)
    });