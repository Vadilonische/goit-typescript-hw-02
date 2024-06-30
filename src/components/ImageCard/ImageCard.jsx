import css from "./ImageCard.module.css";
export default function ImageCard({ imgUrl, imgDescr, onClick }) {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div onClick={handleClick} className={css.imageCard}>
      <img src={imgUrl} alt={imgDescr} />
    </div>
  );
}
