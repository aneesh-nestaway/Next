import styles from './style.module.scss'

const checkBox = props => {
  return (
    <div className={`${styles.naCheckboxOuterContainer} ${styles.radiostyle}`}>
      <label className={styles.container}>
        {props.label}
        <input
          className={
            props.className
              ? props.className + ` ${styles.inputCheckbox}`
              : `${styles.inputCheckbox}`
          }
          type='checkbox'
          // {...props}
          onChange={props.onCheck}
          checked={props.isChecked}
        />
        <span className={`${styles.checkmark}`} />
      </label>
    </div>
  )
}

export default checkBox
