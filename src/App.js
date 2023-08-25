
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home'
import Contact from './routes/Contact'
import Skill from './routes/Skill'
import About from './routes/About'
function App() {


  return (
    <>
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skill" element={<Skill/>}/>
      </Routes> 

    </>
  )
}
export default App;
