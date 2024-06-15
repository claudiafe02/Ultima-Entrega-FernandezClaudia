import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/Navbar/NavBarComponent';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Product/ItemDetailContainer';
import CartContainer from './components/Navbar/CartContainer';
import CartComponent from './components/Navbar/CartComponent';
import CartProvider from './context/CartContext';
import Checkout from './components/Navbar/Checkout';


export default function App() {
  return (
    <>
    <CartProvider >
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/:prodCategory" element={<ItemListContainer /> }/>
        <Route exact path="/Item/:prodId" element={<ItemDetailContainer /> }/>
        <Route exact path="/CartComponent" element={<CartContainer /> }/>
        <Route exact path="/CartComponent/Checkout" element={<Checkout /> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

