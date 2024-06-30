import React from "react";
import css from "./ImageCard.module.css";

interface IImageCard {
  imgUrl: string;
  imgDescr: string;
  onClick: (url: string) => void;
}

const ImageCard: React.FC<IImageCard> = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div onClick={handleClick} className={css.imageCard}>
      <img src={imgUrl} alt={imgDescr} />
    </div>
  );
};
export default ImageCard;
