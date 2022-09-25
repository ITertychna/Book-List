import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [books, setBooks] = useState(0);
  const {id, name, author, description, image, showMore} = data[books];
  const [showText, setShowText] = useState(false);


  const previousBook = () =>{
    setBooks((books =>{
      books --;
      if(books < 0){
        return data.length -1;
      }
      return books;
    }))
  }

  const nextBook = () =>{
    setBooks((books =>{
      books++;
      if(books > data.length -1){
        books = 0;
      }
      return books;
    }))
  }

  const showTextClick = (item) =>{
    // books.map(item =>{
    //   const {id, name, author, description, image, showMore} = item;
    //   })
    item.showMore = !item.showMore;
    setShowText(!showText)
  }


  return (
    <div >
      {/* {books.map(item =>{
      const {id, name, author, description, image, showMore} = item;
      })} */}

      <div className='container'>
        <h1 className='h1-text'>Make Your Reading List</h1>
      </div>
      <div className='container'>
        <button className='btn' onClick={previousBook}>⬰</button>
      <div className='book-container'>
        <div>
        <img src={image} alt="book" width='250px' />
        </div>
        <div className='book-text-container'>
        <h2 className='h2-text'>{name}</h2>
        <h3 className='h3-text'>Author: {author}</h3>
        <p className='p-text'>{showMore ? description : description.substring(0,100) + "..."}
        <button onClick={ () => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
        </p>
        <button className='btn-add'>Add to your Favourite ♥</button>
        </div>
      </div>
      <button className='btn' onClick={nextBook}>⇴</button>
      </div>
   <div className='container'>
    <h2 className='h2-text'>My Favourite:</h2>
   </div>
    </div>
  );
}

export default App;
