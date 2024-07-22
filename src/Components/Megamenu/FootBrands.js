import React from 'react';

import Imports from '../Imports';


const Footbrands = () => {
    // Define brand lists
    const popularBrands = [
        'Red Chief', 'Ruosh', 'TOMS', 'Alberto Torresi', 'Campus', 'LUNA BLU',
        'Regal', 'Reebok', 'Carlton London', 'Aldo', 'New Balance', 'Hush Puppies', 'Salomon', 'Hoka'
    ];

    const featuredBrands = [
        'Red Tape', 'Puma', 'Crocs', 'Asics', 'Woodland', 'Catwalk',
        'Clarks', 'Inc.5', 'Metro', 'Mochi', 'Bata', 'Skechers', 'Yoho', 'Buckaroo'
    ];
    const avatarSources = [
        'https://assets.tatacliq.com/medias/sys_master/images/46326593552414.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/46725345869854.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/46725345935390.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013524955166.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/14003109986334.jpg',
        
    ];
    // Function to chunk the avatars into pairs
    const chunkArray = (array, size) => {
        const AvatarArray = [];
        for (let i = 0; i < array.length; i += size) {
            AvatarArray.push(array.slice(i, i + size));
        }
        return AvatarArray;
    };
//A helper function chunk array is defined to split the avatarSources array into chunks of two.
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

export default Footbrands;
