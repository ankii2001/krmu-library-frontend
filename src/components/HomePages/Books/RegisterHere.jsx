import React from 'react';
import '../../../App.css';
import Form2 from '../../../RegistrationForm/From2'
import { motion } from 'framer-motion';


export default function RegisterHere() {
  return (
    <>
    <motion.div 
      initial={{opacity : 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
    <Form2/>
    </motion.div>
    </>
  );
}