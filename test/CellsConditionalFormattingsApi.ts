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

describe('CellsConditionalFormattingsApi', function() {
  this.timeout(20000);
  describe('cellsConditionalFormattingsDeleteWorksheetConditionalFormatting', function() {
    it('should call cellsConditionalFormattingsDeleteWorksheetConditionalFormatting successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsDeleteWorksheetConditionalFormatting(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea', function() {
    it('should call cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingAreaRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.startRow = 1;
          req.startColumn = 1;
          req.totalRows = 4;
          req.totalColumns = 6;
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsDeleteWorksheetConditionalFormattings', function() {
    it('should call cellsConditionalFormattingsDeleteWorksheetConditionalFormattings successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsDeleteWorksheetConditionalFormattings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsGetWorksheetConditionalFormatting', function() {
    it('should call cellsConditionalFormattingsGetWorksheetConditionalFormatting successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_GetWorksheetConditionalFormattingRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsGetWorksheetConditionalFormatting(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsGetWorksheetConditionalFormattings', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsGetWorksheetConditionalFormattings(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsPutWorksheetConditionalFormatting', function() {
    it('should call cellsConditionalFormattingsPutWorksheetConditionalFormatting successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellArea = "A1:C10";
          var formatcondition = new model.FormatCondition();//null,null, "CellValue",null,null,null,null,"v1","v2",null, "Between"
          formatcondition.type = "CellValue";
          formatcondition.operator = "Between";
          formatcondition.formula1 = "v1";
          formatcondition.formula2 = "v2";
          req.formatcondition = formatcondition;
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsPutWorksheetConditionalFormatting(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsPutWorksheetFormatCondition', function() {
    it('should call cellsConditionalFormattingsPutWorksheetFormatCondition successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_PutWorksheetFormatConditionRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.cellArea = "A1:C10";
          req.type = "CellValue";
          req.operatorType = "Between";
          req.formula1 = "v1";
          req.formula2 = "v2";
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsPutWorksheetFormatCondition(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsPutWorksheetFormatConditionArea', function() {
    it('should call cellsConditionalFormattingsPutWorksheetFormatConditionArea successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.cellArea = "A1:C10";
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsPutWorksheetFormatConditionArea(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsConditionalFormattingsPutWorksheetFormatConditionCondition', function() {
    it('should call cellsConditionalFormattingsPutWorksheetFormatConditionCondition successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsConditionalFormattings_PutWorksheetFormatConditionConditionRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.type = "CellValue";
          req.operatorType = "Between";
          req.formula1 = "v1";
          req.formula2 = "v2";
          req.folder = "Temp";
          
          return cellsApi.cellsConditionalFormattingsPutWorksheetFormatConditionCondition(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
