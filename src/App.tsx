import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/Landing.page'
import { Signup } from './pages/Signup.page'
import { Login} from './pages/Login.page'
import { Dashboard } from './pages/Dashboard.page'

function App() {

  return (
   <Routes>

      <Route path='/' element={<LandingPage/>}></Route>

      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

      <Route path='/dashboard' element={<Dashboard/>}></Route>

   </Routes>
  )
}

export default App
