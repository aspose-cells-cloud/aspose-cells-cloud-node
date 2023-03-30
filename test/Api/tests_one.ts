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


describe('PicturesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);
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
});
