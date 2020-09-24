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

const localPath = "../TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('CellsWorkbookApi', function() {
  this.timeout(200000);
  describe('cellsWorkbookDeleteDecryptDocument', function() {
    it('should call cellsWorkbookDeleteDecryptDocument successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_DeleteDecryptDocumentRequest();
          req.name = filename;
          var encryption = new model.WorkbookEncryptionRequest();
          encryption.password = "123456";
          encryption.keyLength = 128;
          encryption.encryptionType = "XOR";
          req.encryption = encryption;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookDeleteDecryptDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteDocumentUnprotectFromChanges', function() {
    it('should call cellsWorkbookDeleteDocumentUnprotectFromChanges successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookDeleteDocumentUnprotectFromChanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteUnprotectDocument', function() {
    it('should call cellsWorkbookDeleteUnprotectDocument successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_DeleteUnprotectDocumentRequest();
          req.name = filename;
          var protection = new model.WorkbookProtectionRequest();
          protection.password = "123";
          protection.protectionType = "All";
          req.protection = protection;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookDeleteUnprotectDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteWorkbookName', function() {
    it('should call cellsWorkbookDeleteWorkbookName successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_DeleteWorkbookNameRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookDeleteWorkbookName(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteWorkbookNames', function() {
    it('should call cellsWorkbookDeleteWorkbookNames successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_DeleteWorkbookNamesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookDeleteWorkbookNames(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbook', function() {
    it('should call cellsWorkbookGetWorkbook successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookRequest();
          req.name = filename;
          req.password = null;
          req.isAutoFit = true;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbook(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookFormat', function() {
    it('should call cellsWorkbookGetWorkbookFormat successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookRequest();
          req.name = filename;
          req.password = null;
          req.isAutoFit = true;
          req.folder = "Temp";
          req.format = "md";
          
          return cellsApi.cellsWorkbookGetWorkbook(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookDefaultStyle', function() {
    it('should call cellsWorkbookGetWorkbookDefaultStyle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookDefaultStyleRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookDefaultStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookName', function() {
    it('should call cellsWorkbookGetWorkbookName successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookNameRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookName(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookNameValue', function() {
    it('should call cellsWorkbookGetWorkbookNameValue successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookNameValueRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookNameValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookNames', function() {
    it('should call cellsWorkbookGetWorkbookNames successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookNamesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookNames(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookSettings', function() {
    it('should call cellsWorkbookGetWorkbookSettings successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookSettingsRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookSettings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookTextItems', function() {
    it('should call cellsWorkbookGetWorkbookTextItems successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_GetWorkbookTextItemsRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookGetWorkbookTextItems(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostAutofitWorkbookRows', function() {
    it('should call cellsWorkbookPostAutofitWorkbookRows successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostAutofitWorkbookRowsRequest();
          req.name = filename;
          req.folder = "Temp";
          req.autoFitterOptions = null;
          req.startRow = 1;
          req.endRow = 100;
          req.onlyAuto = true;
          
          return cellsApi.cellsWorkbookPostAutofitWorkbookRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostEncryptDocument', function() {
    it('should call cellsWorkbookPostEncryptDocument successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostEncryptDocumentRequest();
          req.name = filename;
          req.folder = "Temp";
          var encryption = new model.WorkbookEncryptionRequest();
          encryption.password = "123456";
          encryption.keyLength = 128;
          encryption.encryptionType = "XOR";
          req.encryption = encryption;
          
          return cellsApi.cellsWorkbookPostEncryptDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostImportData', function() {
    it('should call cellsWorkbookPostImportData successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostImportDataRequest();
          req.name = filename;
          req.folder = "Temp";
          var data = new model.ImportIntArrayOption();
          data.destinationWorksheet = "Sheet1";
          data.firstColumn = 1;
          data.firstRow = 3;
          data.importDataType = "IntArray";
          data.isVertical = true;
          data.data = [ 1, 2, 3, 4 ];
          req.importData = data;
          
          return cellsApi.cellsWorkbookPostImportData(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostProtectDocument', function() {
    it('should call cellsWorkbookPostProtectDocument successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostProtectDocumentRequest();
          req.name = filename;
          req.folder = "Temp";
          var protection = new model.WorkbookProtectionRequest();
          protection.password = "123";
          protection.protectionType = "All";
          req.protection = protection;
          
          return cellsApi.cellsWorkbookPostProtectDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookCalculateFormula', function() {
    it('should call cellsWorkbookPostWorkbookCalculateFormula successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbookCalculateFormulaRequest();
          req.name = filename;
          req.folder = "Temp";
          var options = new model.CalculationOptions();
          options.ignoreError = true;
          req.options = options;
          req.ignoreError = true;
          
          return cellsApi.cellsWorkbookPostWorkbookCalculateFormula(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookGetSmartMarkerResult', function() {
    it('should call cellsWorkbookPostWorkbookGetSmartMarkerResult successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest();
          req.name = filename;
          req.xmlFile = "ReportData.xml";
          req.outPath = null;
          req.folder = "Temp";
          
          return cellsApi.cellsWorkbookPostWorkbookGetSmartMarkerResult(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookSettings', function() {
    it('should call cellsWorkbookPostWorkbookSettings successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbookSettingsRequest();
          req.name = filename;
          req.folder = "Temp";
          var settings = new model.WorkbookSettings();
          settings.autoCompressPictures = true;
          req.settings = settings;
          
          return cellsApi.cellsWorkbookPostWorkbookSettings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookSplit', function() {
    it('should call cellsWorkbookPostWorkbookSplit successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbookSplitRequest();
          req.name = filename;
          req.folder = "Temp";
          req.format = "png";
          req.from = 1;
          req.to = 3;
          req.horizontalResolution = 100;
          req.verticalResolution = 90;
          
          return cellsApi.cellsWorkbookPostWorkbookSplit(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksMerge', function() {
    it('should call cellsWorkbookPostWorkbooksMerge successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbooksMergeRequest();
          req.name = filename;
          req.folder = "Temp";
          req.mergeWith = "myDocument.xlsx";
          
          return cellsApi.cellsWorkbookPostWorkbooksMerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksTextReplace', function() {
    it('should call cellsWorkbookPostWorkbooksTextReplace successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbooksTextReplaceRequest();
          req.name = filename;
          req.folder = "Temp";
          req.oldValue = "!22";
          req.newValue = "22";
          
          return cellsApi.cellsWorkbookPostWorkbooksTextReplace(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksTextSearch', function() {
    it('should call cellsWorkbookPostWorkbooksTextSearch successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PostWorkbooksTextSearchRequest();
          req.name = filename;
          req.folder = "Temp";
          req.text = "test";
          
          return cellsApi.cellsWorkbookPostWorkbooksTextSearch(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPutConvertWorkbook', function() {
    it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      // var data =fs.createReadStream(localPath  + filename);
      var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
        workbook : fs.createReadStream(localPath  + filename),
        format : "pdf",
      });
  
      return cellsApi.cellsWorkbookPutConvertWorkbook(req)
        .then((result) => {         
          var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
            workbook : fs.createReadStream(localPath  + filename),
            format : "pdf",
          });
  
          return cellsApi.cellsWorkbookPutConvertWorkbook(req)
            .then((result) => {
              expect(result.body.toString().length).to.greaterThan(0);
            });
        });
    });
  });
  describe('cellsWorkbookPutDocumentProtectFromChanges', function() {
    it('should call cellsWorkbookPutDocumentProtectFromChanges successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PutDocumentProtectFromChangesRequest();
          req.name = filename;
          req.folder = "Temp";
          req.password = new model.PasswordRequest();
          req.password.password = "123456";
          
          return cellsApi.cellsWorkbookPutDocumentProtectFromChanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPutWorkbookCreate', function() {
    it('should call cellsWorkbookPutWorkbookCreate successfully', function() {
      const dataFile = "ReportData.xml";
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          const dataFile = "Book1.xlsx";
          var data =fs.createReadStream(localPath  + dataFile);
          var req = new model.UploadFileRequest();
          req.path = "Temp/" + dataFile;
          req.file = data;
      
          return cellsApi.uploadFile(req)
            .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsWorkbook_PutWorkbookCreateRequest();
          req.folder = "Temp";
          var date = new Date();
          var year = date.getUTCFullYear();
          var month = date.getUTCMonth();
          var day = date.getUTCDate();
          var hours = date.getUTCHours();
          var min = date.getUTCMinutes();
          var sec = date.getUTCSeconds();
          req.name ="NewBook" + year + "" + month + "" + day + "" + ".xlsx";
          req.templateFile = "Temp/Book1.xlsx";
          req.dataFile = "ReportData.xml";
          req.isWriteOver = true;
          
          return cellsApi.cellsWorkbookPutWorkbookCreate(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});
describe('CellsWorkbook_DeleteWorkbookBackground', function() {
  it('should call cellsWorkbookDeleteWorkbookBackground successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        const dataFile = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + dataFile);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + dataFile;
        req.file = data;
    
        return cellsApi.uploadFile(req)
          .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorkbook_DeleteWorkbookBackgroundRequest();
        req.folder = "Temp";
        req.name ="Book1.xlsx";

        
        return cellsApi.cellsWorkbookDeleteWorkbookBackground(req)
          .then((result) => {
            expect(result.body.code).to.equal(200);
            expect(result.response.statusCode).to.equal(200);
          });
      });
  });
});
});
describe('CellsWorkbook_PutWorkbookBackground', function() {
  it('should call CellsWorkbook_PutWorkbookBackgroundRequest successfully', function() {
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
        const dataFile = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + dataFile);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + dataFile;
        req.file = data;
    
        return cellsApi.uploadFile(req)
          .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorkbook_PutWorkbookBackgroundRequest();
        req.folder = "Temp";
        req.name ="Book1.xlsx";
        req.png = localPath + png;

        
        return cellsApi.cellsWorkbookDeleteWorkbookBackground(req)
          .then((result) => {
            expect(result.body.code).to.equal(200);
            expect(result.response.statusCode).to.equal(200);
          });
      });
  });
});
});
});