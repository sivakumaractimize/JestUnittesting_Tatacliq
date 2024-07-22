import React from 'react';
import Imports from './Imports';

const offers = [
    {
        icon: "https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png",
        title: "10% Discount on ICICI Bank Credit Cards & Credit Cards",
        offerPrice: "₹810",
        minPurchase: "₹3000",
        maxDiscount: "₹1500",
        code: "ICICI10",
    },
    {
        icon: "https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg",
        title: "Use code 15% off on Bank of Baroda Debit Cards",
        offerPrice: "₹765",
        minPurchase: "₹1500",
    },
    {
        icon: "https://assets.tatacliq.com/medias/sys_master/images/27678831018014.png",
        title: "Get 10% instant discount on HDFC Bank Credit Cards",
        offerPrice: "₹810",
        minPurchase: "₹2500",
    },
    {
        icon: "https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg",
        title: "Flat Rs. 200 off on minimum purchase of Rs. 2000",
        offerPrice: "₹810",
        minPurchase: "₹2000",
    },
];

const OfferCard = ({ icon, title, offerPrice, minPurchase, maxDiscount }) => (
    <Imports.Grid item xs={12} sx={{ mb: 2 }}>
        <Imports.CardContent>
            <Imports.Grid container spacing={2}>
                <Imports.Grid item>
                    <img src={icon} width="45px" alt="Offer icon" />
                </Imports.Grid>
                <Imports.Grid item xs>
                    <Imports.Typography variant="h6">{title}</Imports.Typography>
                    <Imports.Typography variant="body2">Offer Price: {offerPrice}</Imports.Typography>
                    <Imports.Typography variant="body2" sx={{fontSize:'15px'}}>
                        Min Purchase: {minPurchase} {maxDiscount && `| Max Discount: ${maxDiscount}`}
                    </Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
        </Imports.CardContent>
    </Imports.Grid>
);

const OfferList = () => (
    <Imports.Grid container>
        {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
        ))}
    </Imports.Grid>
);

export default OfferList;
