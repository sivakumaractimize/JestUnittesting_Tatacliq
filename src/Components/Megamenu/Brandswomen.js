import React from 'react';
import Imports from '../Imports';

const Womenbrands = () => {
    // Brand lists
    const popularBrands = [
        'Utsa', 'W', 'Biba', 'Forever New', 'Wardrobe', 'Gia',
        'Pantaloons', 'Lifestyle', 'Fabindia', 'Vero Moda', 'Tommy Hilfiger',
        'Forever 21', 'Puma', 'Levi\'s', 'Jockey'
    ];

    const featuredBrands = [
        'Vark', 'Artagai', 'LOV xcvd', 'Varanga', 'Aurelia', 'Juniper',
        'Yufta', 'Ganga Fashion', 'Cottinfab', 'Aachho', 'Janasya', 'Only',
        'Enamor', 'La vie en rose'
    ];

    const avatarSources = [
        'https://assets.tatacliq.com/medias/sys_master/images/46725345673246.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/46725345869854.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/46725345935390.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/33013524955166.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/51330943582238.jpg',
        'https://assets.tatacliq.com/medias/sys_master/images/46725346197534.jpg'
    ];

    // Function to chunk the avatars into pairs
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const avatarChunks = chunkArray(avatarSources, 2);

    return (
        <Imports.Grid container>
            {/* Popular Brands */}
            <Imports.Grid item>
                <Imports.Typography component="div" sx={{ fontWeight: "bold", mb: 1 }}>Popular Brands</Imports.Typography>
                {popularBrands.map((brand, index) => (
                    <Imports.Typography component="div" key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                ))}
            </Imports.Grid>

            {/* Featured Brands */}
            <Imports.Grid item sx={{ ml: 6 }}>
                <Imports.Typography component="div" sx={{ fontWeight: "bold", mb: 1 }}>Featured Brands</Imports.Typography>
                {featuredBrands.map((brand, index) => (
                    <Imports.Typography component="div" key={index} sx={{ mb: 0.5 }}>{brand}</Imports.Typography>
                ))}
            </Imports.Grid>
            <Imports.Grid item sx={{ ml: 6, mr: 1 }}>
                {avatarChunks.map((chunk, rowIndex) => (
                    <Imports.Grid item sx={{ display: "flex" }} key={rowIndex}>
                        {chunk.map((src, index) => (
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
    );
};

export default Womenbrands;
