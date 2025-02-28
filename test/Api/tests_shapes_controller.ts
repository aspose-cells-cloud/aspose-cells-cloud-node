import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

//const localPath = "TestData/CellsCloud/";
const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('ShapesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_shapes test', function(){
      it("should call GetWorksheetShapes successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetShapesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetShapes(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_shape test', function(){
      it("should call GetWorksheetShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.shapeindex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_shape test', function(){
      it("should call PutWorksheetShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var shapeDTO = new model.Shape();


        var request = new model.PutWorksheetShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.shapeDTO =  shapeDTO;
        request.drawingType =  "arc";
        request.upperLeftRow =  1;
        request.upperLeftColumn =  1;
        request.top =  10;
        request.left =  10;
        request.width =  100;
        request.height =  100;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_shapes test', function(){
      it("should call DeleteWorksheetShapes successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetShapesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetShapes(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_shape test', function(){
      it("should call DeleteWorksheetShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.shapeindex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_shape test', function(){
      it("should call PostWorksheetShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dto = new model.Shape();
         dto.lowerRightColumn = 10  ;

        var request = new model.PostWorksheetShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.shapeindex =  0;
        request.dto =  dto;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_group_shape test', function(){
      it("should call PostWorksheetGroupShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var listShape = new Array<number>();listShape.push(0);
        listShape.push(1);

        var request = new model.PostWorksheetGroupShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.listShape =  listShape;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetGroupShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_ungroup_shape test', function(){
      it("should call PostWorksheetUngroupShape successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetUngroupShapeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.shapeindex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetUngroupShape(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});