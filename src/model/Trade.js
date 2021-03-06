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
    root.ClientPortalWebApi.Trade = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Trade model module.
   * @module model/Trade
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Trade</code>.
   * @alias module:model/Trade
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Trade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Trade} obj Optional instance to populate.
   * @return {module:model/Trade} The populated <code>Trade</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('execution_id'))
        obj.executionId = ApiClient.convertToType(data['execution_id'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('side'))
        obj.side = ApiClient.convertToType(data['side'], 'String');
      if (data.hasOwnProperty('order_description'))
        obj.orderDescription = ApiClient.convertToType(data['order_description'], 'String');
      if (data.hasOwnProperty('trade_time'))
        obj.tradeTime = ApiClient.convertToType(data['trade_time'], 'String');
      if (data.hasOwnProperty('trade_time_r'))
        obj.tradeTimeR = ApiClient.convertToType(data['trade_time_r'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'String');
      if (data.hasOwnProperty('submitter'))
        obj.submitter = ApiClient.convertToType(data['submitter'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('comission'))
        obj.comission = ApiClient.convertToType(data['comission'], 'Number');
      if (data.hasOwnProperty('net_amount'))
        obj.netAmount = ApiClient.convertToType(data['net_amount'], 'Number');
      if (data.hasOwnProperty('account'))
        obj.account = ApiClient.convertToType(data['account'], 'String');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('contract_description_1'))
        obj.contractDescription1 = ApiClient.convertToType(data['contract_description_1'], 'String');
      if (data.hasOwnProperty('sec_type'))
        obj.secType = ApiClient.convertToType(data['sec_type'], 'String');
      if (data.hasOwnProperty('conidex'))
        obj.conidex = ApiClient.convertToType(data['conidex'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('clearing_id'))
        obj.clearingId = ApiClient.convertToType(data['clearing_id'], 'String');
      if (data.hasOwnProperty('clearing_name'))
        obj.clearingName = ApiClient.convertToType(data['clearing_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} executionId
   */
  exports.prototype.executionId = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {String} side
   */
  exports.prototype.side = undefined;

  /**
   * @member {String} orderDescription
   */
  exports.prototype.orderDescription = undefined;

  /**
   * @member {String} tradeTime
   */
  exports.prototype.tradeTime = undefined;

  /**
   * @member {Number} tradeTimeR
   */
  exports.prototype.tradeTimeR = undefined;

  /**
   * @member {String} size
   */
  exports.prototype.size = undefined;

  /**
   * @member {String} price
   */
  exports.prototype.price = undefined;

  /**
   * @member {String} submitter
   */
  exports.prototype.submitter = undefined;

  /**
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * @member {Number} comission
   */
  exports.prototype.comission = undefined;

  /**
   * @member {Number} netAmount
   */
  exports.prototype.netAmount = undefined;

  /**
   * @member {String} account
   */
  exports.prototype.account = undefined;

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {String} contractDescription1
   */
  exports.prototype.contractDescription1 = undefined;

  /**
   * @member {String} secType
   */
  exports.prototype.secType = undefined;

  /**
   * @member {String} conidex
   */
  exports.prototype.conidex = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {String} clearingId
   */
  exports.prototype.clearingId = undefined;

  /**
   * @member {String} clearingName
   */
  exports.prototype.clearingName = undefined;

  return exports;

}));
