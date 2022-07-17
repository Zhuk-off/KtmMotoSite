import React from 'react'
import styles from './Moto.module.scss'
import { FC } from 'react'

interface IMotoProps {
  name: string
  img: string
}

const Moto: FC<IMotoProps> = ({ name, img }) => {
  return (
    <div className={styles.Moto}>
      <h2>{name}</h2>
      <img src={img} alt={`${name}`} />
    </div>
  )
}

export { Moto }
