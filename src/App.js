import CartProvider from './context/CartContext';
import Rutas from './routes';

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
