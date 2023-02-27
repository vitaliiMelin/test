import Autocomplete from './Components/Autocomplete'
import './App.css'
import InputWithButtonsWrapper from './Components/InputWithButtonsWrapper'

function App() {
  return (
    <div>
      <InputWithButtonsWrapper />
      <div className="autocomlete">
        <Autocomplete maxHint={3} />
        <span>3 подсказки</span>
      </div>
      <div className="autocomlete">
        <Autocomplete maxHint={10} />
        <span>10 подсказок</span>
      </div>
    </div>
  )
}

export default App
