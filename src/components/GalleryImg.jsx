import React from "react";
import DragNDrop from "./DragNDrop";

const GalleryImg = ({
  image,
  index,
  selectThumbnails,
  setSelectThumbnails,
  handleDragStart,
  handleDrop,
  dragging,
  draggedIndex,
}) => {
  console.log(image);
  return (
    <div
      key={index}
      className={
        "group relative  before:absolute before:content-[''] before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-move" +
        (index === 0 ? " md:col-span-2 md:row-span-2" : " col-span-1") +
        (selectThumbnails.find((photo) => photo.id === image.id)
          ? " opacity-100"
          : " hover:before:bg-white/50")
      }
      draggable={true}
      onDragStart={() => handleDragStart(image)}
      onDrop={() => handleDrop(index)}
    >
      <img
        src={image.thumbnail}
        alt={image.id}
        height={index === 0 ? 390 : 184}
        width={index === 0 ? 390 : 184}
        className={
          "h-full w-full max-w-full rounded-lg object-contain border-2" +
          " " +
          (selectThumbnails.find((photo) => photo.id === image.id) &&
            "opacity-70")
        }
      />
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectThumbnails.find((photo) => photo.id === image.id)
            ? "opacity-100"
            : "opacity-0")
        }
        checked={
          selectThumbnails.find((photo) => photo.id === image.id) ? true : false
        }
        onChange={() => {
          if (selectThumbnails.find((photo) => photo.id === image.id))
            setSelectThumbnails(
              selectThumbnails.filter((photo) => photo.id !== image.id)
            );
          else setSelectThumbnails([...selectThumbnails, image]);
        }}
      />
      <DragNDrop
        dragging={dragging}
        draggedIndex={draggedIndex}
        image={image}
      />
    </div>
  );
};

export default GalleryImg;
