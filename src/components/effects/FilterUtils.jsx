import React from "react";

export default function applyY2kFilter(img, canvas, effects) {
    const ctx = canvas.getContext("2d");
    
    canvas.width = img.width;
    canvas.height = img.height;


    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    applyColorAdjustments(data, effects);
    
    ctx.putImageData(imageData, 0, 0);
    
    if (effects.grainAmount > 0) {
      addNoise(ctx, canvas.width, canvas.height, effects.grainAmount);
    }
    
    if (effects.cyberLinesDensity > 0) {
      addCyberLines(ctx, canvas.width, canvas.height, effects.cyberLinesDensity, effects.cyberLinesOpacity);
    }
    
    if (effects.blurAmount > 0) {
      addSoftness(ctx, effects.blurAmount, canvas);
    }
    
    return canvas.toDataURL("image/jpeg");
  }
  
  function applyColorAdjustments(data, effects) {
    const cyanFactor = effects.cyanIntensity / 100 * 1.5;
    const contrastFactor = 0.7 + (effects.contrast / 100) * 0.6;
    const contrastOffset = 30 - (effects.contrast / 100) * 20; 
    const greenTintFactor = effects.greenTint / 100;
    
    for (let i = 0; i < data.length; i += 4) {
      const avgColor = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const desatFactor = 1 - (effects.contrast / 200); 
      
      data[i] = data[i] * (1 - desatFactor * 0.3) + avgColor * desatFactor * 0.3;                 
      data[i + 1] = data[i + 1] * (1 - desatFactor * 0.2 + greenTintFactor * 0.3) + avgColor * desatFactor * 0.2;  
      data[i + 2] = data[i + 2] * (1 + cyanFactor * 0.5) + avgColor * desatFactor * 0.1;         
      
      data[i] = (data[i] - 128) * contrastFactor + 128 + contrastOffset;
      data[i + 1] = (data[i + 1] - 128) * contrastFactor + 128 + contrastOffset;
      data[i + 2] = (data[i + 2] - 128) * contrastFactor + 128 + contrastOffset + (cyanFactor * 20);
    }
  }
  
  function addNoise(ctx, width, height, amount) {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    

    const noiseIntensity = amount / 5;
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * noiseIntensity - (noiseIntensity / 2);
      data[i] += noise;
      data[i + 1] += noise;
      data[i + 2] += noise;
    }
    
    ctx.putImageData(imageData, 0, 0);
  }
  
  function addCyberLines(ctx, width, height, density, opacity) {

    const horizontalGap = Math.floor(100 - (density * 0.8)); // Higher density = smaller gap
    const verticalGap = Math.floor(200 - density * 1.5);
    

    const lineOpacity = opacity / 100 * 0.2;
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 1;
    
    for (let y = 10; y < height; y += Math.floor(Math.random() * 20) + horizontalGap) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    

    for (let x = 0; x < width; x += Math.floor(Math.random() * 40) + verticalGap) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    ctx.globalAlpha = 1.0;
  }
  
  function addSoftness(ctx, amount, canvas) {
  
    const blurAmount = (amount / 100) * 3;

    
    // Apply a very mild blur effect by overlaying a transparent version
    ctx.globalAlpha = Math.min(0.8, amount / 100);
//ctx.filter = `blur(${blurAmount}px)`;
    ctx.filter = "none";
    ctx.drawImage(canvas, 0, 0);
    ctx.globalAlpha = 1.0;
  }

