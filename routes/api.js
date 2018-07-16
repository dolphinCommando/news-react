const router = require('express').Router();
const controller = require('../controllers/articleController');

router
  .route('/api/articles/')
  .get(controller.findArticles)
  .post(controller.createArticle);

router.route('/api/articles/:id')
  .delete(controller.deleteArticle);

module.exports = router;

