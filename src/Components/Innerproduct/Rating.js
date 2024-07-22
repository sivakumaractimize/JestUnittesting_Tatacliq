import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Imports from '../Imports';
const RatingsAndReviews = () => {
    const ratings = {
        total: 5,
        counts: {
            5: 5,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        }
    };

    const totalRatings = Object.values(ratings.counts).reduce((acc, count) => acc + count, 0);

    return (
        <Imports.Grid container justifyContent="center" sx={{ mt: 5 }}>
            <Imports.Grid item xs={12} md={10} sx={{ border: '1px solid #E0E0E0', padding: '20px', borderRadius: '8px' }}>
                <Imports.Typography variant="h6" textAlign="start">RATINGS AND REVIEWS</Imports.Typography>
                <Imports.Grid container sx={{ justifyContent: 'center', mt: 3, mb: 3 }} alignItems="center">
                    <Imports.Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 2, ml:{xs:15, sm:0} }}>
                        <Imports.Typography variant="h3" component="div" display="flex" alignItems="center">
                            5<Imports.StarIcon sx={{ color: 'green', marginLeft: '4px' }} />
                        </Imports.Typography>
                        <Imports.Typography variant="body2" color="textSecondary">{ratings.total} Ratings</Imports.Typography>
                    </Imports.Grid>
                    <Imports.Divider orientation="vertical" flexItem sx={{ mx: 2, mt:{xs:2, sm:0} }} />
                    <Imports.Grid item xs={12} sm={4} md={2}>
                        {Object.keys(ratings.counts).reverse().map(star => (
                            <Imports.Grid container alignItems="center" key={star} >
                                <Imports.Grid item xs={2}>
                                    <Imports.Typography variant="body2" >{star}<StarIcon fontSize="small"  /></Imports.Typography>
                                </Imports.Grid>
                                <Imports.Grid item xs={8}>
                                    <Imports.LinearProgress
                                        variant="determinate"
                                        value={(ratings.counts[star] / totalRatings) * 100}
                                        sx={{ height: '5px', borderRadius: '4px', backgroundColor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}
                                    />
                                </Imports.Grid>
                                <Imports.Grid item xs={2}>
                                    <Imports.Typography variant="body2" align="right">{ratings.counts[star]}</Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                        ))}
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default RatingsAndReviews;
