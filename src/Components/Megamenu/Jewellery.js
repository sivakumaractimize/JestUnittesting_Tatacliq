import React from 'react';
import Imports from '../Imports';



const categories = [
    {
        title: "Gold Jewellery",
        items: [
            { name: "Earrings" },
            { name: "Chains" },
            { name: "Pendants" },
            { name: "Necklaces" },
            { name: "Mangalsutras" },
            { name: "Bangles & Bracelets" },
        ],
    },
    {
        title: "Diamond Jewellery",
        items: [
            { name: "Earrings" },
            { name: "Pendants" },
            { name: "Rings" },
            { name: "Mangalsutras" },
            { name: "Bangles & Bracelets" },
            { name: "Necklaces" },
        ],
    },
    {
        title: "Silver Jewellery",
        items: [
            { name: "Earrings" },
            { name: "Rings" },
            { name: "Pendants & Sets" },
            { name: "Necklaces" },
            { name: "Bangles & Bracelets" },
            { name: "Toe Rings & Anklets" },
        ],
    },
    {
        title: "Fashion Jewellery",
        items: [
            { name: "Earrings" },
            { name: "Necklaces" },
            { name: "Pendants & Sets" },
            { name: "Bangles & Bracelets" },
            { name: "Rings" },
            { name: "Nosepins" },
        ],
    },
    {
        title: "Coins & Bars",
        items: [
            { name: "Coins & Bars" },
        ],
    },
];

const JwelMenu = () => {
    const navigate = Imports.useNavigate();
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

export default JwelMenu;
