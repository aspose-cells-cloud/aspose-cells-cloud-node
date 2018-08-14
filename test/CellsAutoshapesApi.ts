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

describe('CellsAutoshapesApi', function() {
  this.timeout(20000);
  describe('cellsAutoshapesGetWorksheetAutoshape', function() {
    it('should call cellsAutoshapesGetWorksheetAutoshape successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoshapesApi = BaseTest.initializeCellsAutoshapesApi();
      const filename = "myDocument.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoshapes_GetWorksheetAutoshapeRequest();
          req.name = filename;
          req.sheetName = "Sheet2";
          req.autoshapeNumber = 4;
          req.folder = "Temp";
          
          return cellsAutoshapesApi.cellsAutoshapesGetWorksheetAutoshape(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsAutoshapesGetWorksheetAutoshapes', function() {
    it('should call cellsAutoshapesGetWorksheetAutoshapes successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsAutoshapesApi = BaseTest.initializeCellsAutoshapesApi();
      const filename = "myDocument.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsAutoshapes_GetWorksheetAutoshapesRequest();
          req.name = filename;
          req.sheetName = "Sheet2";
          req.folder = "Temp";
          
          return cellsAutoshapesApi.cellsAutoshapesGetWorksheetAutoshapes(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});