import axios from 'axios';

export default {
  getArticles: function() {
    return axios.get('/api/articles/');
  },
  saveArticle: function(data) {
    return axios.post('/api/articles/', data);
  },
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
}