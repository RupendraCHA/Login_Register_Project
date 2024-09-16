// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignIn/signUp'
import Login from './Login/Login'
import Home from './Home'
import InitialPage from './InitialPage/InitialPage'
import DataModels from './dataModels/dataModels.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />}></Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/dataModels' element={<DataModels />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
