import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductCarousel from './components/ProductCarousel';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './styles.css';
import './vendor.css';
import './swiper-bundle.min.css';
import './parallax.css';
import './normalize.css';
import './jquery-filestyle.min.css';

function App() {
  const newArrivals = [
    { image: 'attachments/attachments1/i1.png', title: 'Natural Glow', price: '$95.00' },
    // Add more items here...
  ];

  const bestSellers = [
    { image: 'attachments/attachments1/i0.png', title: 'Natural Glow', price: '$95.00' },
    // Add more items here...
  ];

  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductCarousel title="Arrivals" items={newArrivals} />
      <ProductCarousel title="Best Selling Items" items={bestSellers} />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
