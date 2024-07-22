import React from "react";
import Imports from "./Imports";
const Profile = () => {
    const firstname = localStorage.getItem('firstName');
    const lastname = localStorage.getItem('lastName');
    const mobile = localStorage.getItem('mobile');
    const mail = localStorage.getItem('mail');
    const date=localStorage.getItem('date');

    const [open, setOpen] = Imports.useState(false);

   

    

    return (
        <Imports.Grid item xs={12} sm={11} md={11} sx={{ borderRadius: '5px', ml: { xs: 0, sm: 1, lg: 2 } , backgroundColor:'white'}}>
            <Imports.ProfileDialog data-testid="profile-dialog" open={open} />
            <Imports.Grid item xs={12} md={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Imports.Grid item>
                    <Imports.Typography sx={{ textAlign: 'start', fontSize: '16px', fontWeight: 'bold' ,mt:2}}>General Information</Imports.Typography>
                    <Imports.Typography sx={{ fontSize: '12px', textAlign: 'start', mt: 2 }}>Personalize your profile by exploring the Public Profile section on our TATA Neu app/website</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid container>
                    <Imports.Grid item
                        xs={11}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            ml: { xs: 0, sm: 6, md: 2, lg: 10 },
                            mt: 2
                        }}
                    >
                        <Imports.Typography>Basic Details</Imports.Typography>
                        <Imports.Typography sx={{ color: '#DA1C5C', cursor: 'pointer' }} >Edit</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>

                <Imports.Grid item xs={11} sx={{ border: '1px solid #c4c1c0', width: '100%', ml: { xs: 0, sm: 0, lg: 10 }, mt: 1, height: '30px', borderRadius: '5px' }}>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1, mt: 2 }}>
                        First Name
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, textAlign: 'start', height: '30px', mr: 1, mb: 1, paddingTop: '2px',paddingLeft:'5px', borderRadius: '5px' }}>
                            {firstname}
                        </Imports.Typography>
                    </Imports.Typography>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1 }}>
                        Last Name
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, height: '30px', textAlign: 'start', mr: 1, mb: 1, paddingTop: '2px',paddingLeft:'5px', borderRadius: '5px' }}>
                            {lastname}
                        </Imports.Typography>
                    </Imports.Typography>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1 }}>
                        Date of Birth
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, textAlign: 'start', height: '30px', borderRadius: '5px', mr: 1, mb: 1, paddingTop: '2px', }}>
                            {date}
                        </Imports.Typography>
                    </Imports.Typography>
                </Imports.Grid>
                <Imports.Grid container>
                    <Imports.Grid
                    item
                        xs={11}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            ml: { xs: 0, sm: 6, md: 2, lg: 10 },
                            mt: 2
                        }}
                    >
                        <Imports.Typography>Contact Details</Imports.Typography>
                        <Imports.Typography sx={{ color: '#DA1C5C', cursor: 'pointer' }}>Edit</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>

                <Imports.Grid item xs={11} sx={{ border: '1px solid #c4c1c0', width: '100%', ml: { xs: 0, sm: 0, lg: 10 }, mt: 1, height: '30px', borderRadius: '5px' }}>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1, mt: 2 }}>
                        Mobile No
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, textAlign: 'start', height: '30px', mr: 1, mb: 1, paddingTop: '2px', borderRadius: '5px',paddingLeft:'5px' }}>
                            {mobile}
                        </Imports.Typography>
                    </Imports.Typography>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1 }}>
                        Email
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, height: '30px', textAlign: 'start', mr: 1, mb: 1, paddingTop: '2px', borderRadius: '5px',paddingLeft:'5px' }}>
                            {mail}
                        </Imports.Typography>
                    </Imports.Typography>
                </Imports.Grid>
                <Imports.Grid container>
                    <Imports.Grid
                    item
                        xs={11}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            ml: { xs: 0, sm: 6, md: 2, lg: 8 },
                            mt: 2
                        }}
                    >
                        <Imports.Typography>Personal Details</Imports.Typography>
                        <Imports.Typography sx={{ color: '#DA1C5C', cursor: 'pointer' }}>Add</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
                <Imports.Grid item xs={11} sx={{ border: '1px solid #c4c1c0', width: '100%', ml: { xs: 0, sm: 0, lg: 10 }, mt: 1, height: '30px', borderRadius: '5px' }}>
                    <Imports.Typography sx={{ display: "flex", justifyContent: 'space-between', ml: 1, mt: 2 }}>
                        Gender
                        <Imports.Typography sx={{ border: '1px solid #c4c1c0', width: { xs: '60%', sm: '80%', md: '70%', lg: '80%' }, textAlign: 'start', height: '30px', mr: 1, mb: 1, paddingTop: '2px', borderRadius: '5px' }}>
                        </Imports.Typography>
                    </Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item xs={11} sx={{ border: '1px solid #c4c1c0', width: '100%', display: 'flex', justifyContent: 'space-between', ml: { xs: 0, sm: 0, lg: 10 }, mt: 2, mb: 2, height: '30px', borderRadius: '5px' }}>
                    <Imports.Typography sx={{ p: 1, textAlign: 'start' }}>
                        Delete TATA CLiQ Account
                    </Imports.Typography>
                    <Imports.Typography sx={{ p: 1 }}>&gt;</Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default Profile;
