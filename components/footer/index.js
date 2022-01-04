import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINK } from './constant'

const footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.wrapper}>
      <div className={styles.leftWidget}>
        <div className={styles.footerSeoText}>
          <Image src={'/images/nestawayIcon.svg'} height='36' width='36' />
          <p>
            NestAway is India's fastest growing "
            <span className='quote'>Managed Home Rental Network</span>"
            attempting to provide better rental solutions via design &
            technology.
          </p>
          <p>
            We help find, book rental homes of choice across Indian cities. We
            assist with move-in, provide home maintenance services from
            cleaning, damages to rent payment & even move-out.
          </p>
          <p>
            Whatever be your budget, whatever you may call a home (a bed, a room
            or an entire house), we have something for you!
          </p>
          {/* <FooterCityLinks /> */}
        </div>
      </div>
      <div className={styles.rightWidget}>
        {FOOTER_LINK.map(item => {
          const section = item.section[0]
          console.log('section', section)
          return (
            <div className={styles.linkSection}>
              <div className={styles.title}>{section.title}</div>
              {section.links.map(links => (
                <Link href={links.url}>{links.name}</Link>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default footer
