import { useState } from "react";
export default function EffectGroup({ title, children }) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    return (
      <div className="mb-3 border-b border-gray-700 pb-2">
        <div 
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-sm font-medium text-cyan-400">{title}</h3>
          <span className="text-xs">{isExpanded ? '▼' : '►'}</span>
        </div>
        {isExpanded && (
          <div className="pl-2">
            {children}
          </div>
        )}
      </div>
    );
  }