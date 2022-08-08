import React from 'react'

import styles from './Button.module.scss'

import { IButton } from '../../../types/IButton'
import clsx from 'clsx'

const Button: React.FC<IButton> = (props) => {
  const { fullWidth, clickHandle, myFormId } = props
  return (
    <button
      className={clsx(styles.root, {
        [styles.fullWidth]: fullWidth
      })}
      form={myFormId}
    >
      {props.title}
    </button>
  )
}

export default Button
