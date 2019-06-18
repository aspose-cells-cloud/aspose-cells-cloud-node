const { CellsPageSetupApi, CellsPageSetup_DeleteHeaderFooterRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsPageSetupApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPageSetup_DeleteHeaderFooterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsPageSetupApi.cellsPageSetupDeleteHeaderFooter(req)
    .then((result) => {
        console.log(result)
    });