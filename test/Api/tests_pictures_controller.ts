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


describe('PicturesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_pictures test', function(){
      it("should call GetWorksheetPictures successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetPicturesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPictures(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_picture_with_format test', function(){
      it("should call GetWorksheetPictureWithFormat successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetPictureWithFormatRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.pictureNumber =  0;
        request.format =  "png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPictureWithFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_add_picture test', function(){
      it("should call PutWorksheetAddPicture successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var waterMarkPNG = "WaterMark.png"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var waterMarkPNGRequest = new  model.UploadFileRequest();
        waterMarkPNGRequest.uploadFiles ={waterMarkPNG:fs.createReadStream(localPath  + waterMarkPNG)};
        waterMarkPNGRequest.path = remoteFolder + "/WaterMark.png" ;
        waterMarkPNGRequest.storageName ="";
        cellsApi.uploadFile(waterMarkPNGRequest );
     

        var request = new model.PutWorksheetAddPictureRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.upperLeftRow =  1;
        request.upperLeftColumn =  1;
        request.lowerRightRow =  10;
        request.lowerRightColumn =  10;
        request.picturePath =  remoteFolder + "/WaterMark.png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetAddPicture(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_work_sheet_picture test', function(){
      it("should call PostWorkSheetPicture successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var picture = new model.Picture();
         picture.left = 10  ;
         picture.bottom = 10  ;

        var request = new model.PostWorkSheetPictureRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.pictureIndex =  0;
        request.picture =  picture;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkSheetPicture(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_picture test', function(){
      it("should call DeleteWorksheetPicture successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetPictureRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.pictureIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetPicture(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_work_sheet_pictures test', function(){
      it("should call DeleteWorkSheetPictures successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorkSheetPicturesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet6";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorkSheetPictures(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});