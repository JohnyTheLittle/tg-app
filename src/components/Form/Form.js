import React, { useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [subject, setSubject] = useState('endless_horror')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.WebApp.onEvent('mainButtonClicked', () => {
      tg.SendData({subject, city, street})
    })
  }, [tg, subject, city, street, tg.WebApp])
  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    })
  }, [tg.MainButton])

  useEffect(() => {
    if (!street || !city) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [tg.MainButton, street, city])

  const onChangeCity = (e) => {
    setCity(e.target.value)
  }
  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }
  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  return (
    <div className="form">
      <h3>Input your data</h3>
      <input
        className="input"
        type="text"
        placeholder={'City'}
        value={city}
        onChange={onChangeCity}
      />
      <input
        type="text"
        placeholder={'Street'}
        value={street}
        onChange={onChangeStreet}
      />
      <select className="select" onSelect={onChangeSubject} value={subject}>
        <option value={'horrible_end'}>Horrible End</option>
        <option value={'endless_horror'}>Endless Horror</option>
      </select>
    </div>
  )
}

export default Form
