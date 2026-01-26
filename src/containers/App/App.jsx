// import styles from './styles.module.css'

import { useState } from "react"

const App = () => {
  // const [title, setTitle] = useState('Default App')

  // => ["Default App", Function]
  // const state = useState('Default App12')
  // const title = state[0]
  // const setTitle = state[1]

  const [title, setTitle] = useState('Default App')
  // const [title1, setTitle1] = useState(null)
  const [counter, setCounter] = useState(0)

  const onClickTitle = () => {
    setTitle('New App')
  }

  const onClickCounter = (isIncrement) => {
    if (isIncrement) {
      setCounter(prev => prev + 1)
    } else {
      setCounter(prev => prev - 1)
    }
  }

  return (
    <>
      <h1>App</h1>
      {title}
      <hr />
      {counter}
      <hr />
      <button onClick={onClickTitle}>Вызов функции</button>
      <hr />
      <button onClick={() => onClickCounter(true)}>Increment</button>
      <button onClick={() => onClickCounter(false)}>Decrement</button>
    </>
  )
}

export default App
