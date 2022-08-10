import React from 'react'

import { ILayout } from 'types/ILayout'
import AuthHeader from 'components/auth/AuthHeader/AuthHeader'

const AuthLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <AuthHeader />
      <main>{children}</main>
    </div>
  )
}

export default AuthLayout
