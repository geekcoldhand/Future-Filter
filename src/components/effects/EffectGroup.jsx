import { useState } from "react";
export default function EffectGroup({ title, children }) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    return (
        <div className="collapsible-section">
          <div 
            className="collapsible-header"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="collapsible-title">{title}</h3>
            <span className="collapsible-toggle">{isExpanded ? '▼' : '►'}</span>
          </div>
          {isExpanded && (
            <div className="collapsible-content">
              {children}
            </div>
          )}
        </div>
      );
  }