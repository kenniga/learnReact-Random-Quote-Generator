import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const QuoteText       = props => <div id="text">{props.children}</div>
const QuoteAuthor     = props => <div id="author">{props.children}</div>
const ButtonNewQuote  = props => <button id="new-quote">New Quote</button>

const QuoteBox = (
  <div id="quote-box">
    <QuoteText>Text</QuoteText>
    <QuoteAuthor>Author</QuoteAuthor>
    <ButtonNewQuote />
  </div>

)

ReactDOM.render(
  QuoteBox,
  document.getElementById('root')
);
