import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/DashBoard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
     <div >
          <BrowserRouter>
          <Navbar/>

          <Routes>
           
          <Route path='/'  element={<Dashboard panel="news"/>}/>
          <Route path='/album'  element={<Dashboard panel="album"/>}/>
          <Route path='/board'  element={<Dashboard panel="board"/>}/>
          <Route path='/contact'  element={<Dashboard panel="contact"/>}/>
          <Route path='/event' element={<Dashboard panel="event"/>}/>
          <Route path='/follow'  element={<Dashboard panel="follow"/>}/>
          <Route path='/organization'  element={<Dashboard panel="organization"/>}/>
          <Route path='/personalprogress'  element={<Dashboard panel="personalProgress"/>}/>
          <Route path='/project'  element={<Dashboard panel="project"/>}/>
          <Route path='/task'  element={<Dashboard panel="task"/>}/>
            
        
          </Routes>
          <Footer/>
          </BrowserRouter>
     </div>
    </>
  )
}

export default App
