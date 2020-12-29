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
    root.ClientPortalWebApi.Body4 = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Body4 model module.
   * @module model/Body4
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body4</code>.
   * @alias module:model/Body4
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Body4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body4} obj Optional instance to populate.
   * @return {module:model/Body4} The populated <code>Body4</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('acctIds'))
        obj.acctIds = ApiClient.convertToType(data['acctIds'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} acctIds
   */
  exports.prototype.acctIds = undefined;

  return exports;

}));
