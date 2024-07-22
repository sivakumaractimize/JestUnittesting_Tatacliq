import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import Imports from './Imports';
export default function TemporaryDrawer({ token, handleLoginClick, handleLogout, open, toggleDrawer }) {
  const navigate = useNavigate();
  const name = localStorage.getItem('firstName');

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {!token ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: 'red', borderRadius: '100px', ml: 2 }}
            onClick={handleLoginClick}
          >
            login/signup
          </Button>
        ) : (
            <>
           
                        <Imports.Typography
                          sx={{ cursor: 'pointer', ml: 5, color:'orange', fontSize: { md: '12px', lg: '14px', xl: '12px' }, whiteSpace: 'nowrap' }}
                        >
                          {name}
                        </Imports.Typography>
            </>
        )}
        <MenuItem onClick={() => token && navigate('/myaccount')}>
          <AccountCircleOutlinedIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>My account</Typography>
        </MenuItem>
        <MenuItem>
          <LocalMallOutlinedIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Order History</Typography>
        </MenuItem>
        <MenuItem>
          <FavoriteBorderTwoToneIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>My WishList</Typography>
        </MenuItem>
        <MenuItem>
          <NotificationsNoneOutlinedIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Alerts & Coupons</Typography>
        </MenuItem>
        <MenuItem>
          <CardGiftcardOutlinedIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Gift card</Typography>
        </MenuItem>
        <MenuItem>
          <AccountBalanceWalletTwoToneIcon />
          <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>CLIQ Cash</Typography>
        </MenuItem>
        {token && (
          <MenuItem onClick={handleLogout}>
            <LogoutIcon />
            <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Logout</Typography>
          </MenuItem>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
