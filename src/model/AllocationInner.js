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
    define(['ApiClient', 'model/AllocationInnerAssetClass', 'model/AllocationInnerGroup', 'model/AllocationInnerSector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AllocationInnerAssetClass'), require('./AllocationInnerGroup'), require('./AllocationInnerSector'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.AllocationInner = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.AllocationInnerAssetClass, root.ClientPortalWebApi.AllocationInnerGroup, root.ClientPortalWebApi.AllocationInnerSector);
  }
}(this, function(ApiClient, AllocationInnerAssetClass, AllocationInnerGroup, AllocationInnerSector) {
  'use strict';

  /**
   * The AllocationInner model module.
   * @module model/AllocationInner
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllocationInner</code>.
   * allocation
   * @alias module:model/AllocationInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AllocationInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationInner} obj Optional instance to populate.
   * @return {module:model/AllocationInner} The populated <code>AllocationInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assetClass'))
        obj.assetClass = AllocationInnerAssetClass.constructFromObject(data['assetClass']);
      if (data.hasOwnProperty('sector'))
        obj.sector = AllocationInnerSector.constructFromObject(data['sector']);
      if (data.hasOwnProperty('group'))
        obj.group = AllocationInnerGroup.constructFromObject(data['group']);
    }
    return obj;
  }

  /**
   * @member {module:model/AllocationInnerAssetClass} assetClass
   */
  exports.prototype.assetClass = undefined;

  /**
   * @member {module:model/AllocationInnerSector} sector
   */
  exports.prototype.sector = undefined;

  /**
   * @member {module:model/AllocationInnerGroup} group
   */
  exports.prototype.group = undefined;

  return exports;

}));
