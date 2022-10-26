import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CardDetail = () => {
    const { categories } = useContext(AuthContext);
    const product = useLoaderData();
    console.log(product);
    console.log(categories.length);
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col lg:flex-row'>
                <div className="category-section max-w-xl pr-16 mx-auto mb-10">
                    {
                        categories.map(c => <Link to={`/product/${c?.id}`} key={c.id}><div className="flex items-center p-2 my-2 transition-colors duration-200 border rounded shadow group">
                            <span className="text-gray-800 transition-colors duration-200 ">
                                {c.name}
                            </span>
                        </div></Link>)
                    }
                </div>
                <div className="card-details-section">
                    <div>
                        <img src={product?.photo} alt="" />
                    </div>
                    <h2>{product?.name}</h2>
                    <p>{product?.Details}</p>
                    <div className="">
                        <button>Check Out</button>
                        <button>Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;