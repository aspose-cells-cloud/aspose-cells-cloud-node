/*
* MIT License
* 
* Copyright (c) 2025 Aspose.Cells Cloud
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/


import request = require("request");
import { Configuration } from "./configuration";
import { invokeApiMethod } from "./requestHelper";

/**
 * Authentication logic for api calls
 */
export interface IAuthentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: request.Options, configuration: Configuration): void;

    /**
     * Handle 401 response.
     */
    handle401response(configuration: Configuration);
}

/**
 * Implements OAuth authentication 
 */
export class OAuth implements IAuthentication {
    private accessToken: string;
    private refreshToken: string;
    private getTime: number;
     /**
      * Apply authentication settings to header and query params.
      */
    public async applyToRequest(requestOptions: request.Options, configuration: Configuration): Promise<void> {
        if (this.accessToken == null) {
            await this._requestToken(configuration);
        }
        const now = new Date().getTime();

        if(now - this.getTime > 86300){
            await this._requestToken(configuration);
        }
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = "Bearer " + this.accessToken;
        }

        return Promise.resolve();
    }

    /**
     * Handle 401 response.
     */
    public async handle401response(configuration: Configuration) {
        await this._refreshToken(configuration);
    }

    private async _requestToken(configuration: Configuration): Promise<void> {
        const requestOptions: request.Options = {
            method: "POST",
            json: true,
            uri: configuration.baseUrl + (configuration.apiVersion =="v1.1"? "/oauth2/token": "/connect/token"),
            form: {
                grant_type: "client_credentials",
                client_id: configuration.clientId,
                client_secret: configuration.clientSecret,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        this.accessToken = response.body.access_token;
        this.refreshToken = response.body.refresh_token;
        this.getTime = new Date().getTime();
        return Promise.resolve();
    }

    private async _refreshToken(configuration: Configuration): Promise<void> {
        const requestOptions: request.Options = {
            method: "POST",
            json: true,
            uri: configuration.baseUrl + "/connect/token",
            form: {
                grant_type: "refresh_token",
                refresh_token: this.refreshToken,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        this.accessToken = response.body.access_token;
        this.refreshToken = response.body.refresh_token;
        return Promise.resolve();
    }
}
