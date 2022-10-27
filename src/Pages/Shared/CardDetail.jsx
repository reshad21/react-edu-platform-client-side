import React, { useContext } from 'react';
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CardDetail = () => {
    const { categories, user, singleproduct } = useContext(AuthContext);
    console.log(user);
    const product = useLoaderData();

    const navigate = useNavigate();
    const location = useLocation();

    const handlePremiumAccess = () => {
        // console.log("true");
        if (user == null) {
            console.log("user don't get");
            // return <Navigate to='/login' state={{ from: location }} replace></Navigate>
        }
        return navigate('/checkout');
    }
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col lg:flex-row'>
                <div className="category-section max-w-xl pr-16 mx-auto mb-10  basis-1/4">
                    {
                        categories.map(c => <Link to={`/product/${c?.id}`} key={c.id}><div className="flex items-center p-2 my-2 transition-colors duration-200 border rounded shadow group">
                            <span className="text-gray-800 transition-colors duration-200 ">
                                {c.name}
                            </span>
                        </div></Link>)
                    }
                </div>


                <div className="card card-side bg-base-100 shadow-xl basis-3/4">
                    <div className="flex flex-col lg:flex-row">
                        <figure className='basis-1/4'><img src={product?.photo} alt="Movie" className='h-full' /></figure>
                        <div className="card-body basis-3/4">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title">{product?.name}!</h2>
                                <FaDownload />
                            </div>
                            <p>{product?.Details}</p>
                            <div className="card-actions justify-end">

                                <button onClick={handlePremiumAccess} className="btn btn-primary">Get premium access</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CardDetail;