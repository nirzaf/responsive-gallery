import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageModalProps } from '../types';

export const ImageModal: React.FC<ImageModalProps> = ({
  image,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && hasNext) onNext();
      if (event.key === 'ArrowLeft' && hasPrevious) onPrevious();
    },
    [onClose, onNext, onPrevious, hasNext, hasPrevious]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
        )}
        
        <div className="max-w-4xl w-full">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
            <p className="text-gray-300">{image.description}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/10 rounded-full text-sm">
              {image.category}
            </span>
          </div>
        </div>

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        )}
      </div>
    </div>
  );
};