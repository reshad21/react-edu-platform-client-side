import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-black'>Name</th>
                            <th className='text-black'>Quantify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='text-black'>{data?.id}</th>
                            <td className='text-black'>{data?.name}</td>
                            <td className='text-black'>{data?.Details}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOut;