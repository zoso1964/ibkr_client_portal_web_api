/*
 * Client Portal Web API
 * Production version of the Client Portal Web API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20010', 'model/InlineResponse2009', 'model/ScannerParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20010'), require('../model/InlineResponse2009'), require('../model/ScannerParams'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.ScannerApi = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.InlineResponse20010, root.ClientPortalWebApi.InlineResponse2009, root.ClientPortalWebApi.ScannerParams);
  }
}(this, function(ApiClient, InlineResponse20010, InlineResponse2009, ScannerParams) {
  'use strict';

  /**
   * Scanner service.
   * @module api/ScannerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ScannerApi. 
   * @alias module:api/ScannerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iserverScannerParamsGet operation.
     * @callback module:api/ScannerApi~iserverScannerParamsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get lists of available scanners
     * Returns an object contains four lists contain all parameters for scanners
     * @param {module:api/ScannerApi~iserverScannerParamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.iserverScannerParamsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/iserver/scanner/params', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverScannerRunPost operation.
     * @callback module:api/ScannerApi~iserverScannerRunPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20010>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * run scanner to get a list of contracts
     * @param {module:model/ScannerParams} body modify-order request
     * @param {module:api/ScannerApi~iserverScannerRunPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20010>}
     */
    this.iserverScannerRunPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverScannerRunPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [InlineResponse20010];

      return this.apiClient.callApi(
        '/iserver/scanner/run', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));