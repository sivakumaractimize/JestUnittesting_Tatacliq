import * as React from 'react';
import PropTypes from 'prop-types';
import { Dialog,   ListItemButton} from '@mui/material';

import Imports from '../Imports'
export default function ImageSelectorDialog({ imgUrls = [], open, onClose, fallbackUrl }) {
    const defaultImage = fallbackUrl || 'https://via.placeholder.com/150';
    const [selectedImage, setSelectedImage] = React.useState(imgUrls[0] || defaultImage);
    const [largeImageIndex, setLargeImageIndex] = React.useState(0);

    Imports.useEffect(() => {
        if (imgUrls.length > 0) {
            setSelectedImage(imgUrls[0]);
            setLargeImageIndex(0);
        } else {
            setSelectedImage(defaultImage);
        }
    }, [imgUrls, defaultImage]);

    const handleClose = (value) => {
        onClose();
        if (value && imgUrls.includes(value)) {
            setSelectedImage(value);
            setLargeImageIndex(imgUrls.indexOf(value));
        }
    };

    const handleListItemClick = (value, index) => {
        setSelectedImage(value);
        setLargeImageIndex(index);
    };

    const handlePrevImage = () => {
        const newIndex = (largeImageIndex - 1 + imgUrls.length) % imgUrls.length;
        setSelectedImage(imgUrls[newIndex]);
        setLargeImageIndex(newIndex);
    };

    const handleNextImage = () => {
        const newIndex = (largeImageIndex + 1) % imgUrls.length;
        setSelectedImage(imgUrls[newIndex]);
        setLargeImageIndex(newIndex);
    };

    return (
        <Dialog onClose={() => handleClose(selectedImage)} open={open} maxWidth="md" sx={{ borderRadius: '10px' }}>
            <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '10px', width: "650px", overflow: 'hidden' }}>
            <Imports.IconButton sx={{ position: 'absolute', top: -10, right: 650,left:627 }} aria-label="close"  data-testid="close-dialog-button" onClick={() => handleClose(selectedImage)}>
                        <Imports.CloseIcon sx={{ fontSize: "30px", backgroundColor: "grey",borderBottomLeftRadius:"4px"}} />
                    </Imports.IconButton>

                <Imports.Grid item sx={{ width: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                    <Imports.List sx={{ pt: 0 }}>
                        {Array.isArray(imgUrls) && imgUrls.length > 0 ? imgUrls.map((image, index) => (
                            <Imports.ListItem key={index} disableGutters sx={{ cursor: 'pointer' }}>
                                <ListItemButton onClick={() => handleListItemClick(image, index)}>
                                    <img src={image} alt={`img-${index}`} style={{ width: '80px', height: 'auto', borderRadius: '5px' }} />
                                </ListItemButton>
                            </Imports.ListItem>
                        )) : (
                            <Imports.ListItem disableGutters sx={{ cursor: 'pointer' }}>
                                <ListItemButton>
                                    <img src={defaultImage} alt="fallback-img" style={{ width: '80px', height: 'auto', borderRadius: '5px' }} />
                                </ListItemButton>
                            </Imports.ListItem>
                        )}
                    </Imports.List>
                </Imports.Grid>
                <Imports.Grid item sx={{ position: 'relative', width: 'calc(100% - 120px)', textAlign: 'center', padding: '10px', mt: 3 }}>
                    <img
                        src={selectedImage}
                        alt="Large"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '500px',
                            objectFit: 'contain',
                            borderRadius: '5px',
                        }}
                    />
                    {imgUrls.length > 1 && (
                        <>
                            <Imports.IconButton
                                aria-label="previous image"
                                onClick={handlePrevImage}
                                style={{ position: 'absolute', top: '50%', left: '10px', backgroundColor: 'gray', transform: 'translateY(-50%)' }}
                            >
                                <Imports.NavigateBeforeIcon sx={{ fontSize: '30px' }} />
                            </Imports.IconButton>
                            <Imports.IconButton
                                aria-label="next image"
                                onClick={handleNextImage}
                                style={{ position: 'absolute', top: '50%', right: '10px', backgroundColor: 'gray', transform: 'translateY(-50%)' }}
                            >
                                <Imports.NavigateNextIcon sx={{ fontSize: '30px' }} />
                            </Imports.IconButton>
                        </>
                    )}
                </Imports.Grid>
            </Imports.Grid>
        </Dialog>
    );
}

ImageSelectorDialog.propTypes = {
    imgUrls: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    fallbackUrl: PropTypes.string
};
