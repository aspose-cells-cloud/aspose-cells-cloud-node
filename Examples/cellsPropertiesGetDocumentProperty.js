const { CellsPropertiesApi, CellsProperties_GetDocumentPropertyRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPropertiesApi = new CellsPropertiesApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsProperties_GetDocumentPropertyRequest();
req.name = filename;
req.propertyName = "Author";
req.folder = "";

cellsPropertiesApi.cellsPropertiesGetDocumentProperty(req)
    .then((result) => {
        console.log(result)
    });