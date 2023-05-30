import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { likeProduct, unlikeProduct } from '../features/products/productsSlice'

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const handleLike = () => {
        dispatch(likeProduct(product.id))
    }
    const handleUnlike = () => {
        dispatch(unlikeProduct(product.id))
    }

    // Convert the price to TL and format
    const priceInTL = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' })
        .format(product.price)
        .replace('₺', ''); // Remove the ₺ character

    return (
        <Card style={{ maxWidth: 345, position: 'relative' }}>
            <div style={{ padding: '0 16px' }}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <IconButton onClick={product.status === 'liked' ? handleUnlike : handleLike} style={{ position: "absolute", right: 16, top: 16 }}>
                <FavoriteIcon color={product.status === 'liked' ? 'secondary' : 'default'} />
            </IconButton>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Box bgcolor="rgba(230, 238, 248, 1)" p={2}>
                    <Typography variant="body1">{priceInTL} TL </Typography>
                </Box>
                <Typography variant="h6">Description</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
