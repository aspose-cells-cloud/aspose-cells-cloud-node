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
var fs = require('fs');
var path = require('path');
var assert = require('assert');
const localPath = "../TestData/";
describe('cellsHypelinksPutWorksheetHyperlink', function() {
  it('should call cellsHypelinksPutWorksheetHyperlink successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsHypelinks_PutWorksheetHyperlinkRequest();
        req.name = filename;
        req.sheetName = "Sheet1";
        req.firstRow = 1;
        req.firstColumn = 1;
        req.totalRows = 2;
        req.totalColumns = 3;
        req.address = "http://wwww.aspose.com";
        req.folder = "Temp";
        
        return cellsApi.cellsHypelinksPutWorksheetHyperlink(req)
          .then((result) => {
            expect(result.body.code).to.equal(200);
            expect(result.response.statusCode).to.equal(200);
          });
      });
  });
});
