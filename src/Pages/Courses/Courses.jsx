import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Courses = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Hello how are you :{user}</h1>
        </div>
    );
};

export default Courses;