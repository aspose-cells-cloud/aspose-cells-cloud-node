const { CellsPageSetupApi, CellsPageSetup_PostHeaderRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsApi = new CellsPageSetupApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsPageSetup_PostHeaderRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.section = 1;
req.script = "test";
req.isFirstPage = false;
req.folder = "";

cellsPageSetupApi.cellsPageSetupPostHeader(req)
    .then((result) => {
        console.log(result)
    });