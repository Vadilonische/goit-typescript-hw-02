import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { getImages } from "../../api";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    async function fetchImages() {
      if (!query) return;

      try {
        setIsLoading(true);
        const data = await getImages(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevImages) => [...prevImages, ...data]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = async (topic) => {
    setImages([]);
    setIsError(false);
    setQuery(topic);
    setPage(1);
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imgUrl) => {
    setActiveImg(imgUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveImg(null);
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && (
        <LoadMoreBtn onLoadMore={loadMore} loading={isLoading} />
      )}
      <ImageModal
        onCloseModal={closeModal}
        isOpen={modalIsOpen}
        imgUrl={activeImg}
      />
      <Toaster position="top-right" />
    </div>
  );
}
