export default function EffectSlider({ name, label, value, onChange }) {
    return (
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <label className="text-sm text-cyan-300">{label}</label>
          <span className="text-sm text-cyan-200">{value}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(name, parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
      </div>
    );
  }