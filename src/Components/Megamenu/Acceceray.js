import React from 'react';

import Imports from '../Imports';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        title: "Bags, Wallets & Clutches",
        items: [
            { name: "Handbags" },
            { name: "Sling Bags" },
            { name: "Backpacks" },
            { name: "Wallets" },
            { name: "Clutches" },
            { name: "Messenger Bags" },
            { name: "Cross Body Bags" },
        ],
    },
    {
        title: "Watches",
        items: [
            { name: "Smartwatches" },
            { name: "For Him" },
            { name: "For Her" },
        ],
    },
    {
        title: "Eyewear",
        items: [
            { name: "Sunglasses" },
            { name: "Computer Glasses" },
            { name: "Reading Glasses" },
            { name: "Eye Glasses" },
        ],
    },
    {
        title: "Fashion Accessories",
        items: [
            { name: "Belts" },
            { name: "Ties & Cufflinks" },
            { name: "Socks" },
        ],
    },
];

const FashionMenu = () => {
    const navigate = useNavigate();
    return (
        <Imports.Grid container spacing={4}>
        {categories.map((category, index) => (
            <Imports.Grid item xs={3} key={index}>
                <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Imports.Typography>
                {category.items.map((item, idx) => (
                    <Imports.Typography
                        key={idx}
                      
                        sx={{
                            mb: 0.5,
                            cursor: item.link ? "pointer" : "default",
                            '&:hover': item.link ? { color: 'red' } : {},
                        }}
                    >
                        {item.name}
                    </Imports.Typography>
                ))}
            </Imports.Grid>
        ))}
    </Imports.Grid>
    );
};

export default FashionMenu;
