import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    if (topic.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  const handleChange = (evt) => {
    setTopic(evt.target.value);
  };

  return (
    <header className={css.searchBar}>
      <form className={css["formInput"]} onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          value={topic}
          onChange={handleChange}
          placeholder="Search images and photos"
          className={css.searchInput}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
