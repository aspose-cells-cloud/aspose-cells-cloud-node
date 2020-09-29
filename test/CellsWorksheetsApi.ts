/*
* MIT License

* Copyright (c) 2020 Aspose Pty Ltd

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

describe('CellsWorksheetsApi', function() {
  this.timeout(200000);
  describe('cellsWorksheetsDeleteUnprotectWorksheet', function() {
    it('should call cellsWorksheetsDeleteUnprotectWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteUnprotectWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var protectParameter = new model.ProtectSheetParameter ();
          protectParameter.password = "12345";
          protectParameter.protectionType = "All";
          req.protectParameter = protectParameter;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteUnprotectWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsDeleteWorksheet', function() {
    it('should call cellsWorksheetsDeleteWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsDeleteWorksheetBackground', function() {
    it('should call cellsWorksheetsDeleteWorksheetBackground successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteWorksheetBackgroundRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteWorksheetBackground(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsDeleteWorksheetComment', function() {
    it('should call cellsWorksheetsDeleteWorksheetComment successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteWorksheetCommentRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "C1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteWorksheetComment(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsDeleteWorksheetComments', function() {
    it('should call cellsWorksheetsDeleteWorksheetComments successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteWorksheetCommentsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteWorksheetComments(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsDeleteWorksheetFreezePanes', function() {
    it('should call cellsWorksheetsDeleteWorksheetFreezePanes successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_DeleteWorksheetFreezePanesRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.row = 1;
          req.column = 1;
          req.freezedRows = 2;
          req.freezedColumns = 2;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsDeleteWorksheetFreezePanes(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetNamedRanges', function() {
    it('should call cellsWorksheetsGetNamedRanges successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetNamedRangesRequest();
          req.name = filename;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetNamedRanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheet', function() {
    it('should call cellsWorksheetsGetWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.verticalResolution = 100;
          req.horizontalResolution = 90;
          req.format = "png";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheet(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetCalculateFormula', function() {
    it('should call cellsWorksheetsGetWorksheetCalculateFormula successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetCalculateFormulaRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.formula = "=NOW()";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetCalculateFormula(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetComment', function() {
    it('should call cellsWorksheetsGetWorksheetComment successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetCommentRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "B3";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetComment(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetComments', function() {
    it('should call cellsWorksheetsGetWorksheetComments successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetCommentsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetComments(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetMergedCell', function() {
    it('should call cellsWorksheetsGetWorksheetMergedCell successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetMergedCellRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.mergedCellIndex = 1;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetMergedCell(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetMergedCells', function() {
    it('should call cellsWorksheetsGetWorksheetMergedCells successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetMergedCellsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetMergedCells(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheetTextItems', function() {
    it('should call cellsWorksheetsGetWorksheetTextItems successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetTextItemsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheetTextItems(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsGetWorksheets', function() {
    it('should call cellsWorksheetsGetWorksheets successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_GetWorksheetsRequest();
          req.name = filename;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsGetWorksheets(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostAutofitWorksheetColumns', function() {
    it('should call cellsWorksheetsPostAutofitWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostAutofitWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstColumn = 1;
          req.lastColumn = 10;
          req.autoFitterOptions = null;
          req.firstRow = 1;
          req.lastRow = 19;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostAutofitWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostAutofitWorksheetRow', function() {
    it('should call cellsWorksheetsPostAutofitWorksheetRow successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostAutofitWorksheetRowRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.firstColumn = 1;
          req.lastColumn = 10;
          req.autoFitterOptions = new model.AutoFitterOptions();
          req.autoFitterOptions.autoFitMergedCells = true;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostAutofitWorksheetRow(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostAutofitWorksheetRows', function() {
    it('should call cellsWorksheetsPostAutofitWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostAutofitWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.autoFitterOptions = new model.AutoFitterOptions();
          req.autoFitterOptions.autoFitMergedCells = true;
          req.startRow = 1;
          req.endRow = 10;
          req.onlyAuto = true;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostAutofitWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostCopyWorksheet', function() {
    it('should call cellsWorksheetsPostCopyWorksheet successfully', function() {

      const filename = "Book1.xlsx";
      const filename1 = "NewCopy.xlsx";
      const cellsApi = BaseTest.initializeCellsApi();
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename1);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename1;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);

          var req = new model.CellsWorksheets_PostCopyWorksheetRequest();
          req.name = filename1;
          req.sheetName = "Sheet5";
          req.sourceSheet = "Sheet6";
          req.options = new model.CopyOptions();
          req.options.columnCharacterWidth = true;
          req.sourceWorkbook = filename;
          req.sourceFolder = "Temp";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostCopyWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});
  describe('cellsWorksheetsPostMoveWorksheet', function() {
    it('should call cellsWorksheetsPostMoveWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostMoveWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var moving = new model.WorksheetMovingRequest();
          moving.destinationWorksheet = "Sheet3";
          moving.position = "after";
          req.moving = moving;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostMoveWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostRenameWorksheet', function() {
    it('should call cellsWorksheetsPostRenameWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostRenameWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.newname = "renametest";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostRenameWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostUpdateWorksheetProperty', function() {
    it('should call cellsWorksheetsPostUpdateWorksheetProperty successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostUpdateWorksheetPropertyRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var sheet = new model.Worksheet();
          sheet.index = 0;
          sheet.isGridlinesVisible = true;
          req.sheet = sheet;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostUpdateWorksheetProperty(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostUpdateWorksheetZoom', function() {
    it('should call cellsWorksheetsPostUpdateWorksheetZoom successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostUpdateWorksheetZoomRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.value = 1;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostUpdateWorksheetZoom(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostWorksheetComment', function() {
    it('should call cellsWorksheetsPostWorksheetComment successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostWorksheetCommentRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "B3";
          req.comment = new model.Comment();
          req.comment.author = "Roy";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostWorksheetComment(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostWorksheetRangeSort', function() {
    it('should call cellsWorksheetsPostWorksheetRangeSort successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostWorksheetRangeSortRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellArea = "A1:C10";
          req.dataSorter = new model.DataSorter();
          req.dataSorter.caseSensitive = true;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostWorksheetRangeSort(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostWorksheetTextSearch', function() {
    it('should call cellsWorksheetsPostWorksheetTextSearch successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostWorksheetTextSearchRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.text = "123456";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostWorksheetTextSearch(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPostWorsheetTextReplace', function() {
    it('should call cellsWorksheetsPostWorsheetTextReplace successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PostWorsheetTextReplaceRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.oldValue = "1234";
          req.newValue = "56678";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPostWorsheetTextReplace(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPutAddNewWorksheet', function() {
    it('should call cellsWorksheetsPutAddNewWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PutAddNewWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.position = 1;
          req.sheettype = "VB";
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPutAddNewWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(201);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPutChangeVisibilityWorksheet', function() {
    it('should call cellsWorksheetsPutChangeVisibilityWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PutChangeVisibilityWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.isVisible = true;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPutChangeVisibilityWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPutProtectWorksheet', function() {
    it('should call cellsWorksheetsPutProtectWorksheet successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PutProtectWorksheetRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          var protectParameter = new model.ProtectSheetParameter();
          protectParameter.protectionType = "All";
          protectParameter.password = "123";
          req.protectParameter = protectParameter;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPutProtectWorksheet(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPutWorksheetBackground', function() {
    it('should call cellsWorksheetsPutWorksheetBackground successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      const png ="WaterMark.png";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          
          var req = new model.CellsWorksheets_PutWorksheetBackgroundRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.png = localPath + png;
          req.folder = "Temp";

          return cellsApi.cellsWorksheetsPutWorksheetBackground(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetsPutWorksheetComment', function() {
    it('should call cellsWorksheetsPutWorksheetComment successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PutWorksheetCommentRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          req.cellName = "C1";
          var comment = new model.Comment();
          comment.author = "roy";
          req.comment = comment;

          return cellsApi.cellsWorksheetsPutWorksheetComment(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });

  describe('cellsWorksheetsPutWorksheetFreezePanes', function() {
    it('should call cellsWorksheetsPutWorksheetFreezePanes successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorksheets_PutWorksheetFreezePanesRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          req.row = 1;
          req.column = 1;
          req.freezedRows = 4;
          req.freezedColumns = 5;

          return cellsApi.cellsWorksheetsPutWorksheetFreezePanes(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});
