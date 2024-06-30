import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onLoadMore, loading }) {
  return (
    <div className={css.loadMoreBtn}>
      <button onClick={onLoadMore} disabled={loading}>
        {loading ? "Please wait, loading..." : "Load More"}
      </button>
    </div>
  );
}
