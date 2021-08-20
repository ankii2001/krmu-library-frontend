import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
  <h1 className='ContactUs'>Contact Us</h1>
    </motion.div>
  );
};