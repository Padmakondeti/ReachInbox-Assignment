import logo from './logo.svg'

import AllRoutes from './AllRoutes/AllRoutes'
import {Navbar} from './component/Navbar/Navbar'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
