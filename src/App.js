import React from 'react';
import { BrowserRouter as  Router , Route , Routes  } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SuccessRate from './components/SuccessRate';
import Players from './components/Players';
// import Try from './components/Try';



function App() {
 
  return (
    <div> 
     <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inputform' element={<Form/>} />
        <Route path='/players' element={<Players/>} />
        <Route path='/successrate' element={<SuccessRate/>} />
      </Routes>
     </Router>
     {/* <Try/> */}
    </div>
  );
}

export default App;
