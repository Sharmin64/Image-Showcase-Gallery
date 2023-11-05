import React from "react";

const DragNDrop = ({isDragging, draggedIndex, image}) => {
  //console.log(image);
  return (
    isDragging &&
    Number(draggedIndex) === Number(image.id) && (
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed rounded-lg z-50">
        Drop Here
      </div>
    )
  );
};

export default DragNDrop;
