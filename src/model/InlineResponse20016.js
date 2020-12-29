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
    define(['ApiClient', 'model/Futures'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Futures'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.InlineResponse20016 = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.Futures);
  }
}(this, function(ApiClient, Futures) {
  'use strict';

  /**
   * The InlineResponse20016 model module.
   * @module model/InlineResponse20016
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20016</code>.
   * @alias module:model/InlineResponse20016
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20016} obj Optional instance to populate.
   * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('symbol'))
        obj.symbol = Futures.constructFromObject(data['symbol']);
    }
    return obj;
  }

  /**
   * @member {module:model/Futures} symbol
   */
  exports.prototype.symbol = undefined;

  return exports;

}));