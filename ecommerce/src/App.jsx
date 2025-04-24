import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/Nav/NavBar';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import CartContainer from './components/Cart/CartContainer';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className='bg-dark text-light min-vh-100 vw-100 overflow-hidden'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
