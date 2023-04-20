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
    describe('post_worksheet_chart_title test', function(){
      it("should call PostWorksheetChartTitle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var title = new model.Title();
         title.isVisible = true  ;

        var request = new model.PostWorksheetChartTitleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.title =  title;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetChartTitle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});
