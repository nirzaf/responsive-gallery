import React, { useState, useEffect } from 'react';
import { NewsImage } from '../types';
import { ImageCard } from './ImageCard';
import { ImageModal } from './ImageModal';

interface ImageGalleryProps {
  images: NewsImage[];
  gap?: 'sm' | 'md' | 'lg';
}

const gapSizes = {
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-4',
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  gap = 'md' 
}) => {
  const [selectedImage, setSelectedImage] = useState<NewsImage | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getOptimizedColumns = () => {
    const imageColumns: NewsImage[][] = Array.from({ length: columns }, () => []);
    let currentColumn = 0;

    images.forEach((image) => {
      imageColumns[currentColumn].push(image);
      currentColumn = (currentColumn + 1) % columns;
    });

    return imageColumns;
  };

  const currentImageIndex = selectedImage ? images.indexOf(selectedImage) : -1;

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${gapSizes[gap]}`}>
        {getOptimizedColumns().map((column, columnIndex) => (
          <div key={columnIndex} className={`flex flex-col ${gapSizes[gap]}`}>
            {column.map((image) => (
              <ImageCard
                key={image.url}
                image={image}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const nextIndex = currentImageIndex + 1;
            if (nextIndex < images.length) {
              setSelectedImage(images[nextIndex]);
            }
          }}
          onPrevious={() => {
            const prevIndex = currentImageIndex - 1;
            if (prevIndex >= 0) {
              setSelectedImage(images[prevIndex]);
            }
          }}
          hasNext={currentImageIndex < images.length - 1}
          hasPrevious={currentImageIndex > 0}
        />
      )}
    </>
  );
};