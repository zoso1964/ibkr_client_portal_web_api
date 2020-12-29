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
    root.ClientPortalWebApi.InlineResponse20020 = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20020 model module.
   * @module model/InlineResponse20020
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20020</code>.
   * @alias module:model/InlineResponse20020
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20020} obj Optional instance to populate.
   * @return {module:model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DT'))
        obj.DT = ApiClient.convertToType(data['DT'], 'String');
      if (data.hasOwnProperty('FC'))
        obj.FC = ApiClient.convertToType(data['FC'], 'String');
    }
    return obj;
  }

  /**
   * disclaimer message
   * @member {String} DT
   */
  exports.prototype.DT = undefined;

  /**
   * fyi code
   * @member {String} FC
   */
  exports.prototype.FC = undefined;

  return exports;

}));
