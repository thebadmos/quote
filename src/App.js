import './index.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [quote, setQuote] = useState('')
   const [author, setAuthor] = useState('')
  const getQuote = () =>{
    axios.get('https://api.quotable.io/random')
    .then(res =>{
     console.log(res.data.content)
     setQuote(res.data.content)
     setAuthor(res.data.author)
    }).catch(err =>{
     console.log(err)
    })
   }
  return (
    <div className="app">
      <button onClick={getQuote}>
        Get Inspired</button>
        <div className="quote">
       { quote && <p>{quote}</p> }
       </div>
       <div className="author">
      { author && <p className="auth"> ~{author}</p>}
    </div>
    </div>
  );
}

export default App;
