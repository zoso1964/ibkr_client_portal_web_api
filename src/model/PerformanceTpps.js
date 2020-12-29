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
    define(['ApiClient', 'model/PerformanceCpsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PerformanceCpsData'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.PerformanceTpps = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.PerformanceCpsData);
  }
}(this, function(ApiClient, PerformanceCpsData) {
  'use strict';

  /**
   * The PerformanceTpps model module.
   * @module model/PerformanceTpps
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PerformanceTpps</code>.
   * Time period performance data
   * @alias module:model/PerformanceTpps
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PerformanceTpps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerformanceTpps} obj Optional instance to populate.
   * @return {module:model/PerformanceTpps} The populated <code>PerformanceTpps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dates'))
        obj.dates = ApiClient.convertToType(data['dates'], ['String']);
      if (data.hasOwnProperty('freq'))
        obj.freq = ApiClient.convertToType(data['freq'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PerformanceCpsData]);
    }
    return obj;
  }

  /**
   * array of dates, the length should be same as the length of returns inside data.
   * @member {Array.<String>} dates
   */
  exports.prototype.dates = undefined;

  /**
   * M means Month
   * @member {String} freq
   */
  exports.prototype.freq = undefined;

  /**
   * @member {Array.<module:model/PerformanceCpsData>} data
   */
  exports.prototype.data = undefined;

  return exports;

}));