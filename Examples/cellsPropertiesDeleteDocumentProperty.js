const { CellsPropertiesApi, CellsProperties_DeleteDocumentPropertyRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsProperties_DeleteDocumentPropertyRequest();
req.name = filename;
req.propertyName = "Author";
req.folder = "";

return cellsPropertiesApi.cellsPropertiesDeleteDocumentProperty(req)
  .then((result) => {
    console.log(result)
  });