import React  from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Imports from '../Imports';
const Styleswiper = ({ status }) => {
    const [activeTab, setActiveTab] = useState('RecommendedCombos');

    const womens = [
        {
            name: "RecommendedCombos",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i8/252Wx374H/MP000000014818941_252Wx374H_202210111413261.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i16//252Wx374H/MP000000021218784_252Wx374H_202402171619561.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i8/252Wx374H/MP000000014617685_252Wx374H_202209240026001.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i15//252Wx374H/MP000000020754799_252Wx374H_202401131919541.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i16//252Wx374H/MP000000021218784_252Wx374H_202402171619561.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i8/252Wx374H/MP000000014617685_252Wx374H_202209240026001.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i16//252Wx374H/MP000000021221640_252Wx374H_202402171820161.jpeg" },
            ]
        },
        {
            name: "BottomWear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018832372_437Wx649H_202308200118361.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018840240_437Wx649H_202308200635461.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018832202_437Wx649H_202308200113031.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018736356_437Wx649H_202308150129291.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018444840_437Wx649H_202307251612301.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013628031_437Wx649H_202206301035251.jpeg" },
            ]
        },
        {
            name: "OuterWear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018322623_437Wx649H_202307141436451.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018282237_437Wx649H_202308071130451.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354814_437Wx649H_202304260243111.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018307130_437Wx649H_202310010730591.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020704946_437Wx649H_202401092046121.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020705007_437Wx649H_202401092048471.jpeg" }
            ]
        },
        {
            name: "Footwear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000018552324_437Wx649H_202310090629581.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000018875807_437Wx649H_202312040203371.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018552170_437Wx649H_202308022319551.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018551751_437Wx649H_202308022302001.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000018552305_437Wx649H_202401131528501.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000018875759_437Wx649H_202310090728291.jpeg" },
            ]
        },
        {
            name: "BagsWallets",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018598950_437Wx649H_202308052153361.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018287055_437Wx649H_202307112211161.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018599099_437Wx649H_202308052159361.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018018742_437Wx649H_202306202048061.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253889_437Wx649H_202307071932401.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018018742_437Wx649H_202306202048061.jpeg" }
            ]
        },
    ];

    const Men = [
        {
            name: "RecommendedCombos",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/252Wx374H/MP000000018779739_252Wx374H_202308171345341.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i8/252Wx374H/MP000000015546269_252Wx374H_202212021937361.jpeg" },
            ]
        },
        {
            name: "BottomWear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019015607_437Wx649H_202309011309161.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018474264_437Wx649H_202307271201221.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018982161_437Wx649H_202308301411411.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018982155_437Wx649H_202308301409501.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000020851801_437Wx649H_202405091812211.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007799262_437Wx649H_202009241600241.jpeg" },
            ]
        },
        {
            name: "OuterWear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018812232_437Wx649H_202308190012231.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018696062_437Wx649H_202308111756301.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284978_437Wx649H_202111280544051.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000011944398_437Wx649H_202201311332561.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000020851097_437Wx649H_202405091808241.jpeg" },
            ]
        },
        {
            name: "Footwear",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021782366_437Wx649H_202404031712001.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021782359_437Wx649H_202404031712011.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021760299_437Wx649H_202403311228231.jpeg" },
            ]
        },
        {
            name: "BagsWallets",
            images: [
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018598950_437Wx649H_202308052153361.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018287055_437Wx649H_202307112211161.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018599099_437Wx649H_202308052159361.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018018742_437Wx649H_202306202048061.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253889_437Wx649H_202307071932401.jpeg" },
                { imageURL: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018018742_437Wx649H_202306202048061.jpeg" }
            ]
        },
    ];

    const handleTabChange = (categoryName) => {
        setActiveTab(categoryName);
    };



    const categories = status === 'Men' ? Men : womens;
    const activeCategory = categories.find(category => category.name === activeTab);

    return (
        <>
            <Imports.Grid xs={10} container spacing={2} sx={{ display: 'flex' }}>
                <Imports.Grid item xs={11} textAlign="start">
                    <Imports.Typography sx={{ fontSize: { xs: "10px", sm: "20px" }, fontWeight: 'bold', color: "black" }}>Style It With</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item xs={8} sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    {categories.map((category, index) => (
                        <Imports.Typography
                            key={index}
                            variant='h6'
                            sx={{
                                color: activeTab === category.name ? '#DA1C5C' : 'inherit',
                                cursor: 'pointer',
                                textDecoration: activeTab === category.name ? "underline" : 'none',
                                mr: 1,
                                fontSize: '7px',
                                transition: 'color 0.3s ease, text-decoration 0.3s ease',
                            }}
                            onClick={() => handleTabChange(category.name)}
                        >
                            {category.name}
                        </Imports.Typography>
                    ))}
                </Imports.Grid>
                <Imports.Grid item xs={12} sx={{ ml: 0 }}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={false}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            425: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {activeCategory && activeCategory.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Imports.Card sx={{ width: { 320: "180px", 425: "150px", sm: "200px" } }}>
                                    <Imports.CardMedia
                                        component="img"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        image={image.imageURL}
                                        alt="img"
                                    />
                                    <Imports.CardContent sx={{ textAlign: 'start' }}>
                                        <Imports.Typography variant="h6">UTSA</Imports.Typography>
                                        <Imports.Typography variant="body2">{status} products</Imports.Typography>
                                        <Imports.Typography variant="body2">₹1299</Imports.Typography>
                                        <Imports.Button variant="outlined" sx={{ color: "#DA1C5C", borderColor: "#DA1C5C", fontWeight: "900", p: 1, width: "100%" }}>Add to Bag</Imports.Button>
                                    </Imports.CardContent>
                                </Imports.Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Imports.Grid>
            </Imports.Grid>
        </>
    );
};

export default Styleswiper;
