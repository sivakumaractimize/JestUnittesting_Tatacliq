import React from 'react';
import Imports from '../Imports';



const categories = [
    {
        title: "Tops",
        items: [
            { name: "T-Shirts", link: "/productpage?category=men" },
            { name: "Polo T shirts" },
            { name: "Shirts" },
            { name: "Jackets" },
            { name: "V neck" },
            { name: "Suits" },
            { name: "Dupattas" },
        ],
    },
    {
        title: "Bottoms",
        items: [
            { name: "Jeans" },
            { name: "Shorts" },
            { name: "Jeans & Trouser" },
            { name: "Cargos" },
            { name: "Chinos" },
            { name: "Jumpsuits & Rompers" },
        ],
    },
    {
        title: "Sports Wear",
        items: [
            { name: "Kurtis & Kurtas" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
        ],
    },
    {
        title: "Active Wear",
        items: [
            { name: "Kurtis & Kurtas" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
        ],
    },
    {
        title: "Inner Wear",
        items: [
            { name: "Kurtis & Kurtas" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
            { name: "Dupattas" },
        ],
    },
    {
        title: "Fashion Wear",
        items: [
            { name: "Kurtis & Kurtas" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
            { name: "Dupattas" },
        ],
    },
    {
        title: "Shop All Ethnic Wear",
        items: [
            { name: "Kurtis & Kurtas" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
        ],
    },
];

const MenMenu = () => {
    const navigate = Imports.useNavigate();

    return (
       
             <Imports.Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Imports.Grid item xs={3} key={index}>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Imports.Typography>
                        {category.items.map((item, idx) => (
                            <Imports.Typography
                                key={idx}
                                onClick={() => item.link && navigate(item.link)}
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

export default MenMenu;
