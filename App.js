import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.webp';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Rescards = () => {
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg"
        alt=""
      />
      <h3>Meghnana Foods</h3>
      <h4>Vareity Rice North Style</h4>
      <h4>4.5 stars</h4>
      <h4>35 Mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search"> search</div>
      <div className="res-container">
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
