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
    root.ClientPortalWebApi.InlineResponse2009InstrumentList = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2009InstrumentList model module.
   * @module model/InlineResponse2009InstrumentList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2009InstrumentList</code>.
   * @alias module:model/InlineResponse2009InstrumentList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2009InstrumentList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009InstrumentList} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009InstrumentList} The populated <code>InlineResponse2009InstrumentList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('display_name'))
        obj.displayName = ApiClient.convertToType(data['display_name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('filters'))
        obj.filters = ApiClient.convertToType(data['filters'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {Array.<String>} filters
   */
  exports.prototype.filters = undefined;

  return exports;

}));
