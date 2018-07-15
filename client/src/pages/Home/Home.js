import React from 'react';
import API from '../../util/API';
import NewsCard from '../../components/NewsCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{
        title: 'Backyard Vacations',
        url: 'https://www.nytimes.com/',
        date: '07-15-2018'
      },
      {
        title: 'A New Study Proves that Bacon is Healthy for You',
        url: 'https://www.nytimes.com/',
        date: '07-15-2018'
      },
      {
        title: 'Blood Moon is Sign of the End Times',
        url: 'https://www.nytimes.com/',
        date: '07-15-2018'
      }]
    }
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
        onClick={() => this.handleSave(element)}/>
    );
    return (
      <div>
      <h1>Home page</h1>
      <div>{newsCards}</div>
      </div>
    );
  }
}

export default Home;