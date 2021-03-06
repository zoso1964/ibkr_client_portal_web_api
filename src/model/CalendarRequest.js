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
    define(['ApiClient', 'model/CalendarRequestDate', 'model/CalendarRequestFilters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CalendarRequestDate'), require('./CalendarRequestFilters'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.CalendarRequest = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.CalendarRequestDate, root.ClientPortalWebApi.CalendarRequestFilters);
  }
}(this, function(ApiClient, CalendarRequestDate, CalendarRequestFilters) {
  'use strict';

  /**
   * The CalendarRequest model module.
   * @module model/CalendarRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CalendarRequest</code>.
   * @alias module:model/CalendarRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CalendarRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CalendarRequest} obj Optional instance to populate.
   * @return {module:model/CalendarRequest} The populated <code>CalendarRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date'))
        obj._date = CalendarRequestDate.constructFromObject(data['date']);
      if (data.hasOwnProperty('filters'))
        obj.filters = CalendarRequestFilters.constructFromObject(data['filters']);
    }
    return obj;
  }

  /**
   * @member {module:model/CalendarRequestDate} _date
   */
  exports.prototype._date = undefined;

  /**
   * @member {module:model/CalendarRequestFilters} filters
   */
  exports.prototype.filters = undefined;

  return exports;

}));
