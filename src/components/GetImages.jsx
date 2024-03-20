/* eslint-disable react/prop-types */
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { useSortable } from "@dnd-kit/sortable";

const SortableImage = ({ image, isLoading }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        ...style,
      }}
      className="gallery_itm"
    >
      {isLoading ? (
        <SkeletonTheme baseColor="#202028" highlightColor="#4ff">
          <Skeleton height={300} />
        </SkeletonTheme>
      ) : (
        <img
          loading="lazy"
          className="gallery__img"
          src={image.urls.small}
          alt="poster"
        />
      )}
    </div>
  );
};

export default SortableImage;
