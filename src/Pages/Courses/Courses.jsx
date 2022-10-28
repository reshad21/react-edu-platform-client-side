import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Shared/Product';

export const Courses = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className=" mb-10 basis-1/5">
                    {
                        products.map((product) => <Link to={`/product/${product?.id}`}>
                            <div className="flex items-center p-2 my-3 transition-colors duration-200 border rounded shadow-lg group bg-purple-700 hover:bg-purple-800">
                                <span className="transition-colors duration-200 text-white font-bold">
                                    {product?.name}
                                </span>
                            </div>
                        </Link>)
                    }

                </div>


                {/* card option */}
                <div className="grid gap-5 row-gap-5 sm:grid-cols-3 ">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Courses;