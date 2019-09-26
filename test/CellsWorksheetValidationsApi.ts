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
var path = require('path');
var assert = require('assert');

describe('CellsWorksheetValidationsApi', function() {
  this.timeout(20000);
  describe('cellsWorksheetValidationsDeleteWorksheetValidation', function() {
    it('should call cellsWorksheetValidationsDeleteWorksheetValidation successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsWorksheetValidations_DeleteWorksheetValidationRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.validationIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsWorksheetValidationsDeleteWorksheetValidation(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetValidationsGetWorksheetValidation', function() {
    it('should call cellsWorksheetValidationsGetWorksheetValidation successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsWorksheetValidations_GetWorksheetValidationRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.validationIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsWorksheetValidationsGetWorksheetValidation(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetValidationsGetWorksheetValidations', function() {
    it('should call cellsWorksheetValidationsGetWorksheetValidations successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsWorksheetValidations_GetWorksheetValidationsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsWorksheetValidationsGetWorksheetValidations(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetValidationsPostWorksheetValidation', function() {
    it('should call cellsWorksheetValidationsPostWorksheetValidation successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsWorksheetValidations_PostWorksheetValidationRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.validationIndex = 0;
          req.folder = "Temp";
          var validation = new model.Validation();
          var area = new model.CellArea();
          area.startRow = 0;
          area.endRow = 0;
          area.startColumn = 0;
          area.endColumn = 0;
          validation.areaList = [];
          validation.areaList.push(area);
          validation.formula1 = "=(OR(A1=\"Yes\",A1=\"No\"))";
          validation.type = "Custom";
          validation.ignoreBlank = true;
          req.validation = validation;
          
          return cellsApi.cellsWorksheetValidationsPostWorksheetValidation(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsWorksheetValidationsPutWorksheetValidation', function() {
    it('should call cellsWorksheetValidationsPutWorksheetValidation successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsWorksheetValidations_PutWorksheetValidationRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.range = "A1:C10";
          req.folder = "Temp";
          
          return cellsApi.cellsWorksheetValidationsPutWorksheetValidation(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});