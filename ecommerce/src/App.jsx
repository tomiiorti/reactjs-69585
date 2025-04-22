import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
