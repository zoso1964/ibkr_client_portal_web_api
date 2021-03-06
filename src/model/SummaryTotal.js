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
    root.ClientPortalWebApi.SummaryTotal = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SummaryTotal model module.
   * @module model/SummaryTotal
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SummaryTotal</code>.
   * @alias module:model/SummaryTotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SummaryTotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryTotal} obj Optional instance to populate.
   * @return {module:model/SummaryTotal} The populated <code>SummaryTotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chg'))
        obj.chg = ApiClient.convertToType(data['chg'], 'String');
      if (data.hasOwnProperty('rtn'))
        obj.rtn = ApiClient.convertToType(data['rtn'], 'String');
      if (data.hasOwnProperty('incompleteData'))
        obj.incompleteData = ApiClient.convertToType(data['incompleteData'], 'Boolean');
      if (data.hasOwnProperty('endVal'))
        obj.endVal = ApiClient.convertToType(data['endVal'], 'String');
      if (data.hasOwnProperty('startVal'))
        obj.startVal = ApiClient.convertToType(data['startVal'], 'String');
    }
    return obj;
  }

  /**
   * total change amount
   * @member {String} chg
   */
  exports.prototype.chg = undefined;

  /**
   * change percent
   * @member {String} rtn
   */
  exports.prototype.rtn = undefined;

  /**
   * set to true if any external account data is not available for starting or ending date, resulting in potentially unusual total values.
   * @member {Boolean} incompleteData
   */
  exports.prototype.incompleteData = undefined;

  /**
   * @member {String} endVal
   */
  exports.prototype.endVal = undefined;

  /**
   * @member {String} startVal
   */
  exports.prototype.startVal = undefined;

  return exports;

}));
