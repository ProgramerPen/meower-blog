import {auth, googleAuthProvider, db} from '../lib/firebase';
import {signInWithPopup} from "firebase/auth";
import {useContext, useEffect, useState, useCallback} from 'react'
import {UserContext} from '../lib/context' 
import debounce from 'lodash.debounce'
import { collection, getDocs  } from "firebase/firestore"; 

export default function loginPage(props){
    const { user, username} = useContext(UserContext);
    
    
    return (
        <>
         {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
        </>
    )
}
function SignInButton() {
    
        const signInWithGoogle = async() => {
            await signInWithPopup(auth, googleAuthProvider);
        }
    return (
        <>
        <button className="btn-google" onClick={signInWithGoogle}>
            Sign In
        </button>
        <h1> no user & no username</h1>
        </>
    )
}
function SignOutButton() {
    return (
    <>
    
    <button onClick={() => auth.signOut()}>Sign Out</button>
    <h1>  user & username</h1>
    </>
    )
}
function UsernameForm() {
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, username} = useContext(UserContext)
    
    const checkUsername = useCallback(
        debounce(async (username) => {
          if (username.length >= 3) {
            const exists=  getDocs(collection(db, "usernames/${username}"));

            
            console.log('Firestore read executed!');
            setIsValid(!exists);
            setLoading(false);
          }
        }, 500),
        []
      );
        useEffect(() => {
            checkUsername(formValue);
        }, [formValue])
    function onSumbit(){
        
    }
    function onChange(e){
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
          }
      
          if (re.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
          }}

 return (
  !username && (
    <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSumbit}>
            <input name="username" placeholder="username" value={formValue} onChange={onChange}/>
            <button type="submit" className='btn-green' disabled={!isValid}></button>
            <h3>Debug State</h3>
            <div>
                username: {formValue}
                <br />
                Loading: {loading.toString()}
                <br />
                username Valid: {isValid.toString()}
            </div>
        </form>
    </section>

  )
 )
  }