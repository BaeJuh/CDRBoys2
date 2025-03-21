import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Content from './assets/Content';
import Header from './assets/Header';
import Product from './assets/Product';
import Products from './assets/Products';

function App() {
  const [content, setContent] = useState<string>("");

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content content={content} />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
