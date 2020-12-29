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
    describe('InlineResponse20022E', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.InlineResponse20022E();
      });

      it('should create an instance of InlineResponse20022E', function() {
        // TODO: update the code to test InlineResponse20022E
        expect(instance).to.be.a(ClientPortalWebApi.InlineResponse20022E);
      });

      it('should have the property NM (base name: "NM")', function() {
        // TODO: update the code to test the property NM
        expect(instance).to.have.property('NM');
        // expect(instance.NM).to.be(expectedValueLiteral);
      });

      it('should have the property I (base name: "I")', function() {
        // TODO: update the code to test the property I
        expect(instance).to.have.property('I');
        // expect(instance.I).to.be(expectedValueLiteral);
      });

      it('should have the property UI (base name: "UI")', function() {
        // TODO: update the code to test the property UI
        expect(instance).to.have.property('UI');
        // expect(instance.UI).to.be(expectedValueLiteral);
      });

      it('should have the property A (base name: "A")', function() {
        // TODO: update the code to test the property A
        expect(instance).to.have.property('A');
        // expect(instance.A).to.be(expectedValueLiteral);
      });

    });
  });

}));