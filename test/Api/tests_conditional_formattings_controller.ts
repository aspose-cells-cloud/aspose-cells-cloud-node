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


describe('ConditionalFormattingsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_conditional_formattings test', function(){
      it("should call GetWorksheetConditionalFormattings successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetConditionalFormattingsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetConditionalFormattings(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_conditional_formatting test', function(){
      it("should call GetWorksheetConditionalFormatting successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetConditionalFormattingRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetConditionalFormatting(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_conditional_formatting test', function(){
      it("should call PutWorksheetConditionalFormatting successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var formatcondition = new model.FormatCondition();
         formatcondition.type = "CellValue"  ;
         formatcondition.operator = "Between"  ;
         formatcondition.formula1 = "v1"  ;
         formatcondition.formula2 = "v2"  ;

        var request = new model.PutWorksheetConditionalFormattingRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.formatcondition =  formatcondition;
        request.cellArea =  "A1:C10";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetConditionalFormatting(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_format_condition test', function(){
      it("should call PutWorksheetFormatCondition successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFormatConditionRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.cellArea =  "A1:C10";
        request.type =  "CellValue";
        request.operatorType =  "Between";
        request.formula1 =  "v1";
        request.formula2 =  "v2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFormatCondition(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_format_condition_area test', function(){
      it("should call PutWorksheetFormatConditionArea successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFormatConditionAreaRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.cellArea =  "A1:C10";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFormatConditionArea(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_format_condition_condition test', function(){
      it("should call PutWorksheetFormatConditionCondition successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFormatConditionConditionRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.type =  "CellValue";
        request.operatorType =  "Between";
        request.formula1 =  "v1";
        request.formula2 =  "v2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFormatConditionCondition(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_conditional_formattings test', function(){
      it("should call DeleteWorksheetConditionalFormattings successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetConditionalFormattingsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetConditionalFormattings(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_conditional_formatting test', function(){
      it("should call DeleteWorksheetConditionalFormatting successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetConditionalFormattingRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetConditionalFormatting(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_conditional_formatting_area test', function(){
      it("should call DeleteWorksheetConditionalFormattingArea successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetConditionalFormattingAreaRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startRow =  1;
        request.startColumn =  1;
        request.totalRows =  4;
        request.totalColumns =  6;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetConditionalFormattingArea(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});