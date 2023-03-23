import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
const ApiURL = process.env.CellsCloudTestApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('WorksheetController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheets test', function(){
      it("should call GetWorksheets successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetsRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheets(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_with_format test', function(){
      it("should call GetWorksheetWithFormat successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetWithFormatRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.format =  "png";
        request.pageIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetWithFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_change_visibility_worksheet test', function(){
      it("should call PutChangeVisibilityWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutChangeVisibilityWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.isVisible =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putChangeVisibilityWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_active_worksheet test', function(){
      it("should call PutActiveWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutActiveWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putActiveWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_insert_new_worksheet test', function(){
      it("should call PutInsertNewWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutInsertNewWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.index =  1;
        request.sheettype =  "VB";
        request.newsheetname =  "VBASheet";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putInsertNewWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_add_new_worksheet test', function(){
      it("should call PutAddNewWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutAddNewWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.position =  0;
        request.sheettype =  "VB";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putAddNewWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet test', function(){
      it("should call DeleteWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheets test', function(){
      it("should call DeleteWorksheets successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var matchCondition = new model.MatchConditionRequest();
         matchCondition.regexPattern = "{*}"  ;

        var request = new model.DeleteWorksheetsRequest();
        request.name =  remoteName;
        request.matchCondition =  matchCondition;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheets(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_move_worksheet test', function(){
      it("should call PostMoveWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var moving = new model.WorksheetMovingRequest();
         moving.destinationWorksheet = "Sheet4"  ;
         moving.position = "After"  ;

        var request = new model.PostMoveWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.moving =  moving;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postMoveWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_protect_worksheet test', function(){
      it("should call PutProtectWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var protectParameter = new model.ProtectSheetParameter();
         protectParameter.protectionType = "ALL"  ;
         protectParameter.password = "123"  ;

        var request = new model.PutProtectWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.protectParameter =  protectParameter;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putProtectWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_unprotect_worksheet test', function(){
      it("should call DeleteUnprotectWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var protectParameter = new model.ProtectSheetParameter();
         protectParameter.protectionType = "ALL"  ;
         protectParameter.password = "123"  ;

        var request = new model.DeleteUnprotectWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.protectParameter =  protectParameter;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteUnprotectWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_text_items test', function(){
      it("should call GetWorksheetTextItems successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetTextItemsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetTextItems(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_comments test', function(){
      it("should call GetWorksheetComments successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCommentsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetComments(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_comment test', function(){
      it("should call GetWorksheetComment successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCommentRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "B3";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetComment(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_comment test', function(){
      it("should call PutWorksheetComment successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var comment = new model.Comment();
         comment.author = "aspose cells developer"  ;
         comment.note = "aspose cells cloud api add comment."  ;

        var request = new model.PutWorksheetCommentRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "C1";
        request.comment =  comment;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetComment(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_comment test', function(){
      it("should call PostWorksheetComment successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var comment = new model.Comment();
         comment.author = "aspose cells developer"  ;
         comment.note = "aspose cells cloud api update comment."  ;

        var request = new model.PostWorksheetCommentRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "B3";
        request.comment =  comment;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetComment(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_comment test', function(){
      it("should call DeleteWorksheetComment successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetCommentRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellName =  "B3";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetComment(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_comments test', function(){
      it("should call DeleteWorksheetComments successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetCommentsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetComments(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_merged_cells test', function(){
      it("should call GetWorksheetMergedCells successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetMergedCellsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetMergedCells(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_merged_cell test', function(){
      it("should call GetWorksheetMergedCell successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetMergedCellRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.mergedCellIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetMergedCell(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_calculate_formula test', function(){
      it("should call GetWorksheetCalculateFormula successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetCalculateFormulaRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.formula =  "=NOW()";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCalculateFormula(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_calculate_formula test', function(){
      it("should call PostWorksheetCalculateFormula successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetCalculateFormulaRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.formula =  "=NOW()";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetCalculateFormula(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_text_search test', function(){
      it("should call PostWorksheetTextSearch successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetTextSearchRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.text =  "123";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetTextSearch(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worsheet_text_replace test', function(){
      it("should call PostWorsheetTextReplace successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorsheetTextReplaceRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.oldValue =  "123";
        request.newValue =  "456";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorsheetTextReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_range_sort test', function(){
      it("should call PostWorksheetRangeSort successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataSorter = new model.DataSorter();
         dataSorter.caseSensitive = true  ;

        var request = new model.PostWorksheetRangeSortRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.cellArea =  "A1:C10";
        request.dataSorter =  dataSorter;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetRangeSort(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_autofit_worksheet_row test', function(){
      it("should call PostAutofitWorksheetRow successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostAutofitWorksheetRowRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.rowIndex =  1;
        request.firstColumn =  1;
        request.lastColumn =  8;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postAutofitWorksheetRow(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_autofit_worksheet_rows test', function(){
      it("should call PostAutofitWorksheetRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostAutofitWorksheetRowsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startRow =  1;
        request.endRow =  9;
        request.onlyAuto =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postAutofitWorksheetRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_autofit_worksheet_columns test', function(){
      it("should call PostAutofitWorksheetColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostAutofitWorksheetColumnsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.startColumn =  1;
        request.endColumn =  9;
        request.onlyAuto =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postAutofitWorksheetColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_background test', function(){
      it("should call PutWorksheetBackground successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var waterMarkPNG = "WaterMark.png"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var waterMarkPNGRequest = new  model.UploadFileRequest();
        waterMarkPNGRequest.uploadFiles ={waterMarkPNG:fs.createReadStream(localPath  + waterMarkPNG)};
        waterMarkPNGRequest.path = remoteFolder + "/WaterMark.png" ;
        waterMarkPNGRequest.storageName ="";
        cellsApi.uploadFile(waterMarkPNGRequest );
     

        var request = new model.PutWorksheetBackgroundRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.picPath =  remoteFolder + "/WaterMark.png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetBackground(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_background test', function(){
      it("should call DeleteWorksheetBackground successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetBackgroundRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetBackground(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_freeze_panes test', function(){
      it("should call PutWorksheetFreezePanes successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFreezePanesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.row =  1;
        request.column =  1;
        request.freezedRows =  4;
        request.freezedColumns =  5;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFreezePanes(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_freeze_panes test', function(){
      it("should call DeleteWorksheetFreezePanes successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetFreezePanesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.row =  1;
        request.column =  1;
        request.freezedRows =  4;
        request.freezedColumns =  5;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetFreezePanes(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_copy_worksheet test', function(){
      it("should call PostCopyWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var options = new model.CopyOptions();
         options.columnCharacterWidth = true  ;

        var request = new model.PostCopyWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet15";
        request.sourceSheet =  "Sheet6";
        request.options =  options;
        request.sourceWorkbook =  "";
        request.sourceFolder =  "";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postCopyWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_rename_worksheet test', function(){
      it("should call PostRenameWorksheet successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostRenameWorksheetRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet5";
        request.newname =  "Sheet55";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postRenameWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_property test', function(){
      it("should call PostUpdateWorksheetProperty successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var sheet = new model.Worksheet();
         sheet.name = "sheet65"  ;
         sheet.isGridlinesVisible = true  ;

        var request = new model.PostUpdateWorksheetPropertyRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet5";
        request.sheet =  sheet;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetProperty(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_named_ranges test', function(){
      it("should call GetNamedRanges successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetNamedRangesRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getNamedRanges(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_named_range_value test', function(){
      it("should call GetNamedRangeValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetNamedRangeValueRequest();
        request.name =  remoteName;
        request.namerange =  "Name_2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getNamedRangeValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_worksheet_zoom test', function(){
      it("should call PostUpdateWorksheetZoom successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostUpdateWorksheetZoomRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.value =  90;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postUpdateWorksheetZoom(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_page_count test', function(){
      it("should call GetWorksheetPageCount successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetPageCountRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetPageCount(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});