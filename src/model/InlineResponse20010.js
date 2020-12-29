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
    root.ClientPortalWebApi.InlineResponse20010 = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20010 model module.
   * @module model/InlineResponse20010
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20010</code>.
   * @alias module:model/InlineResponse20010
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20010} obj Optional instance to populate.
   * @return {module:model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('server_id'))
        obj.serverId = ApiClient.convertToType(data['server_id'], 'String');
      if (data.hasOwnProperty('column_name'))
        obj.columnName = ApiClient.convertToType(data['column_name'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('conidex'))
        obj.conidex = ApiClient.convertToType(data['conidex'], 'String');
      if (data.hasOwnProperty('con_id'))
        obj.conId = ApiClient.convertToType(data['con_id'], 'Number');
      if (data.hasOwnProperty('available_chart_periods'))
        obj.availableChartPeriods = ApiClient.convertToType(data['available_chart_periods'], 'String');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('contract_description_1'))
        obj.contractDescription1 = ApiClient.convertToType(data['contract_description_1'], 'String');
      if (data.hasOwnProperty('listing_exchange'))
        obj.listingExchange = ApiClient.convertToType(data['listing_exchange'], 'String');
      if (data.hasOwnProperty('sec_type'))
        obj.secType = ApiClient.convertToType(data['sec_type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} serverId
   */
  exports.prototype.serverId = undefined;

  /**
   * @member {String} columnName
   */
  exports.prototype.columnName = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {String} conidex
   */
  exports.prototype.conidex = undefined;

  /**
   * @member {Number} conId
   */
  exports.prototype.conId = undefined;

  /**
   * @member {String} availableChartPeriods
   */
  exports.prototype.availableChartPeriods = undefined;

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {String} contractDescription1
   */
  exports.prototype.contractDescription1 = undefined;

  /**
   * @member {String} listingExchange
   */
  exports.prototype.listingExchange = undefined;

  /**
   * @member {String} secType
   */
  exports.prototype.secType = undefined;

  return exports;

}));
