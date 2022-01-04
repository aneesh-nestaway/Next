import Link from 'next/Link'
import styles from './style.module.scss'

const header = () => (
  <div className={styles.header}>
    <Link href='/about'>About</Link>
    <Link href='/'> Home</Link>
  </div>
)

export default header