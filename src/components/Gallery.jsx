import React, {useState} from "react";

const Gallery = ({imgData}) => {
  //console.log(imgData);
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
    <main className="min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4">
      <section className="lg:w-1/2 md:w-3/4 w-full bg-gray-400 rounded-lg shadow">
        <div></div>
      </section>
    </main>
  );
};

export default Gallery;
