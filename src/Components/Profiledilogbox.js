import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import Imports from './Imports';

const ProfileDialog = ({ open, onClose }) => {
  const [firstName, setFirstName] = React.useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = React.useState(localStorage.getItem('lastName') || '');
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  React.useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  React.useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  React.useEffect(() => {
    if (selectedDate) {
      const dateOnly = dayjs(selectedDate).format('D/M/YYYY');
      localStorage.setItem('date', dateOnly);
    }
  }, [selectedDate]);

  return (
    <Imports.Grid>
      <Imports.Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <Imports.DialogTitle id="form-dialog-title">Basic Details</Imports.DialogTitle>
        <Imports.DialogContent>
          <Imports.Grid container spacing={2}>
            <Imports.Grid item xs={6}>
              <Imports.TextField
                required
                id="first-name"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                margin="dense"
                fullWidth
              />
            </Imports.Grid>
            <Imports.Grid item xs={6}>
              <Imports.TextField
                required
                id="last-name"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                margin="dense"
                fullWidth
              />
            </Imports.Grid>
            <Imports.Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date of Birth"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <Imports.TextField {...params} margin="dense" fullWidth />}
                />
              </LocalizationProvider>
            </Imports.Grid>
          </Imports.Grid>
          <Imports.Button onClick={onClose} variant='contained' sx={{backgroundColor:'#DA1C5C', ml:30, mt:5}}>
            Done
          </Imports.Button>
        </Imports.DialogContent>
      </Imports.Dialog>
    </Imports.Grid>
  );
};

export default ProfileDialog;
