import './App.css';
import Main from './pages/main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Thankyou from './pages/thankyou';
import Registerform from './pages/registerform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/success' element={<Thankyou/>}/>
          <Route path='/register' element={<Registerform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
