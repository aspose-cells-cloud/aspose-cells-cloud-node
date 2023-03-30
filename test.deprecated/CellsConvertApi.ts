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
describe('CellsConvertApi', function () {
  this.timeout(200000);
  describe('PostConvertWorkbookToPNG', function () {
    it('should call PostConvertWorkbookToPNG successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToPNGRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToPNG(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostConvertWorkbookToPDF', function () {
    it('should call PostConvertWorkbookToPDF successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToPDFRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToPDF(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostConvertWorkbookToDocx', function () {
    it('should call PostConvertWorkbookToDocx successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToDocxRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToDocx(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostConvertWorkbookToPptx', function () {
    it('should call PostConvertWorkbookToPptx successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToPptxRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToPptx(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostConvertWorkbookToHtml', function () {
    it('should call PostConvertWorkbookToHtml successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToHtmlRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToHtml(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostConvertWorkbookToMarkdown', function () {
    it('should call PostConvertWorkbookToMarkdown successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToMarkdownRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToMarkdown(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  describe('PostConvertWorkbookToJson', function () {
    it('should call PostConvertWorkbookToJson successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToJsonRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToJson(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  describe('PostConvertWorkbookToSQL', function () {
    it('should call PostConvertWorkbookToSQL successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToSQLRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToSQL(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  describe('PostConvertWorkbookToCSV', function () {
    it('should call PostConvertWorkbookToCSV successfully', function () {
      const cellsApi = BaseTest.initializeCellsApi();
      var req = new model.PostConvertWorkbookToCSVRequest();
      req.file = fs.createReadStream(localPath + "assemblytest.xlsx");
      return cellsApi.postConvertWorkbookToCSV(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
});