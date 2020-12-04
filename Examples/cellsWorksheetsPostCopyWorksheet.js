const { CellsWorksheetsApi, CellsWorksheets_PostCopyWorksheetRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

return cellsApi.cellsWorksheetsPostCopyWorksheet(req)
    .then((result) => {
        console.log(result)
    });