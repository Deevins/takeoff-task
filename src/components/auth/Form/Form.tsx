import React, { useState } from 'react'

// import styles from './Form.module.scss'

type Props = {
  title: string
  onClickHandle: (email: string, password: string) => void
}

const Form: React.FC<Props> = ({ title, onClickHandle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <form>
        <label>
          <p>Username</p>
          <input
            placeholder={'username'}
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
