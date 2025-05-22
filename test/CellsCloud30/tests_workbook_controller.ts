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


describe('WorkbookController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_digital_signature test', function(){
      it("should call PostDigitalSignature successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var roywangPFX = "roywang.pfx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var roywangPFXRequest = new  model.UploadFileRequest();
        roywangPFXRequest.uploadFiles ={roywangPFX:fs.createReadStream(localPath  + roywangPFX)};
        roywangPFXRequest.path = remoteFolder + "/roywang.pfx" ;
        roywangPFXRequest.storageName ="";
        cellsApi.uploadFile(roywangPFXRequest );
     

        var request = new model.PostDigitalSignatureRequest();
        request.name =  remoteName;
        request.digitalsignaturefile =  remoteFolder + "/roywang.pfx";
        request.password =  "123456";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postDigitalSignature(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_encrypt_workbook test', function(){
      it("should call PostEncryptWorkbook successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var encryption = new model.WorkbookEncryptionRequest();
         encryption.password = "123456"  ;
         encryption.encryptionType = "XOR"  ;
         encryption.keyLength = 128  ;

        var request = new model.PostEncryptWorkbookRequest();
        request.name =  remoteName;
        request.encryption =  encryption;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postEncryptWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_decrypt_workbook test', function(){
      it("should call DeleteDecryptWorkbook successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var encryption = new model.WorkbookEncryptionRequest();
         encryption.password = "123456"  ;
         encryption.encryptionType = "XOR"  ;
         encryption.keyLength = 128  ;

        var request = new model.DeleteDecryptWorkbookRequest();
        request.name =  remoteName;
        request.encryption =  encryption;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteDecryptWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_protect_workbook test', function(){
      it("should call PostProtectWorkbook successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var protectWorkbookRequest = new model.ProtectWorkbookRequest();
         protectWorkbookRequest.encryptWithPassword = "123456"  ;
         protectWorkbookRequest.protectWorkbookStructure = "ALL"  ;

        var request = new model.PostProtectWorkbookRequest();
        request.name =  remoteName;
        request.protectWorkbookRequest =  protectWorkbookRequest;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postProtectWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_un_protect_workbook test', function(){
      it("should call DeleteUnProtectWorkbook successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteUnProtectWorkbookRequest();
        request.name =  remoteName;
        request.password =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteUnProtectWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_default_style test', function(){
      it("should call GetWorkbookDefaultStyle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookDefaultStyleRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookDefaultStyle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_text_items test', function(){
      it("should call GetWorkbookTextItems successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookTextItemsRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookTextItems(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_names test', function(){
      it("should call GetWorkbookNames successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookNamesRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookNames(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_workbook_name test', function(){
      it("should call PutWorkbookName successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var newName = new model.Name();
         newName.text = "name_1804"  ;
         newName.comment = "KeepSourceFormatting"  ;
         newName.refersTo = "=Sheet1!$I$4"  ;

        var request = new model.PutWorkbookNameRequest();
        request.name =  remoteName;
        request.newName =  newName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorkbookName(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_name test', function(){
      it("should call GetWorkbookName successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookNameRequest();
        request.name =  remoteName;
        request.nameName =  "Name_2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookName(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_name test', function(){
      it("should call PostWorkbookName successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var newName = new model.Name();
         newName.text = "name_1804"  ;
         newName.comment = "KeepSourceFormatting"  ;
         newName.refersTo = "=Sheet1!$I$4"  ;

        var request = new model.PostWorkbookNameRequest();
        request.name =  remoteName;
        request.nameName =  "Name_2";
        request.newName =  newName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookName(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_name_value test', function(){
      it("should call GetWorkbookNameValue successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookNameValueRequest();
        request.name =  remoteName;
        request.nameName =  "Name_2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookNameValue(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_workbook_names test', function(){
      it("should call DeleteWorkbookNames successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorkbookNamesRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorkbookNames(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_workbook_name test', function(){
      it("should call DeleteWorkbookName successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorkbookNameRequest();
        request.name =  remoteName;
        request.nameName =  "Name_2";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorkbookName(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_document_protect_from_changes test', function(){
      it("should call PutDocumentProtectFromChanges successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var password = new model.PasswordRequest();
         password.password = "123456"  ;

        var request = new model.PutDocumentProtectFromChangesRequest();
        request.name =  remoteName;
        request.password =  password;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putDocumentProtectFromChanges(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_document_un_protect_from_changes test', function(){
      it("should call DeleteDocumentUnProtectFromChanges successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteDocumentUnProtectFromChangesRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteDocumentUnProtectFromChanges(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbooks_merge test', function(){
      it("should call PostWorkbooksMerge successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var myDocumentXLSX = "myDocument.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var myDocumentXLSXRequest = new  model.UploadFileRequest();
        myDocumentXLSXRequest.uploadFiles ={myDocumentXLSX:fs.createReadStream(localPath  + myDocumentXLSX)};
        myDocumentXLSXRequest.path = remoteFolder + "/myDocument.xlsx" ;
        myDocumentXLSXRequest.storageName ="";
        cellsApi.uploadFile(myDocumentXLSXRequest );
     

        var request = new model.PostWorkbooksMergeRequest();
        request.name =  remoteName;
        request.mergeWith =  remoteFolder + "/myDocument.xlsx";
        request.folder =  remoteFolder;
        request.storageName =  "";
        request.mergedStorageName =  "";
        return cellsApi.postWorkbooksMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbooks_text_search test', function(){
      it("should call PostWorkbooksTextSearch successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorkbooksTextSearchRequest();
        request.name =  remoteName;
        request.text =  "1234";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbooksTextSearch(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_text_replace test', function(){
      it("should call PostWorkbookTextReplace successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorkbookTextReplaceRequest();
        request.name =  remoteName;
        request.oldValue =  "1234";
        request.newValue =  "5678";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookTextReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_get_smart_marker_result test', function(){
      it("should call PostWorkbookGetSmartMarkerResult successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var reportDataXML = "ReportData.xml"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var reportDataXMLRequest = new  model.UploadFileRequest();
        reportDataXMLRequest.uploadFiles ={reportDataXML:fs.createReadStream(localPath  + reportDataXML)};
        reportDataXMLRequest.path = remoteFolder + "/ReportData.xml" ;
        reportDataXMLRequest.storageName ="";
        cellsApi.uploadFile(reportDataXMLRequest );
     

        var request = new model.PostWorkbookGetSmartMarkerResultRequest();
        request.name =  remoteName;
        request.xmlFile =  remoteFolder + "/ReportData.xml";
        request.folder =  remoteFolder;
        request.outPath =  "OutResult/SmartMarkerResult.xlsx";
        request.storageName =  "";
        request.outStorageName =  "";
        return cellsApi.postWorkbookGetSmartMarkerResult(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_workbook_create test', function(){
      it("should call PutWorkbookCreate successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var reportDataXML = "ReportData.xml"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
        var reportDataXMLRequest = new  model.UploadFileRequest();
        reportDataXMLRequest.uploadFiles ={reportDataXML:fs.createReadStream(localPath  + reportDataXML)};
        reportDataXMLRequest.path = remoteFolder + "/ReportData.xml" ;
        reportDataXMLRequest.storageName ="";
        cellsApi.uploadFile(reportDataXMLRequest );
     

        var request = new model.PutWorkbookCreateRequest();
        request.name =  "PutWorkbookCreate.xlsx";
        request.templateFile =  remoteFolder + "/" + remoteName;
        request.dataFile =  remoteFolder + "/ReportData.xml";
        request.isWriteOver =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        request.checkExcelRestriction =  true;
        return cellsApi.putWorkbookCreate(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_split test', function(){
      it("should call PostWorkbookSplit successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorkbookSplitRequest();
        request.name =  remoteName;
        request.format =  "png";
        request.outFolder =  "OutResult";
        request.from =  1;
        request.to =  5;
        request.horizontalResolution =  96;
        request.verticalResolution =  96;
        request.splitNameRule =  "sheetname";
        request.folder =  remoteFolder;
        request.storageName =  "";
        request.outStorageName =  "";
        return cellsApi.postWorkbookSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_import_data test', function(){
      it("should call PostImportData successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var importOptionData = new Array<number>();importOptionData.push(1);
        importOptionData.push(2);
        importOptionData.push(3);
        importOptionData.push(4);
        var importOption = new model.ImportIntArrayOption();
         importOption.destinationWorksheet = "Sheet1"  ;
         importOption.firstColumn = 1  ;
         importOption.firstRow = 3  ;
         importOption.importDataType = "IntArray"  ;
         importOption.isInsert = true  ;
         importOption.isVertical = true  ;
         importOption.data = importOptionData  ;

        var request = new model.PostImportDataRequest();
        request.name =  remoteName;
        request.importOption =  importOption;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postImportData(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_calculate_formula test', function(){
      it("should call PostWorkbookCalculateFormula successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var options = new model.CalculationOptions();
         options.ignoreError = true  ;
         options.recursive = true  ;

        var request = new model.PostWorkbookCalculateFormulaRequest();
        request.name =  remoteName;
        request.options =  options;
        request.ignoreError =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookCalculateFormula(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_autofit_workbook_rows test', function(){
      it("should call PostAutofitWorkbookRows successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostAutofitWorkbookRowsRequest();
        request.name =  remoteName;
        request.startRow =  1;
        request.endRow =  100;
        request.onlyAuto =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postAutofitWorkbookRows(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_autofit_workbook_columns test', function(){
      it("should call PostAutofitWorkbookColumns successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostAutofitWorkbookColumnsRequest();
        request.name =  remoteName;
        request.startColumn =  1;
        request.endColumn =  20;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postAutofitWorkbookColumns(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_settings test', function(){
      it("should call GetWorkbookSettings successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorkbookSettingsRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorkbookSettings(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_settings test', function(){
      it("should call PostWorkbookSettings successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var settings = new model.WorkbookSettings();
         settings.autoCompressPictures = true  ;
         settings.hidePivotFieldList = true  ;

        var request = new model.PostWorkbookSettingsRequest();
        request.name =  remoteName;
        request.settings =  settings;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookSettings(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_workbook_background test', function(){
      it("should call PutWorkbookBackground successfully" , function(){
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
     

        var request = new model.PutWorkbookBackgroundRequest();
        request.name =  remoteName;
        request.picPath =  remoteFolder + "/WaterMark.png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorkbookBackground(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_workbook_background test', function(){
      it("should call DeleteWorkbookBackground successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorkbookBackgroundRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorkbookBackground(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_workbook_water_marker test', function(){
      it("should call PutWorkbookWaterMarker successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var textWaterMarkerRequest = new model.TextWaterMarkerRequest();
         textWaterMarkerRequest.text = "Aspose Cells Cloud"  ;
         textWaterMarkerRequest.fontSize = 12  ;

        var request = new model.PutWorkbookWaterMarkerRequest();
        request.name =  remoteName;
        request.textWaterMarkerRequest =  textWaterMarkerRequest;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorkbookWaterMarker(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_page_count test', function(){
      it("should call GetPageCount successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetPageCountRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getPageCount(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});