import React from 'react';

import Imports from '../Imports';

const WatchBrands = () => {
    // Define brand lists
    const popularBrands = [
        'Utsa', 'W', 'Biba', 'Forever New', 'Wardrobe', 'Gia',
        'Pantaloons', 'Lifestyle', 'Fabindia', 'Vero Moda', 'Tommy Hilfiger',
        'Forever 21', 'Puma', "Levi's", 'Jockey'
    ];

    const featuredBrands = [
        'Vark', 'Artagai', 'LOV xcvd', 'Varanga', 'Aurelia', 'Juniper',
        'Yufta', 'Ganga Fashion', 'Cottinfab', 'Aachho', 'Janasya', 'Only',
        'Enamor'
    ];
    const avatarSources = [
        'https://assets.tatacliq.com/medias/sys_master/images/33013525741598.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013525807134.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013525872670.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013525938206.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013526003742.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013526069278.jpg'
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
            
            <Imports.Grid container>
                    {/* Popular Brands */}
                    <Imports.Grid item>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>Popular Brands</Imports.Typography>
                        {popularBrands.map((brand, index) => (
                            <Imports.Typography key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                        ))}
                    </Imports.Grid>

                    {/* Featured Brands */}
                    <Imports.Grid item sx={{ ml: 6 }}>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>Featured Brands</Imports.Typography>
                        {featuredBrands.map((brand, index) => (
                            <Imports.Typography key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                        ))}
                    </Imports.Grid>
                    <Imports.Grid sx={{ ml: 6, mr: 1 }}>
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

export default WatchBrands;
