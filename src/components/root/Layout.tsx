import React, { ReactNode } from 'react'
import Header from '../organisms/Header/Header'

const Layout = ({ children} : {children: ReactNode | ReactNode[]}) => {
  return (
      <div>
          <Header />
          <div style={{marginTop: "6rem"}}>
          {children}
          </div>
      </div>
  )
}

export default Layout