var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var range = new model.Range();
 range.columnCount = 1  ;
 range.columnWidth = 10.0  ;
 range.firstRow = 1  ;
 range.rowCount = 10  ;

var request = new model.PostWorksheetCellsRangeRowHeightRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.range =  range;
request.value =  10.9;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetCellsRangeRowHeight(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});