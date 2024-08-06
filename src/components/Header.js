import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../header.css"

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Navbar expand="lg" className="justify-content-between">
          <Navbar.Brand href="/">
            <img src={process.env.PUBLIC_URL + '/attachments/logo2.png'} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/pages">Pages</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="header-icons">
              <a href="/wishlist">
                <img src={process.env.PUBLIC_URL + '/images/heart-icon.png'} alt="Wishlist" />
              </a>
              <a href="/cart">
                <img src={process.env.PUBLIC_URL + '/images/cart-icon.png'} alt="Cart" />
              </a>
              <a href="/account">
                <img src={process.env.PUBLIC_URL + '/images/account-icon.png'} alt="Account" />
              </a>
              <a href="/search">
                <img src={process.env.PUBLIC_URL + '/images/search-icon.png'} alt="Search" />
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
