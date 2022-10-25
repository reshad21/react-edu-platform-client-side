import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("reshad");

    const authInfo = { user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;