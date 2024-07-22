import React, { useState } from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Imports from '../Imports';

const theme = createTheme({
    typography: {
        fontSize: 12,
        mb: 1,
        '&:hover': {
            color: 'red',
        },
    },
});

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
const list = [
    { index: 0, list: "Women's Wear" }, { index: 1, list: "Men's Wear" }, { index: 2, list: "Foot Wear" }, { index: 3, list: "Jewellery" }, { index: 4, list: "Watches & Accessories" }, { index: 5, list: "Kids" }
]
function BrandTabs() {
   
    const [hoveredTab, setHoveredTab] = useState(0);
   

    const handleTabHover = (index) => {
        setHoveredTab(index);
       
    };

  

    return (
        <ThemeProvider theme={theme}>
        <Imports.Grid sx={{ flexGrow: 1, display: 'flex', width: "900px",height:"63vh", }}>
           
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
                                    padding: '15px 24px',
                                    width: '200px',
                                    borderBottom: index === list.length - 1 ? 'none' : '1px solid #c9c5b9',
                                    '&:hover > .arrow': { display: 'inline-block' },
                                    textAlign: 'start',
                                    height:'20px'
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
            <Imports.Grid >
                <TabPanel value={hoveredTab} index={0} sx={{ display: "flex" }}>
                    <Imports.Womenbrands/>
                </TabPanel>
                <TabPanel value={hoveredTab} index={1} sx={{ display: "flex" }}>
                    <Imports.Menbrands/>
                </TabPanel>
                <TabPanel value={hoveredTab} index={2} sx={{ display: "flex" }}>
                   <Imports.FootWearBrands/>
                </TabPanel>
                <TabPanel value={hoveredTab} index={3} sx={{ display: "flex" }}>
                    <Imports.JewelryBrands/>
                </TabPanel>
                <TabPanel value={hoveredTab} index={4} sx={{ display: "flex" }}>
                    <Imports.WatchBrands/>
                </TabPanel>
                <TabPanel value={hoveredTab} index={5} sx={{ display: "flex" }}>
                    <Imports.KidsClothingBrands/>
                </TabPanel>
               





            </Imports.Grid>
        </Imports.Grid>
        </ThemeProvider>
    );
}

export default BrandTabs;
