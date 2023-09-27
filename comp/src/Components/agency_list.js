
import React from 'react';
import './agency_list.css';

const CardLayout = () => {
  const cardData = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
      title: 'Agency 1',
      content: 'This is the content of Agency 1',
      bgColor: '#213467', 
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
      title: 'Agency 2',
      content: 'This is the content of Agency 2',
      bgColor: '#213467', 
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
      title: 'Agency 3',
      content: 'This is the content of Agency 3',
      bgColor: '#213467', 
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
      title: 'Agency 4',
      content: 'This is the content of Agency 4',
      bgColor: '#213467',
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className="card" style={{ backgroundColor: card.bgColor }}>
          <div className="card-logo">
            <img src={card.logo} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
