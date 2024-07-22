import React from 'react';
import Imports from '../Imports';



const JewelryBrands = () => {
    // Define brand lists
    const popularBrands = [
        'Mia by Tanishq', 'Melorra', 'Malabar', 'Joyalukkas', 'Chandra Jewellers', 'Sri Jagdamba Pearls',
        'Waman Hari Pethe', 'P.N Gadgil Jewellers', 'PC Jeweller', 'Candere by Kalyan', 'Bangalore Refinery',
        'C.krishniah chetty'
    ];

    const featuredBrands = [
        'GIVA', 'Shaya', 'Clara', 'Zavya', 'March by Fablestreet', 'Priyaasi',
        'Accessorize London', 'Oomph', 'Zaveri Pearls', 'FIDA', 'Jazz & Sizzle', 'Jewels Galaxy'
    ];

    const avatarSources = [
        'https://assets.tatacliq.com/medias/sys_master/images/26759829979166.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/13957515968542.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/13957516165150.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/13957516099614.jpg',
        
    ];
    // Function to chunk the avatars into pairs
    const chunkArray = (array, size) => {
        const AvatarArray = [];
        for (let i = 0; i < array.length; i += size) {
            AvatarArray.push(array.slice(i, i + size));
        }
        return AvatarArray;
    };
//A helper function avatar array is defined to split the avatarSources array into chunks of two.
    const avatar = chunkArray(avatarSources, 2);

    return (
        <>
         
            <Imports.Grid container >
                    {/* Popular Brands */}
                    <Imports.Grid>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>Popular Brands</Imports.Typography>
                        {popularBrands.map((brand, index) => (
                            <Imports.Typography key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                        ))}
                    </Imports.Grid>

                    {/* Featured Brands */}
                    <Imports.Grid sx={{ ml:2}}>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>Featured Brands</Imports.Typography>
                        {featuredBrands.map((brand, index) => (
                            <Imports.Typography key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                        ))}
                    </Imports.Grid>
                    <Imports.Grid sx={{ ml: 4, mr: 1 }}>
                    {avatar.map((item, rowIndex) => (
                        <Imports.Grid sx={{ display: "flex" }} key={rowIndex}>
                            {item.map((src, index) => (
                                <Imports.Avatar
                                    key={index}
                                    src={src}
                                    sx={{ width: 100, height: 100, mt: 2, ...(index > 0 && { ml: 6 }) }}
                                />
                            ))}
                        </Imports.Grid>
                    ))}
                </Imports.Grid>
                </Imports.Grid>
        
        </>
    );
};

export default JewelryBrands;
