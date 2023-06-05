import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { likeProduct, unlikeProduct } from '../features/products/productsSlice'
import '../App.css'

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

    const styles = {
        text: {
            fontFamily: "Roboto, sans-serif",
            color: "#00254F",
            marginLeft: "1%"
        }
    };

    // Convert the price to TL and format
    const priceInTL = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' })
        .format(product.price)
        .replace('₺', ''); // Remove the ₺ character

    return (
        <Card style={{ maxWidth: 345, position: 'relative', border: '1px solid 	#C8C8C8', borderRadius: '10px', cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.ceydaulubas.com'}>
            <div style={{ padding: '0 16px' }}>
                <img
                    // src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: '100%', height: 'auto', marginTop: "5%" }}
                />
            </div>
            <FavoriteBorderIcon
                onClick={product.status === 'liked' ? handleUnlike : handleLike}
                style={{
                    position: "absolute",
                    right: 25,
                    top: 25,
                    backgroundColor: '#ffffff',
                    color: product.status === 'liked' ? 'red' : 'grey',
                    borderRadius: '50%',
                    padding: '5px',
                    '&:hover': {
                        backgroundColor: '#ffffff',
                    },
                }}
            >
            </FavoriteBorderIcon>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ ...styles.text, paddingLeft: "4%", fontSize: "16px", fontWeight: "600" }}>
                    {product.name}
                </Typography>
                <Box bgcolor="rgba(230, 238, 248, 1)" p={2} sx={{ ...styles.text, fontSize: "14px", fontWeight: "700" }}>
                    <Typography variant="body1"><b>{priceInTL} TL</b> </Typography>
                </Box>
                <Typography variant="h6" sx={{ ...styles.text, paddingLeft: "4%", fontSize: "16px", marginBottom: "2%", marginTop: "2%", fontWeight: "500" }}>Description</Typography>
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
