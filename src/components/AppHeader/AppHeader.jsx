import React from 'react'
import styles from './AppHeader.module.css'
import {
    Logo, ProfileIcon, ListIcon, BurgerIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderItem from '../AppHeaderItem/AppHeaderItem'

export default class AppHeader extends React.Component {
    render() {
        return (
            <header className="AppHeader">
              <div className={`${styles._content} pt-4 pb-4`}>
                <div className="container">
                  <div className={styles._wrap}>
                    <nav className={`${styles._left} flex`}>
                      <div className={`${styles._item}`}>
                        <AppHeaderItem title="Конструктор" Icon={BurgerIcon} />
                      </div>
                      <div className={`${styles._item}`}>
                      <AppHeaderItem title="Лента заказов" Icon={ListIcon} />
                      </div>
                    </nav>
                    <div className={styles._logo}>
                      <Logo />
                    </div>
                    <div className={`${styles._right} flex`}>
                      <div className={`${styles._item}`}>
                        <AppHeaderItem title="Личный кабинет" Icon={ProfileIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
        )
    }
}
