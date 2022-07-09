import React from 'react'
import styles from './Moto.module.scss'

const Moto = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={styles.Moto}>
      <h2>{name}</h2>
      <img src={img} alt={`${name}`} />
    </div>
  )
}

export { Moto }
