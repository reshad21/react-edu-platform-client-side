import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// const auth = getAuth(app);

export const Login = () => {
    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    // register user login system
    const handleLoginBtn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // navigate('/');
                // navigate('/blog');
                navigate(from, { replace: true });
                // navigate(from);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // google signin
    const handleGoogleSignin = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                // const user = result.user;
                // console.log(user);

            }).catch((error) => {
                console.error(error);
            });
    }

    // github sign in system
    const handleGithubSignin = () => {
        githubSignIn(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-center xl:flex-row">
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Log in
                                </h3>
                                <form onSubmit={handleLoginBtn}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-700 text-gray-50"
                                        >
                                            Log in
                                        </button>
                                        <div className='flex'>
                                            <h1 className='text-xl'>Login with:</h1>
                                        </div>
                                        <div className="auto-login-section my-2">
                                            <button onClick={handleGoogleSignin} className='bg-purple-700 p-3 text-slate-50 rounded'><FaGoogle /></button>
                                            <button onClick={handleGithubSignin} className='bg-purple-700 p-3 text-slate-50 rounded ml-2'><FaGithub /></button>
                                        </div>
                                    </div>

                                </form>
                                <p><Link to='/signup' className='underline text-emerald-900 text-lg'>Register if you don't have any account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;