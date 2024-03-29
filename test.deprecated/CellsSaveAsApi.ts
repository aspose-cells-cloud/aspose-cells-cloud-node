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

describe('CellsSaveAsApi ', function() {
  this.timeout(200000);
  describe('cellsSaveAsPostDocumentSaveAs 1', function() {
    it('should call cellsSaveAsPostDocumentSaveAs successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
          req.name = filename;
          req.saveOptions = new model.OoxmlSaveOptions();
          req.saveOptions.saveFormat = "xlsx";
          req.newfilename = "temp/newbook.xlsx";
          req.isAutoFitRows = true;
          req.isAutoFitColumns = true;
          req.folder = "Temp";
          
          return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });

    describe('cellsSaveAsPostDocumentSaveAsMD 2', function() {
      it('should call cellsSaveAsPostDocumentSaveAsMD successfully', function() {
        const cellsApi = BaseTest.initializeCellsApi();
        const filename = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + filename);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + filename;
        req.file = data;
    
        return cellsApi.uploadFile(req)
          .then((result) => {
            expect(result.body.uploaded.length).greaterThan(0);
            var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
            req.name = filename;
            var saveOptions =new model.MarkdownSaveOptions();
            req.saveOptions = saveOptions;
            req.saveOptions.saveFormat = "markdown";
            req.newfilename = "temp/newbook.md";
            req.isAutoFitRows = true;
            req.isAutoFitColumns = true;
            req.folder = "Temp";
            
            return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });

    describe('cellsSaveAsPostDocumentSaveAsPDF_Extend 3', function() {
      it('should call cellsSaveAsPostDocumentSaveAsPDF successfully', function() {
        const cellsApi = BaseTest.initializeCellsApi();
        const filename = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + filename);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + filename;
        req.file = data;
    
        return cellsApi.uploadFile(req)
          .then((result) => {
            expect(result.body.uploaded.length).greaterThan(0);
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
            req.extendedQueryParameters = { "OnePagePerSheet" : "false" };
            
            return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });
    describe('cellsSaveAsPostDocumentSaveAsPDF 3', function() {
      it('should call cellsSaveAsPostDocumentSaveAsPDF successfully', function() {
        const cellsApi = BaseTest.initializeCellsApi();
        const filename = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + filename);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + filename;
        req.file = data;
    
        return cellsApi.uploadFile(req)
          .then((result) => {
            expect(result.body.uploaded.length).greaterThan(0);
            var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
            req.name = filename;
            var saveOptions = new model.PdfSaveOptions();
            // saveOptions.onePagePerSheet = true;
            saveOptions.saveFormat = "pdf"
            req.saveOptions = saveOptions;
            req.newfilename = "newbook.pdf";
            req.isAutoFitRows = true;
            req.isAutoFitColumns = true;
            req.folder = "Temp";
           
            return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });
    describe('cellsSaveAsPostDocumentSaveAsPDFDropBox 4', function() {
      it('should call cellsSaveAsPostDocumentSaveAsPDF on DropBox successfully', function() {
        const storage = "DropBox";
        const cellsApi = BaseTest.initializeCellsApi();
        const filename = "Book1.xlsx";
        var data =fs.createReadStream(localPath  + filename);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + filename;
        req.file = data;
        req.storageName = storage;
        return cellsApi.uploadFile(req)
          .then((result) => {
            expect(result.body.uploaded.length).greaterThan(0);
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
            req.storageName = storage;
            
            return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
              .then((result) => {
                expect(result.body.code).to.equal(200);
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });
  });
  describe('cellsSaveAsPostDocumentSaveAs without save option', function() {
    it('should call cellsSaveAsPostDocumentSaveAsPDF successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
          req.name = filename;
          req.newfilename = "NewBook1.pdf"
          req.folder = "Temp";
         
          return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});