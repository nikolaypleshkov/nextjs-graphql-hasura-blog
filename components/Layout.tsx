import React, { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children} : {children: ReactNode | ReactNode[]}) => {
  return (
      <div>
          <Header />
          {children}
      </div>
  )
}

export default Layout