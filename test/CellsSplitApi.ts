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
describe('CellsSplitApi', function() {
  this.timeout(200000);
  describe('PosSplit', function() {
    it('should call PosSplit successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      const AssemblyTestXlsx = "assemblytest.xlsx";
      var dataAssemblyTestXlsx =fs.createReadStream(localPath  + AssemblyTestXlsx);
      const DataSourceXlsx = "datasource.xlsx";
      var dataDataSourceXlsx =fs.createReadStream(localPath  + DataSourceXlsx);
      var req = new model.PostSplitRequest();
      req.file = {AssemblyTestXlsx :dataAssemblyTestXlsx ,DataSourceXlsx:dataDataSourceXlsx };
      req.format = "pdf";
  
      return cellsApi.postSplit(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  
});