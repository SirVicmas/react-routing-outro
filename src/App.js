
import './App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Footer from './Footer';
import Landing from './Landing';
import Details from './Details';

function App() {
  

  return (
    <div className="App">
      
      <Routes> 
         <Route element={<Landing/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/quotes' element={<Home/>}/>
          <Route path='/quotes/:id' element={<Details/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Route>
        
               
       
        <Route path='*' element={<NotFound/>}/>
      </Routes>

     

      
    </div>
  )
}   

export default App;
