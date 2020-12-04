const { CellsWorksheetsApi, CellsWorksheets_PostRenameWorksheetRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostRenameWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.newname = "renametest";
req.folder = "";

cellsApi.cellsWorksheetsPostRenameWorksheet(req)
    .then((result) => {
        console.log(result)
    });