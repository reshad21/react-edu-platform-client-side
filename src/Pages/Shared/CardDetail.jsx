import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CardDetail = () => {
    const { categories } = useContext(AuthContext);
    const product = useLoaderData();
    console.log(product);
    console.log(categories.length);
    return (
        <div className='flex'>
            <div className="category-section">

            </div>
            <div className="card-details-section"></div>
        </div>
    );
};

export default CardDetail;