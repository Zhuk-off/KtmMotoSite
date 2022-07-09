import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPagesArray } from '../../../store/selectors/getPagesArray/getPagesArray'
import { Button } from '../../ElementPage/Button'
import './PageNotFound.module.scss'

function isMotoState(x: motoState | page[]): x is motoState {
  return 'loading' in x
}

const PageNotFound = () => {
  const pages = useSelector(getPagesArray)
  let lengthForDisplayToStart: number = 0
  
  if (!isMotoState(pages)) {
    lengthForDisplayToStart = pages.length
  } else {
    lengthForDisplayToStart = pages.page.length
  }

  if (lengthForDisplayToStart === 0) {
    return (
      <div>
        <h1>Загрузка ...</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Страница не найдена</h1>
        <Link to="/">
          <Button title="Назад на главную" />
        </Link>
      </div>
    )
  }
}

export { PageNotFound }
