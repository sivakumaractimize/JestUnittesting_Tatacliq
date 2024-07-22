import React from 'react';

import Imports from './Imports';

const Footer = () => {
    const headerStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
        marginBottom: "10px",
    };

    const bodyStyle = {
        fontSize: '12px',
        marginBottom: '8px',
    };

    const sections = [
        {
            title: "Tata MarketPlace",
            items: [
                "About Us",
                "Careers",
                "Sell With Us",
                "Terms of Use",
                "Privacy Policy",
                "Affiliates",
                "Sitemap",
            ],
        },
        {
            title: "Customer Service",
            items: [
                "Shopping",
                "Offers & Promotions",
                "Payments",
                "Cancellation",
                "Returns and Refunds",
                "CliQ And PiQ",
                "Return To Store",
                "Electronics Return Policy",
                "Contact Us",
                "Reviews Guidelines",
                "Furniture Return Policy",
                "Assembly Policy",
            ],
        },
        {
            title: "My Tata CliQ",
            items: [
                "My Account",
                "My Orders",
                "My Shopping Bag",
                "My Wishlist",
            ],
        },
    ];

    const socialIcons = [
        { icon: <Imports.BsFacebook />, label: 'Facebook' },
        { icon: <Imports.FaTwitterSquare />, label: 'Twitter' },
        { icon: <Imports.AiFillInstagram />, label: 'Instagram' },
        { icon: <Imports.AiFillYoutube />, label: 'YouTube' },
        { icon: <Imports.BsLinkedin />, label: 'LinkedIn' },
    ];
    const [showBackToTop, setShowBackToTop] = Imports.useState(false);

   
   
   
    return (
        <Imports.Grid container direction="column" sx={{ mt: 2 }}>
            <Imports.Grid item xs={10} sx={{ position: 'relative', bottom: '30px', zIndex: 10, ml: 15, display: { xs: "none", md: "block" } }}>
                <img src='https://www.tatacliq.com/src/general/components/img/trustFrame.png' alt='Trust Frame' />
            </Imports.Grid>

            <Imports.Grid item xs={12} sx={{ position: 'relative', bottom: '52px', display: { xs: "none", md: "block" } }}>
                <img src='https://www.tatacliq.com/src/general/components/img/Frame22222.svg' alt='Frame' />
            </Imports.Grid>

            <Imports.Grid container justifyContent="space-between" textAlign="start" sx={{ padding: '20px' }}>
                {sections.map((section, index) => (
                    <Imports.Grid item xs={6} sm={4} md={2} sx={{ ml: index === 0 ? { md: 10 } : 0 }} key={index}>
                        <Imports.Typography variant="h6" sx={headerStyle} marginBottom="20px">
                            {section.title}
                        </Imports.Typography>
                        {section.items.map((item, idx) => (
                            <Imports.Typography variant="body2" component="p" sx={bodyStyle} key={idx}>
                                {item}
                            </Imports.Typography>
                        ))}
                    </Imports.Grid>
                ))}

                <Imports.Grid item xs={6} sm={12} md={4} sx={{ mr: { xs: 0, md: 10 } }}>
                    <Imports.Typography component='div' variant="h6" sx={headerStyle} marginBottom="20px">
                        Tata CLiQ Offerings
                    </Imports.Typography>
                    <Imports.Typography component='div' sx={bodyStyle}>
                        <Imports.Grid sx={{ mr: { xs: 0, md: 15 } }}>
                            Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men | Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen Solly | Sparx Shoes | Gold Rings | Formal Shoes for Men | Sports Shoes for Men | Wallets for Men | Ladies Watches | Trolley Bags | Handbags for Women | Sling Bags for Women | Casual Shoes for Men | Boots for Men | Digital Watches | Sonata Watches | Sneakers for Women | Running Shoes | Puma Shoes | Boots for Women | Skechers | Malabargold | Fabindia | Utsa | Vark | Gia | LOV | Sitemap
                        </Imports.Grid>
                    </Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>

            <Imports.Grid container item xs={12} justifyContent="center" sx={{ padding: '20px', backgroundColor: '#F9F9F9' }}>
                <Imports.Grid item xs={12} lg={11} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Imports.Grid item xs={12} sm={6} md={6} lg="auto" sx={{ mb: { xs: 2, md: 0 } }}>
                        <Imports.Grid container alignItems="center" spacing={1}>
                            <Imports.Grid item>
                                <Imports.Typography variant="body2" sx={bodyStyle}>Download App</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item>
                                <Imports.IconButton>
                                    <Imports.AiFillAndroid />
                                </Imports.IconButton>
                            </Imports.Grid>
                            <Imports.Grid item>
                                <Imports.IconButton>
                                    <Imports.BsApple />
                                </Imports.IconButton>
                            </Imports.Grid>
                        </Imports.Grid>
                    </Imports.Grid>
                    <Imports.Grid item xs={12} sm={6} md={6} lg="auto" sx={{ mb: { xs: 2, md: 0 } }}>
                        <Imports.Grid container gap={2} alignItems="center">
                            {socialIcons.map((social, index) => (
                                <Imports.Grid item key={index}>
                                    <Imports.IconButton aria-label={social.label}>
                                        {social.icon}
                                    </Imports.IconButton>
                                </Imports.Grid>
                            ))}
                        </Imports.Grid>
                    </Imports.Grid>
                    <Imports.Grid item xs={12} md="auto">
                        <Imports.Typography variant="body2" sx={bodyStyle}>© 2024 TataCliQ | All rights reserved</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>

            <Imports.Grid container justifyContent="center">
                <Imports.Grid item xs={11} sx={{ textAlign: 'start' }}>
                    <Imports.Typography variant="h6" component="b" sx={headerStyle}>
                        TATA CLiQ : Shop Online with India's most trusted destination
                    </Imports.Typography>
                    <Imports.Typography variant="body2" sx={bodyStyle}>
                        Genuine products from all the top brands get delivered right to your doorstep. Our sleek, immersive design allows you to easily navigate between categories and brand stores so that you can find a wide selection of womenswear, menswear, kidswear, footwear, watches, accessories, footwear, watches and accessories online. You can also check our great offers and get the best prices on various products across lifestyle, fashion, and more.
                    </Imports.Typography>

                    <Imports.Typography variant="h6" component="b" sx={headerStyle}>
                        Online Shopping: Fast & convenient with the click of a button
                    </Imports.Typography>
                    <Imports.Typography variant="body2" sx={bodyStyle}>
                        The upside of online shopping at CLiQ Mart online store, is that you'll save on time and most importantly money with TataCliq offers. It's as simple as comparing products and prices online before making the right buy. What's more, you also have the option to pay for your favourite brands and products using our easy EMI options. Of course, you can buy and try - in the convenience of your home. Returns are easy too: We'll pick up your returns for free or you can also drop off the goods at the nearest brand store.
                    </Imports.Typography>

                    <Imports.Typography variant="h6" component="b" sx={headerStyle}>
                        TATA CLiQ Shopping App: just a few clicks on Android & iOS
                    </Imports.Typography>
                    <Imports.Typography variant="body2" sx={bodyStyle}>
                        Download the Android app from the Play Store or the iOS app from Apple App Store and get set to enjoy a range of benefits. Apart from the best deals, amazing offers and the latest styles online, the app also gives you the flexibility to shop at your convenience. Use the easy share options to share your shopping with your friends and family to ensure you're buying something perfect. With constant updates and a host of new features being introduced constantly, enjoy a shopping experience that you'll love.
                    </Imports.Typography>

                    <Imports.Typography variant="h6" component="b" sx={headerStyle}>
                        TATA CLIQ: The most genuine place for Fashion and Lifestyle
                    </Imports.Typography>
                    <Imports.Typography variant="body2" sx={bodyStyle}>
                        With an exclusive Brand Store for Westside Online we have most of your trendy shopping needs taken care of. Make CLiQ Mart your online shopping destination and get the best deals on your favourite brands, with 100% genuine products. Be it jewellery or makeup, you can count on CLiQ Mart for receiving only the most authentic products.
                    </Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
            {/* Back to Top Button */}
            <Imports.Grid container direction="column" sx={{ mt: 2 }}>

            
            
        </Imports.Grid>
        </Imports.Grid>
    );
};

export default Footer;
