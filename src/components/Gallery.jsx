import React, {useState} from "react";
import GallerySelector from "./GallerySelector";
import GalleryImg from "./GalleryImg";
import ImgUpload from "./ImgUpload";

const Gallery = ({imgData}) => {
  console.log(imgData);
  const [images, setImages] = useState(imgData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedImg, setDraggedImg] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleImgChange = (e) => {
    const selectedFiles = e.target.files;

    const newImages = Array.from(selectedFiles).map((file, index) => {
      const id = images.length + index + 1;
      const img = URL.createObjectURL(file);

      return {id, img};
    });

    setImages([...images, ...newImages]);
  };

  const handleDeleteImages = () => {
    const updatedImages = images.filter(
      (img) => !selectedImages.includes(img.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };
  //*drag images are here
  const handleDragStart = (image) => {
    //e.dataTransfer.setData("imageId", id);
    setIsDragging(true);
    setDraggedImg(image);
  };
  //todo image drag korte hobe
  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  const handleDrop = (targetIndex) => {
    setIsDragging(false);
    //const sourceId = e.dataTransfer.getData("imageId");
    if (draggedImg) {
      const updatedImages = images.filter(
        (image) => image.id !== draggedImg.id
      );
      updatedImages.splice(targetIndex, 0, draggedImg);
      setImages(updatedImages);
      setDraggedImg(null);
    }
  };

  //const handleImageClick = (id) => {
  //  if (selectedImages.includes(id)) {
  //    setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
  //  } else {
  //    setSelectedImages([...selectedImages, id]);
  //  }
  //};

  //const handleSetFeatureImage = () => {
  //  const updatedImages = images.map((img) => {
  //    img.feature = img.id === images[0].id;
  //    return img;
  //  });
  //  setImages(updatedImages);
  //};
  return (
    <div className="min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4">
      <div className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
        <div className="flex flex-col gap-y-2">
          <GallerySelector
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            handleDeleteImages={handleDeleteImages}
          />
          <hr />
          <div className="h-full w-full p-6">
            <div
              className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
              onDragOver={handleDragOver}
            >
              {images.map((image, index) => (
                <GalleryImg
                  key={index}
                  image={image}
                  index={index}
                  selectedImages={selectedImages}
                  setSelectedImages={setSelectedImages}
                  handleDragStart={handleDragStart}
                  handleDrop={handleDrop}
                  isDragging={isDragging}
                  draggedIndex={draggedIndex}
                />
              ))}
              <ImgUpload handleImgChange={handleImgChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
