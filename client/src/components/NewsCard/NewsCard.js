import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => (
  <div className="news-card">
    <h3 className="news-header">{props.title}</h3>
    <hr />
    <div className="news-body">
      <p>{props.date}</p>
      <a href={props.url} target="_blank">NYT</a>
      <p>{props.summary}</p>
    </div>
    <button className="save" onClick={() => props.onClick()}>{props.message}</button> 
  </div>
);

export default NewsCard;