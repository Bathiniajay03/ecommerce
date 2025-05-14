import React from 'react';
import { bookData } from '../data/books';
import { Link } from 'react-router-dom';

const Books = () => {
    const firstFiveImages = bookData.slice(0, 6);

    return (
        <>
            <div className="proTitle">
                <h2>Books Collection</h2>
            </div>
            <div className='proSection'>
                {firstFiveImages.map((item) => (
                    <div className='imgBox' key={item.id}>
                        <Link to='/books'>
                            <img className='proImage' src={item.image} alt={item.title || "Book"} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Books;
