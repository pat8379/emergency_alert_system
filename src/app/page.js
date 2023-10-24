import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './components/Navigation'
import Map from './components/Map'

export default function Home() {
  return (
    <>
      <Navigation/>
      <Map/>
    </>
  )
}
