import React from 'react';
import Imports from '../Imports';


const categories = [
    {
        title: "Beauty Products",
        items: [
            { name: "Fragrance Store" },
            { name: "Perfumes" },
            { name: "Gift Sets" },
            { name: "Deodorants & Anti-Perspirants" },
            { name: "Body Mists" },
            { name: "All Fragrances" },
            { name: "Makeup" },
            { name: "Eyes" },
            { name: "Face" },
        ],
    },
    {
        title: "Makeup",
        items: [
            { name: "Lips" },
            { name: "Nails" },
            { name: "All Makeup" },
        ],
    },
    {
        title: "Skin",
        items: [
            { name: "Cleansers" },
            { name: "Moisturizers" },
            { name: "Facial Peels " },
        ],
    },
    {
        title: "Hair",
        items: [
            { name: "Oils" },
            { name: "Gels" },
            { name: "Hair color" },
            { name: "Grooming" },
            { name: "Clips" },
            { name: "Jumpsuits & Rompers" },
        ],
    },
    {
        title: "Men's Grooming",
        items: [
            { name: "Oils" },
            { name: "Gels" },
            { name: "Hair color" },
        ],
    },
    {
        title: "Bath and Body",
        items: [
            { name: "All Grooming" },
            { name: "All Makeup" },
        ],
    },
];

const BeautyMenu = () => {
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

export default BeautyMenu;
