const newsRouter = require('./news.route.js');
const siteRouter = require('./site.route.js');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}

module.exports = route;
