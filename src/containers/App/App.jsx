import { useState, useEffect } from "react"
import Description from "../Description";

const App = () => {
  const [counter, setCounter] = useState(0)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true)

  useEffect(() => {
    // console.log('Монтирование 1')
  }, []);

  useEffect(() => {
    // console.log('Монтирование 2')
    // console.log('Обновление', counter)
  }, [counter]);

  const onResize = () => {
    // console.log('resize')
  }

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize)
      // console.log('Размонтирование')
    }
  }, []);

  const onClick = () => {
    setCounter((prev) => prev + 1)
  }

  if (isDescriptionVisible) {
    //
  } else {
    //
  }

  return (
    <>
      {counter}
      <button onClick={onClick}>Counter</button>
      <button onClick={() => setCounter(0)}>Сброс</button>

      <button onClick={() => setIsDescriptionVisible(false)}>Удалить Description</button>

      {isDescriptionVisible ? <Description /> : null}
      {/* {isDescriptionVisible ? 'Видимый' : 'Невидимый'} */}
    </>
  )
}

export default App
