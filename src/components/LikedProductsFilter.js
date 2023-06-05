import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleFilter } from '../features/products/productsSlice'

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        fontWeight: 500,
    },
});

export const LikedProductsFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);
    const filter = useSelector((state) => state.products.filter);

    const likedProducts = products.filter((product) => product.status === 'liked');
    const likedCount = likedProducts.length;

    const handleFilter = () => {
        dispatch(toggleFilter());
    }

    const isMobile = useMediaQuery('(max-width: 480px)');

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2%', marginBottom: '2%', marginLeft: '10%' }}>
                <ResponsiveTypography variant="h5" style={{ marginBottom: '2%' }}>
                    Content title goes here
                </ResponsiveTypography>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10%', marginBottom: '2%' }}>
                    <FavoriteBorderIcon style={{ color: '#000000', marginRight: '0.5rem', fontSize: '18px' }} />
                    <Typography style={{ marginRight: '0.5rem', fontSize: isMobile ? '0.6rem' : '0.875rem', lineHeight: '1rem', color: '#000000', whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: isMobile ? '0.6rem' : '1rem' }}>{likedCount}</span> ÜRÜN
                    </Typography>
                    <Button onClick={handleFilter} style={{ textTransform: 'none', backgroundColor: '#1976D2', fontSize: '1rem', lineHeight: '1.1875rem', color: '#FFFFFF', marginLeft: '5%' }}>
                        <span style={{ fontSize: isMobile ? '0.7rem' : '1rem' }}>{filter ? 'Hepsi' : 'Beğenilenler'}</span>
                    </Button>

                </div>
            </div>
        </ThemeProvider>
    );
}

const ResponsiveTypography = ({ variant, children, style }) => {
    return (
        <>
            <Typography variant={variant} sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, ...style }}>
                {children}
            </Typography>
        </>
    );
}
