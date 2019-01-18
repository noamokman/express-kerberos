import _ from 'lodash';
import expressKerberos from '../src';

jest.mock('simple-kerberos', () => token => Promise.resolve(token));

describe('express-kerberos', () => {
  describe('exports', () => {
    it('should expose a default function', () => {
      expect(typeof expressKerberos).toBe('function');
    });
  });

  describe('usage', () => {
    it('should return a middleware', () => {
      expect(typeof expressKerberos()).toBe('function');
    });
  });

  describe('middleware', () => {
    it('should attach the username to the req.auth object', done => {
      const middleware = expressKerberos();

      const req = {
        get: _.constant('Negotiate lol')
      };

      middleware(req, null, () => {
        expect(req.auth.username).toBe('lol');
        done();
      });
    });
  });
});
