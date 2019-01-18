import expressAuthNegotiate from 'express-auth-negotiate';
import simpleKerberos from 'simple-kerberos';
import composable from 'composable-middleware';

export default () => composable()
  .use(expressAuthNegotiate())
  .use((req, res, next) => {
    simpleKerberos(req.auth.token)
      .then(username => {
        req.auth.username = username;
        next();
      }, next);
  });