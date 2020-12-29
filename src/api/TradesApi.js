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
    define(['ApiClient', 'model/Trade'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Trade'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.TradesApi = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.Trade);
  }
}(this, function(ApiClient, Trade) {
  'use strict';

  /**
   * Trades service.
   * @module api/TradesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TradesApi. 
   * @alias module:api/TradesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iserverAccountTradesGet operation.
     * @callback module:api/TradesApi~iserverAccountTradesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of Trades for the selected account
     * Returns a list of trades for the currently selected account for current day and six previous days.
     * @param {module:api/TradesApi~iserverAccountTradesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trade>}
     */
    this.iserverAccountTradesGet = function(callback) {
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
      var returnType = [Trade];

      return this.apiClient.callApi(
        '/iserver/account/trades', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));