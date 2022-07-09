import React from 'react'
import { Header } from '../../ElementPage/Header'
import { MotoBar } from '../../ElementPage/MotoBar'
import { MotoList } from '../../ElementPage/MotoList/index'

const MainPage = (props: {
  moto: moto[]
  category: string
  description: string
  background: string
}) => {
  const moto: moto[] = props.moto
  return (
    <div>
      <Header
        category={props.category}
        description={props.description}
        length={moto.length}
        background={props.background}
      />
      <MotoBar />

      <MotoList moto={moto} />
    </div>
  )
}

export { MainPage }
