// PictureGrid.js

import React, { useEffect, useState } from 'react';
import './PictureGrid.css';

const PictureGrid = () => {

  // Provided set of images
    const allImages = [
        'https://picsum.photos/200/301',
        'https://picsum.photos/200/301',
        'https://picsum.photos/200/302',
        'https://picsum.photos/200/303',
        'https://picsum.photos/200/304',
        'https://picsum.photos/200/305',
        'https://picsum.photos/200/306',
        'https://picsum.photos/200/307',
        'https://picsum.photos/200/308',
        'https://picsum.photos/200/309',
        'https://picsum.photos/200/310',
        'https://picsum.photos/200/311',
        'https://picsum.photos/200/312',
        'https://picsum.photos/200/313',
        'https://picsum.photos/200/314',
        'https://picsum.photos/200/315',
        'https://picsum.photos/200/316',
    ];

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
  
    useEffect(() => {
      const shuffleImages = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
  
      // Shuffle all images initially
      const shuffledImages = shuffleImages(allImages);
  
      // Select 9 images from the shuffled array
      const initialImages = shuffledImages.slice(0, 9);
  
      setImages(initialImages);
  
      // Function to handle changing an image
      const changeImage = () => {
        const randomIndex = Math.floor(Math.random() * 9); // Randomly choose one of the 9 images
        setCurrentIndex(randomIndex);
      };
  
      // Start continuous image changes after 1 second
      const interval = setInterval(changeImage, 1000);
  
      // Cleanup the interval on unmount
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="picture-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`picture ${index === currentIndex ? 'changed' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    );
  };
  
  export default PictureGrid;