// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './Register/signUp'
import Login from './Login/Login'
import Home from './Home'
import InitialPage from './InitialPage/InitialPage'
import DataModels from './dataModels/dataModels.jsx'
import DataModeling from './DataModelingPage/DataModeling.jsx'
import NotFound from './NotFound/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<InitialPage />}></Route>
        <Route exact path='/register' element={<SignUp />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/dataModels' element={<DataModels />}></Route>
        <Route exact path='/dataModeling' element={<DataModeling />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
