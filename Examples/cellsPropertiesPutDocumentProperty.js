const { CellsPropertiesApi, CellsProperties_PutDocumentPropertyRequest,CellsDocumentProperty } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsProperties_PutDocumentPropertyRequest();
req.name = filename;
req.propertyName = "Name";
var property = new CellsDocumentProperty();
property.name = "Author";
property.value = "Val";
req.property = property;
req.folder = "";

cellsPropertiesApi.cellsPropertiesPutDocumentProperty(req)
    .then((result) => {
        console.log(result)
    });