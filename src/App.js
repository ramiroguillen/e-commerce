import CartProvider from './context/CartContext';
import Rutas from './routes';
import './App.css';

function App() {
  return (
    <>
      <CartProvider>
        <Rutas />
      </CartProvider>
    </>
  );
}

export default App;
