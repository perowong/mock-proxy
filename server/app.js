const paths = require('./utils/paths');

const express        = require('express'),
      proxy          = require('express-http-proxy'),
      mockMiddleware = require('./middleware/mock'),
      conf           = require(paths.conf);

const app = express();

app.use('/proxy', mockMiddleware);
app.use('/proxy', proxy(process.env.NODE_ENV === 'development' ? conf.TEST_REFERER : conf.PROD_REFERER));

app.listen(conf.PORT, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('\n==> 🌎  Listening on port %s. Request localhost:%s/proxy/xxx.', conf.PORT, conf.PORT);
      console.log('==>NODE_ENV=%s', process.env.NODE_ENV);
    }
  });
