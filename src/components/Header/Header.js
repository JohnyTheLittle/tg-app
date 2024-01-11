import React from 'react'
import Button from '../Buttons/Button'
import { useTelegram } from '../../hooks/useTelegram'
import "./Header.css"

const Header = (props) => {
  const { user, onClose } = useTelegram()
  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span {...props} className={'user'}>
        {user?.first_name}
      </span>
    </div>
  )
}

export default Header
