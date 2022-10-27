import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className="cors mb-3">
                <h2 className='font-bold text-fuchsia-700 text-lg'>what is cors?</h2>
                <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>
            <div className="mb-3 ">
                <h2 className='font-bold text-fuchsia-700 text-lg'>Why are you using firebase?What other options do you have to implement authentication? </h2>
                <p>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app</p><br />
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='mb-3'>
                <h2 className='font-bold text-fuchsia-700 text-lg'>How does the private route work?</h2>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            </div>
            <div className="mb-3">
                <h2 className='font-bold text-fuchsia-700 text-lg'>What is Node? How does Node work?</h2>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

            </div>
        </div>
    );
};

export default Blog;