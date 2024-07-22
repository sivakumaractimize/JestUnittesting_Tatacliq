import React from 'react';
import Imports from '../Imports';


const categories = [
    {
        title: "Audio",
        items: [
            { name: "Headphones" },
            { name: "Wired Earphones" },
            { name: "Headsets" },
            { name: "Neckbands" },
            { name: "TWS Earbuds" },
            { name: "Speakers" },
            { name: "Bluetooth Speakers" },
            { name: "Soundbars" },
        ],
    },
    {
        title: "Speakers",
        items: [
            { name: "Sound Bar" },
            { name: "Home Theatre" },
            { name: "Bluetooth Speakers" },
            { name: "Lights" },
            { name: "Dryers" },
        ],
    },
    {
        title: "Wearable",
        items: [
            { name: "Premium Smartwatches" },
            { name: "Fast & Wireless Chargers" },
            { name: "Power Banks" },
            { name: "Storage Devices" },
            { name: "Cables & Connectors" },
            { name: "Memory Cards" },
        
        ],
    },
    {
        title: "Personal Care",
        items: [
            { name: "Hair Dryers" },
            { name: "Hair Straighteners" },
            { name: "Hair Stylers" },
            { name: "Trimmers & Shavers" },
            { name: "Epilators" },
        ],
    },
    {
        title: "Oral Care",
        items: [
            { name: "Hair Curlers & Multistylers" },
            { name: "Fast & Wireless Chargers" },
            { name: "Power Banks" },
        ],
    },
    {
        title: "Health Care Devices",
        items: [
            { name: "Health Monitors" },
            { name: "Massagers" },
        ],
    },
   
];

const GadgetsMenu = () => {
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

export default GadgetsMenu;
