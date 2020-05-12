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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineObject40
 */
export interface InlineObject40 {
    /**
     * Unique across all Services user-defined name. Required.
     * @type {string}
     * @memberof InlineObject40
     */
    service_name?: string;
    /**
     * Node identifier where this instance runs. Required.
     * @type {string}
     * @memberof InlineObject40
     */
    node_id?: string;
    /**
     * Access address (DNS name or IP). Required.
     * @type {string}
     * @memberof InlineObject40
     */
    address?: string;
    /**
     * Access port. Required.
     * @type {number}
     * @memberof InlineObject40
     */
    port?: number;
    /**
     * Environment name.
     * @type {string}
     * @memberof InlineObject40
     */
    environment?: string;
    /**
     * Cluster name.
     * @type {string}
     * @memberof InlineObject40
     */
    cluster?: string;
    /**
     * Replication set name.
     * @type {string}
     * @memberof InlineObject40
     */
    replication_set?: string;
    /**
     * Custom user-assigned labels.
     * @type {{ [key: string]: string; }}
     * @memberof InlineObject40
     */
    custom_labels?: { [key: string]: string; };
}

export function InlineObject40FromJSON(json: any): InlineObject40 {
    return InlineObject40FromJSONTyped(json, false);
}

export function InlineObject40FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject40 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service_name': !exists(json, 'service_name') ? undefined : json['service_name'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
        'cluster': !exists(json, 'cluster') ? undefined : json['cluster'],
        'replication_set': !exists(json, 'replication_set') ? undefined : json['replication_set'],
        'custom_labels': !exists(json, 'custom_labels') ? undefined : json['custom_labels'],
    };
}

export function InlineObject40ToJSON(value?: InlineObject40 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service_name': value.service_name,
        'node_id': value.node_id,
        'address': value.address,
        'port': value.port,
        'environment': value.environment,
        'cluster': value.cluster,
        'replication_set': value.replication_set,
        'custom_labels': value.custom_labels,
    };
}


