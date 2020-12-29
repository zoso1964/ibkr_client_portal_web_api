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
    root.ClientPortalWebApi.AuthStatus = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AuthStatus model module.
   * @module model/AuthStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthStatus</code>.
   * @alias module:model/AuthStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AuthStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthStatus} obj Optional instance to populate.
   * @return {module:model/AuthStatus} The populated <code>AuthStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authenticated'))
        obj.authenticated = ApiClient.convertToType(data['authenticated'], 'Boolean');
      if (data.hasOwnProperty('connected'))
        obj.connected = ApiClient.convertToType(data['connected'], 'Boolean');
      if (data.hasOwnProperty('competing'))
        obj.competing = ApiClient.convertToType(data['competing'], 'Boolean');
      if (data.hasOwnProperty('fail'))
        obj.fail = ApiClient.convertToType(data['fail'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('prompts'))
        obj.prompts = ApiClient.convertToType(data['prompts'], ['String']);
    }
    return obj;
  }

  /**
   * Brokerage session is authenticated
   * @member {Boolean} authenticated
   */
  exports.prototype.authenticated = undefined;

  /**
   * Connected to backend
   * @member {Boolean} connected
   */
  exports.prototype.connected = undefined;

  /**
   * Brokerage session is competing, e.g. user is logged in to IBKR Mobile, WebTrader, TWS or other trading platforms.
   * @member {Boolean} competing
   */
  exports.prototype.competing = undefined;

  /**
   * Authentication failed, why.
   * @member {String} fail
   */
  exports.prototype.fail = undefined;

  /**
   * System messages that may affect trading
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * Prompt messages that may affect trading or the account
   * @member {Array.<String>} prompts
   */
  exports.prototype.prompts = undefined;

  return exports;

}));
