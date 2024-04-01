import './App.css';
import { useState, useEffect } from 'react';
import Button, { ButtonAuthor } from './components/Button';

import FlowQuote from './components/FlowQuotes';
import Quote from './components/Quote';


function App() {
  const [content, setContent] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [quoteTag, setQuoteTag] = useState('');
  const [isSingle, setIsSingle] = useState(true);
  const [listQuote, setListQuote] = useState([]);


  const getRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log(data.author); // Output the quote author
        setQuoteAuthor(data.author);
        if (isSingle) {
          setContent(data.content); // Output the quote content
          setQuoteTag(data.tags);
        }
        else {
          fetch(`https://api.quotable.io/quotes?author=${quoteAuthor}`)
            .then(response => response.json())
            .then(data => {
              // setListQuote(data.results.map(quote => quote.content));
              setListQuote(data.results);

              console.log(isSingle);
              console.log(listQuote);
            })
            .catch(error => {
              console.error(error);
            });
        }
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }
  useEffect(() => {
    getRandomQuote();
  }, []); // Run once on component mount

  const getQuotesByAuthorName = () => {
    setIsSingle(!isSingle);
    fetch(`https://api.quotable.io/quotes?author=${quoteAuthor}`)
      .then(response => response.json())
      .then(data => {
        // setListQuote(data.results.map(quote => quote.content));
        setListQuote(data.results);

        console.log(isSingle);
        console.log(listQuote);
      })
      .catch(error => {
        console.error(error);
      });
  }

  
  return (
    <div className="App">

      <Button onClick={getRandomQuote}></Button>
      <FlowQuote
        isSingle={isSingle}
        content={content}
        onClick={getQuotesByAuthorName}
        authorName={quoteAuthor}
        authorJob={quoteTag}
        listQuote={listQuote}
        showQuote={()=>{
          setIsSingle(!isSingle);
        }}
      >

      </FlowQuote>

    </div>
  );
}

export default App;


