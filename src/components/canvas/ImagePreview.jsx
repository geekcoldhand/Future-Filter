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
		<div className="image-preview">
			<h2 className="preview-title">{title}</h2>
			<div className="preview-container">
				<img src={image} alt={title} className="max-w-full max-h-64" />
			</div>
			{showDownload && (
				<div className="download-container">
					<button onClick={downloadImage} className="download-button">
						Download
					</button>
				</div>
			)}
		</div>
	);
}
