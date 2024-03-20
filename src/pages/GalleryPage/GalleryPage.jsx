import { useEffect, useState } from "react";
// import GetImages from "../../components/GetImages";
import { Context } from "../../context/Context";
import axios from "axios";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableImage from "../../components/GetImages";

const GalleryPage = () => {
  const { user, logoutUser } = Context();
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Random");
  const [isLoading, setIsLoading] = useState(true);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=cIELD0H3y3O1B7pe_UAaDX4d8zZW4tTYuFYMfsHipIY`
      );
      const sortedImages = data.results.map((image, index) => ({
        ...image,
        id: image.id.toString(),
        order: index,
      }));
      setImages(sortedImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    fetchImages();
    setQuery("");
  };

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setImages((prevImages) => {
        const oldIndex = prevImages.findIndex(
          (image) => image.id === active.id
        );
        const newIndex = prevImages.findIndex(
          (image) => image.id === over.id
        );

        return arrayMove(prevImages, oldIndex, newIndex).map(
          (image, index) => ({
            ...image,
            order: index,
          })
        );
      });
    }
  };

  return (
    <>
      <div className="userSearch">
        <div className="logout">
          <button onClick={logoutUser}>Log out</button>
        </div>
        <div className="user">
          <h2>
            Hello{" "}
            <span className="display"> {user.displayName}, </span>
            <span>Welcome to your Gallery</span>
          </h2>
          <p>Search and Re-order beautiful images.</p>
        </div>
        <div className="user_input">
          <input
            type="text"
            placeholder="Search Tag e.g dog, cat, nature"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="gallery">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images}
            strategy={rectSortingStrategy}
          >
            {images.map((image, index) => (
              <SortableImage
                key={image.id}
                image={image}
                index={index}
                isLoading={isLoading}
                loading="lazy"
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};

export default GalleryPage;
