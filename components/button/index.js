import styles from './style.module.scss'

const button = props => {
  const generateClass = () => {
    return `${styles.button} ${props.primary ? styles.primary : ''} ${
      props.secondary ? styles.secondary : ''
    } ${
      props.disabled ? styles.disabled : ''
    } ${
      props.wide ? styles.wide : ''
    }`
  }
  return (
    <div onClick={props.onClick} className={generateClass()}>
      {props.text}
    </div>
  )
}

export default button
