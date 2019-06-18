const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetCommentRequest, CopyOptions } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetCommentRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "B3";
req.comment = new model.Comment();
req.comment.author = "Roy";
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostWorksheetComment(req)
  .then((result) => {
    console.log(result)
  });