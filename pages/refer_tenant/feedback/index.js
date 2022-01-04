import MunduCarousel from 'mundu-react-carousel'
import styles from './style.module.scss'
import { feedbackData } from '../constant'
import Button  from '../../../components/button'
const feedback = () => (
  <div className={styles.feedbackContainer}>
    <div className={styles.leftWidget}>
      <div className={styles.heading}>Anybody can share and earn!</div>
      <Button text='I WANT TO EARN' secondary />
    </div>
    <div className={styles.carouselSection}>
      <MunduCarousel
        width='100%'
        maxWidth={'100%'}
        height={265}
        startPosition={0}
        autoPlay={false}
        dotsClass='dotsClass'
        arrowSize={15}
        dotsWithArrows
        arrowColor='#AAA'
      >
        {feedbackData.map(({ name, comment, photo, job }) => (
          <div className={styles.reviews} key={name}>
            <div className={styles.person}>
              <div
                className={styles.icon}
                style={{
                  backgroundImage: `url(${photo})`
                }}
              />
              <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                <div className={styles.subtext}>{job}</div>
              </div>
            </div>
            <div className={styles.textFeed}>
              <div className={styles.textFeedArrow} />
              <div className={styles.textFeedArrowInner} />
              {comment}
            </div>
          </div>
        ))}
      </MunduCarousel>
    </div>
  </div>
)

export default feedback
