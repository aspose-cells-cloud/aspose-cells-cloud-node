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


describe('ListObjectsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_list_objects test', function(){
      it("should call GetWorksheetListObjects successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetListObjectsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetListObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_list_object test', function(){
      it("should call GetWorksheetListObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetListObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listobjectindex =  0;
        request.format =  "pdf";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetListObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_list_object test', function(){
      it("should call PutWorksheetListObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetListObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.startRow =  1;
        request.startColumn =  1;
        request.endRow =  6;
        request.endColumn =  6;
        request.folder =  remoteFolder;
        request.hasHeaders =  true;
        request.displayName =  "true";
        request.showTotals =  true;
        request.storageName =  "";
        return cellsApi.putWorksheetListObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_list_objects test', function(){
      it("should call DeleteWorksheetListObjects successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetListObjectsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetListObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_list_object test', function(){
      it("should call DeleteWorksheetListObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetListObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetListObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_object test', function(){
      it("should call PostWorksheetListObject successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var listObject = new model.ListObject();
         listObject.showHeaderRow = true  ;

        var request = new model.PostWorksheetListObjectRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.listObject =  listObject;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListObject(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_object_convert_to_range test', function(){
      it("should call PostWorksheetListObjectConvertToRange successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetListObjectConvertToRangeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListObjectConvertToRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_object_summarize_with_pivot_table test', function(){
      it("should call PostWorksheetListObjectSummarizeWithPivotTable successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var createPivotTableRequestPivotFieldColumns = new Array<number>();createPivotTableRequestPivotFieldColumns.push(2);
        var createPivotTableRequestPivotFieldData = new Array<number>();createPivotTableRequestPivotFieldData.push(1);
        var createPivotTableRequestPivotFieldRows = new Array<number>();createPivotTableRequestPivotFieldRows.push(0);
        var createPivotTableRequest = new model.CreatePivotTableRequest();
         createPivotTableRequest.destCellName = "C1"  ;
         createPivotTableRequest.name = "testp"  ;
         createPivotTableRequest.sourceData = "=Sheet2!A1:E8"  ;
         createPivotTableRequest.useSameSource = true  ;
         createPivotTableRequest.pivotFieldColumns = createPivotTableRequestPivotFieldColumns  ;
         createPivotTableRequest.pivotFieldData = createPivotTableRequestPivotFieldData  ;
         createPivotTableRequest.pivotFieldRows = createPivotTableRequestPivotFieldRows  ;

        var request = new model.PostWorksheetListObjectSummarizeWithPivotTableRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.destsheetName =  "Sheet2";
        request.createPivotTableRequest =  createPivotTableRequest;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListObjectSummarizeWithPivotTable(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_object_sort_table test', function(){
      it("should call PostWorksheetListObjectSortTable successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataSorter = new model.DataSorter();
         dataSorter.caseSensitive = true  ;

        var request = new model.PostWorksheetListObjectSortTableRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.dataSorter =  dataSorter;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListObjectSortTable(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_column test', function(){
      it("should call PostWorksheetListColumn successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var listColumn = new model.ListColumn();
         listColumn.name = "test cloumn"  ;

        var request = new model.PostWorksheetListColumnRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.columnIndex =  0;
        request.listColumn =  listColumn;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListColumn(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_list_columns_total test', function(){
      it("should call PostWorksheetListColumnsTotal successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var tableTotalRequeststableTotalRequest0 = new model.TableTotalRequest();
         tableTotalRequeststableTotalRequest0.listColumnIndex = 1  ;
         tableTotalRequeststableTotalRequest0.totalsCalculation = "Average"  ;
        var tableTotalRequests = new Array<model.TableTotalRequest>();tableTotalRequests.push(tableTotalRequeststableTotalRequest0);

        var request = new model.PostWorksheetListColumnsTotalRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet7";
        request.listObjectIndex =  0;
        request.tableTotalRequests =  tableTotalRequests;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetListColumnsTotal(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});