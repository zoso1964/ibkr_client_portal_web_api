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
    root.ClientPortalWebApi.ModifyOrder = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModifyOrder model module.
   * @module model/ModifyOrder
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModifyOrder</code>.
   * @alias module:model/ModifyOrder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModifyOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifyOrder} obj Optional instance to populate.
   * @return {module:model/ModifyOrder} The populated <code>ModifyOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('acctId'))
        obj.acctId = ApiClient.convertToType(data['acctId'], 'String');
      if (data.hasOwnProperty('conid'))
        obj.conid = ApiClient.convertToType(data['conid'], 'Number');
      if (data.hasOwnProperty('orderId'))
        obj.orderId = ApiClient.convertToType(data['orderId'], 'Number');
      if (data.hasOwnProperty('orderType'))
        obj.orderType = ApiClient.convertToType(data['orderType'], 'String');
      if (data.hasOwnProperty('outsideRTH'))
        obj.outsideRTH = ApiClient.convertToType(data['outsideRTH'], 'Boolean');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('auxPrice'))
        obj.auxPrice = ApiClient.convertToType(data['auxPrice'], 'Number');
      if (data.hasOwnProperty('side'))
        obj.side = ApiClient.convertToType(data['side'], 'String');
      if (data.hasOwnProperty('listingExchange'))
        obj.listingExchange = ApiClient.convertToType(data['listingExchange'], 'String');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('tif'))
        obj.tif = ApiClient.convertToType(data['tif'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} acctId
   */
  exports.prototype.acctId = undefined;

  /**
   * @member {Number} conid
   */
  exports.prototype.conid = undefined;

  /**
   * customer orderid
   * @member {Number} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * for example LMT
   * @member {String} orderType
   */
  exports.prototype.orderType = undefined;

  /**
   * @member {Boolean} outsideRTH
   */
  exports.prototype.outsideRTH = undefined;

  /**
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * @member {Number} auxPrice
   */
  exports.prototype.auxPrice = undefined;

  /**
   * SELL or BUY
   * @member {String} side
   */
  exports.prototype.side = undefined;

  /**
   * optional, not required
   * @member {String} listingExchange
   */
  exports.prototype.listingExchange = undefined;

  /**
   * @member {String} ticker
   */
  exports.prototype.ticker = undefined;

  /**
   * for example DAY
   * @member {String} tif
   */
  exports.prototype.tif = undefined;

  /**
   * usually integer, for some special cases can be float numbers
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));