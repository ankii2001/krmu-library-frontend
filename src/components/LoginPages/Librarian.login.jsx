import React from 'react'
import { motion } from 'framer-motion';
import FormLibrarian from '../../LibrarianForm/FormLibrarian'

export default function Admin () {
    return (
    <>
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <FormLibrarian/>
    </motion.div>
    </>
    );
};
