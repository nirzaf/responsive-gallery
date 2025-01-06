import React, { useState } from 'react';
import { NewsImage } from '../types';

interface ImageCardProps {
  image: NewsImage;
  onClick: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {error ? (
        <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
          Failed to load image
        </div>
      ) : (
        <>
          <img
            src={image.url}
            alt={image.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setError(true);
              setIsLoading(false);
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold truncate">{image.title}</h3>
              <p className="text-sm opacity-90 truncate">{image.category}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};