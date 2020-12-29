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
    define(['ApiClient', 'model/Body', 'model/Body1', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse400', 'model/ModifyOrder', 'model/OrderRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/Body1'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponse400'), require('../model/ModifyOrder'), require('../model/OrderRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.OrderApi = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.Body, root.ClientPortalWebApi.Body1, root.ClientPortalWebApi.InlineResponse2002, root.ClientPortalWebApi.InlineResponse2003, root.ClientPortalWebApi.InlineResponse2004, root.ClientPortalWebApi.InlineResponse2005, root.ClientPortalWebApi.InlineResponse2006, root.ClientPortalWebApi.InlineResponse400, root.ClientPortalWebApi.ModifyOrder, root.ClientPortalWebApi.OrderRequest);
  }
}(this, function(ApiClient, Body, Body1, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse400, ModifyOrder, OrderRequest) {
  'use strict';

  /**
   * Order service.
   * @module api/OrderApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OrderApi. 
   * @alias module:api/OrderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iserverAccountAccountIdOrderOrigCustomerOrderIdDelete operation.
     * @callback module:api/OrderApi~iserverAccountAccountIdOrderOrigCustomerOrderIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2006>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Order
     * @param {String} accountId account id
     * @param {String} origCustomerOrderId Customer OrderId
     * @param {module:api/OrderApi~iserverAccountAccountIdOrderOrigCustomerOrderIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2006>}
     */
    this.iserverAccountAccountIdOrderOrigCustomerOrderIdDelete = function(accountId, origCustomerOrderId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling iserverAccountAccountIdOrderOrigCustomerOrderIdDelete");
      }

      // verify the required parameter 'origCustomerOrderId' is set
      if (origCustomerOrderId === undefined || origCustomerOrderId === null) {
        throw new Error("Missing the required parameter 'origCustomerOrderId' when calling iserverAccountAccountIdOrderOrigCustomerOrderIdDelete");
      }


      var pathParams = {
        'accountId': accountId,
        'origCustomerOrderId': origCustomerOrderId
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
      var returnType = [InlineResponse2006];

      return this.apiClient.callApi(
        '/iserver/account/{accountId}/order/{origCustomerOrderId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverAccountAccountIdOrderOrigCustomerOrderIdPost operation.
     * @callback module:api/OrderApi~iserverAccountAccountIdOrderOrigCustomerOrderIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2006>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Order
     * Modifies an open order. The /iserver/accounts endpoint must first be called.
     * @param {String} accountId account id
     * @param {String} origCustomerOrderId Customer OrderId
     * @param {module:model/ModifyOrder} body modify-order request
     * @param {module:api/OrderApi~iserverAccountAccountIdOrderOrigCustomerOrderIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2006>}
     */
    this.iserverAccountAccountIdOrderOrigCustomerOrderIdPost = function(accountId, origCustomerOrderId, body, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling iserverAccountAccountIdOrderOrigCustomerOrderIdPost");
      }

      // verify the required parameter 'origCustomerOrderId' is set
      if (origCustomerOrderId === undefined || origCustomerOrderId === null) {
        throw new Error("Missing the required parameter 'origCustomerOrderId' when calling iserverAccountAccountIdOrderOrigCustomerOrderIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverAccountAccountIdOrderOrigCustomerOrderIdPost");
      }


      var pathParams = {
        'accountId': accountId,
        'origCustomerOrderId': origCustomerOrderId
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
      var returnType = [InlineResponse2006];

      return this.apiClient.callApi(
        '/iserver/account/{accountId}/order/{origCustomerOrderId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverAccountAccountIdOrderPost operation.
     * @callback module:api/OrderApi~iserverAccountAccountIdOrderPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2003>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place Order
     * Please note here, sometimes this end-point alone can't make sure you submit the order successfully, you could receive some questions in the response, you have to to answer them in order to submit the order successfully. You can use \"/iserver/reply/{replyid}\" end-point to answer questions 
     * @param {String} accountId account id
     * @param {module:model/OrderRequest} body order request info
     * @param {module:api/OrderApi~iserverAccountAccountIdOrderPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2003>}
     */
    this.iserverAccountAccountIdOrderPost = function(accountId, body, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling iserverAccountAccountIdOrderPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverAccountAccountIdOrderPost");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = [InlineResponse2003];

      return this.apiClient.callApi(
        '/iserver/account/{accountId}/order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverAccountAccountIdOrderWhatifPost operation.
     * @callback module:api/OrderApi~iserverAccountAccountIdOrderWhatifPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Preview Order
     * This end-point allows you to preview order without actually submitting the order and you can get commission information in the response. 
     * @param {String} accountId account id
     * @param {module:model/OrderRequest} body order info
     * @param {module:api/OrderApi~iserverAccountAccountIdOrderWhatifPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.iserverAccountAccountIdOrderWhatifPost = function(accountId, body, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling iserverAccountAccountIdOrderWhatifPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverAccountAccountIdOrderWhatifPost");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/iserver/account/{accountId}/order/whatif', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverAccountAccountIdOrdersPost operation.
     * @callback module:api/OrderApi~iserverAccountAccountIdOrdersPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2003>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place Orders (Support bracket orders)
     * You can pass a list of orders here 
     * @param {String} accountId account id
     * @param {module:model/Body} body order request info
     * @param {module:api/OrderApi~iserverAccountAccountIdOrdersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2003>}
     */
    this.iserverAccountAccountIdOrdersPost = function(accountId, body, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling iserverAccountAccountIdOrdersPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverAccountAccountIdOrdersPost");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = [InlineResponse2003];

      return this.apiClient.callApi(
        '/iserver/account/{accountId}/orders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverAccountOrdersGet operation.
     * @callback module:api/OrderApi~iserverAccountOrdersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Live Orders
     * The end-point is meant to be used in polling mode, e.g. requesting every x seconds. The response will contain two objects, one is notification, the other is orders.  Orders is the list of orders (cancelled, filled, submitted) with activity in the current day.  Notifications contains information about execute orders as they happen, see status field. 
     * @param {module:api/OrderApi~iserverAccountOrdersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.iserverAccountOrdersGet = function(callback) {
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
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/iserver/account/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iserverReplyReplyidPost operation.
     * @callback module:api/OrderApi~iserverReplyReplyidPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place Order Reply
     * Reply to questions when placing orders and submit orders
     * @param {String} replyid Please use the \"id\" from the response of \"Place Order\" end-point
     * @param {module:model/Body1} body Answer to question
     * @param {module:api/OrderApi~iserverReplyReplyidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004>}
     */
    this.iserverReplyReplyidPost = function(replyid, body, callback) {
      var postBody = body;

      // verify the required parameter 'replyid' is set
      if (replyid === undefined || replyid === null) {
        throw new Error("Missing the required parameter 'replyid' when calling iserverReplyReplyidPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iserverReplyReplyidPost");
      }


      var pathParams = {
        'replyid': replyid
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
      var returnType = [InlineResponse2004];

      return this.apiClient.callApi(
        '/iserver/reply/{replyid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
