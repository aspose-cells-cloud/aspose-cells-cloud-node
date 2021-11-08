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
var filename = "Book1.xlsx";
const localPath = "TestData/";

describe('Cells sdk for NodeJS test ok.', function() {
  it('should call postBatchConvert successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        filename = "myDocument.xlsx";
        var data =fs.createReadStream(localPath  + filename);
        var req = new model.UploadFileRequest();
        req.path = "Temp/" + filename;
        req.file = data;
        
        return cellsApi.uploadFile(req)
          .then((result) => {            
            expect(result.body.toString().length).to.greaterThan(0);
            filename = "datasource.xlsx";
            var data =fs.createReadStream(localPath  + filename);
            var req = new model.UploadFileRequest();
            req.path = "Temp/" + filename;
            req.file = data;
            
            return cellsApi.uploadFile(req)
              .then((result) => {
                expect(result.body.toString().length).to.greaterThan(0);
                filename = "assemblytest.xlsx";
                var data =fs.createReadStream(localPath  + filename);
                var req = new model.UploadFileRequest();
                req.path = "Temp/" + filename;
                req.file = data;
                
                return cellsApi.uploadFile(req)
                  .then((result) => {
                    expect(result.body.toString().length).to.greaterThan(0);
                      var req = new model.PostBatchConvertRequest();
                      req.batchConvertRequest = new model.BatchConvertRequest();
                      req.batchConvertRequest.format = "pdf";
                      req.batchConvertRequest.sourceFolder = "Temp";
                      req.batchConvertRequest.matchCondition = new model.MatchConditionRequest();
                      req.batchConvertRequest.matchCondition.fullMatchConditions = new Array<string>();
                      req.batchConvertRequest.matchCondition.fullMatchConditions.push( "assemblytest.xlsx");
                      return cellsApi.postBatchConvert(req)
                      .then((result) => {
                      expect(result.body.toString().length).to.greaterThan(0);
                     
                     });
                  });
              });
          });
      });
  });
  
});
