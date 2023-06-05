import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Popover, Card, CardContent, CardMedia, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import SearchBar from './SearchBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

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
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorElMore, setAnchorElMore] = useState(null);
    const openMore = Boolean(anchorElMore);
    const [arrowUp, setArrowUp] = useState(false);

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

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleMoreClick = (event) => {
        setAnchorElMore(event.currentTarget);
        setArrowUp(true)
    };

    const handleMoreClose = () => {
        setAnchorElMore(null);
        setArrowUp(false);
    };

    const displayDesktop = () => {
        return (
            <Toolbar sx={{ backgroundColor: 'white' }}>
                <Grid container alignItems="center" justifyContent="space-evenly" sx={{ marginLeft: "7%", marginRight: "6%" }}>
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
            </Toolbar>
        );
    };

    const displayTablet = () => (
        <Toolbar sx={{ backgroundColor: 'white' }}>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ marginLeft: "5%", marginRight: "5%" }}>
                {['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'].map((item, index) => (
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
                <Typography
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleMoreClick}
                    sx={{ backgroundColor: 'transparent', color: '#6A6D70', paddingBottom: '1%' }}

                >
                    More
                    {arrowUp ? <KeyboardControlKeyIcon /> : <KeyboardArrowDownIcon />}
                </Typography>
                <Menu
                    id="long-menu"
                    anchorEl={anchorElMore}
                    keepMounted
                    open={openMore}
                    onClose={handleMoreClose}
                    PaperProps={{
                        style: {
                            maxHeight: 48 * 4.5,
                            width: '20ch',
                            backgroundColor: '#F4F5F6',
                            color: '#6A6D70',
                            padding: '2%'
                        },
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >


                    {['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'].map((option) => (
                        <MenuItem key={option} onClick={handleMoreClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Grid>
        </Toolbar>
    );

    const displayMobile = () => {
        return (
            <Toolbar sx={{ backgroundColor: 'white' }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={openDrawer}
                    onClose={handleDrawerToggle}
                >
                    <List>
                        {['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'].map((item, index) => (
                            <ListItem component="a" key={index}>
                                <ListItemText primary={item} />
                            </ListItem>

                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        );
    };


    useEffect(() => {
        const setResponsiveness = () => {
            const innerWidth = window.innerWidth;
            if (innerWidth < 768) {
                setIsMobile(true);
                setIsTablet(false);
            } else if (innerWidth >= 768 && innerWidth < 992) {
                setIsTablet(true);
                setIsMobile(false);
            } else {
                setIsTablet(false);
                setIsMobile(false);
            }
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);


    return (
        <AppBar position="static" color="default">
            <SearchBar />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} />
            {isMobile ? displayMobile() : isTablet ? displayTablet() : displayDesktop()}
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

        </AppBar>
    );
}
