import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title }: { title: string }) => {
  return (
    <div className={styles.order}>
      <h3>{title}</h3>
    </div>
  )
}

export { Button }
