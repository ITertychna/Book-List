import { useState } from 'react';
import { data } from './data';
import './App.css';
import List from './List';


function App() {
  const [books, setBooks] = useState(0);
  const {name, author, description, image} = data[books];
  const [showText, setShowText] = useState(false);
  const [addLikes, setAddLikes] = useState(0);


  const previousBook = () =>{
    setShowText(false)
    setAddLikes(0)
    setBooks((books =>{
      books --;
      if(books < 0){
        return data.length -1;
      }
      return books;
    }))
  }

  const nextBook = () =>{
    setShowText(false)
    setAddLikes(0)
    setBooks((books =>{
      books++;
      if(books > data.length -1){
        books = 0;
      }
      return books;
    }))
  }

  const updateLikes = () =>{
    setAddLikes(addLikes + 1);
  }

  return (
    <div >
      <div className='container container-phone'>
        <h1 className='h1-text'>Make Your Reading List</h1>
      </div>
      <div className='container container-phone'>
        <button className='btn' onClick={previousBook}>⬰</button>
      <div className='book-container'>
        <div>
        <img className='image-slides' src={image} alt="book" width='250px' />
        </div>
        <div className='book-text-container'>
        <h2 className='h2-text'>{name}</h2>
        <h3 className='h3-text'>Author: {author}</h3>
        <p className='p-text'>{showText ? description : description.substring(0,100) + "..."}
        <button onClick={ () => setShowText(!showText)}>{showText ? 'Show less' : 'Show more'}</button>
        </p>
        <button onClick={ () => updateLikes()} className='btn-add-like'>{addLikes} ♥</button>
        </div>
      </div>
      <button className='btn' onClick={nextBook}>⇴</button>
      </div>

   <div>
    <List/>
   </div>
    </div>
  );
}

export default App;