const express        = require('express'),
      proxy          = require('express-http-proxy'),
      mockMiddleware = require('./middleware/mock'),
      appConfig      = require('./config');

const app = express();

app.use('/proxy', mockMiddleware);
app.use('/proxy', proxy(process.env.NODE_ENV === 'development' ? appConfig.TEST_REFERER : appConfig.PROD_REFERER));

app.listen(appConfig.PORT, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('\n==> 🌎  Listening on port %s. Request localhost:%s/proxy/xxx.', appConfig.PORT, appConfig.PORT);
      console.log('==>NODE_ENV=%s', process.env.NODE_ENV);
    }
  });
