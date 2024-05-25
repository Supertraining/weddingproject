import React from 'react'
import styles from './layout.module.css'

export default function CasamientoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout_container}>
      {children}
    </div>
  )
}
