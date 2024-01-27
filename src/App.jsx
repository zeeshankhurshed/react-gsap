import React, { useEffect } from 'react';
import Header from "./component/Header/Header";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Journal from "./component/Journal/Journal";
import Images from "./Images/Images";
import { gsap, Power3 } from "gsap";

const AutoReloadPage = () => {
  useEffect(() => {
    const reloadInterval = 15000; // 1 minute in milliseconds

    const reloadPage = () => {
      window.location.reload(true); // Reloads the page from the server, not from cache
    };

    const intervalId = setInterval(reloadPage, reloadInterval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return null; // AutoReloadPage component doesn't render anything
};

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <>
      <AutoReloadPage />
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Contact timeline={tl} />
        <About />
        <Journal />
        <Images timeline={tl} ease={ease} />
      </div>
    </>
  );
}

export default App;
