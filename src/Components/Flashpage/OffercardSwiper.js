import React from 'react';
import * as Imports from '../Imports'; 
import { useState } from 'react';
import { ImageList } from '@mui/material';
import {ImageListItem} from '@mui/material';
import {Paper} from '@mui/material';

const OfferCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg",
      alt: "card 1"
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg",
      alt: "card 2"
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg",
      alt: "card 3"
    }
  ];

  

  return (
    <ImageList variant="standard" cols={1} gap={0} sx={{ maxWidth: 600, margin: 'auto' }}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <Paper>
            <img
              src={image.url}
              alt={image.alt}
              style={{ width: '100%' }}
            />
          </Paper>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default OfferCard;
