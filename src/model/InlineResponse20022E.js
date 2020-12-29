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
    root.ClientPortalWebApi.InlineResponse20022E = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20022E model module.
   * @module model/InlineResponse20022E
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20022E</code>.
   * device
   * @alias module:model/InlineResponse20022E
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20022E</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20022E} obj Optional instance to populate.
   * @return {module:model/InlineResponse20022E} The populated <code>InlineResponse20022E</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NM'))
        obj.NM = ApiClient.convertToType(data['NM'], 'String');
      if (data.hasOwnProperty('I'))
        obj.I = ApiClient.convertToType(data['I'], 'String');
      if (data.hasOwnProperty('UI'))
        obj.UI = ApiClient.convertToType(data['UI'], 'String');
      if (data.hasOwnProperty('A'))
        obj.A = ApiClient.convertToType(data['A'], 'String');
    }
    return obj;
  }

  /**
   * device name
   * @member {String} NM
   */
  exports.prototype.NM = undefined;

  /**
   * device id
   * @member {String} I
   */
  exports.prototype.I = undefined;

  /**
   * unique device id
   * @member {String} UI
   */
  exports.prototype.UI = undefined;

  /**
   * device is enabled or not 0-true, 1-false.
   * @member {String} A
   */
  exports.prototype.A = undefined;

  return exports;

}));
