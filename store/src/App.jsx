import React, { useRef } from 'react';
import Register from './Components/Register';
import Books from './Components/Books';
import "./App.css";
import Fetch from './Components/Fetch';
import store from './Components/Redux/Store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Footer from './Components/Footer';

const App = () => {
  const [show, setShow] = useState(false);
  const footerRef = useRef(null);

  const handleContactClick = () => {
    // Scroll to the Footer section when Contact is clicked
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Provider store={store}>
        <p style={{ position: "absolute", top: "2.5vh", left: "3vw", fontSize: "25px", color: "red" }} className='heading'>KALVIUM BOOKS</p>
        <nav style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <p onClick={() => setShow(!show)}>{!show ? "Register" : "Home"}</p>
          <img src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" style={{ width: "40px", padding: "15px 80px" }} />
          <p onClick={handleContactClick}>Contact</p>
        </nav>
        {show ? <Register /> : (<Books />)}
        <Fetch />
      </Provider>
      <Footer ref={footerRef} />
    </>
  );
};

export default App;
