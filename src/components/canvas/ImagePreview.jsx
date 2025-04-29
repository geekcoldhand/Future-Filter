export default function ImagePreview({ image, title, showDownload }) {
    const downloadImage = () => {
      if (image) {
        const link = document.createElement("a");
        link.download = "y2k-filtered-image.jpg";
        link.href = image;
        link.click();
      }
    };
  
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-cyan-700">
        <h2 className="text-xl mb-3 text-center">{title}</h2>
        <div className="flex justify-center">
          <img 
            src={image} 
            alt={title} 
            className="max-w-full max-h-64"
          />
        </div>
        {showDownload && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={downloadImage}
              className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded transition"
            >
              Download
            </button>
          </div>
        )}
      </div>
    );
  }