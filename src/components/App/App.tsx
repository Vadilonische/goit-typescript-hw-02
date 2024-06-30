import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { getImages } from "../../api";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import EmptyMessage from "../ErrorMessage/EmptyMessege";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      if (!query) return;

      try {
        setIsLoading(true);
        setIsError(false);
        setIsEmpty(false);
        const data = await getImages(query, page);

        if (data.length === 0) {
          setIsEmpty(true);
          return;
        }

        const imagesData = data.map((img) => ({
          id: img.id,
          urls: {
            small: img.urls.small,
          },
          slug: img.id,
        }));

        if (page === 1) {
          setImages(imagesData);
        } else {
          setImages((prevImages) => [...prevImages, ...imagesData]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = async (topic: string) => {
    setImages([]);
    setIsError(false);
    setQuery(topic);
    setPage(1);
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imgUrl: string) => {
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
      {isEmpty && <EmptyMessage />}
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
};
export default App;
