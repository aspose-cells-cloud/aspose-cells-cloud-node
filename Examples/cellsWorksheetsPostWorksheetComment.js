const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetCommentRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetCommentRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "B3";
req.comment = new model.Comment();
req.comment.author = "Roy";
req.folder = "";

cellsApi.cellsWorksheetsPostWorksheetComment(req)
  .then((result) => {
    console.log(result)
  });