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
    describe('InlineResponse2005Equity', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.InlineResponse2005Equity();
      });

      it('should create an instance of InlineResponse2005Equity', function() {
        // TODO: update the code to test InlineResponse2005Equity
        expect(instance).to.be.a(ClientPortalWebApi.InlineResponse2005Equity);
      });

      it('should have the property current (base name: "current")', function() {
        // TODO: update the code to test the property current
        expect(instance).to.have.property('current');
        // expect(instance.current).to.be(expectedValueLiteral);
      });

      it('should have the property change (base name: "change")', function() {
        // TODO: update the code to test the property change
        expect(instance).to.have.property('change');
        // expect(instance.change).to.be(expectedValueLiteral);
      });

      it('should have the property after (base name: "after")', function() {
        // TODO: update the code to test the property after
        expect(instance).to.have.property('after');
        // expect(instance.after).to.be(expectedValueLiteral);
      });

    });
  });

}));