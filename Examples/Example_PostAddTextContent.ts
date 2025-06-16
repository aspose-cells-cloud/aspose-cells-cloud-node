var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "BookText.xlsx"
var remoteName = "BookText.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var addTextOptionsDataSource = new model.DataSource();
 addTextOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
 addTextOptionsDataSource.dataPath = "TestData/In/BookText.xlsx"  ;
var addTextOptions = new model.AddTextOptions();
 addTextOptions.dataSource = addTextOptionsDataSource  ;
 addTextOptions.text = "Aspose.Cells Cloud is an excellent product."  ;
 addTextOptions.worksheet = "202401"  ;
 addTextOptions.selectPoistion = "AtTheBeginning"  ;
 addTextOptions.skipEmptyCells = true  ;

var request = new model.PostAddTextContentRequest();
request.addTextOptions =  addTextOptions;
return cellsApi.postAddTextContent(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});