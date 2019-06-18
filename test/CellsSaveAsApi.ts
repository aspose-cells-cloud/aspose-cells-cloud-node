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

describe('CellsSaveAsApi', function() {
  describe('cellsSaveAsPostDocumentSaveAs', function() {
    it('should call cellsSaveAsPostDocumentSaveAs successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsSaveAsApi = BaseTest.initializeCellsSaveAsApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
          req.name = filename;
          req.saveOptions = null;
          req.newfilename = "newbook.xlsx";
          req.isAutoFitRows = true;
          req.isAutoFitColumns = true;
          req.folder = "Temp";
          
          return cellsSaveAsApi.cellsSaveAsPostDocumentSaveAs(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });

    describe('cellsSaveAsPostDocumentSaveAsMD', function() {
      it('should call cellsSaveAsPostDocumentSaveAsMD successfully', function() {
        const storageApi = BaseTest.initializeStorageApi();
        const cellsSaveAsApi = BaseTest.initializeCellsSaveAsApi();
        const filename = "Book1.xlsx";
        return new Promise((resolve) => {
          storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
            expect(responseMessage.status).to.equal("OK");
            resolve();
          });
        })
          .then(() => {
            var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
            req.name = filename;
            var saveOptions = null;
            req.saveOptions = saveOptions;
            req.newfilename = "newbook.pdf.md";
            req.isAutoFitRows = true;
            req.isAutoFitColumns = true;
            req.folder = "Temp";
            
            return cellsSaveAsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });

    describe('cellsSaveAsPostDocumentSaveAsPDF', function() {
      it('should call cellsSaveAsPostDocumentSaveAsPDF successfully', function() {
        const storageApi = BaseTest.initializeStorageApi();
        const cellsSaveAsApi = BaseTest.initializeCellsSaveAsApi();
        const filename = "Book1.xlsx";
        return new Promise((resolve) => {
          storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
            expect(responseMessage.status).to.equal("OK");
            resolve();
          });
        })
          .then(() => {
            var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
            req.name = filename;
            var saveOptions = new model.PdfSaveOptions();
            saveOptions.onePagePerSheet = true;
            saveOptions.saveFormat = "pdf"
            req.saveOptions = saveOptions;
            req.newfilename = "newbook.pdf";
            req.isAutoFitRows = true;
            req.isAutoFitColumns = true;
            req.folder = "Temp";
            
            return cellsSaveAsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });

    describe('cellsSaveAsPostDocumentSaveAsPDFDropBox', function() {
      it('should call cellsSaveAsPostDocumentSaveAsPDF on DropBox successfully', function() {
        const storageApi = BaseTest.initializeStorageApi();
        const cellsSaveAsApi = BaseTest.initializeCellsSaveAsApi();
        const filename = "Book1.xlsx";
        const storage = "DropBox";
        return new Promise((resolve) => {
          storageApi.PutCreate("Temp/" + filename, null, storage, localPath + filename, (responseMessage) => {
            expect(responseMessage.status).to.equal("OK");
            resolve();
          });
        })
          .then(() => {
            var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
            req.name = filename;
            var saveOptions = new model.PdfSaveOptions();
            saveOptions.onePagePerSheet = true;
            saveOptions.saveFormat = "pdf"
            req.saveOptions = saveOptions;
            req.newfilename = "newbook.pdf";
            req.isAutoFitRows = true;
            req.isAutoFitColumns = true;
            req.folder = "Temp";
            req.storage = storage;
            
            return cellsSaveAsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });
  });
});