import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { toast } from "react-hot-toast";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const changePassword = async (currPassword, newPassword) => {
        const user = auth.currentUser;
    
        if (!user) {
            return toast.error('User must be logged in.');
        }
    
        try {
            // // Reauthenticate the user first
            // const credential = promptForCredentials();

            // reauthenticateWithCredential(user, credential).then(() => {
            //     user.updatePassword(newPassword);

            // }).catch((error) => {
            //     toast.error(error.message);
            // });
            
            toast.success('Password Updated Successfully!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
          }).catch((error) => {
            toast.error(error.message);
          });
    }
    
    const signUp = (email, password) => {
        // Returns the promise returned by createUserWithEmailAndPassword
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        //returns function through which we can unsubscribe from onAuthStateChanged event
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateName,
        changePassword
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};