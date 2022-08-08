import React from 'react'

import styles from './Sidebar.module.scss'
const Sidebar = () => {
  return (
    <div className={styles.sidebarRoot}>
      <button className={styles.sidebarElem}>Добавить контакт</button>
    </div>
  )
}

export default Sidebar
