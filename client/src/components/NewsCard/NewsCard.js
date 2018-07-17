import React from 'react';
import './NewsCard.css';
import '../ArticleButton';
import ArticleButton from '../ArticleButton/ArticleButton';

const NewsCard = (props) => (
  <div className="news-card">
    <h3 className="news-header">{props.title}</h3>
    <hr />
    <div className="news-body">
      <p>{props.date}</p>
      <a href={props.url} target="_blank">NYT</a>
      <p>{props.summary}</p>
    </div>
    <ArticleButton message={props.message} onClick={props.onClick}/>
  </div>
);

export default NewsCard;