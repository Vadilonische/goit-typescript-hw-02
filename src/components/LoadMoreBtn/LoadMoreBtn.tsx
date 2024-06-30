import React from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMore = {
  onLoadMore: () => void;
  loading: boolean;
};

const LoadMoreBtn: React.FC<LoadMore> = ({ onLoadMore, loading }) => {
  return (
    <div className={css.loadMoreBtn}>
      <button onClick={onLoadMore} disabled={loading}>
        {loading ? "Please wait, loading..." : "Load More"}
      </button>
    </div>
  );
};
export default LoadMoreBtn;
