import React from 'react'
import { motion } from 'framer-motion';
import FormStudent from '../../StudentForm/FormStudent'

export default function Admin () {
    return (
    <>
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <FormStudent/>
    </motion.div>
    </>
    );
};
