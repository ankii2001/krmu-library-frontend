import React from 'react';
import '../../App.css';
import HeroLogin from '../LoginPages/HeroLogin';
import { motion } from 'framer-motion';


export default function LoginHere() {
  return (
    <>
    <motion.div 
      initial={{opacity : 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
    <HeroLogin/>
    </motion.div>
    </>
  );
}