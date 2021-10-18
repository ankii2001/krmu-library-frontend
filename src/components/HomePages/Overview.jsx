import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

export default function Overview() {
  return (
  <motion.div 
  initial={{opacity : 0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  >
  <h1 className='Overview'>Overview</h1>
  </motion.div>
  );
};