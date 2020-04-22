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
var fs = require('fs');
var path = require('path');
var assert = require('assert');

const localPath = "../TestData/";

describe('CellsApi', function() {
  this.timeout(20000);
  describe('cellsDeleteWorksheetColumns', function() {
    it('should call cellsDeleteWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_DeleteWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.columnIndex = 1;
          req.columns = 1;
          req.updateReference = true;
          req.folder = "Temp";
          
          return cellsApi.cellsDeleteWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsDeleteWorksheetRow', function() {
    it('should call cellsDeleteWorksheetRow successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_DeleteWorksheetRowRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsDeleteWorksheetRow(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsDeleteWorksheetRows', function() {
    it('should call cellsDeleteWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_DeleteWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startrow = 1;
          req.totalRows = 2;
          req.updateReference = true;
          req.folder = "Temp";
          
          return cellsApi.cellsDeleteWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetCell', function() {
    it('should call cellsGetWorksheetCell successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetCellRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellOrMethodName = 'A1';
          req.folder = "Temp";
          return cellsApi.cellsGetWorksheetCell(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);

              req.cellOrMethodName = 'firstcell';
              req.folder = "Temp";
              return cellsApi.cellsGetWorksheetCell(req)
                .then((result) => {
                  expect(result.response.statusCode).to.equal(200);

                  req.cellOrMethodName = 'endcell';
                  req.folder = "Temp";
                  return cellsApi.cellsGetWorksheetCell(req)
                    .then((result) => {
                      expect(result.response.statusCode).to.equal(200);
    
                      req.cellOrMethodName = 'maxrow';
                      req.folder = "Temp";
                      return cellsApi.cellsGetWorksheetCell(req)
                        .then((result) => {
                          expect(result.response.statusCode).to.equal(200);
        
                          req.cellOrMethodName = 'maxdatarow';
                          req.folder = "Temp";
                          return cellsApi.cellsGetWorksheetCell(req)
                            .then((result) => {
                              expect(result.response.statusCode).to.equal(200);
            
                              req.cellOrMethodName = 'maxcolumn';
                              req.folder = "Temp";
                              return cellsApi.cellsGetWorksheetCell(req)
                                .then((result) => {
                                  expect(result.response.statusCode).to.equal(200);
                
                                  req.cellOrMethodName = 'maxdatacolumn';
                                  req.folder = "Temp";
                                  return cellsApi.cellsGetWorksheetCell(req)
                                    .then((result) => {
                                      expect(result.response.statusCode).to.equal(200);
                    
                                      req.cellOrMethodName = 'minrow';
                                      req.folder = "Temp";
                                      return cellsApi.cellsGetWorksheetCell(req)
                                        .then((result) => {
                                          expect(result.response.statusCode).to.equal(200);
                        
                                          req.cellOrMethodName = 'mindatarow';
                                          req.folder = "Temp";
                                          return cellsApi.cellsGetWorksheetCell(req)
                                            .then((result) => {
                                              expect(result.response.statusCode).to.equal(200);
                            
                                              req.cellOrMethodName = 'mincolumn';
                                              req.folder = "Temp";
                                              return cellsApi.cellsGetWorksheetCell(req)
                                                .then((result) => {
                                                  expect(result.response.statusCode).to.equal(200);
                                
                                                  req.cellOrMethodName = 'mindatacolumn';
                                                  req.folder = "Temp";
                                                  return cellsApi.cellsGetWorksheetCell(req)
                                                    .then((result) => {
                                                      expect(result.response.statusCode).to.equal(200);
                                                      console.log("cellsGetWorksheetCell test done.")
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
  });
  describe('cellsGetWorksheetCellStyle', function() {
    it('should call cellsGetWorksheetCellStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetCellStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetCellStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetCells', function() {
    it('should call cellsGetWorksheetCells successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetCellsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.offest = 1;
          req.count = 10;
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetCells(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetColumn', function() {
    it('should call cellsGetWorksheetColumn successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetColumnRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.columnIndex = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetColumn(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetColumns', function() {
    it('should call cellsGetWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetRow', function() {
    it('should call cellsGetWorksheetRow successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetRowRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetRow(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetWorksheetRows', function() {
    it('should call cellsGetWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_GetWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsGetWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostCellCalculate', function() {
    it('should call cellsPostCellCalculate successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostCellCalculateRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          req.folder = "Temp";
          var options = new model.CalculationOptions();
          options.recursive = true;
          options.ignoreError = true;
          req.options = options;
          
          return cellsApi.cellsPostCellCalculate(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostCellCharacters', function() {
    it('should call cellsPostCellCharacters successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostCellCharactersRequest();
          req.name = filename;
          req.cellName = "G8";
          req.sheetName = "Sheet2";
          req.folder = "Temp";

          var font = new model.Font();
          font.size = 10;
          var fs1 = new model.FontSetting();
          fs1.font = font;
          fs1.length = 2;
          fs1.startIndex = 0;

          var options = new Array<model.FontSetting>();
          options.push(fs1);
          req.options = options;
          
          return cellsApi.cellsPostCellCharacters(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostClearContents', function() {
    it('should call cellsPostClearContents successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostClearContentsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.startRow = 1;
          req.startColumn = 1;
          req.endRow = 3;
          req.endColumn = 3;
          req.folder = "Temp";
          
          return cellsApi.cellsPostClearContents(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostClearFormats', function() {
    it('should call cellsPostClearFormats successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostClearFormatsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.startRow = 1;
          req.startColumn = 1;
          req.endRow = 3;
          req.endColumn = 10;
          req.folder = "Temp";
          
          return cellsApi.cellsPostClearFormats(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostColumnStyle', function() {
    it('should call cellsPostColumnStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
       .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostColumnStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.columnIndex = 1;
          req.folder = "Temp";

          var style = new model.Style();
          var font = new model.Font();
          font.isBold = true;
          font.size = 16;
          style.font = font;
          req.style = style;
          
          return cellsApi.cellsPostColumnStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostCopyCellIntoCell', function() {
    it('should call cellsPostCopyCellIntoCell successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostCopyCellIntoCellRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.destCellName = "C1";
          req.worksheet = "Sheet2";
          req.cellname = "A1";
          req.row = 1;
          req.column = 1;
          req.folder = "Temp";

          return cellsApi.cellsPostCopyCellIntoCell(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostCopyWorksheetColumns', function() {
    it('should call cellsPostCopyWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostCopyWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.worksheet = "Sheet2";
          req.sourceColumnIndex = 1;
          req.destinationColumnIndex = 21;
          req.columnNumber = 1;
          req.folder = "Temp";

          return cellsApi.cellsPostCopyWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostCopyWorksheetRows', function() {
    it('should call cellsPostCopyWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostCopyWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.worksheet = "Sheet2";
          req.sourceRowIndex = 1;
          req.destinationRowIndex = 1;
          req.rowNumber = 1;
          req.folder = "Temp";

          return cellsApi.cellsPostCopyWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostGroupWorksheetColumns', function() {
    it('should call cellsPostGroupWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostGroupWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstIndex = 1;
          req.lastIndex = 1;
          req.hide = true;
          req.folder = "Temp";

          return cellsApi.cellsPostGroupWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostGroupWorksheetRows', function() {
    it('should call cellsPostGroupWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostGroupWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstIndex = 1;
          req.lastIndex = 1;
          req.hide = true;
          req.folder = "Temp";

          return cellsApi.cellsPostGroupWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostHideWorksheetColumns', function() {
    it('should call cellsPostHideWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostHideWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startColumn = 1;
          req.totalColumns = 2;
          req.folder = "Temp";

          return cellsApi.cellsPostHideWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostHideWorksheetRows', function() {
    it('should call cellsPostHideWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostHideWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startrow = 1;
          req.totalRows = 2;
          req.folder = "Temp";

          return cellsApi.cellsPostHideWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostRowStyle', function() {
    it('should call cellsPostRowStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostRowStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.folder = "Temp";
          var style = new model.Style();
          var font = new model.Font();
          font.isBold = true;
          font.size = 20;
          style.font = font;
          req.style = style;

          return cellsApi.cellsPostRowStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsGetCellHtmlString', function() {
    it('should call cellsGetCellHtmlString successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostSetCellHtmlStringRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          req.folder = "Temp";

          return cellsApi.cellsGetCellHtmlString(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });  
  describe('cellsPostSetCellHtmlString', function() {
    it('should call cellsPostSetCellHtmlString successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostSetCellHtmlStringRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          req.folder = "Temp";
          req.htmlString ="TEST"
          return cellsApi.cellsPostSetCellHtmlString(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostSetCellRangeValue', function() {
    it('should call cellsPostSetCellRangeValue successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostSetCellRangeValueRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellarea = "A1:C10";
          req.folder = "Temp";
          req.value = "1";
          req.type = "int";
          return cellsApi.cellsPostSetCellRangeValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);

              req.value = "12345";
              req.type = "String";
              return cellsApi.cellsPostSetCellRangeValue(req)
                .then((result) => {
                  expect(result.body.code).to.equal(200);
                  expect(result.response.statusCode).to.equal(200);

                  req.value = "2017-10-1";
                  req.type = "DateTime";
                  return cellsApi.cellsPostSetCellRangeValue(req)
                    .then((result) => {
                      expect(result.body.code).to.equal(200);
                      expect(result.response.statusCode).to.equal(200);
                      console.log("cellsPostSetCellRangeValue test done.")
                    });
                });
            });
        });
    });
  });
  describe('cellsPostSetWorksheetColumnWidth', function() {
    it('should call cellsPostSetWorksheetColumnWidth successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostSetWorksheetColumnWidthRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.columnIndex = 1;
          req.width = 10;
          req.folder = "Temp";

          return cellsApi.cellsPostSetWorksheetColumnWidth(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUngroupWorksheetColumns', function() {
    it('should call cellsPostUngroupWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUngroupWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstIndex = 1;
          req.lastIndex = 5;
          req.folder = "Temp";

          return cellsApi.cellsPostUngroupWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUngroupWorksheetRows', function() {
    it('should call cellsPostUngroupWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUngroupWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.firstIndex = 1;
          req.lastIndex = 5;
          req.isAll = true;
          req.folder = "Temp";

          return cellsApi.cellsPostUngroupWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUnhideWorksheetColumns', function() {
    it('should call cellsPostUnhideWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUnhideWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startcolumn = 1;
          req.totalColumns = 2;
          req.width = 10;
          req.folder = "Temp";

          return cellsApi.cellsPostUnhideWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUnhideWorksheetRows', function() {
    it('should call cellsPostUnhideWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUnhideWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startrow = 1;
          req.totalRows = 8;
          req.height = 18;
          req.folder = "Temp";

          return cellsApi.cellsPostUnhideWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUpdateWorksheetCellStyle', function() {
    it('should call cellsPostUpdateWorksheetCellStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUpdateWorksheetCellStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          var font = new model.Font();
          font.size = 19;
          var style = new model.Style();
          style.font = font;
          req.style = style;
          req.folder = "Temp";

          return cellsApi.cellsPostUpdateWorksheetCellStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUpdateWorksheetRangeStyle', function() {
    it('should call cellsPostUpdateWorksheetRangeStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUpdateWorksheetRangeStyleRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          var font = new model.Font();
          font.size = 15;
          var style = new model.Style();
          style.font = font;
          req.style = style;
          req.folder = "Temp";

          return cellsApi.cellsPostUpdateWorksheetRangeStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostUpdateWorksheetRow', function() {
    it('should call cellsPostUpdateWorksheetRow successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostUpdateWorksheetRowRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.height = 10.8;
          req.folder = "Temp";

          return cellsApi.cellsPostUpdateWorksheetRow(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostWorksheetCellSetValue', function() {
    it('should call cellsPostWorksheetCellSetValue successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostWorksheetCellSetValueRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellName = "A1";
          req.folder = "Temp";
          req.value = "1";
          req.type = "int";
          req.formula = null;
          return cellsApi.cellsPostWorksheetCellSetValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);

              req.value = "1";
              req.type = "String";
              return cellsApi.cellsPostWorksheetCellSetValue(req)
                .then((result) => {
                  expect(result.body.code).to.equal(200);
                  expect(result.response.statusCode).to.equal(200);

                  req.value = "2018/10/09";
                  req.type = "DateTime";
                  req.formula = "=Now()";
                  return cellsApi.cellsPostWorksheetCellSetValue(req)
                    .then((result) => {
                      expect(result.body.code).to.equal(200);
                      expect(result.response.statusCode).to.equal(200);
                      console.log("cellsPostWorksheetCellSetValue test done.")
                    });
                });
            });
        });
    });
  });
  describe('cellsPostWorksheetMerge', function() {
    it('should call cellsPostWorksheetMerge successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostWorksheetMergeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startRow = 1;
          req.startColumn = 1;
          req.totalRows = 4;
          req.totalColumns = 4;
          req.folder = "Temp";

          return cellsApi.cellsPostWorksheetMerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPostWorksheetUnmerge', function() {
    it('should call cellsPostWorksheetUnmerge successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PostWorksheetUnmergeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startRow = 1;
          req.startColumn = 1;
          req.totalRows = 4;
          req.totalColumns = 4;
          req.folder = "Temp";

          return cellsApi.cellsPostWorksheetUnmerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPutInsertWorksheetColumns', function() {
    it('should call cellsPutInsertWorksheetColumns successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PutInsertWorksheetColumnsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.columnIndex = 1;
          req.columns = 1;
          req.updateReference = true;
          req.folder = "Temp";

          return cellsApi.cellsPutInsertWorksheetColumns(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPutInsertWorksheetRow', function() {
    it('should call cellsPutInsertWorksheetRow successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PutInsertWorksheetRowRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.rowIndex = 1;
          req.folder = "Temp";

          return cellsApi.cellsPutInsertWorksheetRow(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPutInsertWorksheetRows', function() {
    it('should call cellsPutInsertWorksheetRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.Cells_PutInsertWorksheetRowsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startrow = 1;
          req.totalRows = 2;
          req.updateReference = true;
          req.folder = "Temp";

          return cellsApi.cellsPutInsertWorksheetRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});
