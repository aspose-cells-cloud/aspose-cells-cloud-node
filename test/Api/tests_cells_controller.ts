import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

//const localPath = "TestData/CellsCloud/";
const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('CellsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_clear_contents test', function(){
      it("should call PostClearContents successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostClearContentsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:C10";
        request.startRow =  1;
        request.startColumn =  1;
        request.endRow =  3;
        request.endColumn =  3;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postClearContents(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_formats test', function(){
      it("should call PostClearFormats successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostClearFormatsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:C10";
        request.startRow =  1;
        request.startColumn =  1;
        request.endRow =  3;
        request.endColumn =  3;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postClearFormats(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_range_style test', function(){
      it("should call PostUpdateWorksheetRangeStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostUpdateWorksheetRangeStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:C10";
        request.style =  style;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetRangeStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_merge test', function(){
      it("should call PostWorksheetMerge successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetMergeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startRow =  1;
        request.startColumn =  1;
        request.totalRows =  4;
        request.totalColumns =  4;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_unmerge test', function(){
      it("should call PostWorksheetUnmerge successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetUnmergeRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startRow =  1;
        request.startColumn =  1;
        request.totalRows =  4;
        request.totalColumns =  4;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetUnmerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_cells test', function(){
      it("should call GetWorksheetCells successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCellsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.offest =  1;
        request.count =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCells(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_cell test', function(){
      it("should call GetWorksheetCell successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCellRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellOrMethodName =  "A1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCell(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_cell_style test', function(){
      it("should call GetWorksheetCellStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCellStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCellStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_cell_set_value test', function(){
      it("should call PostWorksheetCellSetValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetCellSetValueRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.value =  "1";
        request.type =  "int";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCellSetValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_cell_style test', function(){
      it("should call PostUpdateWorksheetCellStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostUpdateWorksheetCellStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.style =  style;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetCellStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_set_cell_range_value test', function(){
      it("should call PostSetCellRangeValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostSetCellRangeValueRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellarea =  "A1:C10";
        request.value =  "Test";
        request.type =  "string";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postSetCellRangeValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_copy_cell_into_cell test', function(){
      it("should call PostCopyCellIntoCell successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostCopyCellIntoCellRequest();
        request.name =  remoteName;
        request.destCellName =  "C1";
        request.sheetName =  "Sheet1";
        request.worksheet =  "Sheet2";
        request.cellname =  "A1";
        request.row =  1;
        request.column =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCopyCellIntoCell(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_cell_html_string test', function(){
      it("should call GetCellHtmlString successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetCellHtmlStringRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getCellHtmlString(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_set_cell_html_string test', function(){
      it("should call PostSetCellHtmlString successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostSetCellHtmlStringRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postSetCellHtmlString(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_cell_calculate test', function(){
      it("should call PostCellCalculate successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var options = new model.CalculationOptions();
         options.recursive = true  ;
         options.ignoreError = true  ;

        var request = new model.PostCellCalculateRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "A1";
        request.options =  options;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCellCalculate(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_cell_characters test', function(){
      it("should call PostCellCharacters successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var optionsvalue0Font = new model.Font();
         optionsvalue0Font.isBold = true  ;
         optionsvalue0Font.size = 16  ;
        var optionsvalue0 = new model.FontSetting();
         optionsvalue0.length = 5  ;
         optionsvalue0.startIndex = 0  ;
         optionsvalue0.font = optionsvalue0Font  ;
        var options = new Array<model.FontSetting>();options.push(optionsvalue0);

        var request = new model.PostCellCharactersRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "E36";
        request.options =  options;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCellCharacters(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_columns test', function(){
      it("should call GetWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.offset =  1;
        request.count =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_set_worksheet_column_width test', function(){
      it("should call PostSetWorksheetColumnWidth successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostSetWorksheetColumnWidthRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.columnIndex =  1;
        request.width =  10.9;
        request.count =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postSetWorksheetColumnWidth(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_column test', function(){
      it("should call GetWorksheetColumn successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetColumnRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.columnIndex =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetColumn(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_insert_worksheet_columns test', function(){
      it("should call PutInsertWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutInsertWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.columnIndex =  1;
        request.columns =  10;
        request.updateReference =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putInsertWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_columns test', function(){
      it("should call DeleteWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.columnIndex =  1;
        request.columns =  10;
        request.updateReference =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_hide_worksheet_columns test', function(){
      it("should call PostHideWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostHideWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startColumn =  1;
        request.totalColumns =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postHideWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_unhide_worksheet_columns test', function(){
      it("should call PostUnhideWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUnhideWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startColumn =  1;
        request.totalColumns =  10;
        request.width =  10.9;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUnhideWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_group_worksheet_columns test', function(){
      it("should call PostGroupWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostGroupWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.firstIndex =  1;
        request.lastIndex =  9;
        request.hide =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postGroupWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_ungroup_worksheet_columns test', function(){
      it("should call PostUngroupWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUngroupWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.firstIndex =  1;
        request.lastIndex =  9;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUngroupWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_copy_worksheet_columns test', function(){
      it("should call PostCopyWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostCopyWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.sourceColumnIndex =  1;
        request.destinationColumnIndex =  19;
        request.columnNumber =  8;
        request.worksheet =  "Sheet2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCopyWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_column_style test', function(){
      it("should call PostColumnStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostColumnStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.columnIndex =  1;
        request.style =  style;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postColumnStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_rows test', function(){
      it("should call GetWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.offset =  1;
        request.count =  10;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_row test', function(){
      it("should call GetWorksheetRow successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetRowRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetRow(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_row test', function(){
      it("should call DeleteWorksheetRow successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetRowRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetRow(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_rows test', function(){
      it("should call DeleteWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startrow =  1;
        request.totalRows =  10;
        request.updateReference =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_insert_worksheet_rows test', function(){
      it("should call PutInsertWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutInsertWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startrow =  1;
        request.totalRows =  10;
        request.updateReference =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putInsertWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_insert_worksheet_row test', function(){
      it("should call PutInsertWorksheetRow successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutInsertWorksheetRowRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putInsertWorksheetRow(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_row test', function(){
      it("should call PostUpdateWorksheetRow successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUpdateWorksheetRowRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.height =  10.8;
        request.count =  9;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetRow(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_hide_worksheet_rows test', function(){
      it("should call PostHideWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostHideWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startrow =  1;
        request.totalRows =  6;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postHideWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_unhide_worksheet_rows test', function(){
      it("should call PostUnhideWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUnhideWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startrow =  1;
        request.totalRows =  8;
        request.height =  10.9;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUnhideWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_group_worksheet_rows test', function(){
      it("should call PostGroupWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostGroupWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.firstIndex =  1;
        request.lastIndex =  9;
        request.hide =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postGroupWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_ungroup_worksheet_rows test', function(){
      it("should call PostUngroupWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUngroupWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.firstIndex =  1;
        request.lastIndex =  9;
        request.isAll =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUngroupWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_copy_worksheet_rows test', function(){
      it("should call PostCopyWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostCopyWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.sourceRowIndex =  1;
        request.destinationRowIndex =  12;
        request.rowNumber =  5;
        request.worksheet =  "Sheet2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCopyWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_row_style test', function(){
      it("should call PostRowStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var styleFont = new model.Font();
         styleFont.size = 16  ;
        var style = new model.Style();
         style.font = styleFont  ;

        var request = new model.PostRowStyleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.style =  style;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postRowStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});