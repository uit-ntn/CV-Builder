import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ImageCropper = ({ image, onCropComplete, onCancel }) => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  
  // Load image and setup initial position
  useEffect(() => {
    const img = new Image();
    img.src = image;
    imgRef.current = img;
    
    img.onload = () => {
      // Center image in canvas
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set initial position to center of canvas
      setPosition({
        x: (canvas.width - img.width * scale) / 2,
        y: (canvas.height - img.height * scale) / 2
      });
      
      // Draw initial image
      drawImage();
    };
  }, [image]);
  
  // Redraw image when position or scale changes
  useEffect(() => {
    drawImage();
  }, [position, scale]);
  
  const drawImage = () => {
    if (!imgRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw image at current position and scale
    ctx.save();
    
    // Draw avatar circle frame
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, Math.PI * 2);
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.clip(); // Clip to circle
    
    // Draw image
    ctx.drawImage(
      img,
      position.x,
      position.y,
      img.width * scale,
      img.height * scale
    );
    
    ctx.restore();
  };
  
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    setStartPos({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };
  
  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    setPosition({
      x: clientX - startPos.x,
      y: clientY - startPos.y
    });
  };
  
  const handleMouseUp = () => {
    setDragging(false);
  };
  
  const handleZoomChange = (e) => {
    setScale(parseFloat(e.target.value));
  };
  
  const createCroppedImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to be a square with size of the circle
    const size = canvasRef.current.width - 20;
    canvas.width = size;
    canvas.height = size;
    
    // Create circular crop
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();
    
    // Calculate center of original canvas
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    
    // Draw the portion of the image that was in the circle
    ctx.drawImage(
      imgRef.current,
      position.x + (centerX - size/2), // X offset to center
      position.y + (centerY - size/2), // Y offset to center
      imgRef.current.width * scale,
      imgRef.current.height * scale
    );
    
    // Convert to data URL and complete
    const croppedImage = canvas.toDataURL('image/jpeg', 0.9);
    onCropComplete(croppedImage);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md">
        <h3 className="text-xl font-bold mb-4">{t('adjustAvatar')}</h3>
        
        <div className="relative mb-4">
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            className="border rounded-full mx-auto cursor-move bg-gray-50"
          />
          <p className="text-xs text-gray-500 text-center mt-2">
            {t('dragToAdjust')}
          </p>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">{t('zoom')}</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={scale}
            onChange={handleZoomChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            {t('cancel')}
          </button>
          <button
            onClick={createCroppedImage}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('apply')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
