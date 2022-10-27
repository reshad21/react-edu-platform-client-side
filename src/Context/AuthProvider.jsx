import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google signin system
    const googleSignIn = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github signin system
    const githubSignIn = (githubProvider) => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // logout current user
    const logOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // current user set
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();

    }, [])

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user information
    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login register user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // data taken from route
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // single product checkout
    const [singleproduct, setSingleProduct] = useState({})
    useEffect((params) => {
        fetch(`http://localhost:5000/product/${params}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])

    const authInfo = { user, loginUser, googleSignIn, githubSignIn, logOutUser, createUser, updateUserInfo, loading, categories, singleproduct }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;