# express-kerberos [![Build Status](https://travis-ci.org/noamokman/express-kerberos.svg?branch=master)](https://travis-ci.org/noamokman/express-kerberos) [![Coverage Status](https://coveralls.io/repos/github/noamokman/express-kerberos/badge.svg?branch=master)](https://coveralls.io/github/noamokman/express-kerberos?branch=master)

express middleware for simple kerberos authentication

## Installation
``` bash
$ [sudo] npm install express-kerberos --save
```

## Usage

### Example
``` js
import express from 'express';
import expressKerberos from 'express-kerberos';

const app = express();

app.get('/', expressKerberos(), (req, res) => {
  res.send(`Hello ${req.auth.username}!`);
});

```

## Related

- [express-auth-negotiate](https://github.com/omrilitov/express-auth-negotiate) - The underlying express middleware to get the token
- [simple-kerberos](https://github.com/noamokman/simple-kerberos) - The module used for kerberos authentication

## License

[MIT](LICENSE)