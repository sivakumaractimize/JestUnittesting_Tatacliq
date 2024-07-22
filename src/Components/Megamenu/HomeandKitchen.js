import React from 'react';

import Imports from '../Imports';

const categories = [
    {
        title: "Furniture",
        items: [
            { name: "Living Room", link: "/productpage?category=Home" },
            { name: "Bed Room" },
            { name: "Dining Room" },
            { name: "Pots & Pans" },
            { name: "Cooking Utensils" },
            { name: "Bedding Sets" },
        ]
    },
    {
        title: "Bedding",
        items: [
            { name: "Pots & Pans" },
            { name: "Cooking Utensils" },
            { name: "Bakeware" },
            { name: "Kitchen Knives" },
            { name: "Pressure Cookers" },
            { name: "Grilling & BBQ" },
            { name: "Bedsheets" },
            
        ]
    },
    {
        title: "Dinnerware",
        items: [
            { name: "Dinnerware Sets" },
            { name: "Flatware" },
            { name: "Drinkware" },
            { name: "Serveware" },
            { name: "Table Linens" },
            { name: "Barware" },
        ]
    },
    {
        title: "Cookware",
        items: [
            { name: "Pots & Pans" },
            { name: "Cooking Utensils" },
            { name: "Bakeware" },
            { name: "Kitchen Knives" },
            { name: "Pressure Cookers" },
            { name: "Grilling & BBQ" },
        ]
    },
    {
        title: "Home Decor",
        items: [
            { name: "Rugs" },
            { name: "Curtains & Drapes" },
            { name: "Wall Decor" },
            { name: "Candles & Holders" },
            { name: "Decorative Pillows" },
            { name: "Clocks" },
        ]
    },
    {
        title: "Tableware",
        items: [
            { name: "Rugs" },
            { name: "Curtains & Drapes" },
            { name: "Wall Decor" },
            { name: "Candles & Holders" },
            { name: "Decorative Pillows" },
            { name: "Clocks" },
            { name: "Glasses" },
        ]
    },
    {
        title: "Kitchen Appliances",
        items: [
            { name: "Kitchen Appliances" },
            { name: "Vacuums & Floor Care" },
            { name: "Heating" },
            { name: "Washers & Dryers" },
            { name: "Small Appliances" },
            { name: "Smart Home Devices" },
        ]
    },
   
];

const HomeKitchenMenu = () => {
    const navigate =Imports.useNavigate();

    return (
    
            <Imports.Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Imports.Grid item xs={3} key={index}>
                        <Imports.Grid sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Imports.Grid>
                        {category.items.map((item, idx) => (
                            <Imports.Grid
                                key={idx}
                                // onClick={() => item.link && navigate(item.link)}
                                sx={{
                                    mb: 0.5,
                                    cursor: item.link ? "pointer" : "default",
                                    '&:hover': item.link ? { color: 'red' } : {},
                                }}
                            >
                                {item.name}
                            </Imports.Grid>
                        ))}
                    </Imports.Grid>
                ))}
            </Imports.Grid>
 
    );
};

export default HomeKitchenMenu;
