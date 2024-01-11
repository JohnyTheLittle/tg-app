import React from 'react'
import Button from '../Button'

const Header = (props) => {
  const tg = window.Telegram.WebApp
  const onClose = () => {
    tg.close()
  }
  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span {...props} className={'user'}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}

export default Header
