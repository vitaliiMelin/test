import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useState, FC } from 'react'
import { autocompleteStore } from '../store'

interface IAutoComplete {
  maxHint?: number
}

const Autocomplete: FC<IAutoComplete> = ({ maxHint = 3 }) => {
  const { countries, setCountries } = autocompleteStore
  const [text, setText] = useState('')

  const generateList = () => {
    const items = []
    const countItems = countries.length > maxHint ? maxHint : countries.length
    for (let i = 0; i < countItems; i++) {
      const textContent = `${countries[i].name} ${countries[i].fullName}`
      items.push(
        <li key={textContent} onClick={() => setText(textContent)} className="countryItem">
          {textContent}
          <img src={countries[i].flag} alt="flag" />
        </li>,
      )
    }
    return items
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)
    setCountries(inputValue)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChangeHandler} placeholder="начните вводить страну" />
      {generateList()}
    </div>
  )
}

export default observer(Autocomplete)
