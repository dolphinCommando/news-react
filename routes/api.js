const router = require('express').Router();
const controller = require('../controllers/articleController');
const scrape = require('../controllers/scrape');

router
  .route('/api/articles/')
  .get(controller.findArticles)
  .post(controller.createArticle);

router.route('/api/articles/:id')
  .delete(controller.deleteArticle);

router.route('/api/scrape')
  .get(controller.scrapeNYT);


module.exports = router;

