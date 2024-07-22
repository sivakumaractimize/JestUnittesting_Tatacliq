import React, { useState } from 'react';
import Imports from './Imports';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const list = [
    { index: 0, list: "Women's Fashion" },
    { index: 1, list: "Men's Fashion" },
    { index: 2, list: "Kid's Fashion" },
    { index: 3, list: "Home & Kitchen" },
    { index: 4, list: "Beauty" },
    { index: 5, list: "Gadgets" },
    { index: 6, list: "Jewellery" },
    { index: 7, list: "Accessories" }
];
const theme = createTheme({
    typography: {
        fontSize: 12,
        mb: 1
    }
});

function VerticalTabs() {

    
    const [hoveredTab, setHoveredTab] = useState(0);

    const handleTabHover = (index) => {
        setHoveredTab(index);
    };

    const handleTabLeave = () => {
        setHoveredTab(null);
    };

    return (
        <ThemeProvider theme={theme}>
        <Imports.Box sx={{ width: '1000px', margin: 'auto' }}>
            <Imports.Grid container sx={{ flexGrow: 1 }}>
                {/* Vertical Tabs */}
                <Imports.Grid item xs={3}>
                    <Imports.Tabs
                        orientation="vertical"
                        aria-label="Vertical tabs example"
                        sx={{
                            paddingTop: '20px',
                        }}
                    >
                        {list.map((item, index) => (
                            <Imports.Box
                                key={item.index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '15px ',
                                    borderBottom: index === list.length - 1 ? 'none' : '1px solid #c9c5b9',
                                    '&:hover > .arrow': { display: 'inline-block' },
                                    textAlign: 'start',
                                    height:'20px',
                                    ml:0
                                }}
                                onMouseEnter={() => handleTabHover(item.index)}
                                
                            >
                                <Imports.Tab
                                    className='list'
                                    label={item.list}
                                    sx={{
                                        fontSize: "11px",
                                       
                                        fontWeight: "900",
                                        color: hoveredTab === item.index ? '#080808' : '#5e5b5b',
                                        flex: 1,
                                        mr:5
                                        
                                    }}
                                />
                                <Imports.Typography
                                    className='arrow'
                                    sx={{
                                        display: hoveredTab === item.index ? 'inline-block' : 'none',
                                        color: 'dark',
                                    }}
                                >
                                    <Imports.ArrowForwardIosIcon sx={{fontSize:'12px'}}/>
                                </Imports.Typography>
                            </Imports.Box>
                        ))}
                    </Imports.Tabs>
                </Imports.Grid>

                {/* Tab Panels */}
                <Imports.Grid item xs={9}>
                    {list.map((item, index) => (
                        <TabPanel key={item.index} value={hoveredTab} index={index}>
                            {index === 0 && <Imports.WomenMenu />}
                            {index === 1 && <Imports.MenMenu />}
                            {index === 2 && <Imports.KidsFashionMenu />}
                            {index === 3 && <Imports.HomeKitchenMenu />}
                            {index === 4 && <Imports.BeautyMenu />}
                            {index === 5 && <Imports.GadgetsMenu />}
                            {index === 6 && <Imports.JwelMenu />}
                            {index === 7 && <Imports.FashionMenu />}
                        </TabPanel>
                    ))}
                </Imports.Grid>
            </Imports.Grid>
        </Imports.Box>
        </ThemeProvider>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Imports.Box sx={{ p: 3 }}>
                    <Imports.Typography>{children}</Imports.Typography>
                </Imports.Box>
            )}
        </div>
    );
}

export default VerticalTabs;
