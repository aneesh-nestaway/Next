import styles from '../input/style.module.scss'
const input = props => {
  console.log('props', props)
  return (
    <div className={`${styles.inputWrapper} ${props.class}`}>
      <input
        className={`${styles.inputWrapper}`}
        // ref='inputBox'
        id={props.id}
        placeholder={props.placeholder}
        // type={this.typeConvert(type)}
        value={props.value}
        onChange={props.handleChange}
        type={props.type}
        // onFocus={() => this.focus(type)}
        // onBlur={this.onBlur}
        name={props.name}
        // readOnly={readonly}
        // onKeyUp={this.onKeyUp}
        // autoFocus={autoFocus}
        // defaultValue={defaultValue}
      />
      <div
        className={`${
          props.fixLabel
            ? styles.fixLabel
            : styles.floatingLabel
        }`}
      >
        {props.label}
      </div>
    </div>
  )
}

export default input
