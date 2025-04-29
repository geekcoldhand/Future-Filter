export default function ImageUploader({ onImageUpload }) {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          onImageUpload(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="mb-6 bg-gray-800 p-4 md:p-6 rounded-lg border border-cyan-700">
        <label className="block mb-2 text-lg">
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 block w-full px-3 py-2 bg-gray-700 text-cyan-200 rounded border border-cyan-600 focus:border-cyan-400"
          />
        </label>
      </div>
    );
  }
  