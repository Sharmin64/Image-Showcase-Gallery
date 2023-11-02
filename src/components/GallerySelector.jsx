import React from "react";

const GallerySelector = ({
  selectedImages,
  setSelectedImages,
  handleDeleteImages,
}) => {
  return (
    <nav className="py-4 px-6">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {selectedImages.length === 0 ? (
            "Gallery"
          ) : (
            <label
              htmlFor="select"
              className="flex flex-row justify-between items-center gap-x-4"
            >
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={selectedImages.length > 0}
                className="h-5 w-5 accent-[#ee6969] cursor-pointer"
                onChange={() => setSelectedImages([])}
              />
              {selectedImages.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-500 font-medium"
          onClick={handleDeleteImages}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default GallerySelector;