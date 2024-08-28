import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import License from './pages/License';
import Patent from './pages/Patent';
import ResearchProject from './pages/ResearchProject';
import IntellectualProperty from './pages/IntellectualPRoperty';
import Funding from './pages/Funding'
import PA from './pages/PA';


function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/license' element={<License/>}/>
         <Route path='/patent' element={<Patent/>}/>
         <Route path='/researchproject' element={<ResearchProject/>}/>
         <Route path='/intellectualproperty' element={<IntellectualProperty/>}/>
         <Route path='/funding' element={<Funding/>}/>
         <Route path='/patentapplication' element={<PA/>}/>
         <Route path='*' element={<div>Error Page: 404</div>}/>
      </Routes>
    </BrowserRouter>
    );
};

export default App;


