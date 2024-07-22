import React from 'react';
import Imports from '../Imports';



const categories = [
    {
        title: "Shop All Ethnic Wear",
        items: [
            { name: "Kurtis & Kurtas", link: "/productpage?category=womens" },
            { name: "Suits" },
            { name: "Sarees" },
            { name: "Lehengas" },
            { name: "Bottoms" },
            { name: "Blouses & Fabrics" },
            { name: "Dupattas" },
        ],
    },
    {
        title: "Western Wear",
        items: [
            { name: "Tops & Tees" },
            { name: "Dresses" },
            { name: "Jeans & Trousers" },
            { name: "Skirts" },
            { name: "Jackets & Coats" },
            { name: "Jumpsuits " },
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
        title: "Night Wear",
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
        title: "Jewellery",
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
        title: "Party Wear",
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
        title: "Winter Wear",
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

const WomenMenu = () => {
    const navigate = Imports.useNavigate();

    return (
        <Imports.Grid container spacing={4}>
            {categories.map((category, index) => (
                <Imports.Grid item xs={3} key={index}>
                    <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                        {category.title}
                    </Imports.Typography>
                    {category.items.map((item, idx) => (
                        <Imports.Typography
                            key={idx}
                            onClick={() => item.link && navigate(item.link)}
                            sx={{
                                mb: 0.5,
                                cursor: item.link ? "pointer" : "default",
                                '&:hover': item.link ? { color: 'red' } : {},
                            }}
                            data-testid={item.name.replace(/\s+/g, '-').toLowerCase()}
                        >
                            {item.name}
                        </Imports.Typography>
                    ))}
                </Imports.Grid>
            ))}
        </Imports.Grid>
    );
};

export default WomenMenu;
