const { CellsPropertiesApi, CellsProperties_DeleteDocumentPropertiesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsProperties_DeleteDocumentPropertiesRequest();
req.name = filename;
req.folder = "";

cellsPropertiesApi.cellsPropertiesDeleteDocumentProperties(req)
    .then((result) => {
        console.log(result)
    });