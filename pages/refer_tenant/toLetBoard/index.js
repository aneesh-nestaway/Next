import Image from 'next/image'
import styles from './style.module.scss'
import Button from '../../../components/button'

const toLetBoard = () => (
  <div className={styles.toLetBoard}>
    <div className={styles.wrapper}>
      <div className={styles.leftWidget}>
        <div className={styles.heading}>Saw a TO-LET board?</div>
        Click a picture and upload it . The picture will be considered as your
        referral! Make sure the photo has the owner’s phone number.
        <br />

        <br />
        <Button text='UPLOAD PICTURE' secondary />
      </div>
      <div className={styles.rightWidget}>
        <Image src={'/images/toletBoard.svg'} width='270' height='134' />
      </div>
    </div>
  </div>
)

export default toLetBoard
