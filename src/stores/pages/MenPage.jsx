import React, { useState } from 'react';
import { menData } from '../data/men';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';

const MenPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (brand) => {
        if (selectedProduct.includes(brand)) {
            setSelectedProduct(selectedProduct.filter(item => item !== brand));
        } else {
            setSelectedProduct([...selectedProduct, brand]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? menData
        : menData.filter((item) => selectedProduct.includes(item.brand));

    const uniqueBrands = [...new Set(menData.map(item => item.brand))];

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {uniqueBrands.map((brand) => (
                        <div className='pro-input' key={brand}>
                            <label>
                                <input 
                                    type="checkbox"
                                    checked={selectedProduct.includes(brand)}
                                    onChange={() => companyHandler(brand)}
                                />
                                {brand}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/men/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt={`${item.brand} ${item.model}`} />
                                </div>
                            </Link>
                            <div className="proModel">
                                {item.brand}, {item.model}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MenPage;
