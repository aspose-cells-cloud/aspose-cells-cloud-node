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
describe('CellsImxporttApi', function() {
  this.timeout(200000);
  describe('PostImport', function() {
    it('should call PostImport successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      var importOption = new model.ImportIntArrayOption();
      importOption.destinationWorksheet = "Sheet1";
      importOption.firstColumn = 1;
      importOption.firstRow = 3;
      importOption.importDataType = "IntArray";
      importOption.isVertical = true;
      importOption.data = [ 1, 2, 3, 4 ];
      // let data = JSON.stringify(importOption, null, 2); 

      // var buffer = new Buffer(data);
      // var bytes = []
      // for ( var i = 0 ; i< buffer.length; i++ ){
      //   var byteint = buffer[i];
      //   bytes.push(byteint);
      // }
      const AssemblyTestXlsx = "assemblytest.xlsx";
      var dataAssemblyTestXlsx =fs.createReadStream(localPath  + AssemblyTestXlsx);
      const DataSourceXlsx = "datasource.xlsx";
      var dataDataSourceXlsx =fs.createReadStream(localPath  + DataSourceXlsx);
      var req = new model.PostImportRequest();
      // req.file = {'ImportOption':bytes, AssemblyTestXlsx :dataAssemblyTestXlsx ,DataSourceXlsx:dataDataSourceXlsx };
      req.file = { AssemblyTestXlsx :dataAssemblyTestXlsx ,DataSourceXlsx:dataDataSourceXlsx };
      req.importOption =importOption;

      return cellsApi.postImport(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('PostImport', function() {
    it('should call PostImport successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      var importOption = new model.ImportPictureOption();
      importOption.destinationWorksheet = "Sheet1";
      importOption.upperLeftRow = 1;
      importOption.upperLeftColumn = 3;
      importOption.lowerRightRow = 1;
      importOption.lowerRightColumn = 3;      
      importOption.importDataType = "Picture";
      importOption.filename = "word.jpg";
      importOption.data = JSON.stringify (fs.createReadStream(localPath  + "word.jpg"));
      // let data = JSON.stringify(importOption, null, 2); 

      // var buffer = new Buffer(data);
      // var bytes = []
      // for ( var i = 0 ; i< buffer.length; i++ ){
      //   var byteint = buffer[i];
      //   bytes.push(byteint);
      // }

      const AssemblyTestXlsx = "assemblytest.xlsx";
      var dataAssemblyTestXlsx =fs.createReadStream(localPath  + AssemblyTestXlsx);
      const DataSourceXlsx = "datasource.xlsx";
      var dataDataSourceXlsx =fs.createReadStream(localPath  + DataSourceXlsx);
      var req = new model.PostImportRequest();
      req.file = { AssemblyTestXlsx :dataAssemblyTestXlsx ,DataSourceXlsx:dataDataSourceXlsx };
      req.importOption = importOption;
      return cellsApi.postImport(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
});