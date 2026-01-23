import Description from './Component'

// Description({
//   title: "Заголовок",
//   count: 23
// })

const App = () => {
  const count = 23

  return (
    <>
      <h1>Проект по React</h1>
      <Description title="Заголовок 12" count={count + 1}>
        <div>
          <hr />
          <h2>Передаем в компонент</h2>
          <p>Тут описание</p>
          <hr />
        </div>
      </Description>
    </>
  )
}

export default App
