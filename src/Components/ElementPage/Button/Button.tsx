import React from 'react'
import styles from './Button.module.scss'
import { FC } from 'react'

interface IButtonProps {
  title: string
}

const Button: FC<IButtonProps> = ({ title }) => {
  return (
    <div className={styles.order}>
      <h3>{title}</h3>
    </div>
  )
}

export { Button }
