
import React from "react";

import Imports from "./Imports";
const coupons = [
    {
        title: "Flat 10% Off Upto Rs. 2000 | Min purchase of Rs. 9000",
        code: "FURNITURE10",
        maxRedemption: 2,
        creationDate: "Jun 12, 2024",
        expiryDate: "July 12, 2024"
    },
    {
        title: "Additional 15% Off on Denim on Rs.2499",
        code: "DENIM15",
        maxRedemption: 2,
        creationDate: "Jun 12, 2024",
        expiryDate: "July 12, 2024"
    }
];

const MyaccountMenu = () => {
    const [selectedTab, setSelectedTab] = Imports.useState("recentOrders");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <Imports.Grid>
            <Imports.Grid xs={12} md={10} container sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', ml: { xs: 0, md: 5 } }}>
                <Imports.Typography
                    onClick={() => handleTabClick("recentOrders")}
                    sx={{ cursor: "pointer", fontSize: { xs: '10px', sm: '15px' }, fontWeight: "bold", borderBottom: selectedTab === "recentOrders" ? "2px solid red" : "none", color: selectedTab === "recentOrders" ? "#DA1C5C" : "none" }}
                >
                    Recent orders
                </Imports.Typography>
                <Imports.Typography
                    onClick={() => handleTabClick("myReviews")}
                    sx={{ cursor: "pointer", fontSize: { xs: '10px', sm: '15px' }, fontWeight: "bold", borderBottom: selectedTab === "myReviews" ? "2px solid red" : "none", color: selectedTab === "myReviews" ? "#DA1C5C" : "none" }}
                >
                    My Reviews
                </Imports.Typography>
                <Imports.Typography
                    onClick={() => handleTabClick("usefulLinks")}
                    sx={{ cursor: "pointer", fontSize: { xs: '10px', sm: '15px' }, fontWeight: "bold", borderBottom: selectedTab === "usefulLinks" ? "2px solid red" : "none", color: selectedTab === "usefulLinks" ? "#DA1C5C" : "none" }}
                >
                    Useful links
                </Imports.Typography>
                <Imports.Typography
                    onClick={() => handleTabClick("alert")}
                    sx={{ cursor: "pointer", fontSize: { xs: '10px', sm: '15px' }, fontWeight: "bold", borderBottom: selectedTab === "alert" ? "2px solid red" : "none", color: selectedTab === "alert" ? "#DA1C5C" : "none" }}
                >
                    Alerts
                </Imports.Typography>
                <Imports.Typography
                    onClick={() => handleTabClick("coupons")}
                    sx={{ cursor: "pointer", fontSize: { xs: '10px', sm: '15px' }, fontWeight: "bold", borderBottom: selectedTab === "coupons" ? "2px solid blue" : "none", color: selectedTab === "coupons" ? "#DA1C5C" : "none" }}
                >
                    Coupons
                </Imports.Typography>
            </Imports.Grid>

            <Imports.Box mt={5}>
                {selectedTab === "recentOrders" && <Imports.Grid sx={{ mt: 2 }}>
                    <Imports.Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>You have not made any purchase yet</Imports.Typography>
                    <Imports.Button variant="contained" sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "bold", width: { xs: "55%", md: "30%" }, p: 1, mt: 2, mb: 2, borderRadius: '100px', fontSize: '10px' }}>Continue Shopping</Imports.Button>
                </Imports.Grid>}
                {selectedTab === "myReviews" && <Imports.Grid>No Reviews</Imports.Grid>}
                {selectedTab === "usefulLinks" && <Imports.Grid><Imports.UsefulLinks /></Imports.Grid>}
                {selectedTab === "alert" && <Imports.Grid>No Alerts Alert</Imports.Grid>}
                {selectedTab === "coupons" && <Imports.Grid textAlign="start">
                    {coupons.map((coupon, index) => (
                        <Imports.Box key={index} display="flex" flexDirection="column" alignItems="flex-start" sx={{ ml: 6, mb: 8 }}>
                            <Imports.Box display="flex" alignItems="center">
                                <Imports.PanoramaHorizontalIcon />
                                <Imports.Typography variant="body2" sx={{ fontSize: "12px", ml: 0.5 }}>
                                    {coupon.title}
                                </Imports.Typography>
                            </Imports.Box>
                            <Imports.Grid sx={{ ml: 4 }}>
                                <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>{coupon.code}</Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '12px' }}>Max Redemption: {coupon.maxRedemption}</Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '12px' }}>Creation Date: {coupon.creationDate}</Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '12px' }}>Expiry Date: {coupon.expiryDate}</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Box>
                    ))}
                </Imports.Grid>}
            </Imports.Box>
        </Imports.Grid>
    );
}

export default MyaccountMenu;
