import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Shop from './Shop';

const Home = () => {
  return (
    <>
      <section className="bg-dark text-white text-center py-5">
        <h1>Shop in Style</h1>
        <p>With this shop homepage template</p>
      </section>
      <Shop/>                                   
     
      
    </>
  );
};

export default Home;
