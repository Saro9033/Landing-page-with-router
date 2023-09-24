import React from 'react';
// Import your CSS file for styling

function ImageHover({ imageUrl, title, description }) {
  const mobile = window.innerWidth < 1000
  return (
    <div className="image-hover-container" style={{ cursor: 'pointer' }}>
      <div className="image-hover-content">
        <img src={imageUrl} alt={title} className="image-hover-image px-2 py-3" />
        <div className="image-hover-overlay">
          <h3 className="image-hover-title" style={window.innerWidth < 525 ? { fontSize: '13px' } : { fontSize: '19px' }}>{title} </h3>
          <p className="image-hover-description" style={window.innerWidth < 525 ? { fontSize: '6px' } : { fontSize: '10px' }}>
            {mobile ? `${description.slice(0, 45)} ...` : description}</p>

        </div>
      </div>
    </div>
  );
}

export default ImageHover;
