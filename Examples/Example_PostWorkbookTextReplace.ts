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
 

var request = new model.PostWorkbookTextReplaceRequest();
request.name =  remoteName;
request.oldValue =  "1234";
request.newValue =  "5678";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorkbookTextReplace(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});