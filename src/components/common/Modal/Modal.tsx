import React, { Dispatch, SetStateAction } from 'react'

import styles from './Modal.module.scss'
import clsx from 'clsx'

type ModalProps = {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ setIsActive, isActive, children }) => {
  return (
    <div
      className={clsx(styles.modal, {
        [styles.active]: isActive
      })}
      onClick={() => setIsActive(false)}
    >
      <div
        className={clsx(styles.modalContent, {
          [styles.active]: isActive
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
