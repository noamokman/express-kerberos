import mockery from 'mockery';
import {expect} from 'chai';

describe('express-kerberos', () => {
  describe('exports', () => {
    it('should expose a default function', () => {
      expect(require('../src').default).to.be.a('function');
    });
  });

  describe('usage', () => {
    it('should return a middleware', () => {
      expect(require('../src').default()).to.be.a('function');
    });
  });

  describe('middleware', () => {
    let expressKerberos;

    before(function () {
      this.timeout(5000);

      mockery.registerMock('simple-kerberos', token => Promise.resolve(token));

      mockery.enable({
        useCleanCache: true,
        warnOnReplace: false,
        warnOnUnregistered: false
      });

      expressKerberos = require('../src').default;
    });

    after(() => {
      mockery.disable();
    });

    it('should return a middleware', done => {
      const middleware = expressKerberos();

      middleware({
        get () {
          return 'Negotiate lol';
        }
      }, null, username => {
        expect(username).to.equal('lol');
        done();
      });
    });
  });
});