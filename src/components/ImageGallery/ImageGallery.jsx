import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.imageList}>
      {images.map(({ id, urls, slug }) => (
        <li key={id} className={css.imageListItem}>
          <ImageCard
            imgUrl={urls.small}
            imgDescr={slug}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
