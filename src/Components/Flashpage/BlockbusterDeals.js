import React from 'react';

import Imports from '../Imports';
const cardData = [
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869116956702.jpg", alt: "img1" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117022238.jpg", alt: "img2" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117087774.jpg", alt: "img3" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117153310.jpg", alt: "img4" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117284382.jpg", alt: "img5" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117349918.jpg", alt: "img6" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117415454.jpg", alt: "img7" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117480990.jpg", alt: "img8" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869120135198.jpg", alt: "img9" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117612062.jpg", alt: "img10" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869117972510.jpg", alt: "img11" },
    { image: "https://assets.tatacliq.com/medias/sys_master/images/51869118103582.jpg", alt: "img12" },
];

const BlockbusterDeals = () => {
    return (
        <Imports.Grid sx={{ mt: 5 }}>
            <Imports.Typography sx={{ fontSize: { xs: "15px", md: "40px" }, fontWeight: "bold" }}>Blockbuster Deals</Imports.Typography>
            <Imports.Divider sx={{ backgroundColor: "white", width: "70%", ml: "auto", mr: "auto", mt: 4 }} />

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
                        width: { xs: 120, md: 400, lg:600 },
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



<Imports.Grid container justifyContent="center">
      <Imports.Grid item xs={10} sx={{ mt: {xs:0, md:7}, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/51795416580126.jpg' alt='deals' style={{ maxWidth: '100%', height: 'auto' }} />
      </Imports.Grid>
    </Imports.Grid>

        </Imports.Grid>
    );
};

export default BlockbusterDeals;


// Math.ceil(cardData.length / 4): Ensures the loop runs enough times to cover all cards, creating groups of four.
