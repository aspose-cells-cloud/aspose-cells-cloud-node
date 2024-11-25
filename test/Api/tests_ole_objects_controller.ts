import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/CellsCloud/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('OleObjectsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_ole_objects test', function(){
      it("should call GetWorksheetOleObjects successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetOleObjectsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetOleObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_ole_object test', function(){
      it("should call GetWorksheetOleObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetOleObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.objectNumber =  0;
        request.format =  "png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetOleObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_ole_objects test', function(){
      it("should call DeleteWorksheetOleObjects successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetOleObjectsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetOleObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_ole_object test', function(){
      it("should call DeleteWorksheetOleObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetOleObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.oleObjectIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetOleObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_ole_object test', function(){
      it("should call PostUpdateWorksheetOleObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var ole = new model.OleObject();
         ole.left = 10  ;
         ole.right = 10  ;
         ole.height = 90  ;
         ole.width = 78  ;

        var request = new model.PostUpdateWorksheetOleObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.oleObjectIndex =  0;
        request.ole =  ole;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetOleObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_ole_object test', function(){
      it("should call PutWorksheetOleObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var oLEDoc = "OLEDoc.docx"
        var wordJPG = "word.jpg"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var oLEDocRequest = new  model.UploadFileRequest();
        oLEDocRequest.uploadFiles ={oLEDoc:fs.createReadStream(localPath  + oLEDoc)};
        oLEDocRequest.path = "OLEDoc.docx" ;
        oLEDocRequest.storageName ="";
        cellsApi.uploadFile(oLEDocRequest );
        var wordJPGRequest = new  model.UploadFileRequest();
        wordJPGRequest.uploadFiles ={wordJPG:fs.createReadStream(localPath  + wordJPG)};
        wordJPGRequest.path = "word.jpg" ;
        wordJPGRequest.storageName ="";
        cellsApi.uploadFile(wordJPGRequest );
     

        var request = new model.PutWorksheetOleObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.upperLeftRow =  1;
        request.upperLeftColumn =  1;
        request.height =  100;
        request.width =  80;
        request.oleFile =  "OLEDoc.docx";
        request.imageFile =  "word.jpg";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetOleObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});