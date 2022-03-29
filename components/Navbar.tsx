import Link from 'next/link';
import Image from 'next/image'
import { GoogleAuthProvider } from 'firebase/auth';
import { googleAuthProvider } from '../lib/firebase';
import {useContext} from 'react'
import {UserContext} from '../lib/context'
export default function Navbar() {
   const {user, username} = useContext(UserContext);

    return (
        <nav className="navbar">
                <ul>
                    <li>
                        <Link href="/" passHref>
                            <button className="btn-logo">MEWO</button>
                        </Link>
                    </li>
                    
                        {username && (
                            <>
                              <li className="push-left">
                                <button>Sign Out</button>
                                </li>
                                <li>
                                <Link href="/admin" passHref>
                                    <button className="btn-blue">Write Posts</button>
                                </Link>
                                </li>
                            <li>
                                <Link href={'/${username}'} passHref>
                                    <Image src="/public/favicon.ico" alt="user image" layout='fill'/>
                                </Link>
                            </li>
                            </>
                            
                        )}
                
                    
                    {!username && (
                            <li>
                                <Link href="/login" passHref>
                                    <button className="btn-blue">Log In</button>
                                </Link>
                            </li>
                    )}
                    
                </ul>
        </nav>
    )
    
}