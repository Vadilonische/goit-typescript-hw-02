import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface IImage {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

interface IImageGallery {
  images: IImage[];
  onImageClick: (id: string) => void;
}

const ImageGallery: React.FC<IImageGallery> = ({ images, onImageClick }) => {
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
};
export default ImageGallery;
