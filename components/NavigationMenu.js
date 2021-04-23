import Link from 'next/link'
import styles from '@style/NavigationMenu.module.css'

const NavigationMenu = () => {
  
  return (
    <div className={styles.topnav}>
      <Link href='/'>
        <a className={styles.active}>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contacts'>
        <a>Contacts</a>
      </Link>

    </div>
  )
}

export default NavigationMenu
