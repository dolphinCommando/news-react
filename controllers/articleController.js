const db = require('../models');
const mongoose = require('mongoose');
// mongoose.Types.ObjectId
const scrape = require('./scrape');

module.exports = {
  findArticles: function(req, res) {
    db.Article
      .find({})
      .sort({title: 1})
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.sendStatus(418).json(err);
      })    
  },
  findArticleById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.sendStatus(418).json(err);
      });
  },

  createArticle: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.sendStatus(418).json(err);
      });
  },

  deleteArticle: function(req, res) {
    db.Article
      .deleteOne({_id: req.params.id})
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.sendStatus(418).json(err);
      })
  },
  scrapeNYT: function(req, res) {
    scrape().then(data => {
      //console.log(data);
      res.json(data);
    }).catch(error => {
      console.log(error)
    })
  }
}
