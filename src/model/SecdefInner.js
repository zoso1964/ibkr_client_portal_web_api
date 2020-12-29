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
    root.ClientPortalWebApi.SecdefInner = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SecdefInner model module.
   * @module model/SecdefInner
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SecdefInner</code>.
   * security definition information
   * @alias module:model/SecdefInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SecdefInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecdefInner} obj Optional instance to populate.
   * @return {module:model/SecdefInner} The populated <code>SecdefInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conid'))
        obj.conid = ApiClient.convertToType(data['conid'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('assetClass'))
        obj.assetClass = ApiClient.convertToType(data['assetClass'], 'String');
      if (data.hasOwnProperty('expiry'))
        obj.expiry = ApiClient.convertToType(data['expiry'], 'String');
      if (data.hasOwnProperty('lastTradingDay'))
        obj.lastTradingDay = ApiClient.convertToType(data['lastTradingDay'], 'String');
      if (data.hasOwnProperty('group'))
        obj.group = ApiClient.convertToType(data['group'], 'String');
      if (data.hasOwnProperty('putOrCall'))
        obj.putOrCall = ApiClient.convertToType(data['putOrCall'], 'String');
      if (data.hasOwnProperty('sector'))
        obj.sector = ApiClient.convertToType(data['sector'], 'String');
      if (data.hasOwnProperty('sectorGroup'))
        obj.sectorGroup = ApiClient.convertToType(data['sectorGroup'], 'String');
      if (data.hasOwnProperty('strike'))
        obj.strike = ApiClient.convertToType(data['strike'], 'Number');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('undConid'))
        obj.undConid = ApiClient.convertToType(data['undConid'], 'Number');
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} conid
   */
  exports.prototype.conid = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} assetClass
   */
  exports.prototype.assetClass = undefined;

  /**
   * @member {String} expiry
   */
  exports.prototype.expiry = undefined;

  /**
   * @member {String} lastTradingDay
   */
  exports.prototype.lastTradingDay = undefined;

  /**
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * @member {String} putOrCall
   */
  exports.prototype.putOrCall = undefined;

  /**
   * @member {String} sector
   */
  exports.prototype.sector = undefined;

  /**
   * @member {String} sectorGroup
   */
  exports.prototype.sectorGroup = undefined;

  /**
   * @member {Number} strike
   */
  exports.prototype.strike = undefined;

  /**
   * @member {String} ticker
   */
  exports.prototype.ticker = undefined;

  /**
   * @member {Number} undConid
   */
  exports.prototype.undConid = undefined;

  /**
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * @member {Number} pageSize
   */
  exports.prototype.pageSize = undefined;

  return exports;

}));
