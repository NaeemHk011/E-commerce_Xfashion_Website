import React from 'react'
import ProductCard from './ProductCard';

const products = [
    {
        image: "/images/jacket-1.jpg",
        title: "JACKET",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$50.00"
    },
    {
        image: "/images/party-wear-1.jpg",
        title: "PARTY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$45.00"
    },
    {
        image: "/images/shirt-1.jpg",
        title: "SHIRT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 3,
        price: "$55.00"
    },
    {
        image: "/images/skirt-1.jpg",
        title: "SKIRT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$60.00"
    },
    {
        image: "/images/sports1.jpg",
        title: "SPORT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$70.00"
    },
    {
        image: "/images/watch-1.jpg",
        title: "WATCH",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 3,
        price: "$40.00"
    },
    {
        image: "/images/watch-2.jpg",
        title: "WATCH",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$80.00"
    },
    {
        image: "/images/jacket-1.jpg",
        title: "JACKET",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        price: "$65.00"
    }
];




const ProductData = () => {
    return (
        <div>
            <div className='container pt-16'>
                <h2 className=' text-3xl text-center font-bold pb-4 text-[#FF5321]'>New Products</h2>
                <div className='grid grid-cols-1 place-utems-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 '>
                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                        />))}
                </div>
            </div>
        </div>

    )
}

export default ProductData