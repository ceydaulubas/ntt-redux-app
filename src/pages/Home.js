import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'
import { ProductCard } from '../components/ProductCard'
import { LikedProductsFilter } from '../components/LikedProductsFilter'
import { Footer, MySlider } from "../components";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.list)
    const loading = useSelector((state) => state.products.status === 'loading')
    const filter = useSelector((state) => state.products.filter)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    let displayProducts;

    if (filter) {
        // If filter is active, show all liked products
        displayProducts = products.filter((product) => product.status === 'liked')
    } else {
        // If filter is not active, show all products
        displayProducts = products;
    }

    const settings = {
        dots: isMobile ? true : false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 4,
        slidesToScroll: isMobile ? 1 : 4,

    };
    console.log(window.innerWidth)
    return (
        <div>
            <MySlider />
            <LikedProductsFilter />
            {loading ? <CircularProgress /> :
                <Slider key={displayProducts.length} {...settings} className="custom-slider" style={{ marginLeft: "9%", marginRight: "6%", marginBottom: "2%" }}>
                    {displayProducts.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </Slider>



            }
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <Button variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                    Daha Fazla
                </Button>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
