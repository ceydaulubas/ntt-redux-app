import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Grid, Button, Popover } from '@mui/material';
import { styled } from '@mui/system';
import { Search as SearchIcon } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

const commonStyles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid grey',
    marginLeft: '2%',
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: ' #74777A',
    ...commonStyles,
    fontWeight: 500,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(0.2em + ${theme.spacing(1)})`,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },

    },
}));

const CategoryCard = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '12px',
    width: '156px',
    height: '194px',
    backgroundColor: '#00254F',
    borderRadius: '4px solid #0059BC',
    color: '#FFFFFF',
}));

const CategoryTypography = styled(Typography)(({ theme }) => ({
    ...commonStyles,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '26px',
    cursor: 'pointer',

}));

const CategoriesButton = styled(Button)(({ theme }) => ({
    ...commonStyles,
    textTransform: 'capitalize',
    backgroundColor: '#0059BC',
    height: '40px',
    width: '125px'
}));


export default function SearchBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsTablet(width >= 768 && width < 992);
            setIsMobile(width < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (event, menuItem) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenuItem(menuItem);
        setIsButtonClicked(true);
    };

    const handleCategoryClick = (item) => {
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsButtonClicked(false);
    };

    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: isMobile ? '5%' : isTablet ? '0 0 0 7%' : '0 0 0 9%' }}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center" direction={isMobile ? 'column' : 'row'}>
                        <Grid item xs={12} sm={2} sx={{
                            marginRight: isTablet ? '15%' : '0',
                            marginBottom: isMobile ? '5%' : '0',
                            marginLeft: isMobile ? '-35%' : '0'
                        }}>
                            <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450512/ntt%20data/n_dzzbjs.png" alt="LogoN" style={{ width: '24px', maxWidth: '25px', marginRight: '3px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_1__tw61zp.png" alt="LogoT" style={{ width: '22px', maxWidth: '23px', marginRight: '3px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_2__xcaink.png" alt="LogoT" style={{ width: '22px', maxWidth: '23px', marginRight: '10px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/d_btcxwo.png" alt="LogoD" style={{ width: '24px', maxWidth: '25px', marginRight: '3px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/a_ofjnec.png" alt="LogoA" style={{ width: '23px', maxWidth: '23px', marginRight: '3px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_2__xcaink.png" alt="LogoT" style={{ width: '22px', maxWidth: '23px', marginRight: '3px' }} />
                                <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/a_1__tipobq.png" alt="LogoA" style={{ width: '23px', maxWidth: '24px' }} />
                            </div>
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={12} sm={isTablet ? 5 : 8}>
                                <Search>
                                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                                    <CategoriesButton
                                        aria-label="categories"
                                        onClick={(e) => handleClick(e, 'Categories')}
                                        sx={{
                                            backgroundColor: '#F4F5F6',
                                            fontWeight: '400',
                                            height: '40px',
                                            width: '200px',
                                            fontSize: '14px',
                                            color: '#32363A',
                                            border: isButtonClicked ? '1px solid rgba(0, 89, 188, 1)' : 'none'
                                        }}
                                        data-menu-item="Categories"
                                        endIcon={anchorEl ? <KeyboardControlKeyIcon /> : <KeyboardArrowDownIcon />}
                                    >
                                        Categories
                                    </CategoriesButton>

                                </Search>
                            </Grid>
                        )}
                        <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {selectedMenuItem === 'Categories' ? (
                                <CategoryCard>
                                    {['Data', 'Category Name', 'Category Name', 'Category Name', 'Category Name'].map((item, index) => (
                                        <CategoryTypography
                                            variant="body1"
                                            key={index}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0059BC')}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item}
                                        </CategoryTypography>
                                    ))}
                                </CategoryCard>
                            ) : null}
                        </Popover>
                        {!isMobile && (
                            <Grid item xs={12} sm={isTablet ? 3 : 2}>
                                <CategoriesButton
                                    variant="contained"
                                    aria-label="search"
                                >
                                    <SearchIcon sx={{ color: 'white' }} />
                                </CategoriesButton>
                            </Grid>
                        )}
                        {isMobile && (
                            <Grid item xs={12} sx={{
                                paddingRight: '40%'
                            }}>
                                <Search sx={{
                                    width: '170%',
                                }}>
                                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                                    <CategoriesButton
                                        variant="contained"
                                        aria-label="search"
                                    >
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </CategoriesButton>
                                </Search>
                            </Grid>
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
