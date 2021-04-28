/* tslint:disable */
/* eslint-disable */
/**
 * Our API
 * The REST API for interacting with Our API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface GetJobStatusRequest {
    jobid: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get the current status for a job.
     * getJobStatus
     */
    async getJobStatusRaw(requestParameters: GetJobStatusRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.jobid === null || requestParameters.jobid === undefined) {
            throw new runtime.RequiredError('jobid','Required parameter requestParameters.jobid was null or undefined when calling getJobStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/job/{jobid}/status`.replace(`{${"jobid"}}`, encodeURIComponent(String(requestParameters.jobid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get the current status for a job.
     * getJobStatus
     */
    async getJobStatus(requestParameters: GetJobStatusRequest): Promise<string> {
        const response = await this.getJobStatusRaw(requestParameters);
        return await response.value();
    }

}
