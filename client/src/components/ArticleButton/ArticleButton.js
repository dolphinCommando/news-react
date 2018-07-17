import React from 'react';
import './ArticleButton.css';

const ArticleButton = props => (
  <button className="submit" onClick={() => props.onClick()}>{props.message}</button> 
);

export default ArticleButton;