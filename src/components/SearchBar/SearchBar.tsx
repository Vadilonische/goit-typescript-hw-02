import { ChangeEvent, FC, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBarProps = { onSubmit: (topic: string) => void };

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState<string>("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (topic.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(topic);
    setTopic("");
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
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
      <Toaster position="top-right" />
    </header>
  );
};
export default SearchBar;
