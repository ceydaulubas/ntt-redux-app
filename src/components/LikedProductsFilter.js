import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material';
import { toggleFilter } from '../features/products/productsSlice'

export const LikedProductsFilter = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.list)
    const likedCount = products.filter((product) => product.status === 'liked').length
    const filter = useSelector((state) => state.products.filter) // Getting the filter state

    const handleFilter = () => {
        dispatch(toggleFilter())
    }

    return (
        <div>
            <Button onClick={handleFilter}>{filter ? 'Hepsi' : 'Begenilenler'}</Button>
            <p>{likedCount} urun begenildi</p>
        </div>
    )
}
