const { CellsPropertiesApi, CellsProperties_GetDocumentPropertyRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsProperties_GetDocumentPropertyRequest();
req.name = filename;
req.propertyName = "Author";
req.folder = "";

cellsPropertiesApi.cellsPropertiesGetDocumentProperty(req)
    .then((result) => {
        console.log(result)
    });