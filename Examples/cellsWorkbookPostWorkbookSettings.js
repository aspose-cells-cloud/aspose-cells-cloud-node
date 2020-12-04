const { CellsWorkbookApi, CellsWorkbook_PostWorkbookSettingsRequest, WorkbookSettings } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PostWorkbookSettingsRequest();
req.name = filename;
req.folder = "";
var settings = new WorkbookSettings();
settings.autoCompressPictures = true;
req.settings = settings;

cellsApi.cellsWorkbookPostWorkbookSettings(req)
    .then((result) => {
        console.log(result)
    });