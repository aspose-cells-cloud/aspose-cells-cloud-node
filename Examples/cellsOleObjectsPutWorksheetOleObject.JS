const { CellsOleObjectsApi, CellsOleObjects_PutWorksheetOleObjectRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

return cellsApi.cellsOleObjectsPutWorksheetOleObject(req)
  .then((result) => {
    console.log(result)
  });