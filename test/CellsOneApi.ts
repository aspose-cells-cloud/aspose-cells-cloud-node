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

describe('cellsWorkbookPostDigitalSignature', function () {
  it('should call cellsWorkbookPostDigitalSignature successfully', function () {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data = fs.createReadStream(localPath + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        const pfxfilename = "roywang.pfx";
        var data1 = fs.createReadStream(localPath + pfxfilename);
        var req1 = new model.UploadFileRequest();
        req1.path = "Temp/" + pfxfilename;
        req1.file = data1;

        return cellsApi.uploadFile(req1)
          .then((result) => {
            expect(result.body.uploaded.length).greaterThan(0);
            const filename = "Book1.xlsx";
            const pfxfilename = "roywang.pfx";
            var req2 = new model.CellsWorkbook_PostDigitalSignatureRequest();
            req2.digitalsignaturefile =  "Temp/" + pfxfilename;
            req2.folder = "Temp";
            req2.password ="123456";
            req2.name = filename;

            return cellsApi.cellsWorkbookPostDigitalSignature(req2)
              .then((result) => {
                expect(result.response.statusCode).to.equal(200);
              });
          });
      });
    });
});
  
