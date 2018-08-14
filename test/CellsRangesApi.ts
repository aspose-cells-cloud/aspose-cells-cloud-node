/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

const localPath = "../TestData/";

describe('CellsRangesApi', function() {
  this.timeout(20000);
  describe('cellsRangesGetWorksheetCellsRangeValue', function() {
    it('should call cellsRangesGetWorksheetCellsRangeValue successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_GetWorksheetCellsRangeValueRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstRow = 0;
          req.firstColumn = 0;
          req.rowCount = 3;
          req.columnCount = 2;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesGetWorksheetCellsRangeValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);

              var req = new model.CellsRanges_GetWorksheetCellsRangeValueRequest();
              req.name = filename;
              req.sheetName = "Sheet1";
              req.namerange = "A1:B3";
              req.folder = "Temp";
              return cellsRangesApi.cellsRangesGetWorksheetCellsRangeValue(req)
                .then((result) => {
                  expect(result.body.code).to.equal(200);
                  expect(result.response.statusCode).to.equal(200);

                  var req = new model.CellsRanges_GetWorksheetCellsRangeValueRequest();
                  req.name = filename;
                  req.sheetName = "Sheet1";
                  req.namerange = "Name_2";
                  req.folder = "Temp";
                  return cellsRangesApi.cellsRangesGetWorksheetCellsRangeValue(req)
                    .then((result) => {
                      expect(result.body.code).to.equal(200);
                      expect(result.response.statusCode).to.equal(200);
                    });
                });
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeColumnWidth', function() {
    it('should call cellsRangesPostWorksheetCellsRangeColumnWidth successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeColumnWidthRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.value = 10.01;
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeColumnWidth(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeMerge', function() {
    it('should call cellsRangesPostWorksheetCellsRangeMerge successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeMergeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeMerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeMoveTo', function() {
    it('should call cellsRangesPostWorksheetCellsRangeMoveTo successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeMoveToRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.destRow = 1;
          req.destColumn = 1;
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeMoveTo(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeOutlineBorder', function() {
    it('should call cellsRangesPostWorksheetCellsRangeOutlineBorder successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var rangeOperate = new model.RangeSetOutlineBorderRequest();
          rangeOperate.borderEdge = "LeftBorder";
          rangeOperate.borderStyle = "Dotted";
          rangeOperate.borderColor = new model.Color();
          rangeOperate.borderColor.r = 255;
          var range = new model.Range();
          range.columnCount = 10;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 2;
          range.rowHeight = 10;
          rangeOperate.range = range;
          req.rangeOperate = rangeOperate;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeOutlineBorder(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeRowHeight', function() {
    it('should call cellsRangesPostWorksheetCellsRangeRowHeight successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeRowHeightRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.value = 10.99;
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeRowHeight(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeStyle', function() {
    it('should call cellsRangesPostWorksheetCellsRangeStyle successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var rangeOperate = new model.RangeSetStyleRequest();
          rangeOperate.style = new model.Style();
          rangeOperate.style.font = new model.Font();
          rangeOperate.style.font.isBold = true;
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          rangeOperate.range = range;
          req.rangeOperate = rangeOperate;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeUnmerge', function() {
    it('should call cellsRangesPostWorksheetCellsRangeUnmerge successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeUnmergeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeUnmerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRangeValue', function() {
    it('should call cellsRangesPostWorksheetCellsRangeValue successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangeValueRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.value = "null";
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          req.range = range;
          req.isConverted = true;
          req.setStyle = true;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRangeValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsRangesPostWorksheetCellsRanges', function() {
    it('should call cellsRangesPostWorksheetCellsRanges successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsRangesApi = BaseTest.initializeCellsRangesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsRanges_PostWorksheetCellsRangesRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var rangeOperate = new model.RangeCopyRequest();
          rangeOperate.operate = "copydata";
          rangeOperate.pasteOptions = new model.PasteOptions();
          rangeOperate.pasteOptions.onlyVisibleCells = true;
          var range = new model.Range();
          range.columnCount = 1;
          range.columnWidth = 10.1;
          range.firstColumn = 1;
          range.firstRow = 1;
          range.rowCount = 10;
          var range2= new model.Range();
          range2.columnCount = 1;
          range2.columnWidth = 10.1;
          range2.firstColumn = 1;
          range2.firstRow = 20;
          range2.rowCount = 10;
          rangeOperate.source = range;
          rangeOperate.target = range2;
          req.rangeOperate = rangeOperate;
          req.folder = "Temp";
          
          return cellsRangesApi.cellsRangesPostWorksheetCellsRanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});