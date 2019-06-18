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
var fs = require('fs');
describe('CellsWorkbookApi', function() {
  this.timeout(20000);
  describe('cellsWorkbookDeleteDecryptDocument', function() {
    it('should call cellsWorkbookDeleteDecryptDocument successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_DeleteDecryptDocumentRequest();
          req.name = filename;
          var encryption = new model.WorkbookEncryptionRequest();
          encryption.password = "123456";
          encryption.keyLength = 128;
          encryption.encryptionType = "XOR";
          req.encryption = encryption;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookDeleteDecryptDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteDocumentUnprotectFromChanges', function() {
    it('should call cellsWorkbookDeleteDocumentUnprotectFromChanges successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookDeleteDocumentUnprotectFromChanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteUnprotectDocument', function() {
    it('should call cellsWorkbookDeleteUnprotectDocument successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_DeleteUnprotectDocumentRequest();
          req.name = filename;
          var protection = new model.WorkbookProtectionRequest();
          protection.password = "123";
          protection.protectionType = "All";
          req.protection = protection;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookDeleteUnprotectDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteWorkbookName', function() {
    it('should call cellsWorkbookDeleteWorkbookName successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_DeleteWorkbookNameRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookDeleteWorkbookName(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookDeleteWorkbookNames', function() {
    it('should call cellsWorkbookDeleteWorkbookNames successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_DeleteWorkbookNamesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookDeleteWorkbookNames(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbook', function() {
    it('should call cellsWorkbookGetWorkbook successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookRequest();
          req.name = filename;
          req.password = null;
          req.isAutoFit = true;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbook(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookFormat', function() {
    it('should call cellsWorkbookGetWorkbookFormat successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookRequest();
          req.name = filename;
          req.password = null;
          req.isAutoFit = true;
          req.folder = "Temp";
          req.format = "md";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbook(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookDefaultStyle', function() {
    it('should call cellsWorkbookGetWorkbookDefaultStyle successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookDefaultStyleRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookDefaultStyle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookName', function() {
    it('should call cellsWorkbookGetWorkbookName successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookNameRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookName(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookNameValue', function() {
    it('should call cellsWorkbookGetWorkbookNameValue successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookNameValueRequest();
          req.name = filename;
          req.nameName = "Name_2";
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookNameValue(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookNames', function() {
    it('should call cellsWorkbookGetWorkbookNames successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookNamesRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookNames(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookSettings', function() {
    it('should call cellsWorkbookGetWorkbookSettings successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookSettingsRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookSettings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookGetWorkbookTextItems', function() {
    it('should call cellsWorkbookGetWorkbookTextItems successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_GetWorkbookTextItemsRequest();
          req.name = filename;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookGetWorkbookTextItems(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostAutofitWorkbookRows', function() {
    it('should call cellsWorkbookPostAutofitWorkbookRows successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostAutofitWorkbookRowsRequest();
          req.name = filename;
          req.folder = "Temp";
          req.autoFitterOptions = null;
          req.startRow = 1;
          req.endRow = 100;
          req.onlyAuto = true;
          
          return cellsWorkbookApi.cellsWorkbookPostAutofitWorkbookRows(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostEncryptDocument', function() {
    it('should call cellsWorkbookPostEncryptDocument successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostEncryptDocumentRequest();
          req.name = filename;
          req.folder = "Temp";
          var encryption = new model.WorkbookEncryptionRequest();
          encryption.password = "123456";
          encryption.keyLength = 128;
          encryption.encryptionType = "XOR";
          req.encryption = encryption;
          
          return cellsWorkbookApi.cellsWorkbookPostEncryptDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostImportData', function() {
    it('should call cellsWorkbookPostImportData successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
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
          req.importdata = data;
          
          return cellsWorkbookApi.cellsWorkbookPostImportData(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostProtectDocument', function() {
    it('should call cellsWorkbookPostProtectDocument successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostProtectDocumentRequest();
          req.name = filename;
          req.folder = "Temp";
          var protection = new model.WorkbookProtectionRequest();
          protection.password = "123";
          protection.protectionType = "All";
          req.protection = protection;
          
          return cellsWorkbookApi.cellsWorkbookPostProtectDocument(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookCalculateFormula', function() {
    it('should call cellsWorkbookPostWorkbookCalculateFormula successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbookCalculateFormulaRequest();
          req.name = filename;
          req.folder = "Temp";
          var options = new model.CalculationOptions();
          options.ignoreError = true;
          req.options = options;
          req.ignoreError = true;
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbookCalculateFormula(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookGetSmartMarkerResult', function() {
    it('should call cellsWorkbookPostWorkbookGetSmartMarkerResult successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest();
          req.name = filename;
          req.xmlFile = "ReportData.xml";
          req.outPath = null;
          req.folder = "Temp";
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbookGetSmartMarkerResult(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookSettings', function() {
    it('should call cellsWorkbookPostWorkbookSettings successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbookSettingsRequest();
          req.name = filename;
          req.folder = "Temp";
          var settings = new model.WorkbookSettings();
          settings.autoCompressPictures = true;
          req.settings = settings;
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbookSettings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbookSplit', function() {
    it('should call cellsWorkbookPostWorkbookSplit successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbookSplitRequest();
          req.name = filename;
          req.folder = "Temp";
          req.format = "png";
          req.from = 1;
          req.to = 3;
          req.horizontalResolution = 100;
          req.verticalResolution = 90;
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbookSplit(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksMerge', function() {
    it('should call cellsWorkbookPostWorkbooksMerge successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbooksMergeRequest();
          req.name = filename;
          req.folder = "Temp";
          req.mergeWith = "myDocument.xlsx";
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbooksMerge(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksTextReplace', function() {
    it('should call cellsWorkbookPostWorkbooksTextReplace successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbooksTextReplaceRequest();
          req.name = filename;
          req.folder = "Temp";
          req.oldValue = "!22";
          req.newValue = "22";
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbooksTextReplace(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPostWorkbooksTextSearch', function() {
    it('should call cellsWorkbookPostWorkbooksTextSearch successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PostWorkbooksTextSearchRequest();
          req.name = filename;
          req.folder = "Temp";
          req.text = "test";
          
          return cellsWorkbookApi.cellsWorkbookPostWorkbooksTextSearch(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPutConvertWorkbook', function() {
    it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
            workbook : fs.readFileSync(localPath  + filename),
            format : "pdf",
          });

          return cellsWorkbookApi.cellsWorkbookPutConvertWorkbook(req)
            .then((result) => {
              expect(result.body.toString().length).to.greaterThan(0);
            });
        });
    });
  });
  describe('cellsWorkbookPutDocumentProtectFromChanges', function() {
    it('should call cellsWorkbookPutDocumentProtectFromChanges successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PutDocumentProtectFromChangesRequest();
          req.name = filename;
          req.folder = "Temp";
          req.password = new model.PasswordRequest();
          req.password.password = "123456";
          
          return cellsWorkbookApi.cellsWorkbookPutDocumentProtectFromChanges(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorkbookPutWorkbookCreate', function() {
    it('should call cellsWorkbookPutWorkbookCreate successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsWorkbookApi = BaseTest.initializeCellsWorkbookApi();
      const filename = "Book1.xlsx";
      const dataFile = "ReportData.xml";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
        storageApi.PutCreate("Temp/" + dataFile, null, null, localPath + dataFile, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsWorkbook_PutWorkbookCreateRequest();
          req.folder = "Temp";
          var date = new Date();
          var year = date.getUTCFullYear();
          var month = date.getUTCMonth();
          var day = date.getUTCDate();
          var hours = date.getUTCHours();
          var min = date.getUTCMinutes();
          var sec = date.getUTCSeconds();
          req.name ="NewBook" + year + "" + month + "" + day + "" + hours + "" + min + "" + sec + ".xlsx";
          req.templateFile = "Book1.xlsx";
          req.dataFile = "ReportData.xml";
          
          return cellsWorkbookApi.cellsWorkbookPutWorkbookCreate(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});