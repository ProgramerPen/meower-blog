import '../styles/globals.css'
import Nav from '../components/Navbar';
import {Toaster} from 'react-hot-toast';
import {UserContext} from '../lib/context';
import {useUserData} from '../lib/hooks'

function MyApp({ Component, pageProps }) {
 const useData = useUserData();

  return (
    <UserContext.Provider value={useData}>
    <Nav/>
    <Component {...pageProps} />
    <Toaster /> 
    </UserContext.Provider>
  
  )
}

export default MyApp
