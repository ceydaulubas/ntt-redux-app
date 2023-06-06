import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
    const titles = ['Title', 'Title', 'Title'];
    const subtitles = ['Subtitle', 'Subtitle', 'Subtitle', 'Subtitle'];

    const textStyles = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '23px',
        color: '#FFFFFF',
        '@media (max-width:768px)': {
            fontSize: 12,
            lineHeight: '14px',
        },
    };


    return (
        <Box sx={{ backgroundColor: 'rgba(0, 89, 188, 1)', color: 'rgba(255, 255, 255, 1)', pb: 2, pt: 5 }}>
            <Grid container spacing={5} sx={{ paddingLeft: "10%", paddingRight: "2%" }}>
                <Grid item xs={12} md={6} mb={2}>
                    <Box display="flex" alignItems="center">
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/n_ukcvk6.png" alt="LogoN" style={{ width: "24px", maxWidth: "25px", marginRight: "3px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/t_1__jsxu9j.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "3px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/t_2__vkdyvw.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "10px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/d_cohlrd.png" alt="LogoD" style={{ width: "24px", maxWidth: "25px", marginRight: "3px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400135/ntt%20data/a_1__rlenxr.png" alt="LogoA" style={{ width: "23px", maxWidth: "23px", marginRight: "3px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/t_bfyenb.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "3px" }} />
                        <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685400134/ntt%20data/a_fwxp4d.png" alt="LogoA" style={{ width: "23px", maxWidth: "24px", marginRight: "3px" }} />
                    </Box>
                    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685389590/trusted-global-innovator_yvko5u.png" alt="Logo" style={{ width: '100%', maxWidth: '150px' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            ...textStyles,
                            fontSize: '16px',
                            lineHeight: '18.75px',
                            marginBottom: '50px',
                            width: '50%',
                            color: 'rgba(255, 255, 255, 1)',
                            paddingTop: '3%',
                            display: 'block',
                            '@media (max-width: 768px)': {
                                display: 'none',
                            },
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
                    </Typography>


                    <Box mt={2} display="flex" alignItems="center">
                        <TextField id="email" label="Email" variant="outlined" color="secondary" size="small" sx={{ bgcolor: '#FFFFFF', borderRadius: 0, width: '34%' }} />
                        <Button variant="contained" color="primary" sx={{ bgcolor: 'rgba(0, 37, 79, 1)', borderRadius: 0 }}>Sign Up</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Grid container spacing={2} sx={{ paddingLeft: "20%", paddingTop: "5%" }}>
                        {titles.map((title, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Typography variant="h6" sx={{ marginBottom: '20px' }}>{title}</Typography>
                                {subtitles.map((subtitle, index) => (
                                    <Typography variant="body2" sx={{ marginBottom: '10px' }} key={index}>{subtitle}</Typography>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Box display="flex" alignItems="center" justifyContent="space-between" mt={5} borderTop={2} borderColor="rgba(255, 255, 255, 0.2)" pt={2} sx={{ width: '100%', boxSizing: 'border-box', paddingLeft: "10%", paddingRight: "10%" }}>
                <Box>
                    <Typography sx={textStyles}>contact@nttdata.com</Typography>
                </Box>
                <Typography sx={textStyles}>+3 9876 765 444</Typography>
                <Box display="flex" justifyContent="flex-end" sx={{
                    display: 'block',
                    '@media (max-width: 768px)': {
                        display: 'none',
                    },
                }}>
                    <InstagramIcon sx={{ color: 'white', mx: 1 }} />
                    <FacebookIcon sx={{ color: 'white', mx: 1 }} />
                    <LinkedInIcon sx={{ color: 'white', mx: 1 }} />
                </Box>
            </Box>
        </Box>
    );
}