const { CellsPageSetupApi, CellsPageSetup_PostPageSetupRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsApi = new CellsPageSetupApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsPageSetup_PostPageSetupRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.pageSetup = new model.PageSetup();
req.pageSetup.blackAndWhite = true;
req.folder = "";

cellsPageSetupApi.cellsPageSetupPostPageSetup(req)
    .then((result) => {
        console.log(result)
    });