const { CellsWorksheetsApi, CellsWorksheets_PostRenameWorksheetRequest, CopyOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostUpdateWorksheetPropertyRequest();
req.name = filename;
req.sheetName = "Sheet1";
var sheet = new model.Worksheet();
sheet.index = 0;
sheet.isGridlinesVisible = true;
req.sheet = sheet;
req.folder = "";

cellsApi.cellsWorksheetsPostUpdateWorksheetProperty(req)
    .then((result) => {
        console.log(result)
    });