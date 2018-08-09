import React from 'react';
import './ArticleButton.css';

const ArticleButton = props => (
  <button className={props.buttonClass} onClick={() => props.onClick()} disabled={props.disabled}>{props.message}</button> 
);

export default ArticleButton;