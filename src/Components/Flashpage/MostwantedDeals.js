import React from 'react';

import Imports from '../Imports';
const cardData = [
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195122718.jpg", alt: "img1" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195188254.jpg", alt: "img2" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195253790.jpg", alt: "img3" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195319326.jpg", alt: "img4" }
   
];

const MostwantedDeals = () => {
    return (
        <Imports.Grid sx={{ mt: 5 }}>


            {Array.from({ length: Math.ceil(cardData.length / 4) }).map((_, idx) => (
                <Imports.Grid
                    key={idx}
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: idx === 0 ? 10 : 20, mt: { xs: 1 } }}
                >
                    {cardData.slice(idx * 4, idx * 4 + 4).map((card, index) => (
                        <Imports.Grid item key={index}>
                            <Imports.Card
                                sx={{
                                    width: { xs: 120, md: 400, lg:600},
                                    height: { xs: 90, md: 300, lg:400 },
                                    borderRadius: 5,
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.01)' },
                                    marginBottom: (index + 1) % 4 === 0 ? 4 : 0,
                                }}
                            >
                                <Imports.CardMedia
                                    component="img"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    image={card.image}
                                    alt={card.alt}
                                />
                            </Imports.Card>
                        </Imports.Grid>
                    ))}
                </Imports.Grid>
            ))}





        </Imports.Grid>
    );
};

export default MostwantedDeals;


// Math.ceil(cardData.length / 4): Ensures the loop runs enough times to cover all cards, creating groups of four.
