import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box, Popover, Card, CardContent, CardMedia } from '@mui/material';
import { Search as SearchIcon, ArrowDropDown as ArrowDropDownIcon, ArrowDropUp as ArrowDropUpIcon } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '60%',
    border: '1px solid grey',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '60%',
    },
}));


const StyledIconButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgba(0, 89, 188, 1)',
    color: 'white',
    '&:hover': {
        backgroundColor: alpha('rgba(0, 89, 188, 1)', 0.75),
    },
    borderRadius: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '60.5ch',
    },
}));


const MenuItemButton = styled(Button)(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    '&:hover': {
        backgroundColor: 'transparent',
    },
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#6A6D70',
    textTransform: 'capitalize',
}));

const CategoryCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '12px',
    width: "156px",
    height: '194px',
    backgroundColor: '#00254F',
    borderRadius: '4px',
    color: '#FFFFFF',
}));


const MenuCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#F4F5F6',
    borderRadius: '1px',
    width: '1200px',
    height: '300px',
    padding: "30px 15px 0 15px",
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '100%',
    },
}));

const CardContentWrapper = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
    width: "400px",
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
    width: "776px",
    height: "240px",
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '200px',
    },

}));

const CategoryTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '26px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(0, 89, 188, 1)',
    },
}));


export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Categories');

    const handleClick = (event) => {
        const menuItem = event.currentTarget.dataset.menuItem;
        setAnchorEl(event.currentTarget);
        setSelectedMenuItem(menuItem);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMenuItem('');
    };

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={1} md={1} align="center">
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "90%" }}>
                            {/* <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685467103/ntt%20data/pngwing.com_1_nluawi.png" alt="logo" style={{ width: "150px", maxWidth: "150px" }} /> */}
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450512/ntt%20data/n_dzzbjs.png" alt="LogoN" style={{ width: "24px", maxWidth: "25px", marginRight: "3px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_1__tw61zp.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "3px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_2__xcaink.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "10px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/d_btcxwo.png" alt="LogoD" style={{ width: "24px", maxWidth: "25px", marginRight: "3px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/a_ofjnec.png" alt="LogoA" style={{ width: "23px", maxWidth: "23px", marginRight: "3px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/t_2__xcaink.png" alt="LogoT" style={{ width: "22px", maxWidth: "23px", marginRight: "3px" }} />
                            <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685450565/ntt%20data/a_1__tipobq.png" alt="LogoA" style={{ width: "23px", maxWidth: "24px", marginRight: "3px" }} />
                        </div>
                    </Grid>
                    <Grid item xs={10} md={10} align="center">
                        <Search>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                            <Button
                                aria-label="categories"
                                color="inherit"
                                onClick={handleClick}
                                sx={{ backgroundColor: 'grey.500', ml: 2.4, height: "40px" }}
                                data-menu-item="Categories"
                                endIcon={anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            >
                                <Typography variant="body1" sx={{ color: 'white' }}>
                                    {selectedCategory}
                                </Typography>
                            </Button>
                        </Search>
                    </Grid>
                    <Grid item xs={1} md={1} align="center" >
                        <StyledIconButton aria-label="search" color="inherit" sx={{ marginRight: "100%" }}>
                            <SearchIcon />
                        </StyledIconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} />
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-evenly" sx={{ marginLeft: "5%", marginRight: "5%" }}>
                    {['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'].map((item, index) => (
                        <MenuItemButton
                            key={index}
                            aria-label={item}
                            onClick={handleClick}
                            data-menu-item={item}
                            sx={{ backgroundColor: 'transparent', color: '#6A6D70' }}
                        >
                            <Typography variant="body1">{item}</Typography>
                        </MenuItemButton>
                    ))}
                </Grid>
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
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 89, 188, 1)')}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
                                    onClick={() => handleCategoryClick(item)}
                                >
                                    {item}
                                </CategoryTypography>
                            ))}
                        </CategoryCard>
                    ) : selectedMenuItem ? (
                        <MenuCard>
                            <CardContentWrapper container>
                                <Grid item xs={6}>
                                    <CardContent>
                                        <Box marginTop="-20px" marginBottom="10px">
                                            <Typography variant="h5">Header</Typography>
                                        </Box>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent>
                                        <Box marginTop="-20px" marginBottom="10px">
                                            <Typography variant="h5">Header</Typography>
                                        </Box>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                        <Typography variant="body1">Subheader</Typography>
                                    </CardContent>
                                </Grid>
                            </CardContentWrapper>
                            <CardImage image="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1685444674/ntt%20data/Rectangle_29_exjov6.png" />
                        </MenuCard>
                    ) : null}
                </Popover>
            </Toolbar>
        </AppBar>
    );
}
