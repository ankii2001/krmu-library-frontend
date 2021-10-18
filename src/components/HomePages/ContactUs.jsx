import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
  <div class="relative container w-3/5 mx-auto my-24 p-8 bg-gradient-to-r from-LMS-100 via-LMS-50 to-LMS-400 shadow-2xl rounded-xl">
  <Link to='/' className="absolute top-2 right-4 md:right-5">
    <div className="text-white font-medium text-md md:text-lg">
      <div className="hover:text-black">
        <i class="fas fa-times"></i>
      </div>
    </div>
  </Link>
  <h1 className="text-white mb-8">Contact Us</h1>
  <div className="overflow-">
  <div className="container w-full h-full m-5 flex content-evenly items-center" >
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lYvdVXKN7IepScj1Y3TargHaHa%26pid%3DApi&f=1"
    alt="Mahima"
    className="w-28 h-28 rounded-full m-5"/>
    <span>
    <h4 className="text-xl font-semibold">Mahima</h4>
    <p className="text-gray-800"> Pursuing B.tech in Computer Science from KR Mangalam University.<br/>
    <a className="hover:text-red-600" href="mailto:mahimamanuela@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> - mahimamanuela@gmail.com <br/></a>
    <a className="hover:text-green-900" href="tel:+918700208652"><i class="fas fa-phone-alt"></i> - +918700208652</a></p>
    </span>
  </div>
  <div className="w-full h-full m-5 flex content-evenly items-center" >
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.umgqVsNmFCkqXRDKCNKv6gHaHa%26pid%3DApi&f=1"
    alt="Mahima"
    className="w-28 h-28 rounded-full m-5"/> 
    <span>
    <h4 className="text-xl font-semibold ">Ankit Luthra</h4>
    <p className="text-gray-800"> Pursuing B.tech in Computer Science from KR Mangalam University.<br/>
    <a className="hover:text-red-600" href="mailto:ankitluthra2001@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> - ankitluthra2001@gmail.com <br/></a>
    <a className="hover:text-green-900" href="tel:+919711219705"><i class="fas fa-phone-alt"></i> - +919711219705</a></p>
    </span>
  </div>
  </div>
  </div>
    </motion.div>
  );
};