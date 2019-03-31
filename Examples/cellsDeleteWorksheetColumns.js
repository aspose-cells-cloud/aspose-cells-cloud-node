const {CellsApi, Cells_DeleteWorksheetColumnsRequest } = require("asposecellscloud");

AppSid="78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey="b125f13bf6b76ed81ee990142d841195"

req = new Cells_DeleteWorksheetColumnsRequest();
req.name = "Book1.xlsx";
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.columns = 1;
req.updateReference = true;
req.folder = "";

cellsApi=new CellsApi(AppSid, AppKey);

cellsApi.cellsDeleteWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });