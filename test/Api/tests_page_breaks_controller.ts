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


describe('PageBreaksController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_vertical_page_breaks test', function(){
      it("should call GetVerticalPageBreaks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetVerticalPageBreaksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getVerticalPageBreaks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_horizontal_page_breaks test', function(){
      it("should call GetHorizontalPageBreaks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetHorizontalPageBreaksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getHorizontalPageBreaks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_vertical_page_break test', function(){
      it("should call GetVerticalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetVerticalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getVerticalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_horizontal_page_break test', function(){
      it("should call GetHorizontalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetHorizontalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getHorizontalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_vertical_page_break test', function(){
      it("should call PutVerticalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutVerticalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellname =  "A1";
        request.column =  1;
        request.row =  1;
        request.startRow =  1;
        request.endRow =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putVerticalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_horizontal_page_break test', function(){
      it("should call PutHorizontalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutHorizontalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellname =  "A1";
        request.row =  1;
        request.column =  1;
        request.startColumn =  1;
        request.endColumn =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putHorizontalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_vertical_page_breaks test', function(){
      it("should call DeleteVerticalPageBreaks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteVerticalPageBreaksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.column =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteVerticalPageBreaks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_horizontal_page_breaks test', function(){
      it("should call DeleteHorizontalPageBreaks successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteHorizontalPageBreaksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.row =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteHorizontalPageBreaks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_vertical_page_break test', function(){
      it("should call DeleteVerticalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteVerticalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteVerticalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_horizontal_page_break test', function(){
      it("should call DeleteHorizontalPageBreak successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteHorizontalPageBreakRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteHorizontalPageBreak(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});