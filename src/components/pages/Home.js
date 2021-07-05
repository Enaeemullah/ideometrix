import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import OurServices from '../OurServices';
import Footer from '../Footer';
import Bottom from '../Bottom';

function Home() {
  return (
    <>
      <OurServices />
      <Cards />
      <Footer />
      <Bottom />
    </>
  );
}

export default Home;
