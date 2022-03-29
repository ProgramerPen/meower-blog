import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Loader from '../components/Loader'
import Toast from 'react-hot-toast'
export default function Home() {
  return (
    <div>
      <button onClick={() => Toast.success('Yaay!')}>
        Toast Me
      </button>
      <Loader show/>
    </div>
  )
}
