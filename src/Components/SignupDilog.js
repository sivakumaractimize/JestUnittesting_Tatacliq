import React  from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { useEffect } from 'react';

import { auth } from '../Firebaseauth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Imports from './Imports';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        width: '700px',
    },
}));

const SignupDialog = ({ open, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!open) {
            resetForm();
        }
    }, [open]);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setMobile('');
        setEmail('');
        setPassword('');
        setSignupSuccess(false);
        setErrors({});
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = firstName ? "" : "First Name is required.";
        tempErrors.lastName = lastName ? "" : "Last Name is required.";
        tempErrors.mobile = mobile ? "" : "Mobile number is required.";
        tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) ? "" : "Email is not valid.";
        tempErrors.password = password.length >= 6 ? "" : "Password must be at least 6 characters.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSignup = async () => {
        if (validate()) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                localStorage.setItem('mobile', mobile);
                localStorage.setItem('token', user.accessToken);
                localStorage.setItem('mail', user.email);

                setSignupSuccess(true);
            } catch (error) {
                console.error('Error signing up:', error);
            }
        }
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <Imports.DialogContent>
                {signupSuccess ? (
                    <Imports.Grid sx={{ display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: "column", textAlign: 'center' }}>
                        <img src="https://www.tatacliq.com/src/mobile-number-login/images/sucess_login.svg" alt="Success" style={{ width: '50%', margin: 'auto' }} />
                        <Imports.Typography textAlign="center" sx={{ fontSize: '30px', fontWeight: 'bold', mt: 2 }}>Signup Successful!</Imports.Typography>
                        <Imports.Typography textAlign="center" sx={{ mt: 2 }}>You have successfully signed up. You can now log in with your credentials.</Imports.Typography>
                    </Imports.Grid>
                ) : (
                    <Imports.Grid sx={{ display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: "column" }}>
                        <Imports.Grid sx={{ display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: "column", textAlign: 'center' }}>
                            <Imports.Typography textAlign="center" sx={{ fontSize: {xs:'10px', sm:"30px"}, fontWeight: 'bold' }}>Welcome to Tata</Imports.Typography>
                            <Imports.Typography textAlign="center" sx={{ fontSize:{xs:'10px', sm:"30px"}, fontWeight: 'bold' }}>CLiQ</Imports.Typography>
                            <Imports.Typography sx={{ fontSize:{xs:'10px'}}}>Please enter your details..</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid sx={{ textAlign: 'center', mt: 1 }}>
                            <Imports.TextField
                                sx={{ width: "60%" }}
                                id="first-name"
                                label="First Name"
                                variant="standard"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                            <Imports.TextField
                                sx={{ width: "60%", mt: 2 }}
                                id="last-name"
                                label="Last Name"
                                variant="standard"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                            <Imports.TextField
                                sx={{ width: "60%", mt: 1 }}
                                id="mobile"
                                label="Mobile"
                                variant="standard"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                error={!!errors.mobile}
                                helperText={errors.mobile}
                            />
                            <Imports.TextField
                                sx={{ width: "60%", mt: 1 }}
                                id="email"
                                label="E-Mail address"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <Imports.TextField
                                sx={{ width: "60%", mt: 1 }}
                                id="password"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <Imports.Button
                                variant="contained"
                                sx={{ backgroundColor: "#A32C63", borderRadius: '100px', mt: 3, width: '50%' }}
                                onClick={handleSignup}
                            >
                                Signup
                            </Imports.Button>
                        </Imports.Grid>
                    </Imports.Grid>
                )}
            </Imports.DialogContent>
            <Imports.DialogActions>
                <Imports.Button onClick={handleClose} sx={{ position: "absolute", top: "0", right: '0' }}>
                    <Imports.HighlightOffIcon sx={{ fontSize: '30px' }} />
                </Imports.Button>
            </Imports.DialogActions>
        </BootstrapDialog>
    );
};

export default SignupDialog;
