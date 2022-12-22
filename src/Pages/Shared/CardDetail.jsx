import React, { useContext } from 'react';
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { AuthContext } from '../../Context/AuthProvider';


const ref = React.createRef();

const CardDetail = () => {
    const { categories, user } = useContext(AuthContext);
    const product = useLoaderData();
    const { id } = product;

    const navigate = useNavigate();
    // const location = useLocation();




    const handlePremiumAccess = () => {
        if (user == null) {
            console.log("user don't get");
            // return <Navigate to='/login' state={{ from: location }} replace></Navigate>
        }
        return navigate(`/checkout/${id}`);
    }
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col lg:flex-row'>
                <div className="category-section max-w-xl pr-16 mx-auto mb-10  basis-1/4">
                    {
                        categories.map(c => <Link to={`/product/${c?.id}`} key={c.id}><div className="flex items-center p-2 my-3 transition-colors duration-200 border rounded group shadow-lg group bg-purple-700 hover:bg-purple-800">
                            <span className="transition-colors duration-200 text-white font-bold">
                                {c.name}
                            </span>
                        </div></Link>)
                    }
                </div>

                <div ref={ref} className="card card-side bg-base-100 shadow-xl basis-3/4">
                    <div className="flex flex-col lg:flex-row">
                        <figure className='basis-1/4'><img src={product?.photo} alt="Movie" className='h-full' /></figure>
                        <div className="card-body basis-3/4">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title text-black">{product?.name}!</h2>
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf}><FaDownload className='text-black' /></button>}
                                </Pdf>
                            </div>
                            <p className='text-black'>{product?.Details}</p>
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