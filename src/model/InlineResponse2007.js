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
    root.ClientPortalWebApi.InlineResponse2007 = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2007 model module.
   * @module model/InlineResponse2007
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:model/InlineResponse2007
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('31'))
        obj._31 = ApiClient.convertToType(data['31'], 'String');
      if (data.hasOwnProperty('55'))
        obj._55 = ApiClient.convertToType(data['55'], 'String');
      if (data.hasOwnProperty('58'))
        obj._58 = ApiClient.convertToType(data['58'], 'String');
      if (data.hasOwnProperty('70'))
        obj._70 = ApiClient.convertToType(data['70'], 'String');
      if (data.hasOwnProperty('71'))
        obj._71 = ApiClient.convertToType(data['71'], 'String');
      if (data.hasOwnProperty('72'))
        obj._72 = ApiClient.convertToType(data['72'], 'String');
      if (data.hasOwnProperty('73'))
        obj._73 = ApiClient.convertToType(data['73'], 'String');
      if (data.hasOwnProperty('74'))
        obj._74 = ApiClient.convertToType(data['74'], 'String');
      if (data.hasOwnProperty('75'))
        obj._75 = ApiClient.convertToType(data['75'], 'String');
      if (data.hasOwnProperty('76'))
        obj._76 = ApiClient.convertToType(data['76'], 'String');
      if (data.hasOwnProperty('77'))
        obj._77 = ApiClient.convertToType(data['77'], 'String');
      if (data.hasOwnProperty('78'))
        obj._78 = ApiClient.convertToType(data['78'], 'String');
      if (data.hasOwnProperty('82'))
        obj._82 = ApiClient.convertToType(data['82'], 'String');
      if (data.hasOwnProperty('83'))
        obj._83 = ApiClient.convertToType(data['83'], 'String');
      if (data.hasOwnProperty('84'))
        obj._84 = ApiClient.convertToType(data['84'], 'String');
      if (data.hasOwnProperty('85'))
        obj._85 = ApiClient.convertToType(data['85'], 'String');
      if (data.hasOwnProperty('86'))
        obj._86 = ApiClient.convertToType(data['86'], 'String');
      if (data.hasOwnProperty('87'))
        obj._87 = ApiClient.convertToType(data['87'], 'String');
      if (data.hasOwnProperty('88'))
        obj._88 = ApiClient.convertToType(data['88'], 'String');
      if (data.hasOwnProperty('6004'))
        obj._6004 = ApiClient.convertToType(data['6004'], 'String');
      if (data.hasOwnProperty('6008'))
        obj._6008 = ApiClient.convertToType(data['6008'], 'String');
      if (data.hasOwnProperty('6070'))
        obj._6070 = ApiClient.convertToType(data['6070'], 'String');
      if (data.hasOwnProperty('6072'))
        obj._6072 = ApiClient.convertToType(data['6072'], 'String');
      if (data.hasOwnProperty('6073'))
        obj._6073 = ApiClient.convertToType(data['6073'], 'String');
      if (data.hasOwnProperty('6119'))
        obj._6119 = ApiClient.convertToType(data['6119'], 'String');
      if (data.hasOwnProperty('6457'))
        obj._6457 = ApiClient.convertToType(data['6457'], 'String');
      if (data.hasOwnProperty('6509'))
        obj._6509 = ApiClient.convertToType(data['6509'], 'String');
      if (data.hasOwnProperty('7051'))
        obj._7051 = ApiClient.convertToType(data['7051'], 'String');
      if (data.hasOwnProperty('7094'))
        obj._7094 = ApiClient.convertToType(data['7094'], 'String');
      if (data.hasOwnProperty('7219'))
        obj._7219 = ApiClient.convertToType(data['7219'], 'String');
      if (data.hasOwnProperty('7220'))
        obj._7220 = ApiClient.convertToType(data['7220'], 'String');
      if (data.hasOwnProperty('7221'))
        obj._7221 = ApiClient.convertToType(data['7221'], 'String');
      if (data.hasOwnProperty('7280'))
        obj._7280 = ApiClient.convertToType(data['7280'], 'String');
      if (data.hasOwnProperty('7281'))
        obj._7281 = ApiClient.convertToType(data['7281'], 'String');
      if (data.hasOwnProperty('7282'))
        obj._7282 = ApiClient.convertToType(data['7282'], 'String');
      if (data.hasOwnProperty('7284'))
        obj._7284 = ApiClient.convertToType(data['7284'], 'String');
      if (data.hasOwnProperty('7285'))
        obj._7285 = ApiClient.convertToType(data['7285'], 'String');
      if (data.hasOwnProperty('7286'))
        obj._7286 = ApiClient.convertToType(data['7286'], 'String');
      if (data.hasOwnProperty('7287'))
        obj._7287 = ApiClient.convertToType(data['7287'], 'String');
      if (data.hasOwnProperty('7288'))
        obj._7288 = ApiClient.convertToType(data['7288'], 'String');
      if (data.hasOwnProperty('7289'))
        obj._7289 = ApiClient.convertToType(data['7289'], 'String');
      if (data.hasOwnProperty('7290'))
        obj._7290 = ApiClient.convertToType(data['7290'], 'String');
      if (data.hasOwnProperty('7291'))
        obj._7291 = ApiClient.convertToType(data['7291'], 'String');
      if (data.hasOwnProperty('7292'))
        obj._7292 = ApiClient.convertToType(data['7292'], 'String');
      if (data.hasOwnProperty('7293'))
        obj._7293 = ApiClient.convertToType(data['7293'], 'String');
      if (data.hasOwnProperty('7294'))
        obj._7294 = ApiClient.convertToType(data['7294'], 'String');
      if (data.hasOwnProperty('7295'))
        obj._7295 = ApiClient.convertToType(data['7295'], 'String');
      if (data.hasOwnProperty('7296'))
        obj._7296 = ApiClient.convertToType(data['7296'], 'String');
      if (data.hasOwnProperty('7633'))
        obj._7633 = ApiClient.convertToType(data['7633'], 'String');
      if (data.hasOwnProperty('server_id'))
        obj.serverId = ApiClient.convertToType(data['server_id'], 'String');
      if (data.hasOwnProperty('conid'))
        obj.conid = ApiClient.convertToType(data['conid'], 'Number');
      if (data.hasOwnProperty('_updated'))
        obj.updated = ApiClient.convertToType(data['_updated'], 'Number');
    }
    return obj;
  }

  /**
   * Last Price
   * @member {String} _31
   */
  exports.prototype._31 = undefined;

  /**
   * Symbol
   * @member {String} _55
   */
  exports.prototype._55 = undefined;

  /**
   * Text
   * @member {String} _58
   */
  exports.prototype._58 = undefined;

  /**
   * High
   * @member {String} _70
   */
  exports.prototype._70 = undefined;

  /**
   * Low
   * @member {String} _71
   */
  exports.prototype._71 = undefined;

  /**
   * Position
   * @member {String} _72
   */
  exports.prototype._72 = undefined;

  /**
   * Market Value
   * @member {String} _73
   */
  exports.prototype._73 = undefined;

  /**
   * Average Price
   * @member {String} _74
   */
  exports.prototype._74 = undefined;

  /**
   * Unrealized PnL
   * @member {String} _75
   */
  exports.prototype._75 = undefined;

  /**
   * @member {String} _76
   */
  exports.prototype._76 = undefined;

  /**
   * @member {String} _77
   */
  exports.prototype._77 = undefined;

  /**
   * @member {String} _78
   */
  exports.prototype._78 = undefined;

  /**
   * Change Price
   * @member {String} _82
   */
  exports.prototype._82 = undefined;

  /**
   * Change Percent
   * @member {String} _83
   */
  exports.prototype._83 = undefined;

  /**
   * Bid Price
   * @member {String} _84
   */
  exports.prototype._84 = undefined;

  /**
   * Ask Size
   * @member {String} _85
   */
  exports.prototype._85 = undefined;

  /**
   * Ask Price
   * @member {String} _86
   */
  exports.prototype._86 = undefined;

  /**
   * Volume
   * @member {String} _87
   */
  exports.prototype._87 = undefined;

  /**
   * Bid Size
   * @member {String} _88
   */
  exports.prototype._88 = undefined;

  /**
   * Exchange
   * @member {String} _6004
   */
  exports.prototype._6004 = undefined;

  /**
   * Conid
   * @member {String} _6008
   */
  exports.prototype._6008 = undefined;

  /**
   * Security Type
   * @member {String} _6070
   */
  exports.prototype._6070 = undefined;

  /**
   * Months
   * @member {String} _6072
   */
  exports.prototype._6072 = undefined;

  /**
   * Regular Expiry
   * @member {String} _6073
   */
  exports.prototype._6073 = undefined;

  /**
   * @member {String} _6119
   */
  exports.prototype._6119 = undefined;

  /**
   * Underlying Conid. Use /trsrv/secdef to get more information about the security
   * @member {String} _6457
   */
  exports.prototype._6457 = undefined;

  /**
   * Market Data Availability. The field may contain two chars. The first char is the primary code: R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed. The second char is the secondary code: P = Snapshot Available, p = Consolidated. 
   * @member {String} _6509
   */
  exports.prototype._6509 = undefined;

  /**
   * @member {String} _7051
   */
  exports.prototype._7051 = undefined;

  /**
   * Conid + Exchange
   * @member {String} _7094
   */
  exports.prototype._7094 = undefined;

  /**
   * Contract Description
   * @member {String} _7219
   */
  exports.prototype._7219 = undefined;

  /**
   * Contract Description
   * @member {String} _7220
   */
  exports.prototype._7220 = undefined;

  /**
   * Listing Exchange
   * @member {String} _7221
   */
  exports.prototype._7221 = undefined;

  /**
   * Industry
   * @member {String} _7280
   */
  exports.prototype._7280 = undefined;

  /**
   * Category
   * @member {String} _7281
   */
  exports.prototype._7281 = undefined;

  /**
   * Average Daily Volume
   * @member {String} _7282
   */
  exports.prototype._7282 = undefined;

  /**
   * Historic Volume (30d)
   * @member {String} _7284
   */
  exports.prototype._7284 = undefined;

  /**
   * Put/Call Ratio
   * @member {String} _7285
   */
  exports.prototype._7285 = undefined;

  /**
   * Dividend Amount
   * @member {String} _7286
   */
  exports.prototype._7286 = undefined;

  /**
   * Dividend Yield %
   * @member {String} _7287
   */
  exports.prototype._7287 = undefined;

  /**
   * Ex-date of the dividend
   * @member {String} _7288
   */
  exports.prototype._7288 = undefined;

  /**
   * Market Cap
   * @member {String} _7289
   */
  exports.prototype._7289 = undefined;

  /**
   * P/E
   * @member {String} _7290
   */
  exports.prototype._7290 = undefined;

  /**
   * EPS
   * @member {String} _7291
   */
  exports.prototype._7291 = undefined;

  /**
   * Cost Basis
   * @member {String} _7292
   */
  exports.prototype._7292 = undefined;

  /**
   * 52 Week High
   * @member {String} _7293
   */
  exports.prototype._7293 = undefined;

  /**
   * 52 Week Low
   * @member {String} _7294
   */
  exports.prototype._7294 = undefined;

  /**
   * Open Price
   * @member {String} _7295
   */
  exports.prototype._7295 = undefined;

  /**
   * Close Price
   * @member {String} _7296
   */
  exports.prototype._7296 = undefined;

  /**
   * Implied volatility of the option
   * @member {String} _7633
   */
  exports.prototype._7633 = undefined;

  /**
   * @member {String} serverId
   */
  exports.prototype.serverId = undefined;

  /**
   * @member {Number} conid
   */
  exports.prototype.conid = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;

  return exports;

}));
