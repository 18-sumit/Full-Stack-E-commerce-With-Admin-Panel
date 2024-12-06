import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext.jsx"
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {

    const { products } = useContext(ShopContext)

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // in assets.js we have a field for each file as bestseller : true / false
        // hence we have to filter those products only
        const bestProducts = products.filter((item) => (item.bestseller)) // check assets file 
        console.log(bestProducts)
        // after filteration we only want to show 5 Products.
        setBestSeller(bestProducts.slice(0, 5))
    }, [products])

    // console.log(products);

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLER"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller