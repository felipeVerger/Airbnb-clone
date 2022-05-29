import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
