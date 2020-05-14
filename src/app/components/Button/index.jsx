import * as React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({
  children,
  inverse,
  width,
  disabled,
  size = 'normal',
  loading,
}) => {
  const classes = classNames(styles.button, styles[size], {
    [styles.inverse]: inverse,
    [styles.fullWidth]: width,
  })

  const content = loading ? 'loading' : children

  return (
    <button className={classes} disabled={disabled || loading}>
      {content}
    </button>
  )
}

export default Button
