export default function EffectSlider({ name, label, value, onChange }) {
	return (
		<div className="slider-container">
			<div className="slider-header">
				<label className="slider-label">{label}</label>
				<span className="slider-value">{value}%</span>
			</div>
			<input
				type="range"
				min="0"
				max="100"
				value={value}
				onChange={(e) => onChange(name, parseInt(e.target.value))}
				className="slider-input"
			/>
		</div>
	);
}
