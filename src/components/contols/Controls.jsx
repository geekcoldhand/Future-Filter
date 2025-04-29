import React from "react";
import EffectGroup from "../effects/EffectGroup";
import EffectSlider from "../effects/EffectGroup";

export default function Controls({ effects, onEffectChange, onReset }) {
	return (
		<div className="controls">
			<h2 className="controls-title">Effects</h2>
			<div className="controls-form">
				<button onClick={onReset} className="control-rest">
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
