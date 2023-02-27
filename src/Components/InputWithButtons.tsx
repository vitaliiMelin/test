import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, FC } from 'react'
import { inputStore } from '../store'

export interface IButton {
  text: string
  callback?: () => void
}

interface IInputWithButton {
  leftButtons?: IButton[]
  rightButtons?: IButton[]
}

const InputWithButton: FC<IInputWithButton> = ({ leftButtons, rightButtons }) => {
  const { text, setText } = inputStore

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)
  }

  const generateButtons = (buttons: IButton[]) =>
    buttons.map(({ text, callback }) => <button onClick={callback}>{text}</button>)

  return (
    <div className="inputWithButtons">
      {leftButtons && generateButtons(leftButtons)}
      <input type="text" value={text} onChange={onChangeHandler} />
      {rightButtons && generateButtons(rightButtons)}
    </div>
  )
}

export default observer(InputWithButton)
