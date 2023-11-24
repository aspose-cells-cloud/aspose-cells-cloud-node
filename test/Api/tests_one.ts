import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('one test case test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);
    describe('delete_un_protect_workbook test', function(){
      it("should call DeleteUnProtectWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "Book1.xlsx";
        var remoteName = "Book1.xlsx";

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
})
