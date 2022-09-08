import React from 'react'
import styles from './MotoBar.module.scss'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const MotoBar: FC = () => {
  const activeClassName = styles.active
  const isActiveNameForCssModule = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClassName : ''

  return (
    <div className={styles.motoBar}>
      <div className={styles.tab}>
        <NavLink to="/mx" className={isActiveNameForCssModule}>
          MX
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink to="/enduro" className={isActiveNameForCssModule}>
          Enduro
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink to="/freeride" className={isActiveNameForCssModule}>
          Freeride
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink to="/naked" className={isActiveNameForCssModule}>
          Naked
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink to="/travel" className={isActiveNameForCssModule}>
          Travel
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink to="/sport-tourer" className={isActiveNameForCssModule}>
          Sport Tourer
        </NavLink>
      </div>
      <div className={styles.tab}>
        <NavLink
          to="/supermoto"
          data-testid="supermoto"
          className={isActiveNameForCssModule}
        >
          Supermoto
        </NavLink>
      </div>
    </div>
  )
}

export { MotoBar }
