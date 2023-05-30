import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'
import { ProductCard } from '../components/ProductCard'
import { LikedProductsFilter } from '../components/LikedProductsFilter'
import { Footer, MySlider } from "../components";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.list)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const displayProducts = products.slice(0, 4);

    return (
        <div>
            <MySlider />
            <LikedProductsFilter />
            <Grid container spacing={2}>
                {displayProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                Daha Fazla
            </Button>
            <Footer />
        </div>
    )
}

export default Home;
