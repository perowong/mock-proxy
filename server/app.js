const paths = require('./utils/paths');
const args  = process.argv.slice(2);

const express        = require('express'),
      proxy          = require('express-http-proxy'),
      mockMiddleware = require('./middleware/mock'),
      conf           = require(paths.conf);

const app = express();

app.use('/proxy', mockMiddleware);
app.use('/proxy', proxy(args[0] === 'test' ? conf.TEST_REFERER : conf.PROD_REFERER));

app.listen(conf.PORT, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('\n==> 🌎  Listening on port %s. Request localhost:%s/proxy/xxx.', conf.PORT, conf.PORT);
      console.log(' ==>ENV=%s', args[0]);
    }
  });
