import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'

const ProductCarousel = ({ title, items }) => (
  <section className="product-carousel position-relative py-5 my-5 open-up" data-aos="zoom-out">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center my-5 py-lg-5">
        <div className="line-img my-2">
          <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="" />
        </div>
        <h4 className="text-uppercase mb-0">{title}</h4>
        <div className="line-img my-2">
          <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="" />
        </div>
      </div>
      <div className="swiper product-swiper overflow-hidden">
        <div className="swiper-wrapper d-flex">
          {items.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <div className="product-item">
                <div className="image-holder position-relative">
                  <a href="single-product.html">
                    <img src={process.env.PUBLIC_URL + item.image} alt="categories" className="product-image img-fluid" />
                  </a>
                  <a href="wishlist.html" className="btn-icon btn-wishlist">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="svg-color">
                      <use xlinkHref="#heart"></use>
                    </svg>
                  </a>
                  <a href="wishlist.html" className="btn-icon btn-cart">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="svg-color">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </a>
                  <div className="product-content">
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductCarousel;
