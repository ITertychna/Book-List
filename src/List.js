import { useState } from 'react';
import { data } from './data';
import './App.css';

function List(){
    const [books, setBooks] = useState(data);


    const removeItem = (id) => {
        let newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }
    return(
        <div>
            <div className='container container-phone'>
                <h2 className='h2-text'>Books to Read: {books.length}</h2>
            </div>
            <div className='container container-phone'>
                <button className='btn-add-list' onClick={ () => setBooks([])}>Delete All</button>
            </div>
            {books.map(item => {
                const {id, name, author, image} = item;
                return(
                <div>
  
                    <div className='book-container-list'>
                        <div>
                            <img className='image-map' src={image} alt="book" width='250px'/>
                        </div>
                        <div className='book-text-container-list'>
                            <h2 className='h2-text'>{name}</h2>
                            <p className='h3-text'>{author}</p>
                            <button className='btn-add' onClick={ () => removeItem(id)}>Remove</button>
                        </div>
                    </div>
                 </div>
                    
                )
            })}

        </div>

    )
}
export default List;