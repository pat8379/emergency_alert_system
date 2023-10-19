import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './Navigation'
import Map from './Map'

export default function Home() {
  return (
    <>
      <Navigation/>
      <Map/>
    </>
  )
}
