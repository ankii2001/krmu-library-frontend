import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer'

const HeroLogin = () => {
    return (
        <>
            <div className=" relative container w-3/5 mx-auto my-24 p-8 bg-gradient-to-r from-LMS-100 via-LMS-50 to-LMS-400 shadow-2xl rounded-xl">
                <Link to='/' className="absolute top-2 right-4 md:right-5">
                  <div className="text-white font-medium text-md md:text-lg">
                  <div className="hover:text-black">
                    <i class="fas fa-times"></i>
                  </div>
                  </div>
                </Link>
                <h1 className="text-white mb-5">Login As....?</h1>
                <div className="space-y-6 flex flex-col items-center">
                <div className="py-2 px-2 ">
                    <a href="/AdminLogin">
                    <button className="text-xl text-white bg-gradient-to-r from-LMS-50 to-LMS-100  border border-black transition duration-500 ease-in-out hover:text-white hover:border-white hover:from-LMS-400 hover:to-LMS-100 transform hover:-translate-y-1 hover:scale-110 p-2 w-40 md:w-80 rounded">
                        Administrator
                    </button>
                    </a>
                </div>
                <div className="py-2 px-2">
                    <a href="/LibrarianLogin">
                    <button className="text-xl text-white bg-gradient-to-r from-LMS-50 to-LMS-100  border border-black transition duration-500 ease-in-out hover:text-white hover:border-white hover:from-LMS-400 hover:to-LMS-100 transform hover:-translate-y-1 hover:scale-110 p-2 w-40 md:w-80 rounded">
                        Librarian
                    </button>
                    </a>
                </div>
                <div className="py-2 px-2">
                    <a href="/StudentLogin">
                    <button className="text-xl text-white bg-gradient-to-r from-LMS-50 to-LMS-100  border border-black transition duration-500 ease-in-out hover:text-white hover:border-white hover:from-LMS-400 hover:to-LMS-100 transform hover:-translate-y-1 hover:scale-110 p-2 w-40 md:w-80 rounded">
                        Student/Staff
                    </button>
                    </a>
                </div>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default HeroLogin;
