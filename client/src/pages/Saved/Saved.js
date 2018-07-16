import React from 'react';
import API from '../../util/API'
import NewsCard from '../../components/NewsCard';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.retrieveArticles();
  }

  handleDelete(id) {
    API.deleteArticle(id).then(response => {
      console.log(response);
      this.retrieveArticles();
    }).catch(error => {
      console.log(error);
    });
  }

  retrieveArticles() {
    API.getArticles().then(dbArticles => {
      console.log('Articles in DB: ' + JSON.stringify(dbArticles));
      const newArticles = dbArticles.data;
      this.setState({
        articles: newArticles
      });
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const newsCards = this.state.articles.map(element =>
      <NewsCard 
        title={element.title} 
        url={element.url} 
        date={element.date}
        message={'Delete'}
        onClick={() => this.handleDelete(element._id)}/>
    );
    return (
      <div>
      <h1>Saved page</h1>
      <div>{newsCards}</div>
      </div>
    );
  }
}


export default Saved;