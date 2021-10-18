import React from 'react'
import { motion } from 'framer-motion';
import Form from '../../AdminForm/Form'

export default function Admin () {
    return (
    <>
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <Form/>
    </motion.div>
    </>
    );
};




