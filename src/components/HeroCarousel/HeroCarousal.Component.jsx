import React from "react";
import HeroSlider from "react-slick";

// Component
import {NextArrow,PrevArrow} from "./Arrows.component"



const HeroCarousal = () => {

    const settingsLG ={
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        infinite:true,
        slidesToScroll:1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    };

    const settings = {
        arrows:true,
        autoplay: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };
    
    const images =[
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1488137881216-5bea4b9bac2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
        "https://images.unsplash.com/photo-1623031345438-387dd3c45e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1610208033812-c0d714ad9b5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ];
    return (
    <>
        <div className="lg:hidden bg-black bg-opacity-60">
        <HeroSlider {...settings}>
            {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3 my-3">
                    <img src={image} alt="Loading..." className="w-full h-full"/>
                </div>
            ))}
        </HeroSlider>
        </div>
        <div className="hidden lg:block bg-black bg-opacity-60">
        <HeroSlider {...settingsLG}>
            {images.map((image) => (
                <div className="w-full h-80 px-5 py-1 my-9">
                    <img src={image} alt="Loading..." className="w-full h-full rounded-md"/>
                </div>
            ))}
        </HeroSlider>
        </div>
    </>
    ); 

};

export default HeroCarousal;