import React  from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebaseauth';

import Imports from './Imports';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),

    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        width: '600px',
        borderRadius:"20px"
    },
}));

const LoginDialog = ({ open, onClose }) => {
    const [signupOpen, setSignupOpen] = Imports.useState(false);
    const [email, setEmail] = Imports.useState('');
    const [password, setPassword] = Imports.useState('');
    const [error, setError] = Imports.useState('');

    const handleClose = () => {
       
            onClose();
      
    };

    const handleSignupOpen = () => {
        setSignupOpen(true);
        onClose();
    };

    const handleSignupClose = () => {
        setSignupOpen(false);
    };

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);//authentication to firebase
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('mail', user.email);
            console.log('Login successful:', user);
            handleClose();
        } catch (error) {
            setError("Invalid email or password.");
           
        }
    };

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Imports.DialogContent  >
                    <Imports.Grid sx={{ display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: "column" }}>
                        <Imports.Grid sx={{ display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: "column", textAlign: 'center' }}>
                            <Imports.Typography textAlign="center" sx={{ fontSize: {xs:'10px', sm:"30px"}, fontWeight: 'bold' }}>Welcome to Tata</Imports.Typography>
                            <Imports.Typography textAlign="center" sx={{ fontSize:{xs:'10px', sm:"30px"}, fontWeight: 'bold' }}>CLiQ</Imports.Typography>
                            <Imports.Typography sx={{ fontSize:{xs:'10px'}}}>Please enter your email address and Password</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid sx={{ textAlign: 'center', mt: 2 }}>
                            <Imports.TextField
                                sx={{ width: "60%" }}
                                id="email"
                                label="E-Mail address"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!error}
                            />
                            <Imports.TextField
                                sx={{ width: "60%", mt: 2 }}
                                id="password"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!error}
                            />
                            {error && (
                                <Imports.Typography color="error" sx={{ mt: 1 }}>
                                    {error}
                                </Imports.Typography>
                            )}
                            <Imports.Typography sx={{ width: {xs:'80%', sm:'60%'}, fontSize: {xs:'8px', sm:'12px'}, mt: 2, ml: {xs:3,sm:15}, textAlign: 'start' }}>
                                This site is protected by reCAPTCHA and the Google
                                <Imports.Typography component="span" sx={{ color: '#DA1C80', fontSize:{xs:'8px', sm:'12px'}, fontWeight: 'bold' }}> Privacy Policy </Imports.Typography>
                                and
                                <Imports.Typography component="span" sx={{ color: '#DA1C80', fontSize: {xs:'8px', sm:'12px'}, fontWeight: 'bold' }}> Terms of Service </Imports.Typography>
                                apply.
                            </Imports.Typography>
                            <Imports.Typography sx={{ width: {xs:'80%', sm:'55%'}, fontSize: {xs:'8px', sm:'12px'}, mt: 1, ml: {xs:3,sm:15}, textAlign: 'start' }}>
                                By continuing, you agree to our
                                <Imports.Typography component="span" sx={{ color: '#DA1C80', fontSize: {xs:'8px', sm:'12px'}, fontWeight: 'bold' }}> Terms of Use </Imports.Typography>
                                and
                                <Imports.Typography component="span" sx={{ color: '#DA1C80', fontSize: {xs:'8px', sm:'12px'}, fontWeight: 'bold' }}> Privacy Policy</Imports.Typography>
                            </Imports.Typography>
                            <Imports.Button
                                variant="contained"
                                sx={{ backgroundColor: "#A32C63", borderRadius: '100px',fontSize:{xs:'8px', sm:'12px'}, mt: 3, width: {xs:'30%', sm:'50%'} }}
                                onClick={handleLogin}
                            >
                                Continue
                            </Imports.Button>
                        </Imports.Grid>
                        <Imports.Grid sx={{ textAlign: 'center', mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Imports.Typography sx={{ fontSize: {xs:'8px', sm:'10px'}, display: 'flex', alignItems: 'center' }}>
                                Don't Have an account click
                                <Imports.Button variant="contained" sx={{ backgroundColor: "#ccae5c", borderRadius: '100px', ml: 1, width: {xs:'10%',sm:'20%'}, fontSize: {xs:'8px', sm:'10px'} }} onClick={handleSignupOpen}>
                                    Signup
                                </Imports.Button>
                            </Imports.Typography>
                        </Imports.Grid>
                    </Imports.Grid>
                </Imports.DialogContent>
                <Imports.DialogActions>
                    <Imports.Button onClick={handleClose} sx={{ position: "absolute", top: "0", right: '0' }}>
                        <Imports.HighlightOffIcon sx={{ fontSize: '30px' }} />
                    </Imports.Button>
                </Imports.DialogActions>
            </BootstrapDialog>
            <Imports.SignupDialog open={signupOpen} onClose={handleSignupClose} />
        </>
    );
}; 

export default LoginDialog;
