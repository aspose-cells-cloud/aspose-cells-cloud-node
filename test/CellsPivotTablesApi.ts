/*
* MIT License

* Copyright (c) 2021 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";

const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('CellsPivotTablesApi', function() {
  this.timeout(200000);
  describe('cellsPivotTablesDeletePivotTableField', function() {
    it('should call cellsPivotTablesDeletePivotTableField successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_DeletePivotTableFieldRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldType = "row";
          var request = new model.PivotTableFieldRequest();
          request.data = [1];
          req.request = request;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesDeletePivotTableField(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesDeleteWorksheetPivotTable', function() {
    it('should call cellsPivotTablesDeleteWorksheetPivotTable successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_DeleteWorksheetPivotTableRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesDeleteWorksheetPivotTable(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  
  describe('cellsPivotTablesDeleteWorksheetPivotTableFilters', function() {
    it('should call cellsPivotTablesDeleteWorksheetPivotTableFilters successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesDeleteWorksheetPivotTableFilters(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesDeleteWorksheetPivotTables', function() {
    it('should call cellsPivotTablesDeleteWorksheetPivotTables successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_DeleteWorksheetPivotTablesRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesDeleteWorksheetPivotTables(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesGetPivotTableField', function() {
    it('should call cellsPivotTablesGetPivotTableField successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_GetPivotTableFieldRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldIndex = 0;
          req.pivotFieldType = "Row";
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesGetPivotTableField(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesGetWorksheetPivotTable', function() {
    it('should call cellsPivotTablesGetWorksheetPivotTable successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_GetWorksheetPivotTableRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivottableIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesGetWorksheetPivotTable(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPutGetDeleteWorksheetPivotTableFilter', function() {
    it('should call cellsPivotTablesGetWorksheetPivotTableFilter successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PutWorksheetPivotTableFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;

          var pivotFilter = new model.PivotFilter();
          pivotFilter.fieldIndex = 1;
          pivotFilter.filterType = "Count";
          var autoFilter = new model.AutoFilter();
          autoFilter.filterColumns = new Array<model.FilterColumn>();
          var filterColumn = new model.FilterColumn();
          filterColumn.filterType = "Top10";
          filterColumn.fieldIndex = 0;
          filterColumn.top10Filter = new model.Top10Filter();
          filterColumn.top10Filter.items = 1;
          filterColumn.top10Filter.isTop = true;
          filterColumn.top10Filter.isPercent = false;
          autoFilter.filterColumns.push(filterColumn);
          pivotFilter.autoFilter = autoFilter;
          req.filter = pivotFilter;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPutWorksheetPivotTableFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);

              var req = new model.CellsPivotTables_GetWorksheetPivotTableFilterRequest();
              req.name = filename;
              req.sheetName = "Sheet4";
              req.pivotTableIndex = 0;
              req.filterIndex = 0;
              req.folder = "Temp";
              
              return cellsApi.cellsPivotTablesGetWorksheetPivotTableFilter(req)
                .then((result) => {
                  expect(result.body.code).to.equal(200);
                  expect(result.response.statusCode).to.equal(200);
                  var req = new model.CellsPivotTables_DeleteWorksheetPivotTableFilterRequest();
                req.name = filename;
                req.sheetName = "Sheet4";
                req.pivotTableIndex = 0;
                req.fieldIndex = 0;
                req.needReCalculate = true;
                req.folder = "Temp";
          
                return cellsApi.cellsPivotTablesDeleteWorksheetPivotTableFilter(req)
                  .then((result) => {
                    expect(result.body.code).to.equal(200);
                    expect(result.response.statusCode).to.equal(200);
                  });
                });
            });
        });
    });
  });
  describe('cellsPivotTablesGetWorksheetPivotTableFilters', function() {
    it('should call cellsPivotTablesGetWorksheetPivotTableFilters successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_GetWorksheetPivotTableFiltersRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesGetWorksheetPivotTableFilters(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesGetWorksheetPivotTables', function() {
    it('should call cellsPivotTablesGetWorksheetPivotTables successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_GetWorksheetPivotTablesRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesGetWorksheetPivotTables(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableCellStyle', function() {
    it('should call cellsPivotTablesPostPivotTableCellStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableCellStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.column = 1;
          req.row = 1;
          var style = new model.Style();
          style.font = new model.Font();
          style.font.size = 17;
          req.style = style;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableCellStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableFieldHideItem', function() {
    it('should call cellsPivotTablesPostPivotTableFieldHideItem successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableFieldHideItemRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldType = "Row";
          req.fieldIndex = 0;
          req.itemIndex = 1;
          req.isHide = true;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableFieldHideItem(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableFieldMoveTo', function() {
    it('should call cellsPivotTablesPostPivotTableFieldMoveTo successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableFieldMoveToRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.fieldIndex = 0;
          req.from = "Row";
          req.to = "Column";
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableFieldMoveTo(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableUpdatePivotFields', function() {
    it('should call cellsPivotTablesPostPivotTableUpdatePivotFields successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableUpdatePivotFieldsRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldType = "Row";
          req.pivotField = new model.PivotField();
          req.pivotField.showCompact = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableUpdatePivotFields(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableUpdatePivotField', function() {
    it('should call cellsPivotTablesPostPivotTableUpdatePivotField successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableUpdatePivotFieldRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldIndex = 0;
          req.pivotFieldType = "Row";
          req.pivotField = new model.PivotField();
          req.pivotField.showCompact = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableUpdatePivotField(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostPivotTableStyle', function() {
    it('should call cellsPivotTablesPostPivotTableStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          var style = new model.Style();
          style.font = new model.Font();
          style.font.size = 18;
          req.style = style;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostWorksheetPivotTableCalculate', function() {
    it('should call cellsPivotTablesPostWorksheetPivotTableCalculate successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostPivotTableStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          var style = new model.Style();
          style.font = new model.Font();
          style.font.size = 18;
          req.style = style;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostPivotTableStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPostWorksheetPivotTableMove', function() {
    it('should call cellsPivotTablesPostWorksheetPivotTableMove successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PostWorksheetPivotTableMoveRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.row = 1;
          req.column = 1;
          req.destCellName = "C10";
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPostWorksheetPivotTableMove(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPutPivotTableField', function() {
    it('should call cellsPivotTablesPutPivotTableField successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PutPivotTableFieldRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;
          req.pivotFieldType = "Row";
          req.request = new model.PivotTableFieldRequest();
          req.request.data = [1];
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPutPivotTableField(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPutWorksheetPivotTable', function() {
    it('should call cellsPivotTablesPutWorksheetPivotTable successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PutWorksheetPivotTableRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.request = null;
          req.folder = "Temp";
          req.sourceData = "Sheet1!C6:E13";
          req.destCellName = "C1";
          req.tableName = "TestPivot";
          req.useSameSource = true;
          
          return cellsApi.cellsPivotTablesPutWorksheetPivotTable(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPivotTablesPutWorksheetPivotTableFilter', function() {
    it('should call cellsPivotTablesPutWorksheetPivotTableFilter successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "TestCase.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPivotTables_PutWorksheetPivotTableFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.pivotTableIndex = 0;

          var pivotFilter = new model.PivotFilter();
          pivotFilter.fieldIndex = 1;
          pivotFilter.filterType = "Count";
          var autoFilter = new model.AutoFilter();
          autoFilter.filterColumns = new Array<model.FilterColumn>();
          var filterColumn = new model.FilterColumn();
          filterColumn.filterType = "Top10";
          filterColumn.fieldIndex = 0;
          filterColumn.top10Filter = new model.Top10Filter();
          filterColumn.top10Filter.items = 1;
          filterColumn.top10Filter.isTop = true;
          filterColumn.top10Filter.isPercent = false;
          autoFilter.filterColumns.push(filterColumn);
          pivotFilter.autoFilter = autoFilter;
          req.filter = pivotFilter;
          req.needReCalculate = true;
          req.folder = "Temp";
          
          return cellsApi.cellsPivotTablesPutWorksheetPivotTableFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});