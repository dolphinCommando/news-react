const router = require('express').Router;
const controller = require('../controllers/articleController');

router
  .route('/api/articles')
  .get(controller.findArticles)
  .post(controller.createArticle)
  .delete(controller.deleteArticle);

module.exports = router;

