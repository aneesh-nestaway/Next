import styles from './style.module.scss'

const FaqList = props => (
  <div className={`${props.className} ${styles.faqList}`}>
    <div className={styles.title}>{props.title}</div>

    <div className={styles.subtext} dangerouslySetInnerHTML={{ __html: props.subtext }} />
    {props.children}
  </div>
)

export default FaqList
