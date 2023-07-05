
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Servises from './Components/Servises';
import Navbar from './Components/Navbar';
import Ragistration from './Components/Ragistration';


function App() {

  return (
    <>
    <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Servises' element={<Servises />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Ragistration' element={<Ragistration /> }></Route>
          <Route path='*' element={<Home />} />
        </Routes>
    
    </>
  )
}

export default App;
