/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineObject63,
    InlineObject63FromJSON,
    InlineObject63ToJSON,
    InlineObject64,
    InlineObject64FromJSON,
    InlineObject64ToJSON,
    InlineResponse20040,
    InlineResponse20040FromJSON,
    InlineResponse20040ToJSON,
    InlineResponse20041,
    InlineResponse20041FromJSON,
    InlineResponse20041ToJSON,
    InlineResponseDefault1,
    InlineResponseDefault1FromJSON,
    InlineResponseDefault1ToJSON,
} from '../models';

export interface AddRDSRequest {
    body: InlineObject63;
}

export interface DiscoverRDSRequest {
    body: InlineObject64;
}

/**
 * 
 */
export class RDSApi extends runtime.BaseAPI {

    /**
     * AddRDS adds RDS instance.
     */
    async addRDSRaw(requestParameters: AddRDSRequest): Promise<runtime.ApiResponse<InlineResponse20040>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addRDS.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v1/management/RDS/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject63ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse20040FromJSON(jsonValue));
    }

    /**
     * AddRDS adds RDS instance.
     */
    async addRDS(requestParameters: AddRDSRequest): Promise<InlineResponse20040> {
        const response = await this.addRDSRaw(requestParameters);
        return await response.value();
    }

    /**
     * DiscoverRDS discovers RDS instances.
     */
    async discoverRDSRaw(requestParameters: DiscoverRDSRequest): Promise<runtime.ApiResponse<InlineResponse20041>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling discoverRDS.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v1/management/RDS/Discover`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject64ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse20041FromJSON(jsonValue));
    }

    /**
     * DiscoverRDS discovers RDS instances.
     */
    async discoverRDS(requestParameters: DiscoverRDSRequest): Promise<InlineResponse20041> {
        const response = await this.discoverRDSRaw(requestParameters);
        return await response.value();
    }

}
