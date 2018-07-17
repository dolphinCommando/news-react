import React from 'react';
import API from '../../util/API';
import NewsCard from '../../components/NewsCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    API.getScrape()
      .then(nytScrape => {
        console.log(nytScrape);
        this.setState({
          articles: nytScrape.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSave(data) {
    API.saveArticle(data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
  }
  render() {
    const newsCards = this.state.articles.map(element =>
      <NewsCard 
        title={element.title} 
        url={element.url} 
        date={element.date}
        summary={element.summary}
        message={'Save'}
        onClick={() => this.handleSave(element)}/>
    );
    return (
      <div>
      <h1>New Articles</h1>
      <div className="news-container">{newsCards}</div>
      </div>
    );
  }
}

export default Home;