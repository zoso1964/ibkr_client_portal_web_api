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
    define(['ApiClient', 'model/OrderRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.Body = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.OrderRequest);
  }
}(this, function(ApiClient, OrderRequest) {
  'use strict';

  /**
   * The Body model module.
   * @module model/Body
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('orders'))
        obj.orders = ApiClient.convertToType(data['orders'], [OrderRequest]);
    }
    return obj;
  }

  /**
   * Notes for bracket orders: 1. Children orders will not have its own \"cOID\", so please donot pass \"cOID\" parameter in child order.Instead, they will have a \"parentId\" which must be equal to \"cOID\" of parent. 2. When you cancel a parent order, it will cancel all bracket orders, when you cancel one child order, it will also cancel its sibling order. 
   * @member {Array.<module:model/OrderRequest>} orders
   */
  exports.prototype.orders = undefined;

  return exports;

}));
