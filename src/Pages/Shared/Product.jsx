import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div>
            <div className="max-w-md">
                <div className="image">
                    <img src={product?.photo} alt="" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{product?.name}</h6>
                <p className="text-sm text-gray-700 mb-3">

                    {
                        (product?.Details.length > 100 && product?.Details.slice(0, 200))

                    }

                </p>

                <Link to={`/product/${product?.id}`}><button className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-700 text-gray-50'>Course detail</button></Link>
            </div>
        </div>
    );
};

export default Product;