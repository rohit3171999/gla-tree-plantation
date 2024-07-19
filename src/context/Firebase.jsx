import { createContext, useContext , useState, useEffect} from "react";
import{initializeApp} from 'firebase/app'
import {getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth';
import{getFirestore, collection, addDoc, getDocs, getDoc, doc} from 'firebase/firestore';
import{getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
const FirebaseContext=createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyAUuB50BFPzDOlyI-eWQ8oo3ZffLzHKknA",
    authDomain: "gla-trees.firebaseapp.com",
    projectId: "gla-trees",
    storageBucket: "gla-trees.appspot.com",
    messagingSenderId: "68266210819",
    appId: "1:68266210819:web:e0cc8df7a49e15f17f8036"
  };

export const useFirebase=()=>useContext(FirebaseContext);
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const firestore=getFirestore(firebaseApp);
const googleProvide=new GoogleAuthProvider();
const storage =getStorage(firebaseApp);

export const FirebaseProvider=(props)=>{
    const [user, setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, user=>{
            if (user) setUser(user);
            else setUser(null);
        })

    },[])
    const signupUserWithEmailAndPass=(email, password)=>
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    const signinUserWithEmailAndPassword=(email, password)=>
        signInWithEmailAndPassword(firebaseAuth, email, password);
    const signinWithGoogle=()=>signInWithPopup(firebaseAuth, googleProvide);
    console.log(user);


    const handleCreateNewListing=async(names, plot, tree,treeNumber,selectedDate,status,coverpic)=>{
        const imageRef=ref(storage, `uploads/image/${Date.now()}-${coverpic.name}`);
        const uploadResult= await uploadBytes(imageRef, coverpic);
        return await addDoc(collection(firestore, 'books'),{
            names, plot, tree,treeNumber,selectedDate,status,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmai: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })

    };
    const listAllBooks=()=>{
        return getDocs(collection(firestore, 'books'))
    };
    const getBookByID=async(id)=>{
        const docRef=doc(firestore,'books', id);
        const result=await getDoc(docRef);
        return result;
    }
    const getImageURL=(path)=>{
        return getDownloadURL(ref(storage, path));
    };


    const isLoggedIn= user ? true : false;


    return(
        <FirebaseContext.Provider value={{
            isLoggedIn,
            signupUserWithEmailAndPass, 
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            handleCreateNewListing,
            listAllBooks,
            getImageURL,
            getBookByID,
            }}>
            {props.children}
        </FirebaseContext.Provider>


    )
};
