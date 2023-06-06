import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { likeProduct, unlikeProduct } from '../features/products/productsSlice'
import '../App.css'

const ProductImage = ({ src, alt }) => (
    <div style={{ padding: '0 16px' }}>
        <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: 'auto', marginTop: "5%" }}
        />
    </div>
);

const LikeIcon = ({ status, handleLike, handleUnlike }) => (
    <FavoriteBorderIcon
        onClick={status === 'liked' ? handleUnlike : handleLike}
        style={{
            position: "absolute",
            right: 25,
            top: 25,
            backgroundColor: '#ffffff',
            color: status === 'liked' ? 'red' : 'grey',
            borderRadius: '50%',
            padding: '5px',
            '&:hover': {
                backgroundColor: '#ffffff',
            },
        }}
    />
);

const TextStyles = {
    fontFamily: "Roboto, sans-serif",
    color: "#00254F",
    marginLeft: "1%"
};

const formatPrice = (price) => (
    new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' })
        .format(price)
        .replace('₺', '') // Remove the ₺ character
);

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const handleLike = (event) => {
        event.stopPropagation();
        dispatch(likeProduct(product.id))
    }
    const handleUnlike = (event) => {
        event.stopPropagation();
        dispatch(unlikeProduct(product.id))
    }

    return (
        <Card style={{ maxWidth: 345, position: 'relative', border: '1px solid 	#C8C8C8', borderRadius: '10px', cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.ceydaulubas.com'}>
            <ProductImage src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt={product.name} />
            <LikeIcon status={product.status} handleLike={handleLike} handleUnlike={handleUnlike} />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ ...TextStyles, paddingLeft: "4%", fontSize: "16px", fontWeight: "600" }}>
                    {product.name}
                </Typography>
                <Box bgcolor="rgba(230, 238, 248, 1)" p={2} sx={{ ...TextStyles, fontSize: { xs: "12px", sm: "14px", md: "14px" }, fontWeight: "700" }}>
                    <Typography variant="body1"><b>{formatPrice(product.price)} TL</b> </Typography>
                </Box>

                <Typography variant="h6" sx={{ ...TextStyles, paddingLeft: "4%", fontSize: "16px", marginBottom: "2%", marginTop: "2%", fontWeight: "500" }}>Description</Typography>
                <div>
                    <Typography
                        variant="body2"
                        color="#00254F"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            paddingLeft: "5%",
                            fontSize: "12px",
                            marginBottom: "2%",
                        }}
                    >
                        {product.description}
                    </Typography>
                </div>
                <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: "5%", color: "#000000", fontFamily: 'Inter', fontSize: { xs: "10px", sm: "8px", md: "10px" } }}>
                    {product.shippingMethod}
                </Typography>
            </CardContent>
        </Card>
    )
}
