import React from 'react';
import PropTypes from 'prop-types';
import Imports from './Imports';


function LinearDeterminate({ progress }) {
  return (
    <Imports.Box sx={{ width: '100%' }}>
      <Imports.LinearProgress variant="determinate" value={progress} />
    </Imports.Box>
  );
}

LinearDeterminate.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LinearDeterminate;
