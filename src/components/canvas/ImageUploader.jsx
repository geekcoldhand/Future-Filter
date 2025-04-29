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
      <div className="image-uploader">
      <label className="uploader-label">
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"          />
        </label>
      </div>
    );
  }
  