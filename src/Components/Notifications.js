
import React from "react";

import Imports from "./Imports";
const Notification = () => {
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


    return (

        <Imports.Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <Imports.Grid xs={10} sx={{ backgroundColor: "white", borderRadius:'10px' }} >
                <Imports.Typography sx={{ p: 1, fontSize: '12px', textAlign: 'start' }}>To Ensure you do not miss order related updates, we willsend you sms alerts until your package is delivered .You will also recive alerts in case of delays /issues with your order</Imports.Typography>
            </Imports.Grid>

            <Imports.Grid xs={10} sx={{ mt: 5, backgroundColor: "white" , display:'flex',justifyContent:"space-between", width:'100%',borderRadius:'10px'}}>

                <Imports.Typography sx={{ display: 'flex', justifyContent: 'center', p: 1,gap:1 }}>
                    <Imports.ChatOutlinedIcon />
                    SMS
                </Imports.Typography>
                <Imports.Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color="success"
                />
            </Imports.Grid>


        </Imports.Grid>

    )
}
export default Notification;