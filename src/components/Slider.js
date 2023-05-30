import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from '@mui/material/Box';
import { GlobalStyles } from '@mui/system';

const MySlider = () => {
    const images = [
        'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685439572/ntt%20data/Rectangle_25_vvjc0v.png',
        'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685474386/ntt%20data/Rectangle_25_1_cubiyu.png',
        'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685474385/ntt%20data/Rectangle_25_3_jiglre.png',
        'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685474382/ntt%20data/Rectangle_25_2_oordbv.png',
    ];

    return (
        <>
            <GlobalStyles styles={{
                '.carousel .control-dots': {
                    position: 'absolute',
                    bottom: '5px',
                    left: '45%',
                    margin: 0,
                    padding: '10px',
                    borderRadius: '0px',
                },
                '.carousel .control-dots .dot': {
                    margin: '0 2px',
                },
                '.carousel .carousel-status': {
                    display: 'none',
                },
                '.carousel .slider-overlay': {
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '50px',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    padding: '10px',
                    borderRadius: '0px',
                },
                '@media (max-width: 768px)': {
                    '.carousel .control-dots': {
                        left: '35%',
                    },
                },
            }} />

            <Carousel
                autoPlay
                infiniteLoop
                useKeyboardArrows
                showThumbs={false}
                showArrows={false}
                statusFormatter={() => ''}
            >
                {images.map((img, idx) => (
                    <Box key={idx} component="div" sx={{ position: 'relative' }}>
                        <img src={img} alt={`Slide ${idx}`} style={{ width: '100%', height: 'auto', maxHeight: '100vh' }} />
                        <div className='slider-overlay' />
                    </Box>
                ))}
            </Carousel>
        </>
    );
};

export default MySlider;
