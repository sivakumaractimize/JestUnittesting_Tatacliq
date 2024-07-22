import React from 'react';
import Imports from './Imports';

const ProductsAccordion = () => {
  const [expanded, setExpanded] = React.useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    
  };

  const sections = [
    {
      title: 'Brands',
      items: [
        { name: 'Biba', quantity: 7 },
        { name: 'Zara', quantity: 5 },
        { name: 'H&M', quantity: 3 },
        { name: 'Gucci', quantity: 2 },
        { name: 'Prada', quantity: 1 },
      ],
    },
    {
      title: 'Price',
      items: [
        { name: '₹0 - ₹1,000', quantity: 10 },
        { name: '₹501- ₹1,000', quantity: 8 },
        { name: '₹1,001- ₹2,000', quantity: 5 },
        { name: '₹20001- ₹3,000', quantity: 2 },
        { name: '₹3000+', quantity: 1 },
      ],
    },
    {
      title: 'Fit',
      items: [
        { name: 'Regular', quantity: 12 },
        { name: 'Slim', quantity: 9 },
        { name: 'Relaxed', quantity: 4 },
      ],
    },
    {
      title: 'Occasion',
      items: [
        { name: 'Casual', quantity: 15 },
        { name: 'Formal', quantity: 5 },
        { name: 'Party', quantity: 3 },
      ],
    },
    {
      title: 'Discount',
      items: [
        { name: '10% off', quantity: 7 },
        { name: '20% off', quantity: 5 },
        { name: '30% off', quantity: 3 },
        { name: '40% off', quantity: 2 },
        { name: '50% off', quantity: 1 },
      ],
    },
    {
      title: 'Size',
      items: [
        { name: 'S', quantity: 10 },
        { name: 'M', quantity: 8 },
        { name: 'L', quantity: 6 },
        { name: 'XL', quantity: 4 },
        { name: 'XXL', quantity: 2 },
      ],
    },
    {
      title: 'Collections',
      items: [
        { name: 'Spring Collection', quantity: 5 },
        { name: 'Summer Collection', quantity: 7 },
        { name: 'Autumn Collection', quantity: 3 },
        { name: 'Winter Collection', quantity: 2 },
      ],
    }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <Imports.Accordion
          key={index}
          expanded={expanded[`panel${index}`]}
          onChange={handleChange(`panel${index}`)}
          sx={{ width: '100%', border: '1px solid #eeeeee', boxShadow: 'none' }}
          disableGutters
          elevation={0}
          data-testid={`accordion-${section.title}`}
        >
          <Imports.AccordionSummary
            expandIcon={expanded[`panel${index}`] ? <Imports.RemoveIcon /> : <Imports.AddIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            data-testid={`accordion-summary-${section.title}`}
          >
            <Imports.Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
              {section.title}
            </Imports.Typography>
          </Imports.AccordionSummary>
          <Imports.AccordionDetails data-testid={`accordion-details-${section.title}`}>
            {section.items.map((item, itemIndex) => (
              <Imports.Grid key={itemIndex} container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1 }}>
                <Imports.Typography sx={{ ml: 6, fontSize: '14px' }}>
                  {item.name}
                </Imports.Typography>
                <Imports.Typography>
                  {item.quantity}
                </Imports.Typography>
              </Imports.Grid>
            ))}
          </Imports.AccordionDetails>
        </Imports.Accordion>
      ))}
    </>
  );
};

export default ProductsAccordion;
