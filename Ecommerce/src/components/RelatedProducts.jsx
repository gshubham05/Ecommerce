import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function RelatedProducts({ category, subCategory }) {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((i) => (category == i.category))
            productCopy = productCopy.filter((i) => (subCategory == i.subCategory))
            setRelated(productCopy.slice(0, 5));

        }
    }, [products])
    return (
        <div className='my-24'>
            <div className="text-center text-3xl py-2">
                <Title t1={'RELATED'} t2={"PRODUCTS"} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((i, ind) => (
                    <ProductItem key={ind} id={i._id} name={i.name} price={i.price} image={i.image} />
                ))}
            </div>
        </div>

    )
}

export default RelatedProducts