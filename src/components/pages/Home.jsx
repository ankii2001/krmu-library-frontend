import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import Cards from '../Cards';
import HeroCarousal from '../HeroCarousel/HeroCarousal.Component';
import Footer from '../Footer';


function Home(props) {
  return (
    <>
    <motion.div 
      initial={{opacity : 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
      <HeroCarousal/>
      {props.children}
      <div className="lg:hidden">
      <h1 className="text-xl italic text-white bg-black bg-opacity-60">
      “A book is a drop in the ocean of knowledge, in the ocean of knowledge every reader is drowned in the thoughts of what to read?.”
      <p className="text-sm pb-8">
      ― Luffina Lourduraj 
      </p>
      </h1>
      <Button>SIGN UP</Button>
      </div>
      <div className="hidden lg:block">
      <h1 className="text-4xl italic text-white bg-black bg-opacity-60">
      “A book is a drop in the ocean of knowledge, in the ocean of knowledge every reader is drowned in the thoughts of what to read?.”
      <p className="text-xl pb-8">
      ― Luffina Lourduraj 
      </p>
      </h1>
      </div>
      <Cards />
      <Footer />
    </motion.div>
    </>
  );
}

export default Home;