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
    define(['ApiClient', 'model/Ledger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ledger'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.InlineResponse20013 = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.Ledger);
  }
}(this, function(ApiClient, Ledger) {
  'use strict';

  /**
   * The InlineResponse20013 model module.
   * @module model/InlineResponse20013
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:model/InlineResponse20013
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BASE'))
        obj.BASE = Ledger.constructFromObject(data['BASE']);
    }
    return obj;
  }

  /**
   * @member {module:model/Ledger} BASE
   */
  exports.prototype.BASE = undefined;

  return exports;

}));
