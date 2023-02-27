import { observer } from 'mobx-react-lite'
import { inputStore } from '../store'
import InputWithButtons, { IButton } from './InputWithButtons'

const InputWithButtonWrapper = () => {
  const { text, setText } = inputStore

  const clearInput = () => setText('')
  const hello = () => setText('hello world')

  const onlyRightButtons: IButton[] = [
    { text: 'очистить', callback: clearInput },
    { text: 'hello world', callback: hello },
  ]

  const alertText = () => alert(text)

  const rightButtons: IButton[] = [{ text: 'alert', callback: alertText }]

  const checkNum = () => {
    const removedNotNumber = text.replace(/\D/g, '')
    removedNotNumber.length === text.length ? alert(text) : console.log('не число')
  }

  const leftButtons: IButton[] = [{ text: 'проверка на число', callback: checkNum }]

  return (
    <>
      <InputWithButtons rightButtons={onlyRightButtons} />
      <InputWithButtons rightButtons={rightButtons} leftButtons={leftButtons} />
    </>
  )
}

export default observer(InputWithButtonWrapper)
