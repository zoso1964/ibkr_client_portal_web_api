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
    root.ClientPortalWebApi.PerformanceCpsData = factory(root.ClientPortalWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PerformanceCpsData model module.
   * @module model/PerformanceCpsData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PerformanceCpsData</code>.
   * @alias module:model/PerformanceCpsData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PerformanceCpsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerformanceCpsData} obj Optional instance to populate.
   * @return {module:model/PerformanceCpsData} The populated <code>PerformanceCpsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('idType'))
        obj.idType = ApiClient.convertToType(data['idType'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'String');
      if (data.hasOwnProperty('baseCurrency'))
        obj.baseCurrency = ApiClient.convertToType(data['baseCurrency'], 'String');
      if (data.hasOwnProperty('returns'))
        obj.returns = ApiClient.convertToType(data['returns'], ['Number']);
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * for example-- acctid
   * @member {String} idType
   */
  exports.prototype.idType = undefined;

  /**
   * start date-- yyyyMMdd
   * @member {String} start
   */
  exports.prototype.start = undefined;

  /**
   * @member {String} baseCurrency
   */
  exports.prototype.baseCurrency = undefined;

  /**
   * each value stands for price change percent of corresponding date in dates array
   * @member {Array.<Number>} returns
   */
  exports.prototype.returns = undefined;

  /**
   * end date-- yyyyMMdd
   * @member {String} end
   */
  exports.prototype.end = undefined;

  return exports;

}));