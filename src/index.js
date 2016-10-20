import expressAuthNegotiate from 'express-auth-negotiate';
import simpleKerberos from 'simple-kerberos';
import composable from 'composable-middleware';

export default function () {
  return composable()
    .use(expressAuthNegotiate())
    .use((req, res, next) => {
      simpleKerberos(req.auth.token)
        .then(username => {
          req.auth.username = username;
          next();
        }, next);
    });
}