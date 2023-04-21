import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
const ApiURL = process.env.CellsCloudTestApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('XmlController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_workbook_export_xml test', function(){
      it("should call PostWorkbookExportXML successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Template.xlsx"
        var remoteName = "Template.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorkbookExportXMLRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookExportXML(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_import_xml test', function(){
      it("should call PostWorkbookImportXML successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Template.xlsx"
        var dataXML = "data.xml"
        var remoteName = "Template.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var dataXMLRequest = new  model.UploadFileRequest();
        dataXMLRequest.uploadFiles ={dataXML:fs.createReadStream(localPath  + dataXML)};
        dataXMLRequest.path = remoteFolder + "/data.xml" ;
        dataXMLRequest.storageName ="";
        cellsApi.uploadFile(dataXMLRequest );
     
        var importXMLRequestXMLFileSource = new model.FileSource();
         importXMLRequestXMLFileSource.fileSourceType = "CloudFileSystem"  ;
         importXMLRequestXMLFileSource.filePath = remoteFolder + "/data.xml"  ;
        var importXMLRequestImportPosition = new model.ImportPosition();
         importXMLRequestImportPosition.sheetName = "Sheet1"  ;
         importXMLRequestImportPosition.rowIndex = 3  ;
         importXMLRequestImportPosition.columnIndex = 4  ;
        var importXMLRequest = new model.ImportXMLRequest();
         importXMLRequest.xMLFileSource = importXMLRequestXMLFileSource  ;
         importXMLRequest.importPosition = importXMLRequestImportPosition  ;

        var request = new model.PostWorkbookImportXMLRequest();
        request.importXMLRequest = importXMLRequest;
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookImportXML(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});