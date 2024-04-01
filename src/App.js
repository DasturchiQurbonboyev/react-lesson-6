import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
