import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
