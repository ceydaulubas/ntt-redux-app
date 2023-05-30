import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material';
import { fetchProducts } from '../features/products/productsSlice'
import { ProductCard } from './ProductCard'

export const LikedProductsFilter = () => {
    const [filter, setFilter] = useState(false)
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.list)
    const likedCount = products.filter((product) => product.status === 'liked').length
    const likedProducts = filter ? products.filter((product) => product.status === 'liked') : products

    const handleFilter = () => {
        setFilter(!filter)
    }

    return (
        <div>
            <Button onClick={handleFilter}>{filter ? 'Show All' : 'Show Liked'}</Button>
            <p>{likedCount} products liked</p>
            {likedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
