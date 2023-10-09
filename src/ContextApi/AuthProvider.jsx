import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);


    const [loading, setLoading]= useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const logInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google diye sigin kora
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = ()=>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth)

    }
       

    useEffect(()=>{

         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                console.log('user in the state changed',currentUser);
                setuser(currentUser)
                setLoading(false);
            });
            return()=>{
                unSubscribe
            }
    },[]);


    const authInfo ={
            user,
            createUser,
            logInUser,
            logOut,
            loading,
            signInWithGoogle,
        
            
            
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children:PropTypes.node
}