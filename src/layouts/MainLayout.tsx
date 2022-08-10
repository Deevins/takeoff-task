import React from 'react'

import { ILayout } from '../types/ILayout'
import Header from 'components/common/Header/Header'
import Sidebar from 'components/common/Sidebar'

const MainLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Sidebar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
