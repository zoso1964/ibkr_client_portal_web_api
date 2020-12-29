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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.AllocationInnerGroupShort = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AllocationInnerGroupShort model module.
   * @module model/AllocationInnerGroupShort
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllocationInnerGroupShort</code>.
   * short positions allocation
   * @alias module:model/AllocationInnerGroupShort
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AllocationInnerGroupShort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationInnerGroupShort} obj Optional instance to populate.
   * @return {module:model/AllocationInnerGroupShort} The populated <code>AllocationInnerGroupShort</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Banks'))
        obj.banks = ApiClient.convertToType(data['Banks'], 'Number');
      if (data.hasOwnProperty('Airlines'))
        obj.airlines = ApiClient.convertToType(data['Airlines'], 'Number');
      if (data.hasOwnProperty('Internet'))
        obj.internet = ApiClient.convertToType(data['Internet'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} banks
   */
  exports.prototype.banks = undefined;

  /**
   * @member {Number} airlines
   */
  exports.prototype.airlines = undefined;

  /**
   * @member {Number} internet
   */
  exports.prototype.internet = undefined;

  return exports;

}));