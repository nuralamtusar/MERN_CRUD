import './App.css';
import AddUser from './components/AddUser';

import AllUsers from './components/AllUsers';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
