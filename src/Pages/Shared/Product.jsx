import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div>
            <div className="max-w-md border border-white rounded-lg shadow-lg">
                <div className="image">
                    <img src={product?.photo} alt="" className='rounded-t-lg' />
                </div>
                <div className="p-2">
                    <h2 className="mb-2 font-semibold leading-5 text-2xl">{product?.name}</h2>
                    <p className="text-sm mb-3">

                        {
                            (product?.Details.length > 100 && product?.Details.slice(0, 200))

                        }

                    </p>
                </div>

                <Link to={`/product/${product?.id}`}><button className='rounded-lg inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-700 text-gray-50 hover:bg-purple-900'>Course Details</button></Link>
            </div>
        </div>
    );
};

export default Product;