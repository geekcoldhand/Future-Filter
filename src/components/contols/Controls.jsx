import React from "react";
import EffectGroup from "../effects/EffectGroup";
import EffectSlider  from "../effects/EffectGroup";


export default function Controls({ effects, onEffectChange, onReset }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-cyan-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Effects Controls</h2>
          <button 
            onClick={onReset}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-cyan-300 text-sm rounded"
          >
            Reset
          </button>
        </div>
        
        <div className="space-y-1">
          <EffectGroup title="Color Adjustments">
            <EffectSlider 
              name="cyanIntensity" 
              label="Cyan Intensity" 
              value={effects.cyanIntensity}
              onChange={onEffectChange}
            />
            <EffectSlider 
              name="greenTint" 
              label="Green Tint" 
              value={effects.greenTint}
              onChange={onEffectChange}
            />
            <EffectSlider 
              name="contrast" 
              label="Contrast" 
              value={effects.contrast}
              onChange={onEffectChange}
            />
          </EffectGroup>
          
          <EffectGroup title="Texture Effects">
            <EffectSlider 
              name="grainAmount" 
              label="Grain/Noise" 
              value={effects.grainAmount}
              onChange={onEffectChange}
            />
            <EffectSlider 
              name="blurAmount" 
              label="Softness/Blur" 
              value={effects.blurAmount}
              onChange={onEffectChange}
            />
          </EffectGroup>
          
          <EffectGroup title="Cyber Elements">
            <EffectSlider 
              name="cyberLinesDensity" 
              label="Cyber Lines Density" 
              value={effects.cyberLinesDensity}
              onChange={onEffectChange}
            />
            <EffectSlider 
              name="cyberLinesOpacity" 
              label="Cyber Lines Opacity" 
              value={effects.cyberLinesOpacity}
              onChange={onEffectChange}
            />
          </EffectGroup>
        </div>
      </div>
    );
  }