import React from 'react';

const SDLogo = ({ className = "w-12 h-12" }) => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/dfd905b0-2133-4e9a-b08d-61f740e9e540/9ae27144d61981141d95414075133ede.png";
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img src={logoUrl} alt="SD Technology Logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default SDLogo;