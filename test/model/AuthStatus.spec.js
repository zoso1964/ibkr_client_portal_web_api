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
    describe('AuthStatus', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.AuthStatus();
      });

      it('should create an instance of AuthStatus', function() {
        // TODO: update the code to test AuthStatus
        expect(instance).to.be.a(ClientPortalWebApi.AuthStatus);
      });

      it('should have the property authenticated (base name: "authenticated")', function() {
        // TODO: update the code to test the property authenticated
        expect(instance).to.have.property('authenticated');
        // expect(instance.authenticated).to.be(expectedValueLiteral);
      });

      it('should have the property connected (base name: "connected")', function() {
        // TODO: update the code to test the property connected
        expect(instance).to.have.property('connected');
        // expect(instance.connected).to.be(expectedValueLiteral);
      });

      it('should have the property competing (base name: "competing")', function() {
        // TODO: update the code to test the property competing
        expect(instance).to.have.property('competing');
        // expect(instance.competing).to.be(expectedValueLiteral);
      });

      it('should have the property fail (base name: "fail")', function() {
        // TODO: update the code to test the property fail
        expect(instance).to.have.property('fail');
        // expect(instance.fail).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property prompts (base name: "prompts")', function() {
        // TODO: update the code to test the property prompts
        expect(instance).to.have.property('prompts');
        // expect(instance.prompts).to.be(expectedValueLiteral);
      });

    });
  });

}));
