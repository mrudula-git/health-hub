import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './card-slider.css';

const CardSlider = () => {
  const cardData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
    { title: 'Card 5', content: 'Content for Card 5' },
    { title: 'Card 6', content: 'Content for Card 6' },
    { title: 'Card 7', content: 'Content for Card 7' },
    { title: 'Card 8', content: 'Content for Card 8' },
    { title: 'Card 9', content: 'Content for Card 9' },
  ];

  return (
    <div className="max-w-screen-lg mx-auto">
      <Typography variant="h3" className="text-center mb-3">
        athenaOne® combines software and services that ease clinical complexity and improve overall performance.
      </Typography>
      <div className="flex space-x-4 p-4 overflow-x-scroll scrollbar-hide scrollbar-purple">
        {cardData.map((card, index) => (
          <Card key={index} className="flex-shrink-0 w-64 h-96 scroll-snap-start gradient-card">
            <CardContent>
              <Typography variant="h6" className="text-white">
                {card.title}
              </Typography>
              <Typography variant="body2" className="text-white">
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
