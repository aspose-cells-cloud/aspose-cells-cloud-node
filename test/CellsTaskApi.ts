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

const localPath = "../TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');
describe('CellsTaskApi', function() {
  this.timeout(20000);
  describe('cellsTaskPostRunTask', function() {
    it('should call cellsTaskPostRunTask successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsTask_PostRunTaskRequest();
          var taskData = new model.TaskData();
          taskData.tasks = new Array<model.TaskDescription>();
          var task1 = new model.TaskDescription();
          task1.taskType = "SplitWorkbook";
          var param1 = new model.SplitWorkbookTaskParameter();
          param1.destinationFileFormat = "xlsx";
          param1.destinationFilePosition = new model.FileSource();
          param1.destinationFilePosition.filePath = "Temp";
          param1.destinationFilePosition.fileSourceType = "CloudFileSystem";
          param1.splitNameRule = "sheetname";
          param1.workbook = new model.FileSource();
          param1.workbook.fileSourceType = "CloudFileSystem";
          param1.workbook.filePath = "Temp" + "\\" + filename;
          task1.taskParameter = param1;
          taskData.tasks.push(task1);
          req.taskData = taskData;

          return cellsApi.cellsTaskPostRunTask(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});