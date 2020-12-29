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
    describe('AllocationInner', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.AllocationInner();
      });

      it('should create an instance of AllocationInner', function() {
        // TODO: update the code to test AllocationInner
        expect(instance).to.be.a(ClientPortalWebApi.AllocationInner);
      });

      it('should have the property assetClass (base name: "assetClass")', function() {
        // TODO: update the code to test the property assetClass
        expect(instance).to.have.property('assetClass');
        // expect(instance.assetClass).to.be(expectedValueLiteral);
      });

      it('should have the property sector (base name: "sector")', function() {
        // TODO: update the code to test the property sector
        expect(instance).to.have.property('sector');
        // expect(instance.sector).to.be(expectedValueLiteral);
      });

      it('should have the property group (base name: "group")', function() {
        // TODO: update the code to test the property group
        expect(instance).to.have.property('group');
        // expect(instance.group).to.be(expectedValueLiteral);
      });

    });
  });

}));
