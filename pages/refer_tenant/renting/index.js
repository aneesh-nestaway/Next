import Link from 'next/Link'
import styles from './style.module.scss'
const renting = () => {
  const Tile = props => (
    <Link href='/list-your-property'>
      <div className={styles.rentingTile}>
        <div className={styles.title}>{props.heading}</div>
        <div className={styles.subtext}>{props.description}</div>
        <div className={styles.link}>Know more</div>
      </div>
    </Link>
  )
  return (
    <div className={styles.rentingContainer}>
      <div className={styles.wrapper}>
        <div className={styles.leftWidget}>
          <div className={styles.heading}>
            Are you a <br />
            home owner?
          </div>
          <br />
          <Link href='/list-your-property'>GET STARTED FOR FREE</Link>
        </div>
        <div className={styles.rightWidget}>
          <Tile
            heading={
              <span>
                Find verified <br /> tenants
              </span>
            }
            description='From showing your house to tenants, police verifying them & managing paperwork, we do it all'
          />
          <Tile
            heading={
              <span>
                Get rent <br /> on time
              </span>
            }
            description='We assure rent on 5th of every month. No more late rent payments or rent collection hassle'
          />
          <Tile
            heading={
              <span>
                Get house <br /> maintenance
              </span>
            }
            description='We provide periodic & on-demand repairs and cleaning of the house to keep it in good condition'
          />
        </div>
      </div>
    </div>
  )
}

export default renting
