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


describe('RangesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_worksheet_cells_ranges_copy test', function(){
      it("should call PostWorksheetCellsRangesCopy successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var rangeOperateSource = new model.Range();
         rangeOperateSource.columnCount = 3  ;
         rangeOperateSource.firstColumn = 8  ;
         rangeOperateSource.firstRow = 3  ;
         rangeOperateSource.rowCount = 2  ;
        var rangeOperateTarget = new model.Range();
         rangeOperateTarget.columnCount = 3  ;
         rangeOperateTarget.firstColumn = 8  ;
         rangeOperateTarget.firstRow = 13  ;
         rangeOperateTarget.rowCount = 2  ;
        var rangeOperate = new model.RangeCopyRequest();
         rangeOperate.operate = "copydata"  ;
         rangeOperate.source = rangeOperateSource  ;
         rangeOperate.target = rangeOperateTarget  ;

        var request = new model.PostWorksheetCellsRangesCopyRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rangeOperate =  rangeOperate;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangesCopy(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_merge test', function(){
      it("should call PostWorksheetCellsRangeMerge successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeMergeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_un_merge test', function(){
      it("should call PostWorksheetCellsRangeUnMerge successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeUnMergeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeUnMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_style test', function(){
      it("should call PostWorksheetCellsRangeStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var rangeOperateStyleFont = new model.Font();
         rangeOperateStyleFont.size = 16  ;
        var rangeOperateStyle = new model.Style();
         rangeOperateStyle.font = rangeOperateStyleFont  ;
        var rangeOperateRange = new model.Range();
         rangeOperateRange.columnCount = 1  ;
         rangeOperateRange.columnWidth = 10.0  ;
         rangeOperateRange.firstRow = 1  ;
         rangeOperateRange.rowCount = 10  ;
        var rangeOperate = new model.RangeSetStyleRequest();
         rangeOperate.style = rangeOperateStyle  ;
         rangeOperate.range = rangeOperateRange  ;

        var request = new model.PostWorksheetCellsRangeStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rangeOperate =  rangeOperate;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_cells_range_value test', function(){
      it("should call GetWorksheetCellsRangeValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCellsRangeValueRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.namerange =  "Name_2";
        request.firstRow =  0;
        request.firstColumn =  0;
        request.rowCount =  3;
        request.columnCount =  2;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCellsRangeValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_value test', function(){
      it("should call PostWorksheetCellsRangeValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeValueRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.value =  "100";
        request.isConverted =  true;
        request.setStyle =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_move_to test', function(){
      it("should call PostWorksheetCellsRangeMoveTo successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeMoveToRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.destRow =  10;
        request.destColumn =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeMoveTo(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_outline_border test', function(){
      it("should call PostWorksheetCellsRangeOutlineBorder successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var rangeOperateborderColor = new model.Color();
         rangeOperateborderColor.r = 48  ;
         rangeOperateborderColor.g = 48  ;
         rangeOperateborderColor.b = 48  ;
        var rangeOperateRange = new model.Range();
         rangeOperateRange.columnCount = 1  ;
         rangeOperateRange.columnWidth = 10.0  ;
         rangeOperateRange.firstRow = 1  ;
         rangeOperateRange.rowCount = 10  ;
        var rangeOperate = new model.RangeSetOutlineBorderRequest();
         rangeOperate.borderEdge = "LeftBorder"  ;
         rangeOperate.borderStyle = "Dotted"  ;
         rangeOperate.borderColor = rangeOperateborderColor  ;
         rangeOperate.range = rangeOperateRange  ;

        var request = new model.PostWorksheetCellsRangeOutlineBorderRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rangeOperate =  rangeOperate;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeOutlineBorder(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_column_width test', function(){
      it("should call PostWorksheetCellsRangeColumnWidth successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeColumnWidthRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.value =  10.7;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeColumnWidth(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_row_height test', function(){
      it("should call PostWorksheetCellsRangeRowHeight successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var range = new model.Range();
         range.columnCount = 1  ;
         range.columnWidth = 10.0  ;
         range.firstRow = 1  ;
         range.rowCount = 10  ;

        var request = new model.PostWorksheetCellsRangeRowHeightRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  range;
        request.value =  10.9;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeRowHeight(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_cells_range test', function(){
      it("should call PutWorksheetCellsRange successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetCellsRangeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:C6";
        request.shift =  "Down";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetCellsRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_cells_range test', function(){
      it("should call DeleteWorksheetCellsRange successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetCellsRangeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:C6";
        request.shift =  "Up";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetCellsRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cells_range_sort test', function(){
      it("should call PostWorksheetCellsRangeSort successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Group.xlsx"
        var remoteName = "Group.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var rangeSortRequestDataSorter = new model.DataSorter();
         rangeSortRequestDataSorter.caseSensitive = true  ;
        var rangeSortRequestCellArea = new model.Range();
         rangeSortRequestCellArea.columnCount = 3  ;
         rangeSortRequestCellArea.firstColumn = 0  ;
         rangeSortRequestCellArea.firstRow = 0  ;
         rangeSortRequestCellArea.rowCount = 15  ;
        var rangeSortRequest = new model.RangeSortRequest();
         rangeSortRequest.dataSorter = rangeSortRequestDataSorter  ;
         rangeSortRequest.cellArea = rangeSortRequestCellArea  ;

        var request = new model.PostWorksheetCellsRangeSortRequest();
        request.name =  remoteName;
        request.sheetName =  "book1";
        request.rangeSortRequest =  rangeSortRequest;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellsRangeSort(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});