import { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }) => {
  const [error, setError] = useState(false);
  
  return (
    <>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          {...props}
        />
      ) : fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={alt}
          {...props}
        />
      ) : (
        <div 
          className={`w-full h-full flex items-center justify-center bg-gray-200 ${props.className || ''}`}
          style={props.style}
        >
          <span className="text-gray-500 font-medium">{alt || 'Image'}</span>
        </div>
      )}
    </>
  );
};

export default ImageWithFallback;
