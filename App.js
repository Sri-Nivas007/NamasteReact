import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.webp';
import { ResLists } from './Dynamic';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="res-name">
        <h1 className="text">Sri Nivas</h1>
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

const Rescards = (props) => {
  const { response } = props;
  const { avgRatingString, costForTwo, name, cuisines, deliveryTime } =
    response.info;
  console.log('props', props);
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          response.info.cloudinaryImageId
        }
        alt=""
      />
      <div className="inner-cards">
        <div className="left">
          <h2>{name}</h2>
          <h4>{cuisines.join(',')}</h4>
        </div>
        <div className="right">
          <h4 className="rating">{avgRatingString}⭐</h4>
          <h4 className="price">{costForTwo}</h4>
          <h4>{response.info.sla.deliveryTime}Mins</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search"> search</div>
      <div className="res-container">
        {ResLists.map((res) => (
          <Rescards key={res.info.id} response={res} />
        ))}
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
