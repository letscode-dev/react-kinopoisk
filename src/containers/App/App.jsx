import { Outlet } from 'react-router'
import Header from '../../components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
