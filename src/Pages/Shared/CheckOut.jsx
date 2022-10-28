import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const { singleproduct } = useContext(AuthContext);
    const data = useLoaderData();
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{data?.id}</th>
                            <td>{data?.name}</td>
                            <td>{data?.Details}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOut;