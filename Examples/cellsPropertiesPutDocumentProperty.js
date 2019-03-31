const { CellsPropertiesApi, CellsProperties_PutDocumentPropertyRequest,CellsDocumentProperty } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPropertiesApi = new CellsPropertiesApi(AppSid, AppKey);
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