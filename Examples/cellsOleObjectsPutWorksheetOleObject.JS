const { CellsOleObjectsApi, CellsOleObjects_PutWorksheetOleObjectRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsOleObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"

const filename = "Book1.xlsx";
const filename1 = "OLEDoc.docx";
const filename2 = "word.jpg";


var req = new CellsOleObjects_PutWorksheetOleObjectRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";
req.oleObject = null;
req.upperLeftRow = 1;
req.upperLeftColumn = 1;
req.height = 100;
req.width = 80;
req.oleFile = filename1;
req.imageFile = filename2;

return cellsOleObjectsApi.cellsOleObjectsPutWorksheetOleObject(req)
  .then((result) => {
    console.log(result)
  });