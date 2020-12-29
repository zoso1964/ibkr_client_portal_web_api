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
    define(['ApiClient', 'model/AllocationInnerGroupLong', 'model/AllocationInnerGroupShort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AllocationInnerGroupLong'), require('./AllocationInnerGroupShort'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.AllocationInnerGroup = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.AllocationInnerGroupLong, root.ClientPortalWebApi.AllocationInnerGroupShort);
  }
}(this, function(ApiClient, AllocationInnerGroupLong, AllocationInnerGroupShort) {
  'use strict';

  /**
   * The AllocationInnerGroup model module.
   * @module model/AllocationInnerGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllocationInnerGroup</code>.
   * portfolio allocation by group
   * @alias module:model/AllocationInnerGroup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AllocationInnerGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationInnerGroup} obj Optional instance to populate.
   * @return {module:model/AllocationInnerGroup} The populated <code>AllocationInnerGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('long'))
        obj._long = AllocationInnerGroupLong.constructFromObject(data['long']);
      if (data.hasOwnProperty('short'))
        obj._short = AllocationInnerGroupShort.constructFromObject(data['short']);
    }
    return obj;
  }

  /**
   * @member {module:model/AllocationInnerGroupLong} _long
   */
  exports.prototype._long = undefined;

  /**
   * @member {module:model/AllocationInnerGroupShort} _short
   */
  exports.prototype._short = undefined;

  return exports;

}));
