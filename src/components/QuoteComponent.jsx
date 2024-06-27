import { useState, useEffect } from 'react';
import style from './Home.module.css'
import quotes from '../quotes.json';

const QuoteComponent = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const quotesArray = quotes.quotes;
        const quoteNum = Math.floor(Math.random() * quotesArray.length);
        const selectedQuote = quotesArray[quoteNum];

        setQuoteData({
          quote: selectedQuote.quote,
          author: selectedQuote.author,
        });
      } catch (error) {
        console.error('Failed to fetch quotes:', error);
      }
    };

    getQuotes();
  }, []);

  return (
      <div className={style.Quotes}>
          <div className={style.QuoteQuote}>&quot;{quoteData.quote}&quot;</div>
          <div className={style.Quoteauthor}>{quoteData.author}</div>
    </div>
  );
};

export default QuoteComponent;
