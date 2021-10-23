import React from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Main />
      <Services />
      <hr />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
