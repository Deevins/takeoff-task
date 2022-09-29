import React from 'react'

import styles from './Search.module.scss'
import Button from "../components/Button";

const Search = () => {
  const [value, setValue] = React.useState('')

  const onSubmit = () => {
    if (value.length > 0) {
    }
  }
  return (
    <div className={styles.searchBlock}>
      <input
        className={styles.searchBlock_input}
        placeholder={'Поиск по контактам...'}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/*<button className={styles.headerButton} onClick={() => onSubmit()}>*/}
      {/*  Найти*/}
      {/*</button>*/}
      <Button text={'Найти'} onUserClick={() => onSubmit()}/>
    </div>
  )
}

export default Search
