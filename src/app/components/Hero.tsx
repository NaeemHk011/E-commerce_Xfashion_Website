'use client'
import React from 'react';
import Slider from "react-slick";
import SlideData from './SlideData';

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };
    const slideData = [
        {
            id: 0,
            img: "/images/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/images/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "WOMEN'S SUNGLASSES",
            price: "$50"
        },
        {
            id: 2,
            img: "/images/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$100"
        }
    ];
    return (
        <div className='container pt-6 lg:pt-0  bg-[#FF5321] text-[#FF5321]'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <SlideData
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                        
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Hero;