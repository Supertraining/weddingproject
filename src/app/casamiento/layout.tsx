import React from 'react'
import SideNav from './sidenav/SideNav'
import styles from './layout.module.css'

export default function CasamientoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout_container}>
      <SideNav/>
      {children}
    </div>
  )
}
