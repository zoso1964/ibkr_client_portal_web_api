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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ClientPortalWebApi);
  }
}(this, function(expect, ClientPortalWebApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Allocation', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.Allocation();
      });

      it('should create an instance of Allocation', function() {
        // TODO: update the code to test Allocation
        expect(instance).to.be.a(ClientPortalWebApi.Allocation);
      });

    });
  });

}));
