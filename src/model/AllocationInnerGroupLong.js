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
    root.ClientPortalWebApi.AllocationInnerGroupLong = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AllocationInnerGroupLong model module.
   * @module model/AllocationInnerGroupLong
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllocationInnerGroupLong</code>.
   * long positions allocation
   * @alias module:model/AllocationInnerGroupLong
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AllocationInnerGroupLong</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationInnerGroupLong} obj Optional instance to populate.
   * @return {module:model/AllocationInnerGroupLong} The populated <code>AllocationInnerGroupLong</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Computers'))
        obj.computers = ApiClient.convertToType(data['Computers'], 'Number');
      if (data.hasOwnProperty('Semiconductors'))
        obj.semiconductors = ApiClient.convertToType(data['Semiconductors'], 'Number');
      if (data.hasOwnProperty('Others'))
        obj.others = ApiClient.convertToType(data['Others'], 'Number');
      if (data.hasOwnProperty('Chemicals'))
        obj.chemicals = ApiClient.convertToType(data['Chemicals'], 'Number');
      if (data.hasOwnProperty('Apparel'))
        obj.apparel = ApiClient.convertToType(data['Apparel'], 'Number');
      if (data.hasOwnProperty('Communications'))
        obj.communications = ApiClient.convertToType(data['Communications'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} computers
   */
  exports.prototype.computers = undefined;

  /**
   * @member {Number} semiconductors
   */
  exports.prototype.semiconductors = undefined;

  /**
   * @member {Number} others
   */
  exports.prototype.others = undefined;

  /**
   * @member {Number} chemicals
   */
  exports.prototype.chemicals = undefined;

  /**
   * @member {Number} apparel
   */
  exports.prototype.apparel = undefined;

  /**
   * @member {Number} communications
   */
  exports.prototype.communications = undefined;

  return exports;

}));