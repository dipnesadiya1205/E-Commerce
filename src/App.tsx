import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { ProductPage } from './Pages/Product';
import { CategoryPage } from './Pages/Category';
import { LoginPage } from './Pages/Login';
import { SignupPage } from './Pages/Signup';
import { OrderPage } from './Pages/Order';
import { ShoppingCartPage } from './Pages/ShoppingCart';
import { ProductListPage } from './Pages/ProductsList';
import { ProductDetailsPage } from './Pages/ProductDetails';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/orders' element={<OrderPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/category/*' element={<ProductListPage />} />
          <Route path='/product/show/*' element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
