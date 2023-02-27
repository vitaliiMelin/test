import { makeAutoObservable } from 'mobx'

class InputStore {
  text: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setText = (text: string) => {
    this.text = text
  }
}

export default InputStore
