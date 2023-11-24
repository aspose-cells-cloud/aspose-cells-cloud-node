import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('HypelinksController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_hyperlinks test', function(){
      it("should call GetWorksheetHyperlinks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetHyperlinksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetHyperlinks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_hyperlink test', function(){
      it("should call GetWorksheetHyperlink successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetHyperlinkRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.hyperlinkIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetHyperlink(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_hyperlink test', function(){
      it("should call DeleteWorksheetHyperlink successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetHyperlinkRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.hyperlinkIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetHyperlink(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_hyperlink test', function(){
      it("should call PostWorksheetHyperlink successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var hyperlink = new model.Hyperlink();
         hyperlink.address = "https://products.aspose.cloud/cells/"  ;

        var request = new model.PostWorksheetHyperlinkRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.hyperlinkIndex =  0;
        request.hyperlink =  hyperlink;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetHyperlink(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_hyperlink test', function(){
      it("should call PutWorksheetHyperlink successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetHyperlinkRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.firstRow =  1;
        request.firstColumn =  1;
        request.totalRows =  2;
        request.totalColumns =  3;
        request.address =  "https://products.aspose.cloud/cells/";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetHyperlink(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_hyperlinks test', function(){
      it("should call DeleteWorksheetHyperlinks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetHyperlinksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetHyperlinks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});