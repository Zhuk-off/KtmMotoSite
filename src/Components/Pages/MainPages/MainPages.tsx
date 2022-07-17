import React from 'react'
import { Header } from '../../ElementPage/Header'
import { MotoBar } from '../../ElementPage/MotoBar'
import { MotoList } from '../../ElementPage/MotoList/index'
import { FC } from 'react'

interface IMainPageProps {
  moto: IMoto[]
  category: string
  description: string
  background: string
}

const MainPage: FC<IMainPageProps> = ({
  moto,
  category,
  description,
  background,
}) => {
  return (
    <div>
      <Header
        category={category}
        description={description}
        length={moto.length}
        background={background}
      />
      <MotoBar />
      <MotoList moto={moto} />
    </div>
  )
}

export { MainPage }
