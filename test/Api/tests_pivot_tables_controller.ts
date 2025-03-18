import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/CellsCloud/";
//const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('PivotTablesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_pivot_tables test', function(){
      it("should call GetWorksheetPivotTables successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.GetWorksheetPivotTablesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPivotTables(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('get_worksheet_pivot_table test', function(){
      it("should call GetWorksheetPivotTable successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.GetWorksheetPivotTableRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivottableIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPivotTable(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('get_pivot_table_field test', function(){
      it("should call GetPivotTableField successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.GetPivotTableFieldRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldIndex =  0;
        request.pivotFieldType =  "Row";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getPivotTableField(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('get_worksheet_pivot_table_filters test', function(){
      it("should call GetWorksheetPivotTableFilters successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.GetWorksheetPivotTableFiltersRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPivotTableFilters(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });

    describe('put_worksheet_pivot_table test', function(){
      it("should call PutWorksheetPivotTable successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.PutWorksheetPivotTableRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.folder =  remoteFolder;
        request.sourceData =  "=Sheet1!C6:E13";
        request.destCellName =  "C1";
        request.tableName =  "TestPivot";
        request.useSameSource =  true;
        request.storageName =  "";
        return cellsApi.putWorksheetPivotTable(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('put_pivot_table_field test', function(){
      it("should call PutPivotTableField successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var pivotTableFieldRequestData = new Array<number>();pivotTableFieldRequestData.push(0);
        var pivotTableFieldRequest = new model.PivotTableFieldRequest();
         pivotTableFieldRequest.data = pivotTableFieldRequestData  ;

        var request = new model.PutPivotTableFieldRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldType =  "Row";
        request.pivotTableFieldRequest =  pivotTableFieldRequest;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putPivotTableField(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
   describe('put_worksheet_pivot_table_filter test', function(){
  it("should call PutWorksheetPivotTableFilter successfully" , function(){
    var remoteFolder = "TestData/In"

    var localName = "TestCase.xlsx"
    var remoteName = "TestCase.xlsx"

    var localNameRequest = new  model.UploadFileRequest();
    localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
    localNameRequest.path = remoteFolder + "/" + remoteName ;
    localNameRequest.storageName ="";
    cellsApi.uploadFile(localNameRequest );

    var top10Filter = new model.Top10Filter();
    top10Filter.items = 1;
    top10Filter.isTop = true;
    top10Filter.isPercent = true;

    var filterColumn = new model.FilterColumn();
    filterColumn.filterType = "Top10Filter";
    filterColumn.fieldIndex = 0;
    filterColumn.top10Filter = top10Filter;

    var autoFilter = new model.AutoFilter();
    autoFilter.filterColumns = [filterColumn];


    var filter = new model.PivotFilter();
     filter.fieldIndex = 1;
     filter.filterType = "Count"  ;
     filter.autoFilter = autoFilter;

    var request = new model.PutWorksheetPivotTableFilterRequest();
    request.name =  remoteName;
    request.sheetName =  "Sheet4";
    request.pivotTableIndex =  0;
    request.filter =  filter;
    request.needReCalculate =  true;
    request.folder =  remoteFolder;
    request.storageName =  "";
    return cellsApi.putWorksheetPivotTableFilter(request).then((result) => {
        expect(result.response.statusCode).to.equal(200);
    });
  });
});
    describe('post_pivot_table_field_hide_item test', function(){
      it("should call PostPivotTableFieldHideItem successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.PostPivotTableFieldHideItemRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldType =  "Row";
        request.fieldIndex =  0;
        request.itemIndex =  1;
        request.isHide =  true;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableFieldHideItem(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_pivot_table_field_move_to test', function(){
      it("should call PostPivotTableFieldMoveTo successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.PostPivotTableFieldMoveToRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.fieldIndex =  0;
        request.from =  "Row";
        request.to =  "Column";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableFieldMoveTo(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_pivot_table_cell_style test', function(){
      it("should call PostPivotTableCellStyle successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostPivotTableCellStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.column =  1;
        request.row =  1;
        request.style =  style;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableCellStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_pivot_table_style test', function(){
      it("should call PostPivotTableStyle successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostPivotTableStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.style =  style;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_pivot_table_update_pivot_fields test', function(){
      it("should call PostPivotTableUpdatePivotFields successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var pivotField = new model.PivotField();
         pivotField.showCompact = true  ;

        var request = new model.PostPivotTableUpdatePivotFieldsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldType =  "Row";
        request.pivotField =  pivotField;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableUpdatePivotFields(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_pivot_table_update_pivot_field test', function(){
      it("should call PostPivotTableUpdatePivotField successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var pivotField = new model.PivotField();
         pivotField.showCompact = true  ;

        var request = new model.PostPivotTableUpdatePivotFieldRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldIndex =  0;
        request.pivotFieldType =  "Row";
        request.pivotField =  pivotField;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPivotTableUpdatePivotField(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_worksheet_pivot_table_calculate test', function(){
      it("should call PostWorksheetPivotTableCalculate successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.PostWorksheetPivotTableCalculateRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetPivotTableCalculate(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('post_worksheet_pivot_table_move test', function(){
      it("should call PostWorksheetPivotTableMove successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.PostWorksheetPivotTableMoveRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.row =  1;
        request.column =  1;
        request.destCellName =  "C10";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetPivotTableMove(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('delete_worksheet_pivot_tables test', function(){
      it("should call DeleteWorksheetPivotTables successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.DeleteWorksheetPivotTablesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetPivotTables(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('delete_worksheet_pivot_table test', function(){
      it("should call DeleteWorksheetPivotTable successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.DeleteWorksheetPivotTableRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetPivotTable(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('delete_pivot_table_field test', function(){
      it("should call DeletePivotTableField successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );

        var pivotTableFieldRequestData = new Array<number>();pivotTableFieldRequestData.push(0);
        var pivotTableFieldRequest = new model.PivotTableFieldRequest();
         pivotTableFieldRequest.data = pivotTableFieldRequestData  ;

        var request = new model.DeletePivotTableFieldRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.pivotTableIndex =  0;
        request.pivotFieldType =  "Row";
        request.pivotTableFieldRequest =  pivotTableFieldRequest;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deletePivotTableField(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('delete_worksheet_pivot_table_filters test', function(){
      it("should call DeleteWorksheetPivotTableFilters successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.DeleteWorksheetPivotTableFiltersRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet3";
        request.pivotTableIndex =  0;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetPivotTableFilters(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
    describe('delete_worksheet_pivot_table_filter test', function(){
      it("should call DeleteWorksheetPivotTableFilter successfully" , function(){
        var remoteFolder = "TestData/In"

        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );


        var request = new model.DeleteWorksheetPivotTableFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet3";
        request.pivotTableIndex =  0;
        request.fieldIndex =  0;
        request.needReCalculate =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetPivotTableFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    });
});