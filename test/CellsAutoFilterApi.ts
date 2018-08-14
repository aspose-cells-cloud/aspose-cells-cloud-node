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

describe('CellsAutoFilterApi', function() {
  this.timeout(20000);
  describe('cellsAutoFilterDeleteWorksheetDateFilter', function() {
    it('should call cellsAutoFilterDeleteWorksheetDateFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_DeleteWorksheetDateFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.fieldIndex = 1;
          req.dateTimeGroupingType = "Day";
          req.year = 2010;
          req.month = 10;
          req.day = 1;
          req.hour = 1;
          req.minute = 1;
          req.second = 1;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterDeleteWorksheetDateFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterDeleteWorksheetFilter', function() {
    it('should call cellsAutoFilterDeleteWorksheetFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_DeleteWorksheetFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.fieldIndex = 1;
          req.criteria = "test";
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterDeleteWorksheetFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterGetWorksheetAutoFilter', function() {
    it('should call cellsAutoFilterGetWorksheetAutoFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_GetWorksheetAutoFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterGetWorksheetAutoFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPostWorksheetAutoFilterRefresh', function() {
    it('should call cellsAutoFilterPostWorksheetAutoFilterRefresh successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPostWorksheetAutoFilterRefresh(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPostWorksheetMatchBlanks', function() {
    it('should call cellsAutoFilterPostWorksheetMatchBlanks successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PostWorksheetMatchBlanksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.fieldIndex = 0;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPostWorksheetMatchBlanks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPostWorksheetMatchNonBlanks', function() {
    it('should call cellsAutoFilterPostWorksheetMatchNonBlanks successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PostWorksheetMatchNonBlanksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.fieldIndex = 0;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPostWorksheetMatchNonBlanks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetColorFilter', function() {
    it('should call cellsAutoFilterPutWorksheetColorFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetColorFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.folder = "Temp";
          var colorFilter = new model.ColorFilterRequest();
          req.colorFilter = colorFilter;
          var color = new model.Color();//0, 255, 245, 2
          color.r = 255;
          color.g = 245;

          colorFilter.foregroundColor = new model.CellsColor();
          colorFilter.foregroundColor.color = color;
          colorFilter.pattern = "Solid";
          req.matchBlanks = true;
          req.refresh = true;
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetColorFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetCustomFilter', function() {
    it('should call cellsAutoFilterPutWorksheetCustomFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetCustomFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.folder = "Temp";
          req.operatorType1 = "LessOrEqual";
          req.criteria1 = "test";
          req.isAnd = false;
          req.operatorType2 = "LessOrEqual";
          req.criteria2 = "test";
          req.matchBlanks = true;
          req.refresh = false;
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetCustomFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetDateFilter', function() {
    it('should call cellsAutoFilterPutWorksheetDateFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetDateFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.dateTimeGroupingType = "Day";
          req.year = 2019;
          req.month = 1;
          req.day = 1;
          req.hour = 1;
          req.minute = 1;
          req.second = 1;
          req.matchBlanks = true;
          req.refresh = true;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetDateFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetDynamicFilter', function() {
    it('should call cellsAutoFilterPutWorksheetDynamicFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetDynamicFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.dynamicFilterType = "May";
          req.matchBlanks = true;
          req.refresh = true;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetDynamicFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetFilter', function() {
    it('should call cellsAutoFilterPutWorksheetFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.criteria = "test";
          req.matchBlanks = true;
          req.refresh = true;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetFilterTop10', function() {
    it('should call cellsAutoFilterPutWorksheetFilterTop10 successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetFilterTop10Request();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.isTop = true;
          req.isPercent = true;
          req.itemCount = 1;
          req.matchBlanks = null;
          req.refresh = null;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetFilterTop10(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoFilterPutWorksheetIconFilter', function() {
    it('should call cellsAutoFilterPutWorksheetIconFilter successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoFilterApi = BaseTest.initializeCellsAutoFilterApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoFilter_PutWorksheetIconFilterRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.fieldIndex = 0;
          req.iconSetType = "None";
          req.iconId = 0;
          req.matchBlanks = null;
          req.refresh = null;
          req.folder = "Temp";
          
          return cellsAutoFilterApi.cellsAutoFilterPutWorksheetIconFilter(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});