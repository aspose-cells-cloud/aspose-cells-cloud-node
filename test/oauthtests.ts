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
import "mocha-sinon";
import * as request from "request";

import * as BaseTest from "./baseTest";
import { invokeApiMethod } from "../src/internal/requestHelper";

describe("oauth tests", () => {
    if(BaseTest.isDockerSDK())
    {
        return;
    }
    it("get access token successfully", async function() {

        const cellsApi = BaseTest.initializeCellsApi();
        const configuration = cellsApi.configuration;
        const requestOptions: request.Options = {
            method: "POST",
            json: true,
            uri: configuration.baseUrl + "/connect/token",
            form: {
                grant_type: "client_credentials",
                client_id: configuration.clientId,
                client_secret: configuration.clientSecret,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        expect(response.statusCode).to.equal(200);
        console.log(response.body.access_token);
    });
});
