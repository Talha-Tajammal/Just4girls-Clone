import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar container">
      {/* Top Section: Logo, Search Bar, Login/Register */}
      <div className="navbar-top">
        <div className="container row">
          <div className="navbar-left">
            <Link to="/">
              <img
                src="https://just4girls.pk/wp-content/uploads/2023/07/J4G-logo.svg"
                alt="Logo"
                className="site-logo"
              />
            </Link>
          </div>
          <div className="navbar-center whb-visible-lg">
            <form className="search-form">
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Search for products"
                  name="s"
                  aria-label="Search"
                  required
                />
              </div>
              {/* <div className="search-category-group">
          <select name="product_cat">
            <option value="0">Select category</option>
            <option value="bath-body">Bath & Body</option>
            <option value="fragrance">Fragrance</option>
            <option value="hair">Hair</option>
            <option value="makeup">Makeup</option>
            <option value="minibar">Mini Bar</option>
            <option value="skincare">Skincare</option>
            <option value="tools-accessories">Tools/Accessories</option>
          </select>
        </div> */}
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="navbar-right">
            <Link to="/my-account" className="link linklr">
              Login / Register
            </Link>
            <Link to="/wishlist" className="icon-link">
              <i className="bi bi-heart"></i>
            </Link>
            <Link to="/cart" className="icon-link">
              <i className="bi bi-cart3"></i>
              <span className="cart-total">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">PKR</span>
                  &nbsp;0
                </bdi>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation Menu */}
      <div className={`navbar-bottom ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="container ">
          <button className="navbar-toggle" onClick={toggleMobileMenu}>
            <i className="bi bi-list"></i>
          </button>
          <ul className="nav-menu">
            <li className="dropdown">
              <Link to="/makeup">Makeup</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/makeup/face">Face Makeup</Link>
                </li>
                <li>
                  <Link to="/makeup/eyes">Eyes Makeup</Link>
                </li>
                <li>
                  <Link to="/makeup/lips">Lips Makeup</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/bath-body">Bath & Body</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/bath-body/bath-shower">Bath & Shower</Link>
                </li>
                <li>
                  <Link to="/bath-body/hand-feet">Hand & Feet</Link>
                </li>
                <li>
                  <Link to="/bath-body/lotions-creams">Lotions & Creams</Link>
                </li>
                <li>
                  <Link to="/bath-body/feminine-essentials">
                    Feminine Essentials
                  </Link>
                </li>
              </ul>
            </li>
            <li className="highlighted">
              <Link to="/nails">Nails</Link>
            </li>
            <li className="dropdown">
              <Link to="/skincare">Skincare</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/skincare/face">Face Skincare</Link>
                </li>
                <li>
                  <Link to="/skincare/eyes">Eyes Skincare</Link>
                </li>
                <li>
                  <Link to="/skincare/lips">Lips Skincare</Link>
                </li>
              </ul>
            </li>
            <li className="highlighted">
              <Link to="/minibar">Mini Bar</Link>
            </li>
            <li className="dropdown">
              <Link to="/hair">Hair</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/hair/conditioner">Conditioner</Link>
                </li>
                <li>
                  <Link to="/hair/shampoos">Shampoos</Link>
                </li>
                <li>
                  <Link to="/hair/hair-care">Hair Care</Link>
                </li>
                <li>
                  <Link to="/hair/styling-tools">Styling Tools</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/fragrances">Fragrances</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/fragrances/deodorant-spray">Deodorant Spray</Link>
                </li>
                <li>
                  <Link to="/fragrances/perfumes">Perfumes</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/tools-accessories">Tools/Accessories</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/tools-accessories/makeup-tools">Makeup Tools</Link>
                </li>
                <li>
                  <Link to="/tools-accessories/manicure-pedicure">
                    Manicure/Pedicure
                  </Link>
                </li>
                <li>
                  <Link to="/tools-accessories/mirrors">Mirrors</Link>
                </li>
                <li>
                  <Link to="/tools-accessories/organizers">Organizers</Link>
                </li>
              </ul>
            </li>
            <li className="highlighted">
              <Link to="/gifts">Gifts</Link>
            </li>
            <li className="dropdown">
              <Link to="/sale">Sale</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/sale/flash-sale">Flash Sale</Link>
                </li>
                <li>
                  <Link to="/sale/rs-399">Rs 399</Link>
                </li>
                <li>
                  <Link to="/sale/rs-499">Rs 499</Link>
                </li>
                <li>
                  <Link to="/sale/rs-599">Rs 599</Link>
                </li>
                <li>
                  <Link to="/sale/rs-999">Rs 999</Link>
                </li>
                <li>
                  <Link to="/sale/rs-1499">Rs 1499</Link>
                </li>
                <li>
                  <Link to="/sale/rs-2499">Rs 2499</Link>
                </li>
              </ul>
            </li>
            <li className="highlighted">
              <Link to="/brands">Brands</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
