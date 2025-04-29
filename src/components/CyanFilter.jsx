import "./App.css";
import { useState, useRef, useEffect } from "react";
import ImageUploader from "../components/canvas/ImageUploader";
import Controls from "./contols/Controls"

import ImagePreview from "../components/canvas/ImagePreview";
import applyY2kFilter  from "./effects/FilterUtils";

// Main component that orchestrates the app
export default function CyanFilter() {
  const [originalImage, setOriginalImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);
  
  const [effects, setEffects] = useState({
    cyanIntensity: 50,
    contrast: 50,
    grainAmount: 30,
    cyberLinesDensity: 40,
    cyberLinesOpacity: 30,
    blurAmount: 20,
    greenTint: 30,
  });

  // Handle when a new image is uploaded
  const handleImageUpload = (imageDataUrl) => {
    setOriginalImage(imageDataUrl);
    setFilteredImage(null);
    setLoading(true);
  };

  // Process image when effects or image changes
  useEffect(() => {
    if (originalImage && canvasRef.current) {
      const img = new Image();
      img.src = originalImage;
      img.onload = () => {
        const filteredDataUrl = applyY2kFilter(img, canvasRef.current, effects);
        setFilteredImage(filteredDataUrl);
        setLoading(false);
      };
    }
  }, [originalImage, effects]);

  // Handle control changes from the controls panel
  const handleEffectChange = (effectName, value) => {
    setEffects(prev => ({
      ...prev,
      [effectName]: value
    }));
    setLoading(true);
  };

  // Reset effects to default values
  const resetEffects = () => {
    setEffects({
      cyanIntensity: 50,
      contrast: 50,
      grainAmount: 30,
      cyberLinesDensity: 40,
      cyberLinesOpacity: 30,
      blurAmount: 20,
      greenTint: 30,
    });
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-gray-900 min-h-screen text-cyan-300">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl mb-6 text-center font-bold tracking-wider text-cyan-400">
          Y2K FUTURE FILTER
        </h1>
        
        {/* Image Upload Component */}
        <ImageUploader onImageUpload={handleImageUpload} />
        
        {/* Main content area with original, controls, and filtered */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Original Image */}
          {originalImage && (
            <ImagePreview 
              image={originalImage} 
              title="Original" 
            />
          )}
          
          {/* Controls Panel */}
          {originalImage && (
            <Controls 
              effects={effects} 
              onEffectChange={handleEffectChange}
              onReset={resetEffects}
            />
          )}
          
          {/* Filtered Image */}
          {loading ? (
            <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg border border-cyan-700">
              <div className="text-cyan-400">Processing...</div>
            </div>
          ) : filteredImage && (
            <ImagePreview 
              image={filteredImage} 
              title="GWACH Y2K Filtered" 
              showDownload={true}
            />
          )}
        </div>
      </div>
      
      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
