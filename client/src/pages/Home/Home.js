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
        //console.log(nytScrape);
        this.setState({
          articles: nytScrape.data
        })
      })
      .catch(err => {
        //console.log(err);
      })
  }

  componentDidUpdate() {
    this.loadSaved();
  }

  handleSave(data) {
    API.saveArticle(data)
    .then(response => {
      //console.log(response);
      this.loadSaved()
    })
    .catch(error => {
      //console.log(error)
    });
  }

  loadSaved = () => {
    API.getArticles()
      .then(dbData => {
        //console.log(dbData);
        let articles2 = Object.assign([], this.state.articles);
        articles2.forEach(article => {
          article.message = 'Save';
          article.buttonClass = 'save';
          article.disabled = false;
          dbData.data.forEach(element => {
            if (article.title === element.title) {
              article.message = 'Saved';
              article.buttonClass='saved';
              article.disabled=true;
            }
          })
          //console.log(article);
        })
        this.setState({
          articles: articles2
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const newsCards = this.state.articles.map(element =>
      <NewsCard 
        title={element.title} 
        url={element.url} 
        date={element.date}
        summary={element.summary}
        message={element.message}
        buttonClass={element.buttonClass}
        disabled={element.disabled}
        onClick={() => this.handleSave(element)}/>
    );
    return (
      <div>
      <h1>News Headlines</h1>
      <div className="news-container">{newsCards}</div>
      </div>
    );
  }
}

export default Home;