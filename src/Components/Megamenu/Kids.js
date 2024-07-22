import React from 'react';
import Imports from '../Imports';

const categories = [
    {
        title: "Girls Clothing",
        items: [
            { name: "T-shirts & Tops", link: "/productpage?category=kids", testId: "tshirts-tops-link" },
            { name: "Jeans & Pants", testId: "jeans-pants" },
            { name: "Dresses & Skirts", testId: "dresses-skirts" },
            { name: "Sets & Outfits", testId: "sets-outfits" },
            { name: "Sportswear", testId: "sportswear" },
            { name: "Sleepwear", testId: "sleepwear" },
            { name: "School Uniforms", testId: "school-uniforms" },
        ],
    },
    {
        title: "Western Wear",
        items: [
            { name: "Tops & Tees", testId: "tops-tees" },
            { name: "Dresses", testId: "dresses-western" },
            { name: "Jeans & Trousers", testId: "jeans-trousers" },
            { name: "Skirts", testId: "skirts-western" },
            { name: "Jackets & Coats", testId: "jackets-coats" },
            { name: "Jumpsuits", testId: "jumpsuits-western" },
        ],
    },
    // Add other categories similarly
];

const KidsFashionMenu = () => {
    const navigate = Imports.useNavigate();

    return (
        <Imports.Grid container spacing={4} data-testid="kids-fashion-menu">
            {categories.map((category, index) => (
                <Imports.Grid item xs={3} key={index}>
                    <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Imports.Typography>
                    {category.items.map((item, idx) => (
                        <Imports.Typography
                            key={idx}
                            // onClick={() => item.link && navigate(item.link)}
                            data-testid={item.testId} 
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

export default KidsFashionMenu;
