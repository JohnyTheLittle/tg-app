import React from 'react'
import Button from '../Buttons/Button'
import { useTelegram } from '../../hooks/useTelegram'

import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const { user, onClose } = useTelegram()
  const navigate = useNavigate()
  const handleClick = (routeName) => {
    navigate(routeName)
  }
  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span {...props} className={'user'}>
        {user?.first_name}
      </span>
      <Button onClick={() => {handleClick('')}}>Prod List</Button>
      <Button onClick={() => {handleClick('/form')}}>Form</Button>
    </div>
  )
}

export default Header
