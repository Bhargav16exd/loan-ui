import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/Landing.page'

function App() {

  return (
   <Routes>

      <Route path='/' element={<LandingPage/>}></Route>

   </Routes>
  )
}

export default App
