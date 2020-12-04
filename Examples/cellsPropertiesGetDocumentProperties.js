const { CellsPropertiesApi, CellsProperties_GetDocumentPropertiesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsProperties_GetDocumentPropertiesRequest();
req.name = filename;
req.folder = "";

cellsPropertiesApi.cellsPropertiesGetDocumentProperties(req)
  .then((result) => {
    console.log(result)
  });